import requests
from bs4 import BeautifulSoup

DOMAIN_NAME = "http://localhost:3000"
MAIN_PAGE = "docker/what-is-docker"  # replace the main page


def formulate_page_hierarchy(hierarchy: dict) -> dict:
    for value in hierarchy.values():
        inner_hierarchies = value.get("hierarchy", [])
        for inner_hierarchy in inner_hierarchies:
            doc_link = inner_hierarchy.get("link")
            page = requests.get(f"{DOMAIN_NAME}{doc_link}")
            elements = (
                BeautifulSoup(page.content, "html.parser").find("article").find("main")
            ).children

            for element in elements:
                element_name = element.name
                if element_name in ["h2", "h3", "h4", "h5", "h6"]:
                    element_text = element.text.strip()
                    href = element.find("a").get("href")
                    link = f"{doc_link}{href}"

                    if element_name == "h2":
                        inner_hierarchy["hierarchy"].append(
                            {"name": element_text, "link": link, "hierarchy": []}
                        )
                    elif element_name == "h3":
                        inner_hierarchy["hierarchy"][-1]["hierarchy"].append(
                            {"name": element_text, "link": link, "hierarchy": []}
                        )
                    elif element_name == "h4":
                        inner_hierarchy["hierarchy"][-1]["hierarchy"][-1][
                            "hierarchy"
                        ].append({"name": element_text, "link": link, "hierarchy": []})
                    elif element_name == "h5":
                        inner_hierarchy["hierarchy"][-1]["hierarchy"][-1]["hierarchy"][
                            -1
                        ]["hierarchy"].append(
                            {"name": element_text, "link": link, "hierarchy": []}
                        )
                    elif element_name == "h6":
                        inner_hierarchy["hierarchy"][-1]["hierarchy"][-1]["hierarchy"][
                            -1
                        ]["hierarchy"][-1]["hierarchy"].append(
                            {"name": element_text, "link": link, "hierarchy": []}
                        )
    return hierarchy


def formulate_hierarchy(soup: BeautifulSoup) -> dict:
    aside = soup.find("aside")
    hierarchy = {}

    for li in aside.find_all("li"):
        a = li.find("a")
        text = li.text.strip()

        if a and hierarchy:
            # Append to existing hierarchy
            hierarchy[list(hierarchy.keys())[-1]]["hierarchy"].append(
                {
                    "name": text,
                    "link": a.get("href"),
                    "hierarchy": [],
                }
            )
        else:
            # Create new hierarchy
            hierarchy[text] = {
                "name": text,
                "hierarchy": [],
            }

    return hierarchy


def main():
    main_url = f"{DOMAIN_NAME}/docs/{MAIN_PAGE}"
    page = requests.get(main_url)
    soup = BeautifulSoup(page.content, "html.parser")

    hierarchy = formulate_hierarchy(soup)
    hierarchy = formulate_page_hierarchy(hierarchy)
    print(list(hierarchy.values()))


if __name__ == "__main__":
    main()

import re
import shutil

# Prompt for the file name
file_name = input("Enter the file name to write: ")
topic = "kubernetes"

source_path = "src/templates/doc.mdx"
destination_path = f"src/pages/docs/{topic}/{file_name}.mdx"

# Copy the file
shutil.copy(source_path, destination_path)
print(f"File {file_name} copied to {destination_path}")

# Update the information
with open(destination_path, "r", encoding="utf-8") as file:
    content = file.read()

title = file_name.replace("-", " ").capitalize()
title_template = topic.capitalize()

# Update the title, titleTemplate, and # title
content = re.sub(r"title:.*", f"title: {title}", content)
content = re.sub(r"titleTemplate:.*", f"titleTemplate: {title_template}", content)
content = re.sub(r"# title", f"# {title}", content)

# Write the changes back to the file
with open(destination_path, "w", encoding="utf-8") as file:
    file.write(content)

print(f"File {destination_path} updated with title: {title}")

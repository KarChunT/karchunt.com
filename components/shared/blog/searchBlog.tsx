"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { urlQueryForm, removeKeysFromQuery } from "@/utils";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBlog = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (query) {
        newUrl = urlQueryForm({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keys: ["query"],
        });
      }

      // scroll: false - To keep the current amount of scroll
      router.push(newUrl, { scroll: false });
    }, 0);
    return () => clearTimeout(delayDebounceFn);
  }, [query, router, searchParams]);

  return (
    <div className="flex-1">
      <Input
        type="text"
        placeholder="Post"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBlog;

"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { urlQueryForm, removeKeysFromQuery, getAllUniqueTags } from "@/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { allPosts } from "@/.contentlayer/generated";

const TagFilter = () => {
  const [tags, setTags] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const allUniqueTags = getAllUniqueTags(allPosts);
    setTags(allUniqueTags);
  }, []);

  const onSelectTag = (tag: string) => {
    let newUrl = "";

    if (tag && tag !== "all") {
      newUrl = urlQueryForm({
        params: searchParams.toString(),
        key: "tag",
        value: tag,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keys: ["tag"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex-1">
      <Select onValueChange={(value: string) => onSelectTag(value)}>
        <SelectTrigger>
          <SelectValue placeholder="all" />
        </SelectTrigger>
        <SelectContent>
          {tags.map((tag) => (
            <SelectItem value={tag} key={tag}>
              {tag.replace("-", " ").toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TagFilter;

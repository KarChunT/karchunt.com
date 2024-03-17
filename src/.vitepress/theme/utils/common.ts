import { DateContent } from "../types/types";

export const getDateTime = (date: DateContent): string => {
  return new Date(date.time).toISOString();
};

export const formatDate = (raw: string): DateContent => {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    year: date.getFullYear().toString(),
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

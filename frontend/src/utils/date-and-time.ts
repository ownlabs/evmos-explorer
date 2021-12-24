import { format } from "date-fns";

export const defaultDateFormat = (dateToFormat: Date): string => {
  return format(dateToFormat, "dd MMM yyyy, HH:mm:ss");
};

export const parseBlockDate = (timestamp: number): Date => {
  return new Date(timestamp * 1000);
};

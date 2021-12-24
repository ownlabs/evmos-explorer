import { ellipsis } from "../../assets";
import { BLOCKS_DISPLAYED } from "../../assets/util/constants";

export const pageList = (currentPage: number, totalPages: number): string[] => {
  const left = currentPage - BLOCKS_DISPLAYED;
  const right = currentPage + BLOCKS_DISPLAYED + 1;
  const range: number[] = [];
  const pageRange: string[] = [];
  let pageNumber = 0;

  for (let page = 1; page <= totalPages; page++) {
    if ((page === 1 || page === totalPages || page >= left) && page < right) {
      range.push(page);
    }
  }

  for (const page of range) {
    if (pageNumber) {
      if (page - pageNumber === BLOCKS_DISPLAYED) {
        pageRange.push((pageNumber + 1).toString());
      } else if (page - pageNumber !== 1) {
        pageRange.push(ellipsis);
      }
    }
    pageRange.push(page.toString());
    pageNumber = page;
  }
  return pageRange;
};

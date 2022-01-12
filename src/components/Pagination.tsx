import * as React from "react";
import { BtnRound } from "./Buttons";

export interface PaginationProps {
  totalPages: any;
  currentPage: number;
  setPage: any;
}

export const Pagination = ({ totalPages, currentPage, setPage }: PaginationProps) => {
  const PAGINATION_LIMIT = window.screen.width >= 600 ? 9 : 3;
  const MORE = window.screen.width >= 600 ? 5 : 2;

  let setPagination = 0;

  if (currentPage > MORE) setPagination = currentPage - MORE;

  const pages = Array.from(Array(totalPages).keys())
    .splice(setPagination, PAGINATION_LIMIT)
    .map((x) => (
      <li className={"pagination__item"} key={x + 1}>
        <BtnRound text={(x + 1).toString()} customClass={currentPage === x + 1 ? "pagination__btn pagination__btn--active" : "pagination__btn"} callback={()=>setPage(x + 1)}/>
      </li>
    ));

  return (
    <ul className="pagination__list">
      {currentPage >= 2 && (
        <>
          <li className={"pagination__item"}>
            <BtnRound text="First" customClass="pagination__btn pagination__btn--first" callback={()=>setPage(1)}/>
          </li>
          <li className={"pagination__item"}>
            <BtnRound text="&#171;" customClass="pagination__btn" callback={()=>setPage(currentPage - 1)}/>
          </li>
        </>
      )}
      {pages}
      {totalPages !== 0 && currentPage !== totalPages && (
        <>
          <li className={"pagination__item"}>
            <BtnRound text="&#187;" customClass="pagination__btn" callback={()=>setPage(currentPage + 1)}/>
          </li>
          <li className={"pagination__item"}>
            <BtnRound text="Last" customClass="pagination__btn pagination__btn--last" callback={()=>setPage(totalPages)}/>
          </li>
        </>
      )}
    </ul>
  );
};

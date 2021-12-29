import React from 'react';
import pager from 'split-page-numbers';

interface IPageLink {
  firstPagePath: string;
  isCurrentPage?: boolean;
  pageNumber: number;
}
interface IPagination {
  firstPagePath: string;
  currentPage: number;
  pageCount: number;
}

const getPagePath = (pageNumber: number, firstPagePath: string): string => (
  pageNumber === 1 ? firstPagePath : `/posts/${pageNumber}`
);

function PageLink({ firstPagePath, pageNumber, isCurrentPage }: IPageLink) {
  return (
    <li>
      {isCurrentPage
        ? <span className="pgn__num current">{pageNumber}</span>
        : <a className="pgn__num" href={getPagePath(pageNumber, firstPagePath)}>{pageNumber}</a>}
    </li>
  );
}

PageLink.defaultProps = {
  isCurrentPage: false,
};

export default function Pagination({ firstPagePath, currentPage, pageCount }: IPagination) {
  const isLastPage = currentPage === pageCount;
  const pages = pager(pageCount, currentPage - 1, {
    target: 4,
    neighbours: {
      edge: 1,
      current: 1,
    },
  });

  return (
    <nav className="pgn">
      <ul>
        {currentPage > 1 && <li><a className="pgn__prev" href={getPagePath(currentPage - 1, firstPagePath)}>Prev</a></li>}
        {pages.map((page) => (
          page.isNumber()
            ? (
              <PageLink
                key={page.key}
                firstPagePath={firstPagePath}
                pageNumber={page.asNumber().value + 1}
                isCurrentPage={page.isCurrent}
              />
            )
            : <li key={page.key}><span className="pgn__num dots">…</span></li>
        ))}
        {!isLastPage && <li><a className="pgn__next" href={getPagePath(currentPage + 1, firstPagePath)}>Next</a></li>}
      </ul>
    </nav>
  );
}

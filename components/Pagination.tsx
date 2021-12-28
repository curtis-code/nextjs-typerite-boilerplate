import React from 'react';
import pager from 'split-page-numbers';

interface IPageLink {
  isCurrentPage?: boolean;
  pageNumber: number;
}
interface IPagination {
  currentPage: number;
  pageCount: number;
}

function PageLink({ pageNumber, isCurrentPage }: IPageLink) {
  return (
    <li>
      {isCurrentPage
        ? <span className="pgn__num current">{pageNumber}</span>
        : <a className="pgn__num" href={`/posts/${pageNumber}`}>{pageNumber}</a>}
    </li>
  );
}

PageLink.defaultProps = {
  isCurrentPage: false,
};

export default function Pagination({ currentPage, pageCount }: IPagination) {
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
        {currentPage > 1 && <li><a className="pgn__prev" href="#0">Prev</a></li>}
        {pages.map((page) => (
          page.isNumber()
            ? (
              <PageLink
                key={page.key}
                pageNumber={page.asNumber().value + 1}
                isCurrentPage={page.isCurrent}
              />
            )
            : <li key={page.key}><span className="pgn__num dots">…</span></li>
        ))}
        {!isLastPage && <li><a className="pgn__next" href="#0">Next</a></li>}
      </ul>
    </nav>
  );
}

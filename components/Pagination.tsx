import React from 'react';

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

  return (
    <nav className="pgn">
      <ul>
        {currentPage > 1 && <li><a className="pgn__prev" href="#0">Prev</a></li>}
        <PageLink pageNumber={1} />
        <PageLink pageNumber={2} isCurrentPage />
        <PageLink pageNumber={3} />
        <PageLink pageNumber={4} />
        <PageLink pageNumber={5} />
        <li><span className="pgn__num dots">…</span></li>
        <PageLink pageNumber={8} />
        {!isLastPage && <li><a className="pgn__next" href="#0">Next</a></li>}
      </ul>
    </nav>
  );
}

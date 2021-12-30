import React from 'react';
import pager from 'split-page-numbers';

interface IPageLink {
  isCurrentPage?: boolean;
  pageNumber: number;
  getPagePath: (pageNumber: number) => string;
}
interface IPagination {
  currentPage: number;
  pageCount: number;
  tag?: string;
}

const getPagePathFactory = (tag: string | undefined) => (pageNumber: number): string => {
  const isFirstPage = pageNumber === 1;

  if (tag) {
    return isFirstPage ? `/tag/${tag}` : `/tag/${tag}/${pageNumber}`;
  }

  return isFirstPage ? '/' : `/posts/${pageNumber}`;
};

function PageLink({ pageNumber, isCurrentPage, getPagePath }: IPageLink) {
  return (
    <li>
      {isCurrentPage
        ? <span className="pgn__num current">{pageNumber}</span>
        : <a className="pgn__num" href={getPagePath(pageNumber)}>{pageNumber}</a>}
    </li>
  );
}

PageLink.defaultProps = {
  isCurrentPage: false,
};

export default function Pagination({ currentPage, pageCount, tag }: IPagination) {
  const isLastPage = currentPage === pageCount;
  const pages = pager(pageCount, currentPage - 1, {
    target: 4,
    neighbours: {
      edge: 1,
      current: 1,
    },
  });
  const getPagePath = getPagePathFactory(tag);

  return (
    <nav className="pgn">
      <ul>
        {currentPage > 1 && <li><a className="pgn__prev" href={getPagePath(currentPage - 1)}>Prev</a></li>}
        {pages.map((page) => (
          page.isNumber()
            ? (
              <PageLink
                key={page.key}
                pageNumber={page.asNumber().value + 1}
                isCurrentPage={page.isCurrent}
                getPagePath={getPagePath}
              />
            )
            : <li key={page.key}><span className="pgn__num dots">…</span></li>
        ))}
        {!isLastPage && <li><a className="pgn__next" href={getPagePath(currentPage + 1)}>Next</a></li>}
      </ul>
    </nav>
  );
}

Pagination.defaultProps = {
  tag: undefined,
};

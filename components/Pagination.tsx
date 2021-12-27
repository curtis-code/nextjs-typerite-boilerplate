import React from 'react';

interface IPagination {
  currentPage: number;
  pageCount: number;
}

export default function Pagination({ currentPage, pageCount }: IPagination) {
  const isLastPage = currentPage === pageCount;

  return (
    <nav className="pgn">
      <ul>
        {currentPage > 1 && <li><a className="pgn__prev" href="#0">Prev</a></li>}
        <li><a className="pgn__num" href="#0">1</a></li>
        <li><span className="pgn__num current">2</span></li>
        <li><a className="pgn__num" href="#0">3</a></li>
        <li><a className="pgn__num" href="#0">4</a></li>
        <li><a className="pgn__num" href="#0">5</a></li>
        <li><span className="pgn__num dots">…</span></li>
        <li><a className="pgn__num" href="#0">8</a></li>
        {!isLastPage && <li><a className="pgn__next" href="#0">Next</a></li>}
      </ul>
    </nav>
  );
}

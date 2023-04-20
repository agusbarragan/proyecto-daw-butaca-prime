import React from "react";
import { Document, Page } from "react-pdf";
import { useState } from "react";

export default function GenerateTicketPdf() {

  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }


  return (
    <div>
      <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600" pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPage}</p>
      { pageNumber > 1  &&
      <button onClick={changePageBack}>Previous Page</button>
      }
      {
        pageNumber < numPage &&
        <button onClick={changePageNext}>Next Page</button>
      }
    </div>
  );
}

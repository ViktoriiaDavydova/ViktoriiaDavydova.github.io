import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import VDResume from "../DavydovaViktoriia_resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="tabcontent">
        <h3>Resume</h3>
        <br />
        <nav>
          {pageNumber === 2 ? (
            <button onClick={this.goToPrevPage}>Prev</button>
          ) : (
            <button onClick={this.goToNextPage}>Next</button>
          )}
        </nav>
<br></br>
        <div>
          <Document file={VDResume} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>

        <nav>
          {pageNumber === 2 ? (
            <button onClick={this.goToPrevPage}>Prev</button>
          ) : (
            <button onClick={this.goToNextPage}>Next</button>
          )}
        </nav>
      </div>
    );
  }
}

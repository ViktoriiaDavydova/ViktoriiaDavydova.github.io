import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import VDResume from "../DavydovaViktoriia_resume.pdf";
import MediaQuery from "react-responsive";
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

        <MediaQuery minWidth={700}>
          <div>
            <nav>
              {pageNumber === 2 ? (
                <button onClick={this.goToPrevPage}>Prev</button>
              ) : (
                <button onClick={this.goToNextPage}>Next</button>
              )}
            </nav>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <div>
              <Document
                file={VDResume}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
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
        </MediaQuery>
        <MediaQuery minWidth={0}>
          <br />
          <h4>
            <a href={VDResume} rel="noopener noreferrer" target="_blank">
              Click to open resume in a new tab
            </a>
          </h4>
        </MediaQuery>
      </div>
    );
  }
}

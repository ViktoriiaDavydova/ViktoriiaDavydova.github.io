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
      <div className="resume">
        <MediaQuery minWidth={700}>
          <div>
            <nav>
              {pageNumber === 2 ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.goToPrevPage}
                >
                  Prev
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.goToNextPage}
                >
                  Next
                </button>
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
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.goToPrevPage}
                >
                  Prev
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.goToNextPage}
                >
                  Next
                </button>
              )}
            </nav>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={0}>
          <br />
          <h4>
            <form
              method="get"
              action={VDResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="submit" className="btn btn-secondary">
                Click to open resume in new tab
              </button>
            </form>
          </h4>
        </MediaQuery>
        <footer>
          Resume
          <img src={require("../images/myChest.png")} alt="treasure_chest" />
        </footer>
      </div>
    );
  }
}

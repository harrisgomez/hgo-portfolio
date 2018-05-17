import { Document, Page } from 'react-pdf/dist/entry.webpack';
import ResumeFile from 'harris_resume';

export default class Resume extends React.Component {
    state = {
        pdfFile: ResumeFile,
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pdfFile, numPages, pageNumber } = this.state;
        let width = 330;

        return (
            <div>
                <Document file={pdfFile} onLoadSuccess={this.onDocumentLoad}>
                    <Page pageNumber={pageNumber} width={width} />
                </Document>
                {/*<p>Page {pageNumber} of {numPages}</p>*/}
            </div>
        );
    }
}

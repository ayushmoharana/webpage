import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function Cv() {
  const docs = [
    { uri: require("./assets/CV/AMoharana_CV.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function Cv() {
  const docs = [
    { uri: require("./assets/CV/AMoharana_CV.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

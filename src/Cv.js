import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


export default function Cv() {
  const docs = [
    { uri: require("./assets/CV/AMoharana_CV.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} 
          theme={{
            primary: "#444444",
            secondary: "#555555",
            tertiary: "#888888",
            textPrimary: "#ffffff",
            textSecondary: "#5296d8",
            textTertiary: "#00000099",
            disableThemeScrollbar: false,
          }} 
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: false,
            },
            csvDelimiter: ",", // "," as default,
            pdfZoom: {
              defaultZoom: 0.9, // 1 as default,
              zoomJump: 0.2, // 0.1 as default,
            },
            pdfVerticalScrollByDefault: true, // false as default
          }}
        />;
}



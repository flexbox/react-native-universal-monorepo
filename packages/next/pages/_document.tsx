import { default as NativebaseDocument } from "@native-base/next-adapter/document";
import AntDesignFontFaceCSS from "@native-base/icons/FontsCSS/AntDesignFontFaceCSS";
import MaterialIconsFontFaceCSS from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";

const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;

class Document extends NativebaseDocument {
  //
}

async function getInitialProps({ renderPage }) {
  const res = await NativebaseDocument.getInitialProps({ renderPage });
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
    ...res.styles,
  ];
  return { ...res, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;

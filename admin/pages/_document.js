import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/vendor/animate/animate.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/vendor/css-hamburgers/hamburgers.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/vendor/select2/select2.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/util.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/main.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/ReactToastify.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
            type="text/css"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/custom.css"
          />
        </Head>
        <body>
          <Main />
          <script src="/static/assets/vendor/jquery/jquery-3.2.1.min.js"></script>
          <script src="/static/assets/vendor/bootstrap/js/popper.js"></script>
          <script src="/static/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="/static/assets/vendor/select2/select2.min.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

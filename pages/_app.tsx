import App from "next/app";
import { SWRConfig } from "swr";
import "../public/main.css";

class MyApp extends App<{}, {}> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <SWRConfig
          value={{
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}
        >
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans|Rubik&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <Component {...pageProps} />
        </SWRConfig>
      </div>
    );
  }
}

export default MyApp;

import '../styles/globals.css'
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import { ThemeProvider } from "next-themes";
import { MoralisProvider } from 'react-moralis';
import React from 'react';


const progress = new ProgressBar({
  size: 7,
  color: "#6d28d9",
  className: "z-50",
  delay: 60,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);




function MyApp({ Component, pageProps }) {

  return (
    <React.StrictMode>
       <MoralisProvider
        appId ={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl ={process.env.NEXT_PUBLIC_SERVER_URL}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MoralisProvider>
    </React.StrictMode>
  )
}

export default MyApp

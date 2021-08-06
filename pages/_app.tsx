import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Global, css } from "@emotion/react";
import "../theme/style.css";
import useDarkMode from "use-dark-mode";
import { darkTheme, lightTheme } from "../theme/theme";

const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode(true);
  const themeConfig = isDark ? darkTheme : lightTheme;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Juno</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={themeConfig}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Global
          styles={css`
            html,
            body {
              @media only screen and (max-width: 500px) {
                overflow-y: scroll;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none; /* Internet Explorer 10+ */
                scrollbar-color: transparent;

                /* Chrome, Edge, and Safari */
                *::-webkit-scrollbar {
                  width: 0; /* Remove scrollbar space */
                  background: transparent; /* Optional: just make scrollbar invisible */
                }
              }
              padding: 0;
              margin: 0;
            }
            * {
              box-sizing: border-box;
            }

            /* For light mode */

            body.light-mode [data-rsbs-header] {
              background-color: #faf9f6;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            }

            body.light-mode [data-rsbs-header]:before {
              background-color: #2b2b2b;
            }

            body.light-mode [data-rsbs-footer] {
              background-color: #faf9f6;
            }

            /* For dark mode */

            body.dark-mode [data-rsbs-header] {
              background-color: #2b2b2b;
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
            }

            body.dark-mode [data-rsbs-header]:before {
              background-color: #faf9f6;
            }

            body.dark-mode [data-rsbs-footer] {
              background-color: #2b2b2b;
            }
            /* ===== Scrollbar CSS ===== */ /* Firefox */
            * {
              scrollbar-width: thin;
              scrollbar-color: #c0c0c0 #fafafa;
            }

            // /* Chrome, Edge, and Safari */
            // *::-webkit-scrollbar {
            //   // width: 20px;

            //   // width: 0; /* Remove scrollbar space */
            //   // background: transparent; /* Optional: just make scrollbar invisible */
            // }

            // *::-webkit-scrollbar-track {
            //   background: #fafafa;
            // }

            // *::-webkit-scrollbar-thumb {
            //   background-color: #c0c0c0;
            //   // border-radius: 13px;
            //   // border: 9px solid #ffffff;
            // }
          `}
        />
        <button onClick={toggleDarkMode}>Click</button>
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </CacheProvider>
  );
}

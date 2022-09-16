import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import TagManager from "react-gtm-module";
import { SSRProvider } from "react-bootstrap";
import Honeybadger from "@honeybadger-io/js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#753CAD",
    },
  },
  ID: "yu7tz9shLi6uZn26p",
};

const tagManagerArgs = {
  gtmId: "GTM-KPSZLRR",
};

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER_API_KEY,
  revision: process.env.HONEYBADGER_REVISION,
  environment: process.env.NODE_ENV,
  projectRoot: "webpack://_N_E/./",

  // Uncomment to report errors in development:
  reportData: true,
});
if (typeof window !== "undefined") {
  window.Honeybadger = Honeybadger;
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  const headScroll = useRef(null);

  const scrollToTop = () => {
    headScroll.current.scrollIntoView();
  };
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 14286585;
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          (n.async = !0),
            (n.type = "text/javascript"),
            (n.src = "https://cdn.livechatinc.com/tracking.js"),
            t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
    })(window, document, [].slice);
    //     Chatra("init", config);
    // Chatra("pageView");
  }, []);
  const { err } = this.props;
  const modifiedPageProps = { ...pageProps, err };

  return (
    <SSRProvider>
      <div ref={headScroll}></div>
      <Socials />
      <TakeMeToTop scrollToTop={scrollToTop} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="KceQ_VgcoIBknsBsN-hHU5QZSLifvhWogYHgEZQYtzo"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KPSZLRR');
      `}
      </Script>

      <Header scrollToTop={scrollToTop} />
      <QueryClientProvider client={queryClient}>
        <Component {...modifiedPageProps} />
      </QueryClientProvider>
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;

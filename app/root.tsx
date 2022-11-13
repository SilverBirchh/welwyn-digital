import React, { useContext, useEffect } from "react";

import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction} from "@remix-run/node";
import {
  json,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import remixImageStyles from "remix-image/remix-image.css";

import * as gtag from "~/utils/gtags.client";

import { Cookie } from "./components/Cookie";
import { ServerStyleContext, ClientStyleContext } from "./context";
import theme from "./styles/theme";


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Welwyn Digital",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "Welwyn Digital | Website & App Agency Hertfordshire",
  "og:type": "website",
  "og:image": "/welwyndigital.jpg",
  "twitter:title": "Welwyn Digital",
  description:
    "Leading web design and development agency based in Hertfordshire. We design Websites & Mobile Apps that deliver results for businesses in Hertfordshire. Helping small businesses get online for affordable prices.",
  "og:description":
    "Leading web design and development agency based in Hertfordshire. We design Websites & Mobile Apps that deliver results for businesses in Hertfordshire. Helping small businesses get online for affordable prices.",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: remixImageStyles },
];

interface DocumentProps {
  children: React.ReactNode;
  gaTrackingId: string | undefined;
}

type LoaderData = {
  gaTrackingId: string | undefined;
};

export const loader: LoaderFunction = async () =>
  json<LoaderData>({ gaTrackingId: process.env.GA_TRACKING_ID });

const Document = withEmotionCache(
  ({ children, gaTrackingId }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          )}
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<LoaderData>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <Document gaTrackingId={gaTrackingId}>
      <ChakraProvider theme={theme}>
        <DarkMode>
          <Outlet />
          <Cookie />
        </DarkMode>
      </ChakraProvider>
    </Document>
  );
}

// root.tsx
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider, LightMode } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";

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

export let links: LinksFunction = () => {
  return [];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
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
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <LightMode>
          <Outlet />
        </LightMode>
      </ChakraProvider>
    </Document>
  );
}

import type { LoaderFunction } from "@remix-run/node";
import { imageLoader, DiskCache } from "remix-image/server";
import { sharpTransformer } from "~/utils/sharp";

const config = {
  selfUrl: "http://localhost:3000",
  cache: new DiskCache(),
  transformer: sharpTransformer,
};

export const loader: LoaderFunction = ({ request }) => {
  return imageLoader(config, request);
};

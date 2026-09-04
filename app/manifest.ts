import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TDA Enterprise | BLove First",
    short_name: "TDA | BLove",
    description:
      "TDA Enterprise provides professional EHS services. BLove First (B Love Foundation, Inc.) offers faith-based community outreach and empowerment programs.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1e40af",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/TDA_Enterprise_favicon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/images/TDA_Enterprise_favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/images/TDA_Enterprise_favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    categories: ["business", "productivity"],
    lang: "en-US",
    dir: "ltr",
  };
}

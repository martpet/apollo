import type { ComponentChildren, JSX } from "preact";

interface PageProps {
  htmlHead?: JSX.Element;
  children?: ComponentChildren;
}

export function Page({ htmlHead, children }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/assets/main.css" />
        {htmlHead}
      </head>
      <body>{children}</body>
    </html>
  );
}

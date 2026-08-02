import { ComponentChildren, JSX } from "preact";

interface PageProps {
  htmlHead?: JSX.Element;
  children?: ComponentChildren;
}

const importMap = {
  imports: {
    main: "/assets/main.js",
  },
};

export function Page({ htmlHead, children }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/assets/main.css" />
        <script type="module" src="/assets/main.js" />
        <script
          type="importmap"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(importMap) }}
        />
        {htmlHead}
      </head>
      <body>{children}</body>
    </html>
  );
}

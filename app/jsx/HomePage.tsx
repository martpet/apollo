import { Page } from "./Page.tsx";

interface HomePageProps {
  url: URL;
}

export function HomePage(props: HomePageProps) {
  return (
    <Page htmlHead={<link rel="stylesheet" href="/assets/homepage.css" />}>
      <h1>Hello</h1>
      <span class="url">{props.url.href}</span>
    </Page>
  );
}

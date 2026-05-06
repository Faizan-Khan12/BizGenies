const supportedRoutes = new Set([
  "",
  "services",
  "our-work",
  "reviews",
  "pricing",
  "about",
  "contact",
  "privacy-policy",
]);

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const isSupportedRoute = supportedRoutes.has(path);

  return (
    <>
      {!isSupportedRoute ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `console.error("404 Error: User attempted to access non-existent route: ${path.replace(/"/g, '\\"')}");`,
          }}
        />
      ) : null}
      <div id="root" />
    </>
  );
}

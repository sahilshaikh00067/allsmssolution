
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  path = "/",
  noIndex = false,
}) => {
  const baseUrl = "https://allsmssolution.com";
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta
        property="og:site_name"
        content="All SMS Solution"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />
    </Helmet>
  );
};

export default SEO;

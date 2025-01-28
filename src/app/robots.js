export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/terms-of-service",
        "/privacy-policy",
        "/cookie-policy",
        "/refund-policy",
        "/forget-password",
        "/reset-password",
        "/account-security",
        "/account-settings",
      ],
    },
    sitemap: "https://academy.trafy.ai/sitemap.xml",
  };
}

export const GTM_ID = "GTM-KB3JR9L";

export const pageview = url => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

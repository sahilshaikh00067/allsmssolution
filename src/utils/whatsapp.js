export const openDirectWhatsApp = () => {
  const directWhatsappNumber = "918108378154";

  const message = `👋Hello,

* I visited your website and I'm interested in learning more about your services.
* Kindly share the available solutions and pricing.

Thank you.`;

  window.open(
    `https://wa.me/${directWhatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
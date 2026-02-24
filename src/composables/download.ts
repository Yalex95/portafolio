export function downloadCV() {
  const link = document.createElement("a");
  link.href = "../../public/Yeris_Aguilar_Front-end_en.pdf";
  link.download = "cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
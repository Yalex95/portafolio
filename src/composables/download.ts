export function downloadCV() {
  const link = document.createElement("a");
  link.href = "../assets/Yeris_Aguilar_Front-end_en.pdf";
  link.download = "cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
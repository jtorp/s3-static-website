const corsPage = document.getElementById("from-cors");
fetch(
  "https://jt-s3-static-website-assets.s3.eu-north-1.amazonaws.com/cross-origin-page.html",
  { mode: "cors" }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((html) => {
    corsPage.innerHTML = html;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

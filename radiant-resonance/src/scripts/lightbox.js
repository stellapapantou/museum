const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const galleryButtons = Array.from(
  document.querySelectorAll("[data-gallery-image]")
);

let currentIndex = 0;

function openLightbox(index) {
  const button = galleryButtons[index];

  if (!button || !lightbox || !lightboxImage) {
    return;
  }

  const image = button.getAttribute("data-gallery-image");
  const alt = button.getAttribute("data-gallery-alt") || "";

  if (!image) {
    return;
  }

  currentIndex = index;
  lightboxImage.src = image;
  lightboxImage.alt = alt;

  if (lightboxCaption) {
    lightboxCaption.textContent = alt;
  }

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  if (lightboxImage) {
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }

  if (lightboxCaption) {
    lightboxCaption.textContent = "";
  }
}

function showPrevious() {
  if (!galleryButtons.length) {
    return;
  }

  currentIndex =
    (currentIndex - 1 + galleryButtons.length) % galleryButtons.length;

  openLightbox(currentIndex);
}

function showNext() {
  if (!galleryButtons.length) {
    return;
  }

  currentIndex = (currentIndex + 1) % galleryButtons.length;

  openLightbox(currentIndex);
}

galleryButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openLightbox(index);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", showPrevious);
lightboxNext?.addEventListener("click", showNext);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    showPrevious();
  }

  if (event.key === "ArrowRight") {
    showNext();
  }
});
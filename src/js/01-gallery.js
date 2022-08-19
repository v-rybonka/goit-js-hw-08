// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
</a></li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

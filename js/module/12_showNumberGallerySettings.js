import { numberGalleryBtn, numberGallery } from "./00_variables.js"

export const showNumberGallerySettings = (event) => {
    //Avoid propagation
    event.stopPropagation()
 
    //Now im invisible!
    numberGalleryBtn.classList.toggle("d-none")
    //Now im visible!
    numberGallery.classList.toggle("d-none")
 }
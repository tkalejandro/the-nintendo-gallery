import { galleryContainer, introContainer, metroid, numberGallery, pokemon, settingsContainer, zelda } from "./00_variables.js";
import { randomTheImages } from "./04_randomTheImages.js"
import { isGameChecked, totalImagesNumber } from "./05_isGameChecked.js";
import { galleryHTMLFormat } from "./06_galleryHTMLFormat.js";
import {howManyImagesToShow} from "./07_howManyImagesToShow.js"
let counter = 1



export const generateGallery = () => {
    //Lets remove the classes 50vhClasses
    counter == 1 ? (introContainer.classList.remove("vh-50"), settingsContainer.classList.remove("vh-50"), counter--) : counter

    //Starting Array with the checked function
    let allImages = isGameChecked()

    //Lets reset the HTML inside the gallery Container
    galleryContainer.innerHTML = ``

    //Lets Random the array order
    let randomAllImages = randomTheImages(allImages)

    //How many images to show?
    //randomAllImages = howManyImagesToShow(randomAllImages)

    //Lets print now to the web!
    galleryHTMLFormat(randomAllImages)

}
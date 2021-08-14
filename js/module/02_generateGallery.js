import { galleryContainer, introContainer, numberGallery, settingsBtn, settingsContainer, startBtn, allGamesCheckbox } from "./00_variables.js";
import { randomTheImages } from "./04_randomTheImages.js"
import { isGameChecked} from "./05_isGameChecked.js";
import { galleryHTMLFormat } from "./06_galleryHTMLFormat.js";

let counter = 1



export const generateGallery = () => {
    //Lets remove the classes 50vhClasses
    counter == 1 
        ? (introContainer.classList.remove("vh-100"), startBtn.classList.add("d-none"), settingsBtn.classList.remove("d-none") , counter--) 
        : counter

    //Starting Array with the checked function
    let allImages = isGameChecked()

    //Lets reset the HTML inside the gallery Container
    galleryContainer.innerHTML = ``

    //Lets Random the array order
    let randomAllImages = randomTheImages(allImages)

    //*THIS VALUE IS TEMPORARY HERE
    numberGallery.value = randomAllImages.length
    //Lets print now to the web!
    galleryHTMLFormat(randomAllImages)

}
import { galleryContainer, introContainer, settingsContainer } from "./00_variables.js";
import { randomTheImages } from "./04_randomTheImages.js"
import { isGameChecked} from "./05_isGameChecked.js";
import { galleryHTMLFormat } from "./06_galleryHTMLFormat.js";

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
    
    
    //Lets print now to the web!
    galleryHTMLFormat(randomAllImages)

}
import { galleryContainer, introContainer, settingsContainer } from "./00_variables.js";
import { columnClassDefaultGenerator } from "./03_columnClassDefaultGenerator.js";
import { randomTheImages } from "./04_randomTheImages.js"
import { isGameChecked } from "./05_isGameChecked.js";
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

    //Lets print now!
    for (let i = 0; i < randomAllImages.length; i++) {
        //Lets create the A tag 
        const newImage = document.createElement("a")
        //Lets Assign the image Background
        newImage.style.backgroundImage = `url(${randomAllImages[i].imageURL})`
        //Lets Assign the image reference
        newImage.href = randomAllImages[i].referenceURL
        newImage.target = "_blank"
        //Lets Assign the Author
        //-----------
        newImage.title = `Author: ${randomAllImages[i].author}`
        //Lets Assign the default class depending of how many cols value

        columnClassDefaultGenerator(newImage)


        //Lets push it to the web now!
        galleryContainer.appendChild(newImage)

    }
}
import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { galleryContainer } from "./00_variables.js";




export const generateGallery = () => {
    //Lets unify all the arrays in one
    const allImages = [...metroidImages, ...pokemonImages]

    for (let i = 0; i < allImages.length; i++) {
        //Lets create the A tag 
        const newImage = document.createElement("a")
        //Lets Assign the image Background
        newImage.style.backgroundImage = `url(${allImages[i].imageURL})`
        //Lets Assign the image reference
        newImage.href = allImages[i].referenceURL
        newImage.target = "_blank"
        //Lets Assign the Author
        //-----------

        //Lets push it to the web now!
        galleryContainer.appendChild(newImage)

    }
}
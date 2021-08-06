import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { galleryContainer, metroid, pokemon } from "./00_variables.js";






//IM STUCK HERE!!! I CANT MANAGE TO REMOVE THE IMAGES PROPERLY
export const generateGallery = () => {
    //Empty Array to start! 
    let allImages = []
    //I DONT LIKE THIS
    galleryContainer.innerHTML = ``

    //Lets create condition of what images to include in our final array!
    metroid.checked
        //? metroidImages.forEach(element => allImages.push(element))
        ? allImages = allImages.concat(metroidImages)
        : allImages = allImages.filter(element => element.franchise != "metroid")
    pokemon.checked
        //? pokemonImages.forEach(element => allImages.push(element))
        ? allImages = allImages.concat(pokemonImages)
        : allImages = allImages.filter(element => element.franchise != "pokemon")
    //Lets unify all the arrays in one
    console.log(allImages)



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
        newImage.title = `Author: ${allImages[i].author}`
        //Lets Assign the default class which is col-3
        newImage.classList.add("gallery-col-3")
        //Lets push it to the web now!
        galleryContainer.appendChild(newImage)

    }
}
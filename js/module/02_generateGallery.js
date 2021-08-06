import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import { galleryContainer, metroid, pokemon, zelda, numberColumns} from "./00_variables.js";
import { columnClassDefaultGenerator } from "./03_columnClassDefaultGenerator.js";

//IM STUCK HERE!!! I CANT MANAGE TO REMOVE THE IMAGES PROPERLY
export const generateGallery = () => {

    //Empty Array to start! 
    let allImages = []

    //I DONT LIKE THIS
    //Lets reset the HTML inside the gallery Container
    galleryContainer.innerHTML = ``

    //Lets create condition of what images to include in our final array!
    metroid.checked   
        ? allImages = allImages.concat(metroidImages)
        : allImages = allImages.filter(element => element.franchise != "metroid")
    pokemon.checked
        ? allImages = allImages.concat(pokemonImages)
        : allImages = allImages.filter(element => element.franchise != "pokemon")
    zelda.checked
        ? allImages = allImages.concat(legendOfZeldaImages)
        : allImages = allImages.filter(element => element.franchise != "zelda")



    //Lets print now!
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
        //Lets Assign the default class depending of how many cols value
        numberColumns.value == 1
            ? newImage.classList.add("gallery-col-1")
            : numberColumns.value == 2
                ? newImage.classList.add("gallery-col-2")
                : numberColumns.value == 3
                    ? newImage.classList.add("gallery-col-3")
                    : numberColumns.value == 4
                        ? newImage.classList.add("gallery-col-4")
                        : numberColumns.value == 5
                            ? newImage.classList.add("gallery-col-5")
                            : newImage.classList.add("gallery-col-6")
                            
        //Lets push it to the web now!
        galleryContainer.appendChild(newImage)

    }
}
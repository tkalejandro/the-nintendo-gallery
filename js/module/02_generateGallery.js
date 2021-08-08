import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import { galleryContainer, metroid, pokemon, zelda, numberColumns, introContainer, settingsContainer} from "./00_variables.js";
import { columnClassDefaultGenerator } from "./03_columnClassDefaultGenerator.js";


export const generateGallery = () => {
    //Lets remove the classes 50vhClasses
    introContainer.classList.remove("vh-50")
    settingsContainer.classList.remove("vh-50")
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

    //Lets Randomnize the array order

    let randomAllImages = []

    while(allImages.length != 0) {
        //Random number
        let randomNumber = Math.floor(Math.random() * allImages.length)
        //Lets assign the index of the array
        randomAllImages.push(allImages[randomNumber])
        //Lets delete this item we select!
        allImages.splice(randomNumber, 1)
    }

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
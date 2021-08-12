import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import { numberGallery } from "./00_variables.js";

let sumAllImages = pokemonImages.length + metroidImages.length + legendOfZeldaImages.length
numberGallery.value = sumAllImages
export const howManyImagesToShow = (arr) => {
    //Lets create a simple math to find difference between total images and how many they want to see.
    //For default how many the want to see is the maximal.
    let howManyToCut = sumAllImages  - numberGallery.value
    let arrayToPop = arr

    //Not working!!! :-( )
    for (let i = 0; i < howManyToCut; i++) {
        arrayToPop.pop()
    }
    console.log(howManyToCut)
    console.log(arrayToPop)
    return arrayToPop
}
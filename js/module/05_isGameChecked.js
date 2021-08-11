import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import { metroid, pokemon, zelda } from "./00_variables.js";

export const isGameChecked = () => {
    let newArray = []
    metroid.checked
        ? newArray = newArray.concat(metroidImages)
        : newArray = newArray.filter(element => element.franchise != "metroid")
    pokemon.checked
        ? newArray = newArray.concat(pokemonImages)
        : newArray = newArray.filter(element => element.franchise != "pokemon")
    zelda.checked
        ? newArray = newArray.concat(legendOfZeldaImages)
        : newArray = newArray.filter(element => element.franchise != "zelda")
    
    return newArray
} 
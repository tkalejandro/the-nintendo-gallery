import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import { allGames, allTheGames, metroid, pokemon, zelda} from "./00_variables.js";



export let totalImagesNumber = pokemonImages.length + metroid.length +  zelda.length;

export const isGameChecked = () => {
    let newArray = []
     
    //We add allGames = false because if one game is take out, it has to be false. not all games are selected.
    metroid.checked
        ? newArray = newArray.concat(metroidImages)
        : (newArray = newArray.filter(element => element.franchise != "metroid"), allGames.checked = false)
    pokemon.checked
        ? newArray = newArray.concat(pokemonImages)
        : (newArray = newArray.filter(element => element.franchise != "pokemon"), allGames.checked = false)
    zelda.checked
        ? newArray = newArray.concat(legendOfZeldaImages)
        : (newArray = newArray.filter(element => element.franchise != "zelda"), allGames.checked = false)
    
    //If all of them are TRUE that means allGames = true
    let newVar = allTheGames
    console.log(newVar)
    //All is in first position
    //!THIS NOT WORKING CORRECTLY
    newVar.forEach(element => element.checked) == true ? allGames.checked = true : console.log("Im false!")


    return newArray
} 


import { metroidImages } from "./00_01_metroidImages.js";
import { pokemonImages } from "./00_02_pokemonImages.js";
import { legendOfZeldaImages } from "./00_03_legendOfZelda.js";
import {marioImages} from "./00_04_marioImages.js"
import { allGamesCheckbox, allTheGames, mario, metroid, pokemon, zelda } from "./00_variables.js";

//export let totalImagesNumber = pokemonImages.length + metroid.length +  zelda.length;
export const isGameChecked = () => {
    let newArray = []

    //We add allGames = false because if one game is out, it has to be false. not all games are selected.
    metroid.checked
        ? newArray = newArray.concat(metroidImages)
        : (newArray = newArray.filter(element => element.franchise != "metroid"), allGamesCheckbox.checked = false)
    pokemon.checked
        ? newArray = newArray.concat(pokemonImages)
        : (newArray = newArray.filter(element => element.franchise != "pokemon"), allGamesCheckbox.checked = false)
    zelda.checked
        ? newArray = newArray.concat(legendOfZeldaImages)
        : (newArray = newArray.filter(element => element.franchise != "zelda"), allGamesCheckbox.checked = false)
    mario.checked
        ? newArray = newArray.concat(marioImages)
        : (newArray = newArray.filter(element => element.franchise != "mario"), allGamesCheckbox.checked = false)
    //If all of them are TRUE that means allGames = true
    let howManyTrue = 0
    allTheGames.forEach(element => element.checked ? howManyTrue++ : element)
    //I just need the MAX Possible True - 1 to make AllGames = True. -1 represent AllGames which im not interested here to be true.
    howManyTrue >= allTheGames.length - 1 ? allGamesCheckbox.checked = true : howManyTrue

    return newArray
}


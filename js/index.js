import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns, startBtn, settingsBtn, numberGallery, franchiseBtn, allGames} from "./module/00_variables.js";
import { generateGallery } from "./module/02_generateGallery.js";
import { showSettings } from "./module/07_showSettings.js";
import { howManyImagesToSee } from "./module/08_howManyImagesToSee.js";
import { showGames } from "./module/09_showGames.js";
import {allGamesChecked} from "./module/10_allGamesChecked.js"

numberColumns.addEventListener("change", changeColumns)


metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)
allGames.addEventListener("change", allGamesChecked)

startBtn.addEventListener("click", generateGallery)
settingsBtn.addEventListener("click", showSettings)
numberGallery.addEventListener("change", howManyImagesToSee)
franchiseBtn.addEventListener("click", showGames)



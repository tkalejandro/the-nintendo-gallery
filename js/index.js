import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns, startBtn, settingsBtn, numberGallery, franchiseBtn, allGamesCheckbox, mario, columnBtnContainer, numberGalleryBtn} from "./module/00_variables.js";
import { generateGallery } from "./module/02_generateGallery.js";
import { showSettings } from "./module/07_showSettings.js";
import { howManyImagesToSee } from "./module/08_howManyImagesToSee.js";
import { showGames } from "./module/09_showGames.js";
import {allGamesChecked} from "./module/10_allGamesChecked.js"
import {showNumberGallerySettings} from "./module/12_showNumberGallerySettings.js"
import {showColumnSettings} from "./module/11_showColumnSettings.js"

numberColumns.addEventListener("change", changeColumns)

//**********CHECKBOXES EVENT LISTENERS ************************/
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)
mario.addEventListener("change", generateGallery)
allGamesCheckbox.addEventListener("change", allGamesChecked)

//? I COULDMAKE A AllTheGames.forEach() to target all the checkboxes, but it takes to much work because the logic for "All" and for the purpose of this project is not really needed it.
//? May be in the future! :D 

//**********************************/


//*****************BUTTONS EVENT LISTENER */
//STARTING
startBtn.addEventListener("click", generateGallery)
//SETTINGS
settingsBtn.addEventListener("click", showSettings)
//FRANCHISE
franchiseBtn.addEventListener("click", showGames)
//NUMBER GALLERY
numberGalleryBtn.addEventListener("click", showNumberGallerySettings)
numberGallery.addEventListener("change", howManyImagesToSee)
//COLUMNS
columnBtnContainer.addEventListener("click", showColumnSettings)
import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns, startBtn, settingsBtn, numberGallery, franchiseBtn} from "./module/00_variables.js";
import { generateGallery } from "./module/02_generateGallery.js";
import { showSettings } from "./module/07_showSettings.js";
import { howManyImagesToSee } from "./module/08_howManyImagesToSee.js";
import { showGames } from "./module/09_showGames.js";


numberColumns.addEventListener("change", changeColumns)
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)

startBtn.addEventListener("click", generateGallery)


settingsBtn.addEventListener("click", showSettings)

numberGallery.addEventListener("change", howManyImagesToSee)
franchiseBtn.addEventListener("click", showGames)



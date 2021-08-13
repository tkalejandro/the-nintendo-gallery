import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns, startBtn, settingsBtn} from "./module/00_variables.js";
import { generateGallery } from "./module/02_generateGallery.js";
import { showSettings } from "./module/07_showSettings.js";


numberColumns.addEventListener("change", changeColumns)
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)

startBtn.addEventListener("click", generateGallery)


settingsBtn.addEventListener("click", showSettings)



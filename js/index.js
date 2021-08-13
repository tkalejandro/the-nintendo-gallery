import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns, numberGallery} from "./module/00_variables.js";
import { generateGallery } from "./module/02_generateGallery.js";


numberColumns.addEventListener("change", changeColumns)
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)





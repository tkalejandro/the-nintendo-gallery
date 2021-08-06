import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, zelda, numberColumns} from "./module/00_variables.js";


numberColumns.addEventListener("change", changeColumns)
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)
zelda.addEventListener("change" , generateGallery)

import { generateGallery } from "./module/02_generateGallery.js";




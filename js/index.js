import { changeColumns } from "./module/01_changeColumns.js";
import { metroid, pokemon, numberColumns} from "./module/00_variables.js";


numberColumns.addEventListener("change", changeColumns)
metroid.addEventListener("change" , generateGallery)
pokemon.addEventListener("change" , generateGallery)

import { generateGallery } from "./module/02_generateGallery.js";




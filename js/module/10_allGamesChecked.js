
import { allGamesCheckbox, allTheGames } from "./00_variables.js"
import { generateGallery } from "./02_generateGallery.js"


export const allGamesChecked = () => {
    //I need to create logic select All Unselect All. SO first lets select all boxes. 
    //Then we make sure if select all is selected all of them are selected, if its not! all of them are unselected.
    allGamesCheckbox.checked 
        ? allTheGames.forEach(element => element.checked = true) 
        : allTheGames.forEach(element => element.checked = false)
    
    //Now we need to initiate our gallery!
    generateGallery()
}
import { franchiseBtn, franchiseCheckbox } from "./00_variables.js"


//A toggle to open the game list inside settings
export const showGames = () => {
    franchiseCheckbox.classList.toggle("d-none")
    franchiseBtn.classList.toggle("bg-white")
 }
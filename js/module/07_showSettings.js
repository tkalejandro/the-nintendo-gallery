import { innerSettingsContainer, settingTitle } from "./00_variables.js"


//toggle help to add and remove the same class, no need to create extra logic

export const showSettings = () => {
   
   innerSettingsContainer.classList.toggle("d-none")
   settingTitle.classList.toggle("d-none")

   //Now we when h2 appears we need to make sure is invisible, we want to keep it just for semantic purposes
   settingTitle.classList.toggle("v-hidden")
}
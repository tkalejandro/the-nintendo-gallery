import { innerSettingsContainer } from "./00_variables.js"


//toggle help to add and remove the same class, no need to create extra logic

export const showSettings = () => {
   
   innerSettingsContainer.classList.toggle("d-none")
}
import { columnBtnContainer, columnSelectContainer } from "./00_variables.js"

export const showColumnSettings = (event) => {
    //Avoid propagation!
    event.stopPropagation()
    
    columnBtnContainer.classList.toggle("d-none")
    columnSelectContainer.classList.toggle("d-none")
 }
import { columnBtnContainer, columnSelectContainer, franchiseBtn, franchiseCheckbox, galleryContainer, innerSettingsContainer, numberGallery, numberGalleryBtn, settingsBtn, settingTitle } from "./00_variables.js"


//toggle help to add and remove the same class, no need to create extra logic

export const showSettings = (event) => {
   //AVOID PROPAGATION!
   event.stopPropagation()
   //Lets make the galleryBlurry for better visibility of settings
   galleryContainer.classList.toggle("blurGallery")

   innerSettingsContainer.classList.toggle("d-none")
   settingTitle.classList.toggle("d-none")

   //Here im using the class from FontAwesome, it overwriting fa-cog.
   settingsBtn.classList.toggle("fa-times-circle")

   //Now we when h2 appears we need to make sure is invisible, we want to keep it just for semantic purposes
   settingTitle.classList.toggle("v-hidden")

   //Now we default all options to make sure everytime we close or open it goes to their initial state!.
   //This is same to the Index HTML. Nothing special.
   //Images Btn
   numberGalleryBtn.className = "numberGalleryBtn far fa-images"
   numberGallery.className = "d-none"
   //Columns Btn
   columnBtnContainer.className = "columnBtnContainer"
   columnSelectContainer.className = "columnSelectContainer d-none"
   //Franchise Btn
   franchiseCheckbox.className = "franchiseCheckbox d-none"
   franchiseBtn.className = "fas fa-gamepad franchiseBtn"   
}
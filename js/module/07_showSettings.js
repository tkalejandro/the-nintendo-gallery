import { columnBtnContainer, columnSelectContainer, galleryContainer, innerSettingsContainer, numberGallery, numberGalleryBtn, settingsBtn, settingTitle } from "./00_variables.js"


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

   //Now if the options were open we need to make sure we close them, in case wasnt open, we dont do nothing.
   //!columnBtnContainer.classList.contains("d-none") ? console.log("Im true") : showColumnSettings
}

export const showColumnSettings = (event) => {
   //Avoid propagation!
   event.stopPropagation()
   
   columnBtnContainer.classList.toggle("d-none")
   columnSelectContainer.classList.toggle("d-none")
}

export const showNumberGallerySettings = (event) => {
   //Avoid propagation
   event.stopPropagation()

   //Now im invisible!
   numberGalleryBtn.classList.toggle("d-none")
   //Now im visible!
   numberGallery.classList.toggle("d-none")
}


import { numberColumns } from "./00_variables.js";





export const changeColumns = () => {
    //We need to recognize all A that were created.
    const allImages = document.querySelectorAll("a")
    let currentSelect = numberColumns.value

    allImages.forEach(image => {
        //Empty the className before adding a new one. This way we avoid stacking classes. 
        //We also need to create some logic, to avoid conflict with the images that has d-none. We want to keep it that way.
        image.classList.contains("d-none") ? (image.className = "", image.classList.add("d-none")) : image.className = ""
        

        //Now we select the columns to show!
        currentSelect == 1
            ? image.classList.add("gallery-col-1")
            : currentSelect == 2
                ? image.classList.add("gallery-col-2")
                : currentSelect == 3
                    ? image.classList.add("gallery-col-3")
                    : currentSelect == 4
                        ? image.classList.add("gallery-col-4")
                        : currentSelect == 5
                            ? image.classList.add("gallery-col-5")
                            : image.classList.add("gallery-col-6")
    
    })
}
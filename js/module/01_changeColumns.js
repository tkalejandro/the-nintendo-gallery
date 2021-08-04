import { allImages, numberColumns } from "./00_variables.js";





export const changeColumns = () => {
    let currentSelect = numberColumns.value

    allImages.forEach(image => {
        //Empty the className before adding a new one. This way we avoid stacking classes.
        image.className = ""

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
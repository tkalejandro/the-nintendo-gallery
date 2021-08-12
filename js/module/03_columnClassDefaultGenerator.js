import { numberColumns } from "./00_variables.js"

//This function here is just for the default  class when we are generating the image
//Dont confuse with changeColumns , because that one target images that are already existing.
export const columnClassDefaultGenerator = (image) => {
    numberColumns.value == 1
            ? image.classList.add("gallery-col-1")
            : numberColumns.value == 2
                ? image.classList.add("gallery-col-2")
                : numberColumns.value == 3
                    ? image.classList.add("gallery-col-3")
                    : numberColumns.value == 4
                        ? image.classList.add("gallery-col-4")
                        : numberColumns.value == 5
                            ? image.classList.add("gallery-col-5")
                            : image.classList.add("gallery-col-6")
}
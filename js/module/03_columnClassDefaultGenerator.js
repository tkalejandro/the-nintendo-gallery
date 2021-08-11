import { numberColumns } from "./00_variables.js"

//I NEED TO ASK WHY THIS IS NOT WORKING PROPERLY
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
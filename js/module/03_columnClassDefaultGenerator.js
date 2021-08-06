import { numberColumns } from "./00_variables.js"

//I NEED TO ASK WHY THIS IS NOT WORKING PROPERLY
export const columnClassDefaultGenerator = () => {
    numberColumns.value == 1
            ? "gallery-col-1"
            : numberColumns.value == 2
                ? "gallery-col-2"
                : numberColumns.value == 3
                    ? "gallery-col-3"
                    : numberColumns.value == 4
                        ? "gallery-col-4"
                        : numberColumns.value == 5
                            ? "gallery-col-5"
                            : "gallery-col-6"
}
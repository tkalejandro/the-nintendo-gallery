import { columnClassDefaultGenerator } from "./03_columnClassDefaultGenerator.js";
import { galleryContainer } from "./00_variables.js";

export const galleryHTMLFormat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //Lets create the A tag 
        const newImage = document.createElement("a")
        //Lets Assign the image Background
        newImage.style.backgroundImage = `url(${arr[i].imageURL})`
        //Lets Assign the image reference
        newImage.href = arr[i].referenceURL
        newImage.target = "_blank"
        //Lets Assign the Author
        //-----------
        newImage.title = `Author: ${arr[i].author}`
        //Lets Assign the default class depending of how many cols value

        columnClassDefaultGenerator(newImage)


        //Lets push it to the web now!
        galleryContainer.appendChild(newImage)

    }
}
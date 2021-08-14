import { numberGallery } from "./00_variables.js";

export const howManyImagesToSee = () => {
    //First i need to target all the A tags that were printed!
    let allAtags = document.querySelectorAll("a")
    //Reset the Display None in case they want to see the images again
    allAtags.forEach(element => element.classList.remove("d-none"))

    //Now i need to see the difference between the total images printed and how many to see. And add some restriction to avoid negative numbers or max number of images i dont have.
    
    //This to avoid decimals.
    numberGallery.value = Math.round(numberGallery.value)
    
    console.log(numberGallery.value)
    numberGallery.value > allAtags.length || numberGallery.value < 0
        ? (alert(`Please a number between 0 to ${allAtags.length}`), numberGallery.value = allAtags.length)
        : numberGallery.value
    
    //Lets assign more security
    numberGallery.min = 0
    numberGallery.max = allAtags.length

    let difference = allAtags.length - numberGallery.value


    //I use i = 1 , to do the operation with .length to get index. I make sure when the difference is 1 is also possible. 
    for (let i = 1; i <= difference; i++) {
        //*FOR SOME REASON REVERSE METHOD WASNT WORKING
        //Instead i create simple subtraction operation
        let indexToDelete = (allAtags.length) - i
        allAtags[indexToDelete].classList.add("d-none")
    }

}
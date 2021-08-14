//Function to mix all games inside the array, otherwise will be in order killing the versatility.
//The page should not be showing always the shame, everyone has the same opportunity.

export const randomTheImages = (arr) => {
    let randomTheImages = []

    while (arr.length != 0) {
        //Random number
        let randomNumber = Math.floor(Math.random() * arr.length)
        //Lets assign the index of the array
        randomTheImages.push(arr[randomNumber])
        //Lets delete this item we select!
        arr.splice(randomNumber, 1)
    }
    
    return randomTheImages
}
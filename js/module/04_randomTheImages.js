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
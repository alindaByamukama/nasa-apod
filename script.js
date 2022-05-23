

// NASA API
const count = 5
const apiKey = `DEMO_KEY`
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`

let resultsArray = []

// get 10 images from nasa api
async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl)
        resultsArray = await response.json()
        console.log(resultsArray)
    } catch (error) {
        console.log('Issues:', error)
    }
}

// on load
getNasaPictures()
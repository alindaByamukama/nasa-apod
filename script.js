const resultsNav = document.getElementById('resultsNav')
const favoritesNav = document.getElementById('favoritesNav')
const imagesContainer = document.querySelector('.images-container')
const saveConfirmed = document.querySelector('.save-confirmed')
const loader = document.querySelector('.loader')


// NASA API
const count = 5
const apiKey = `DEMO_KEY`
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`

let resultsArray = []

// update our DOM
function updateDOM() {
    resultsArray.forEach((result) => {
        // card container
        const card = document.createElement('div')
        card.classList.add('card')
        // link
        const link = document.createElement('a')
        link.href = result.hdurl
        link.title = 'View Full Image'
        link.target = '_blank'
        // image
        const image = document.createElement('img')
        image.src = result.url
        image.alt = 'MASA Picture of the Day'
        // lazyload imgs
        image.loading = 'lazy'
        image.classList.add('card-img-top')
        // card body
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        // card title
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.textContent = result.title
        // save text
        const saveText = document.createElement('p')
        saveText.classList.add('clickable')
        saveText.textContent = 'Add To Favorite'
        // card text
        const cardText = document.createElement('p')
        cardText.textContent = result.explanation
        // footer container
        const footer = document.createElement('small')
        footer.classList.add('text-muted')
        // date
        const cardDate = document.createElement('strong')
        cardDate.textContent = result.date 
        // copyright
        const copyrightResult = result.copyright === undefined ? '' : result.copyright
        const cardCopyright = document.createElement('span')
        cardCopyright.textContent = ` ${copyrightResult}` 
        // APPEND
        footer.append(cardDate, cardCopyright)
        cardBody.append(cardTitle, saveText, cardText, footer)
        link.appendChild(image)
        card.append(link, cardBody)
        imagesContainer.appendChild(card)
    })
}

// get 10 images from nasa api
async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl)
        resultsArray = await response.json()
        console.log(resultsArray)
        updateDOM()
    } catch (error) {
        console.log('Issues:', error)
    }
}

// on load
getNasaPictures()
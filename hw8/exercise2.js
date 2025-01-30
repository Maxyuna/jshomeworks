const fetchCharacters = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const characters = await response.json()
        const characterList = characters.results
        const characterContainer = document.getElementById("character-container")

        characterList.forEach(character => {
            const characterCard = document.createElement("div")
            characterCard.classList.add("character-card")

            const imageElement = document.createElement("img")
            imageElement.src = character.image
            imageElement.alt = character.name

            const nameElement = document.createElement("h2")
            nameElement.textContent = character.name

            const genderElement = document.createElement("p")
            genderElement.textContent = `Gender: ${character.gender}`

            const statusElement = document.createElement("p")
            statusElement.textContent = `Status: ${character.status}`

            if (character.status === "Alive") {
                statusElement.style.color = "green"
            } else if (character.status === "Dead") {
                statusElement.style.color = "red"
            } else {
                statusElement.style.color = "gray"
            }

            const episodesElement = document.createElement("p")
            episodesElement.textContent = `Episodes: ${character.episode.length}`

            characterCard.appendChild(imageElement)
            characterCard.appendChild(nameElement)
            characterCard.appendChild(genderElement)
            characterCard.appendChild(statusElement)
            characterCard.appendChild(episodesElement)

            characterContainer.appendChild(characterCard)
        })
    } catch (error) {
        console.log( error)
    }
}


fetchCharacters()
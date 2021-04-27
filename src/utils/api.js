const APIUrl = "https://rickandmortyapi.com/api/character";

// Obtiene un número aleatorio
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Hace la solicitud a la API de Rick & Morty
async function fetchCharacter(url) {   
    return await fetch(url)
                .then(response => response.json())
                .then(data => data);
}

// Obtiene 3 personajes aleatoriamente consultado a la API
async function getCharacters() {

    return [
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${APIUrl}/${randomNumber(1, 669)}`),
    ];

}

export { getCharacters, randomNumber };
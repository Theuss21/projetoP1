function searchPokemon() {
    const pokemonInput = document.getElementById("pokemonInput").value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado!");
            }
            return response.json();
        })
        .then(data => {
            updatePokemonData(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function updatePokemonData(data) {
    const pokemonName = data.name;
    const pokemonID = data.id;
    const pokemonTypes = data.types.map(typeInfo => typeInfo.type.name);
    const pokemonImage = data.sprites.front_default;

    document.getElementById("pokemonName").innerText = pokemonName;
    document.getElementById("pokemonID").innerText = pokemonID;
    document.getElementById("pokemonType").innerText = pokemonTypes.join(', ');

    const imgElement = document.getElementById("pokemonImage");
    imgElement.src = pokemonImage;
    imgElement.style.display = 'block';

    const colorMap = {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        normal: '#A8A878',
        poison: '#A040A0',
        electric: '#F8D030',
        ground: '#E0C068',
        fairy: '#EE99AC',
        fighting: '#C03028',
        psychic: '#F85888',
        rock: '#B8A038',
        ghost: '#705898',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        flying: '#A890F0'
    };

    document.body.style.backgroundColor = colorMap[pokemonTypes[0]] || '#fff';

    currentPokemonID = pokemonID;
}

function nextPokemon() {
    if (currentPokemonID !== null && currentPokemonID < 1010) {
        currentPokemonID += 1;
        fetchPokemonByID(currentPokemonID);
    }
}

function previousPokemon() {
    if (currentPokemonID !== null && currentPokemonID > 1) {
        currentPokemonID -= 1;
        fetchPokemonByID(currentPokemonID);
    }
}

function fetchPokemonByID(id) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado!");
            }
            return response.json();
        })
        .then(data => {
            updatePokemonData(data);
        })
        .catch(error => {
            alert(error.message);
        });
}
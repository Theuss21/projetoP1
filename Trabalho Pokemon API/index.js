const idPokemonAtual = null;

async function encontrarpoke() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Pokémon não encontrado');
      const data = await response.json();
      
      currentPokemonId = data.id;
      document.getElementById('Nome').textContent = data.name;
      document.getElementById('Idpoke').textContent = data.id;
      document.getElementById('Poketipo').textContent = data.types.map(typeInfo => typeInfo.type.name).join(', ');
      document.getElementById('pokeimg').src = data.sprites.front_default;
      document.getElementById('Infopoke').style.display = 'block';

      changeBackgroundColor(data.types[0].type.name);
    } catch (error) {
      alert(error.message);
    }
  }
  
  function changeBackgroundColor(type) {
    const body = document.body;
    switch(type.toLowerCase()) {
        case 'electric':
            body.style.backgroundColor = '#FFFF00';
            break;
        case 'fire':
            body.style.backgroundColor = '#FF8C00';
            break;
        case 'water':
            body.style.backgroundColor = '#B0E0E6';
            break;
        case 'grass':
            body.style.backgroundColor = '#DEFDE0';
            break;
        case 'psychic':
            body.style.backgroundColor = '#BA55D3';
            break;
        case 'rock':
            body.style.backgroundColor = '#B8860B';
            break;
        case 'ice':
            body.style.backgroundColor = '#00BFFF';
            break;
        case 'dragon':
            body.style.backgroundColor = '#7B68EE';
            break;
        case 'fairy':
            body.style.backgroundColor = '#DA70D6';
            break;
        case 'dark':
            body.style.backgroundColor = '#696969';
            break;
        case 'steel':
            body.style.backgroundColor = '#87CEEB';
            break;
        case 'ghost':
            body.style.backgroundColor = '#483D8B';
            break;
        case 'flying':
            body.style.backgroundColor = '#E6E0D4';
            break;
        case 'bug':
            body.style.backgroundColor = '##32CD32';
            break;
        case 'poison':
            body.style.backgroundColor =  '#A020F0';
            break;
        case 'ground':
            body.style.backgroundColor =  '#A0522D';
            break;
        case 'fighting':
            body.style.backgroundColor = '#E6E0D4';
            break;
        case 'Normal':
            body.style.backgroundColor = '#DCDCDC';
            break;
        default:
            body.style.backgroundColor = '#40E0D0';
    }
}

async function proximoPoke() {
  if (currentPokemonId === null) return;
  currentPokemonId++;
  const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`;

  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Pokémon não encontrado');
      const data = await response.json();

      document.getElementById('Nome').textContent = data.name;
      document.getElementById('Idpoke').textContent = data.id;
      const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');
      document.getElementById('Poketipo').textContent = tipos;
      document.getElementById('pokeimg').src = data.sprites.front_default;
      document.getElementById('Infopoke').style.display = 'block';

      changeBackgroundColor(data.types[0].type.name);

  } catch (error) {
      alert(error.message);
  }
}

async function voltarPoke() {
  if (currentPokemonId === null || currentPokemonId <= 1) return;
  currentPokemonId--;
  const url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`;

  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Pokémon não encontrado');
      const data = await response.json();

      document.getElementById('Nome').textContent = data.name;
      document.getElementById('Idpoke').textContent = data.id;
      const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');
      document.getElementById('Poketipo').textContent = tipos;
      document.getElementById('pokeimg').src = data.sprites.front_default;
      document.getElementById('Infopoke').style.display = 'block';

      changeBackgroundColor(data.types[0].type.name);

  } catch (error) {
      alert(error.message);
  }
}

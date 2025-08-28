async function showPokemonDetails(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()

  const content = `
    <h2>${data.name} (#${data.id})</h2>
    <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
    <p><strong>Altura:</strong> ${data.height / 10} m</p>
    <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
    <p><strong>Tipos:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
    <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(', ')}</p>
  `

  document.getElementById("detailsContent").innerHTML = content
  document.getElementById("pokemonDetails").classList.remove("hidden")
}

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("pokemonDetails").classList.add("hidden")
})

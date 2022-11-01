
const newPetHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const sex = document.querySelector("#sex").value;
  const species = document.querySelector("#species").value;
  const breed = document.querySelector("#breed").value.trim();
  const description = document.querySelector("#description").value.trim();
  const image = document.querySelector("#image").value.trim();


  if (name && sex && species && breed && description && image) {
    const newPet = { name, sex, species, breed, description, image };
    await fetch ('/api/pets', {
      method: 'POST',
      body: JSON.stringify(newPet),
      headers: { 'Content-Type': 'application/json' }
    });
    }
  }

  document
    .querySelector('#submit-form')
    .addEventListener('submit', newPetHandler);
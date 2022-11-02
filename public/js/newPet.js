
const newPetHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim(); // Get new pet name
  const sex = document.querySelector("#sex").value; // Get new pet sex
  const species = document.querySelector("#species").value; // Get new pet species
  const breed = document.querySelector("#breed").value.trim(); // Get new pet breed
  const description = document.querySelector("#description").value.trim(); // Get new pet description
  const image = document.querySelector("#image").value.trim(); // Get new pet local image path, must be from C:/fakedirectory/


  if (name && sex && species && breed && description && image) { // Only run if all fields are filled
    const newPet = { name, sex, species, breed, description, image };  // create new pet object
    await fetch ('/api/pets', { // Post new pet information to api/pets
      method: 'POST',
      body: JSON.stringify(newPet),
      headers: { 'Content-Type': 'application/json' }
    });
    }
  }

  document
    .querySelector('#submit-form')
    .addEventListener('submit', newPetHandler); // Event listener for submit new pet button
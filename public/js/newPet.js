
const newPetHandler = async (event) => {
  console.log("**********************")
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const sex = document.querySelector("#sex").value;
  const species = document.querySelector("#species").value;
  const breed = document.querySelector("#breed").value.trim();
  const description = document.querySelector("#description").value.trim();
  const image = document.querySelector("#image").value.trim();
  
  console.log(image);


  if (name && sex && species && breed && description && image) {
    const newPet = { name, sex, species, breed, description, image };
    console.log(newPet);
    const response = await fetch ('/api/pets', {
      method: 'POST',
      body: JSON.stringify(newPet),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    }
  }

  document
    .querySelector('#submit-form')
    .addEventListener('submit', newPetHandler);
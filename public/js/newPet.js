const newPetHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const sex = document.querySelector("#sex").value;
  const species = document.querySelector("#breed").value;
  const breed = document.querySelector("#breed").vaue.trim();
  const description = document.querySelector("#description").vaue.trim();
  const image = document.querySelector("#image").vaue.trim();


  if (name && sex && species && breed && description && image) {
    const newPet = {name, sex, species, breed, description, image};

    const post = await fetch ('/api/pets')
  }
}
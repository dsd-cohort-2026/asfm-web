const animalRepository = require('./animals.repository');

exports.getAllAnimals = async () => {
  const animals = await animalRepository.findAll();

  const formattedAnimals = animals.map(animal => {
    const name = typeof animal.name === 'string' ? animal.name : '';
    const formattedName = name.length > 0
      ? name.slice(0, 1).toUpperCase() + name.slice(1)
      : name;

    return {
      id: animal.id,
      name: formattedName,
      chip_id: animal.chip_id,
      created_at: animal.created_at,
      dob: animal.dob,
      sex: animal.sex,
      species: animal.species,
      foster_status: animal.foster_status,
      kennel_id: animal.kennel_id,
      altered: animal.altered,
      weight: animal.weight,
      last_modified: animal.last_modified,
      picture: animal.picture,
      user_id: animal.user_id
    };
  });
  return formattedAnimals;
}

exports.getAnimalById = async (id) => {
  const animal = await animalRepository.findById(id);
  const name = typeof animal.name === 'string' ? animal.name : '';

  const formattedName = name.length > 0
    ? name.slice(0, 1).toUpperCase() + name.slice(1)
    : name;

  return {
    id: animal.id,
    name: formattedName,
    chip_id: animal.chip_id,
    created_at: animal.created_at,
    dob: animal.dob,
    sex: animal.sex,
    species: animal.species,
    foster_status: animal.foster_status,
    kennel_id: animal.kennel_id,
    altered: animal.altered,
    weight: animal.weight,
    last_modified: animal.last_modified,
    picture: animal.picture,
    user_id: animal.user_id
  };
}

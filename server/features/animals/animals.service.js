const animalRepository = require('./animals.repository');

exports.getAllAnimals = async () => {
  const animals = await animalRepository.findAll()

  const formattedAnimals = animals.map(animal => {
    const name = typeof animal.name === 'string' ? animal.name : '';
    const formattedName = name.length > 0
      ? name.slice(0, 1).toUpperCase() + name.slice(1)
      : name;

    return {
      id: animal.id,
      name: formattedName,
      species: animal.species
    };
  });
  return formattedAnimals;
}
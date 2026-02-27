const animalService = require('./animals.service');

exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await animalService.getAllAnimals();
    res.status(200).json(animals);
  } catch (error) {

    console.error("Error fetching animals:", error);
    res.status(500).json({ message: "An error occurred while fetching animals" });
  }
}

exports.getAnimalById = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await animalService.getAnimalById(id);
    if (!animal) {
      return res.status(404).json({ message: "Animal was not found" });
    }
    res.status(200).json(animal);
  } catch (error) {
    console.error(`Error fetching the animal with id ${id}:`, error);
    res.status(500).json({ message: "An error occurred while fetching animal" });
  }
}

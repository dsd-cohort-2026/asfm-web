exports.findAll = async () => {
  // TODO: this will connect to our actual DB;
  return [
    {
      id: "550e8400-e29b-41d4-a716-446655550001",
      name: "buddy",
      chip_id: 100001,
      created_at: "2026-01-10T00:00:00.000Z",
      dob: "2023-02-15T00:00:00.000Z",
      sex: "MALE",
      species: "Dog",
      foster_status: "FOSTERED",
      kennel_id: 1,
      altered: false,
      weight: 62.0,
      last_modified: "2026-02-01T00:00:00.000Z",
      picture: "https://placehold.co/300x300",
      user_id: "550e8400-e29b-41d4-a716-446655440202"
    },
    {
      id: "550e8400-e29b-41d4-a716-446655550002",
      name: "mittens",
      chip_id: 100002,
      created_at: "2026-01-22T00:00:00.000Z",
      dob: "2024-01-22T00:00:00.000Z",
      sex: "FEMALE",
      species: "Cat",
      foster_status: "SHELTERED",
      kennel_id: 2,
      altered: true,
      weight: 9.5,
      last_modified: "2026-01-22T00:00:00.000Z",
      picture: "https://placehold.co/300x300",
      user_id: "550e8400-e29b-41d4-a716-446655440202"
    },
    {
      id: "550e8400-e29b-41d4-a716-446655550003",
      name: "rex",
      chip_id: 100003,
      created_at: "2026-02-01T00:00:00.000Z",
      dob: "2021-02-01T00:00:00.000Z",
      sex: "MALE",
      species: "Dog",
      foster_status: "SHELTERED",
      kennel_id: 3,
      altered: false,
      weight: 75.0,
      last_modified: "2026-02-01T00:00:00.000Z",
      picture: "https://placehold.co/300x300",
      user_id: "550e8400-e29b-41d4-a716-446655440204"
    }
  ];
};

exports.findById = async (id) => {
  const animals = await exports.findAll();
  return animals.find(animal => animal.id === id);
}

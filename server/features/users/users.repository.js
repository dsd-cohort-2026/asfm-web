exports.findAll = async () => {
  return [
    { id: 1, first_name: "john", last_name: "doe", email: "john@example.com", address: "123 Main St", imageUrl: "https://placehold.co/150x150", role: "admin" },
    { id: 2, first_name: "jane", last_name: "doe", email: "jane@example.com", address: "123 Tree Dr", imageUrl: "https://placehold.co/150x150", role: "admin" },
  ];
};

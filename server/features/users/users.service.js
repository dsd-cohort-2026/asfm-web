const userRepository = require('./users.repository');

exports.getAllUsers = async () => {
  const users = await userRepository.findAll()

  const formattedUsers = users.map(user => {
    const name = typeof user.name === 'string' ? user.name : '';
    const formattedName = name.length > 0
      ? name.slice(0, 1).toUpperCase() + name.slice(1)
      : name;

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      address: user.address,
      imageUrl: user.imageUrl,
      role: user.role
    };
  });
  return formattedUsers;
}

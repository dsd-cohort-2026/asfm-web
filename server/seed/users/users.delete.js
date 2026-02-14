const prisma = require("../../connections/prisma-client");

const deleteAll = async () => {
  await prisma.user.deleteMany({});
};

deleteAll();

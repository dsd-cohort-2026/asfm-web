const { PrismaClient } = require("../generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
require("dotenv").config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

module.exports = new PrismaClient({ adapter });

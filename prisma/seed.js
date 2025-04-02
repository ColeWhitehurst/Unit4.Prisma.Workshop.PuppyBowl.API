const prisma = require("../prisma");

const seed = async () => {
  const createPlayers = async () => {
    const players = [
      {
        name: "Dash",
        breed: "Great Pyrenees",
        status: "field",
      },
      {
        name: "Bodhi",
        breed: "Bermese Mtn Dog",
        status: "field",
      },
      {
        name: "Appa",
        breed: "Flying Bison",
        status: "field",
      },
      {
        name: "Billy",
        breed: "Bulldog",
        status: "field",
      },
      {
        name: "Champ",
        breed: "Labrador",
        status: "field",
      },
      {
        name: "Scooby",
        breed: "Golden Retriever",
        status: "bench",
      },
      {
        name: "Lola",
        breed: "Shih Tzu",
        status: "bench",
      },
      {
        name: "Zoe",
        breed: "Mastiff",
        status: "bench",
      },
      {
        name: "Robby",
        breed: "Rottweiler",
        status: "bench",
      },
      {
        name: "Betty",
        breed: "Beagle",
        status: "bench",
      },
    ];
    await prisma.player.createMany({ data: players });
};

await createPlayers();
};

seed()
.then(async () => await prisma.$disconnect())
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});

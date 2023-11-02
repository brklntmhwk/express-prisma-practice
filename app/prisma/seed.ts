import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query", "error", "info", "warn"] });

const todoData = [
  { title: "todo1", description: "todo1", dueDate: new Date("9999/12/31") },
  { title: "todo2", description: "todo2", dueDate: new Date("2023/11/01") },
  { title: "todo3", description: "todo3", dueDate: new Date("2023/11/02") },
  { title: "todo4", description: "todo4", dueDate: new Date("2023/11/03") },
  { title: "todo5", description: "todo5", dueDate: new Date("2023/12/31") },
];

async function main() {
  await prisma.$transaction([
    prisma.todo.deleteMany(),
    prisma.todo.createMany({ data: todoData }),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

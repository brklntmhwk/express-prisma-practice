import * as express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { format } from "date-fns";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (_req, res) => {
  const todos = await prisma.todo.findMany();

  res.render("todos", { todos });
});
router.get("/:id", async (req, res) => {
  const todoId = Number(req.params.id);

  try {
    const todo = await prisma.todo.findUnique({ where: { id: todoId } });
    res.render("todo", { todo });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
    }
    throw e;
  }
});

export default router;

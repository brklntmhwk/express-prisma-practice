import * as express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (_req, res) => {
  const todos = await prisma.todo.findMany();

  res.render("todos", { todos });
});
router.get("/:id", async (req, res) => {
  const todoId = Number(req.params.id);
  const todo = await prisma.todo.findUnique({ where: { id: todoId } });

  res.render("todo", { todo });
});

export default router;

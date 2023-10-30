import * as express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/* GET todo page. */
router.get("/", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

export default router;

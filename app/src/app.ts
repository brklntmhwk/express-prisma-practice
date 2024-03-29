import createError from "http-errors";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import todosRouter from "./routes/todos";
import usersRouter from "./routes/users";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.locals.dateFns = require("date-fns");
app.locals.enUS = require("date-fns/locale/en-US");

app.use(logger("dev"));
app.use(express.json());
// allow it to receive form data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/todos", todosRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
): any {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;

import { join } from "path";
import express from "express";
import logger from "morgan";
import socketIO from "socket.io";
import socketController from "./socketConrtroller";
import events from "./events";

const PORT = 4000;
const app = express();
// eslint-disable-next-line no-unused-vars
let sockets = [];

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () => {
  console.log(`Server running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server); //server를 socket위에 올림

io.on("connection", (socket) => socketController(socket));

import express from "express";
import logger from "morgan";
import Cors from "cors";
import routes from "./src/Routes/index.routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//Settings
const port = process.env.PORT || 3000;
app.set("port", port);

// Middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(Cors(corsOptions));

//Routes
app.get("/", (req, res) => res.sendStatus(200));

//UtilityRoutes
app.get("/health", (req, res, next) => {
  res.status(200);
  res.send("ok");
});
app.get("/ready", (req, res, next) => {
  res.status(200);
  res.send("ok");
});

//EntityRoutes
for (const route of routes.entityRoutes) {
  app.use("/api/entity", route);
}

//AppointmentNamespace Routes
// for (const route of routes.AppointmentNamespaceRoutes) {
//   app.use("/api/AppointmentNamespace", route);
// }

// obtenerTurno Routes
for (const route of routes.turno) {
  app.use("/api/turno", route);
}

export default app;

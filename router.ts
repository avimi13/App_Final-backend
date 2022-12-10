import { Tendencia } from "./tendencias/models";
import { Express, Router } from "express";
import authRouter from "./auth/router";
import categoriesRouter from "./categories/router";
import clientsRouter from "./usersclient/router";
import gmapsRouter from "./gmaps/router";
import inventaryRouter from "./inventary/router";
import productsoapRouter from "./productsoap/router";
import popularesRouter from "./populares/router";
import tendenciasRouter from "./tendencias/router";
import placesRouter from "./places/router";
import informationRouter from "./information/router";

const router = (app: Express) => {
  app.get("/", (req, res) => {
    res.json({
      message: "its working",
    });
  });
  app.use("/auth", authRouter);
  app.use("/categories", categoriesRouter);
  app.use("/client", clientsRouter);
  app.use("/gmaps", gmapsRouter);
  app.use("/inventary", inventaryRouter);
  app.use("/productsCat", productsoapRouter);
  app.use("/populares", popularesRouter);
  app.use("/tendencias", tendenciasRouter);
  app.use("/places", placesRouter);
  app.use("/information", informationRouter);
};
export default router;

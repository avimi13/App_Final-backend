import { Express } from 'express';
import authRouter from './auth/router';
import categoriesRouter from './categories/router';
import recipesRouter from './recipes/router';
import clientsRouter from './usersclient/router';
import gmapsRouter from './gmaps/router';
import inventaryRouter  from './inventary/router';
import productsoapRouter from './productsoap/router';
import popularesRouter from './populares/router';
import tendenciasRouter from './tendencias/router'

const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/categories", categoriesRouter);
    app.use("/recipes", recipesRouter);
    app.use("/client", clientsRouter);
    app.use("/gmaps", gmapsRouter);
    app.use("/inventary", inventaryRouter);
    app.use("/productsCat", productsoapRouter);
    app.use("/populares", popularesRouter);
    app.use("/tendencias", tendenciasRouter);
}

export default router;
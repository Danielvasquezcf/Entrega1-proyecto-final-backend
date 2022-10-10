import express from "express";
import routerCarrito from "./routes/carts.router.js";
import routerProductos from "./routes/products.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/productos", routerProductos);
app.use("/carritos", routerCarrito);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http activo y escuchando en el puerto ${PORT}`)
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));




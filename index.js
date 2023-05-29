/* const { app } = require("Routes");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("server on ", PORT);
}); */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
//const multer = require("multer");
mongoose.Promise = global.Promise;

//const Noticia = require("../models/Noticia");

//create our app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));
//app.use(cors());
/* app.use(express.json()) */

//routes
app.get("/", (req, res) => {
    res.send("App running");
});

//Settings
app.set("port", process.env.PORT || 4000);

//start server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});

const usuario = "usuariorandom"
const password = "i123456"
const dbName = "map"

//const uri = `mongodb+srv://${usuario}:${password}@cluster0.titao.mongodb.net/`;
const uri = `mongodb+srv://${usuario}:${password}@cluster0.titao.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch(e => console.log('error de conexión', e))

/* class Controller {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                // "mongodb+srv://acorderofalco58:TEACHdev2021.@cluster0.3okjxa2.mongodb.net/trackapp?retryWrites=true&w=majority",
                "mongodb://acorderofalco58:TEACHdev2021.@ac-wq3ku25-shard-00-00.3okjxa2.mongodb.net:27017,ac-wq3ku25-shard-00-01.3okjxa2.mongodb.net:27017,ac-wq3ku25-shard-00-02.3okjxa2.mongodb.net:27017/trackapp?ssl=true&replicaSet=atlas-twthjd-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true }
            );
            console.log("conectado");
        } catch (e) {
            console.error(e);
        }
    }
} */

/* //DB conection
mongoose.connect(
    "mongodb+srv://IdanielF10:<password>@cluster0.xdnub.mongodb.net/?retryWrites=true&w=majority"
);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err)); */
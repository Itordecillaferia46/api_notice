const moongose = require("mongoose");

const Schema = moongose.Schema;

const NoticiaSchema = new Schema({
    category: String,
    title: String,
    abstract: String,
    //creation_date: Date,
    content: Array
});

var Noticia = moongose.model("Noticia", NoticiaSchema);

module.exports = Noticia;
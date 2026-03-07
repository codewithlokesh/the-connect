import express from "express";

const app = express();

app.use(cors())

app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit: "25kb"}))
app.use(express.static("public"))
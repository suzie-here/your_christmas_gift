//jshint esversion:6
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("start", {hiMessage: process.env.HI_MESSAGE, startMessage2: process.env.START_MESSAGE_2
    })
});

app.get("/message", (req, res) => {
    res.render("message", {
        messageMessage1: process.env.MESSAGE_MESSAGE_1, 
        messageMessage2: process.env.MESSAGE_MESSAGE_2, 
        messageMessage3: process.env.MESSAGE_MESSAGE_3, 
        messageEmoji1: process.env.MESSAGE_EMOJI_1
    })
});

app.get("/messages", (req, res) => {
    res.render("messages", {
        messagesMessage1: process.env.MESSAGES_MESSAGE_1, 
        messagesMessage2: process.env.MESSAGES_MESSAGE_2, 
        messagesMessage3: process.env.MESSAGES_MESSAGE_3, 
        messagesMessage4: process.env.MESSAGES_MESSAGE_4, 
        messagesSelfieImage: process.env.MESSAGES_SELFIE_IMAGE 
    })
});

app.get("/index", (req, res) => {
    res.render("index", {
        indexMessage1: process.env.INDEX_MESSAGE_1
    })
});

app.get("/yes", (req, res) => {
    res.render("yes", {
        yesMessage1: process.env.YES_MESSAGE_1
    })
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
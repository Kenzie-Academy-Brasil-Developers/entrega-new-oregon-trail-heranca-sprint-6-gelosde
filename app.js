const Wagon     = require("./models/Wagon");
const Doctor    = require("./models/Doctor");
const Hunter    = require("./models/Hunter");
const Traveler  = require("./models/Traveler");


let viajante = new Traveler();
let carroca = new Wagon();
let hunter = new Hunter();
let dotor = new Doctor();

let viajanteSergio = new Hunter();
let viajanteSimone = new Doctor();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    carroca,
    hunter,
    dotor
}
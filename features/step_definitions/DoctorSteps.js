const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


const { dotor } = require("./../../app");

Given("Dado uma Dotora de nome {string}", function (string){
    dotor.name = string;
});
Given("E ela sempre começa a viagem com {int} refeição",function(int){
    dotor.food= int;
});
Given("E ela sempre começa a viagem saudável.", function (){
    dotor.isHealthy= true;
});
When("Dado Hunter {string} esta doente", function (string){
    string.isHealthy =false;
});
Then("E {string} cura {string2}.",function(string,string2){
    string.heal(string2);
});
When("Dado {string} ficou doente", function (string){
    string.isHealthy =false;
    
});
Then("{string} não pode se curar ou curar outros.", function (string){
    string.heal(string);
})
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { hunter } = require("./../../app");

    Given("Dado um Hunter de nome {string}", function (string) {
        hunter.name = string;
    });

    Given("E ele sempre começa a viagem com {int} refeição", function (int) {
        hunter.food = int;
    });

    Given("E ele sempre começa a viagem saudável.", function () {
        hunter.isHealthy = true;
    });

    When("Quando o Hunter sair para caçar {int} vez", function (int){
        for(let contador=0;contador<int;contador++){
            hunter.hunt();
        }
    });

    Then("Então a quantidade de refeições deve ser igual a {int}", function (int){
        assert.strictEqual(hunter.food,int);
    });

    When(" Quando o Hunter parar para comer {int} vezes", function (int){
        for(let contador=0;contador<int;contador++){
            hunter.eat();
        }
    });

    Then("Então a quantidade de refeições deve ser igual a {int} e o Hunter não ficará doente", function (int){
        assert.strictEqual(hunter.food,int);
    });

    When("O motorista do  vagão solicitou {int} comidas para o Traveler {string}", function (string, int){
       hunter.giveFood(string, int);
       
    });
    Then("apos receber um pedido para dar a {string} {int} de comida ele entrega", function (string,int){
        assert.notEqual(string,int);
    });

    When(" Quando o Hunter parar para comer {int} vezes", function (int){
        assert.strictEqual(int,0);
    });

    Then("E o Hunter ficará doente", function (){
        hunter.isHealthy = false;
    });
    When(" Quando o Hunter parar para caçar a pos ficar doente ele não conseguira caçar",function(){
    let saude =  hunter.hunt();
        assert.strictEqual(saude,false);
    });
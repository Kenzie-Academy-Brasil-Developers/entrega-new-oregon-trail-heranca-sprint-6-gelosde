class Wagon{
    constructor (capacidade){
        this.capacity =capacidade;
        this.passageiros=[];
        this.quarentena = false;
        this.totalFoods =0;
    }

   join(name){
      if(this.capacity>0){
          
          this.passageiros.push(name);
           return this.capacity-=1

        }else
        console.log("o individo não pode embarcar");
  }
    getAvailableSeatCount(){
    return  this.capacity;
    }
    shouldQuarantine(){
      for(let contador=0; contador<this.passageiros.length;contador++){
        if(this.passageiros[contador].isHealthy===false){
          return true;
        }
      }
    }
    totalFood(){
     let totalFoods =0;
       
        for(let contador=0; contador<this.passageiros.length;contador++){
            totalFoods += this.passageiros[contador].food;}

            this.totalFoods = totalFoods;
            return this.totalFoods;
    }  
  
    giveFoodNow(quantidade,name){
      let compara = name.food
        
       if(name.food<=1){
        name.food = Hunter.giveFood(name, quantidade);
          if(name.food>=compara){
                console.log("o passageiro recebeu: "+quantidade+" a mais de comida");
            }else{
              if(this.passageiros[i].food===0){
                this.passageiros[i].isHealthy = false;
                console.log("passageiro doente");
                this.shouldQuarantine();
                }
            }
        }
    }
       } 
      
    


module.exports = Wagon;
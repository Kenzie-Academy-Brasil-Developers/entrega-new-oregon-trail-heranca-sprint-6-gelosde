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



class Traveler{
    constructor (nome){
        this.name= nome;
        this.food =1;
        this.isHealthy=true;
     
    } 
     get isHealthy(){
      if(this.food>0){
        return this.isHealthy = true; ;
       }else if(this.food===0){
         return this.isHealthy = false;}
  
    }
    set  isHealthy(healt){
      this._isHealthy = healt;
    }
    hunt(){
      this.food+=2
      console.log(this.name+" pega mais comida total: "+this.food);
      return this.food;
    }

    eat(){
       if(this.food===0){
       
        console.log(this.name+" agora está com fome (doente)")
       return this.food;
    }else if(this.food>0){
      
      return this.food-=1;
    }

  } 

}

class Hunter extends Traveler{
  constructor(name){
      super(name)
      this.name = name;
      this.food =2
      this.isHealthy=true;
  
  }
       get isHealthy(){
        if(this.food>0){
          return this.isHealthy = true; ;
         }else if(this.food<=1){
           return this.isHealthy = false;}
    
      }
      set isHealthy(healt){
        this._isHealthy = healt;
      }
      hunt(){
        if(this.isHealthy===true){
        this.food+=5
        console.log(this.name+" pega mais comida total: "+this.food);
        return this.food;
      }else
        return false;
      }
  
      eat(){
         if(this.food<=1){
         
           console.log(this.name+" agora está com fome (doente)")
           this.food = 0;
          return this.food;
          }else if(this.food>0){
        
           return this.food-=2;
          }
  
    }
      giveFood(nome, quantidadeFood){
        if(this.isHealthy===true){
          if(this.food>=quantidadeFood){
              this.food-=quantidadeFood;
            return nome.food +=quantidadeFood;
          }
        }else{
            console.log("o caçador esta doente não pode caçar");
        }
      }
  
  }
  


class Doctor extends Traveler{
  constructor(name){
      super(name);
      this.name= name;
      this.food =1;
      this.isHealthy=true;
  }  
  get isHealthy(){
      if(this.food>0){
        return this.isHealthy = true; ;
       }else if(this.food===0){
         return this.isHealthy = false;}
  
    }
    set  isHealthy(healt){
      this._isHealthy = healt;
    }
    hunt(){
      this.food+=2
      console.log(this.name+" pega mais comida total: "+this.food);
      return this.food;
    }

    eat(){
       if(this.food===0){
       
        console.log(this.name+" agora está com fome (doente)")
       return this.food;
    }else if(this.food>0){
      
      return this.food-=1;
    }

  }

  heal(name){
    if(this.isHealthy===true){
      if(name.isHealthy!== true){
          name.isHealthy = true;
          console.log("passageiro foi curado!");
          }
      } else{
      return "medico doente";
      }
  }
}
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
    
    module.exports = Hunter;
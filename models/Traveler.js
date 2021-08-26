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

module.exports = Traveler;
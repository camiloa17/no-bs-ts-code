abstract class StreetFighter{
  constructor(){}
  move(){}
  fight(){
    console.log(`${this.name} attack with ${this.getSpecialAttach()}`)
  }

 abstract getSpecialAttach():string;
 abstract get name():string;
}

class Ryu extends StreetFighter{
  getSpecialAttach():string{
    return 'Hadoken';
  }
  get name(){
    return 'Ryu';
  }
}

class ChunLi extends StreetFighter{
  getSpecialAttach():string{
    return 'Lightning Kick';
  }
  get name(){
    return 'Chun-Li';
  }
}

const ryu = new Ryu();
const chunLi = new ChunLi();

ryu.fight();
chunLi.fight();




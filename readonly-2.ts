class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy('LG', 13);
//lgg.age=2;
console.log(lgg);


/**
 * Here we can only use the instance of Doglist and we can not instantiate the DogList
 */
class DogList {
  private doggies: Doggy[] = [];
  static instance: DogList = new DogList();
  private constructor(){}

  static addDog (dog:Doggy){
    DogList.instance.doggies.push(dog);
  }

  getDogs(){
    return this.doggies;
  }
}

DogList.addDog(lgg);
console.log(DogList.instance.getDogs());


type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: 'Mut',
  text: 'hello',
  hello: 1,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> ={
  [Property in keyof Type]:(newValues:Type[Property])=>void
}

function listenToObject<T>(obj: T, listeners:Listeners<T>): void {}

const lg: DogInfo = {
  name: 'LG',
  age: 4,
};

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: string) => {},
});

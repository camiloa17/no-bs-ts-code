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

/**
 * The listener recives the object as a type and it takes
 * the property of the key of the object
 * and put it as a string literal which capitalize the Property of the object.
 * This key will have a value of a function.
 */
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    newValues: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};


function listenToObject<T>(obj: T, listeners: Listeners<T>): void {}

const lg: DogInfo = {
  name: 'LG',
  age: 4,
};

type DogInfoListeners = Listeners<DogInfo>;
listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
});

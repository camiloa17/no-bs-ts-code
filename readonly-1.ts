//By property
// interface Cat {
//   readonly name: string;
//   breed: string;
// }
interface Cat {
  name: string;
  breed: string;
}

//Lock the whole interface
function makeCate(name: string, breed: string): Readonly<Cat> {
  return { name, breed };
}

const usul = makeCate('Usul', 'Tabby');

//You cant mutate usul since it is readonly
//usul.name='hello'
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1= makeCoordinate(10,30,5);
//You cant mutate c1 that is a tupple.
//c1[0]=2;

// Inmutable array.

//const reallyArrayConst:readonly number[] = [1,2,3,4];
//or
const reallyArrayConst = [1,2,3,4] as const;
//reallyArrayConst[0]=2;
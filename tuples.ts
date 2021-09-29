//Tuple
type ThreeDCoordinate = [x: number, y: number, z: number];

function addTwo3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  const [x1, y1, z1] = c1;
  const [x2, y2, z2] = c2;
  return [x1 + x2, y1 + y2, z1 + z2];
}

console.log(addTwo3DCoordinate([1, 2, 3], [10, 20, 30]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;

  return [
    () => str,
    (string) => {
      str = string;
    },
  ];
}


//Piece of state.
const [str1Getter,str1Setter]=simpleStringState('Hello');

console.log(str1Getter());
str1Setter('Goodbye');
console.log(str1Getter());

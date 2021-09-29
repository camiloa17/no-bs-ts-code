export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const mutationFunc:MutationFunction=(v:number)=>{
  return v * 5;
}
console.log(
  arrayMutate([1, 2, 3, 4, 5], mutationFunc)
);

export type AdderFunction =(val: number) => number;
export function createAdder(num:number):AdderFunction{
  return (val:number)=> num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));

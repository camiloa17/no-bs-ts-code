import houses from './houses.json';
interface House {
  name: string;
  planets: string[] | string;
}

interface HouseWithID extends House {
  id: number;
}
type FilteringCallback = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilteringCallback): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilteringCallback): HouseWithID[];

function findHouses(arg1: unknown, arg2?: FilteringCallback): HouseWithID[] {
  const houses: House[] =
    typeof arg1 === 'string' ? JSON.parse(arg1) : (arg1 as House[]);
  const housesWithId:HouseWithID[] = houses.map(house=>({id:generateAnId(),...house}));
  if(arg2){
    return housesWithId.filter(arg2);
  }
  return housesWithId;
  
}

function generateAnId():number{
  return Math.random() * (1000 - 1) + 1;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses));
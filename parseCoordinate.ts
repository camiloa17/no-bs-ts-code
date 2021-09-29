

interface Coordinate{
  x:number;
  y:number;
}

//Old way declaring separate functions
function parseCoordinateFromObject(obj:Coordinate):Coordinate{
  return{
    ...obj
  }
}

function parseCoordinateFromNumbers(x:number,y:number):Coordinate{
  return{x,y};
}

//Functions overloading 
function parseCoordinate(obj:Coordinate):Coordinate;
function parseCoordinate(x:number,y:number):Coordinate;
function parseCoordinate(str:string):Coordinate;

function parseCoordinate(arg1:unknown,arg2?:unknown):Coordinate{
  let coord:Coordinate={
    x:0,
    y:0
  };

  switch(typeof arg1){
    case 'string':
      (arg1 as string).split(',').forEach(coords=>{
        const [key,value]=coords.split(':');
        coord[key as 'x' | 'y']=parseInt(value,10);
      });
      break;
      case 'object':
        coord={
          ...arg1 as Coordinate
        }
      break;
      default:
        coord={
          x:arg1 as number,
          y:arg2 as number
        }
        break;
  }


  return coord;
}

 console.log(parseCoordinate(10,20));
 console.log(parseCoordinate({x:5,y:10}));
 console.log(parseCoordinate('x:10,y:30'));

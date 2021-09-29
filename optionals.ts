

//Optional params
function printIngredient(quantity:string,ingredient:string, extra?:string) {
  console.log(`${quantity} ${ingredient} ${extra?extra:''}`);
}

printIngredient('1C', 'Flower')
printIngredient('1C', 'Sugar','something more')



// Optional fields

interface User{
  id:string;
  info?:{
    email?:string;
  };
}


function getEmail(user:User) {
  if(user.info){
    return user.info.email!;
  }
  return '';
}

function getEmailEasy(user:User) {
  return user?.info?.email ?? "";
}

//Optional callbacks

function addWithCallback(x:number,y:number,callback?:()=>void){
  console.log([x,y]);
  callback?.();
}
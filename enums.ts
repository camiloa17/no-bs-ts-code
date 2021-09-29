enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

const englishLoadingState = {
  [LoadingState.beforeLoad]: 'Before Load',
};
console.log(englishLoadingState);
const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loading));

//Literal types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.round(Math.random() * 5 + 1);
  }
  return pip;
}

console.log(rollDice(3));


function sendEvent2(name:'addToCart',data:{productId:number}):void
function sendEvent2(name:'checkout',data:{cartCount:number}):void
function sendEvent2(name:string,data:unknown):void{
  console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent2('addToCart',{productId:3})
sendEvent2('checkout',{cartCount:4})

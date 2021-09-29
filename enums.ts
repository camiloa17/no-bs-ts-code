

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}


const englishLoadingState={
  [LoadingState.beforeLoad]:'Before Load'
}
console.log(englishLoadingState);
const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loading));

//Literal types


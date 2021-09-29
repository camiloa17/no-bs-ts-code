function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let state: T = initial;

  return [
    () => state,
    (newState) => {
      state = newState;
    },
  ];
}

const [st1Getter, st1Setter] = simpleState(10);

console.log(st1Getter());
st1Setter(62);
console.log(st1Getter());

//Overriding infered type
const [st2Getter, st2Setter] = simpleState<null | string>(null);

console.log(st2Getter());
st2Setter('str');
console.log(st2Getter());

//Generic Interface
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

//Generic function
function ranker<RankItem>(
  items: RankItem[],
  rank: (val: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: 'Bulbasaur', hp: 20 },
  { name: 'Megasaur', hp: 30 },
];

const ranks=ranker(pokemon,({hp})=>hp);
console.log(ranks)

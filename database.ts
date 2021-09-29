interface Database<T,K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

//Private- Only the class can see it.
//Protected - Only this class and descendants can see it and change it.
//Public - Everyone can access it.

type DbKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DbKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as  Record<K, T>; 

  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DbKeyType> extends InMemoryDatabase<T, K> {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db= JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB<number,string>();

myDB.set('1', 2);
console.log(myDB.get('1'));
const saved =myDB.saveToString();
myDB.set('2', 3);
console.log(myDB.get('2'));
const myDB2 = new PersistentMemoryDB<number,string>();

myDB2.restoreFromString(saved);
console.log(myDB2.get('1'))

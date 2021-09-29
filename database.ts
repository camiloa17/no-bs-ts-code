interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

//Private- Only the class can see it.
//Protected - Only this class and descendants can see it and change it.
//Public - Everyone can access it.

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db= JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB();

myDB.set('1', 'Camilo');
console.log(myDB.get('1'));
const saved =myDB.saveToString();

const myDB2 = new PersistentMemoryDB();

myDB2.restoreFromString(saved);
console.log(myDB2.get('1'))

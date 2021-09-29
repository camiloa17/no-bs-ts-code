//Partial utility
interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return { ...user, ...overrides };
};

console.log(
  merge(
    { id: '1s', name: 'Camilo', email: 'camilod@gmail.com' },
    { email: 'baz.a@gmail.com' }
  )
);

//Required utility

type RequiredMyUser = Required<MyUser>;

//Pick it picks this two keys and create a new type.
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

type UserWithoutId = Omit<MyUser,'id'>

//Record is for creating a dictionary
const mapById = (users: MyUser[]): Record<MyUser['id'],UserWithoutId> => {
  
  return users.reduce((a, rec) => {
    const{id,...other}=rec;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: '1s', name: 'Camilo', email: 'camilod@gmail.com' },
    { id: '2c', name: 'Carlos', email: 'carlos@gmail.com' },
  ])
);

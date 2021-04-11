import { UserCredentialsDBAccess } from '../src/Auth/UserCredsDbAccess';
import { UsersDBAccess } from '../src/User/UsersDbAccess';

class Dbtest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public userDbAccess: UsersDBAccess = new UsersDBAccess();
}

new Dbtest().dbAccess.putUserCredential({
  username: 'user1',
  password: 'password1',
  accessRights: [0, 1, 2, 3],
});

// new Dbtest().userDbAccess.putUser({
//     age: 30,
//     email: 'some@email.com',
//     id: 'asd23234',
//     name: 'John Abc',
//     workingPosition: 3
// });

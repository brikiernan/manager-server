import { UserCredentialsDBAccess } from '../src/Auth/UserCredsDbAccess';
import { UsersDBAccess } from '../src/User/UsersDbAccess';

class Dbtest {
  public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
  public userDbAccess: UsersDBAccess = new UsersDBAccess();
}

// new Dbtest().dbAccess.putUserCredential({
//   username: 'user1',
//   password: 'password1',
//   accessRights: [1, 2, 3],
// });

new Dbtest().userDbAccess.putUser({
  id: 'asdsdasdas',
  name: 'Brian',
  email: 'test@test.com',
  age: 44,
  workingPosition: 3,
});

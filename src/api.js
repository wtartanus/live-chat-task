export const signIn = (user, password) => {
  return new Promise((resolve, reject) => {
    setTimeout( function() {
      if (user === 'test@test.pl' && password === 'Password1') {
        resolve({ status: 200 });
      }
      reject({ status: 403 });
    }, 500) 
  });
}

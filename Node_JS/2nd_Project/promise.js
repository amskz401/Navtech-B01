let login = false;

// server call (user, pass);

// let newLogin = async () => {
//   setTimeout(() => {
//     login = true;
//     console.log(login);
//   }, 0);
// };

// let n = async () => {
//   login = await newLogin();
// };

// n();

let newLogin = new Promise((res, rej) => {
  setTimeout(() => {
    login = false;
    rej(login);
  }, 0);
});

newLogin
  .then((login) => {
    console.log(login);
  })
  .catch((err) => {
    console.log(err);
  });

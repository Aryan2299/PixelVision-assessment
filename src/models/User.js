import bcrypt from "bcryptjs";

function User(name, email, password) {
  return new Promise(function (resolve, reject) {
    bcrypt.hash(password, 10).then((encryptedPassword) =>
      resolve({
        name,
        email,
        password: encryptedPassword,
      })
    );
  });
}

export { User };

const user = '{ "name":"Tom"';
let userParsingResult;

const parseUser = (user) => {
  try {
    userParsingResult = JSON.parse(user);
/*     console.log("User data: ", user);
    userParsingResult = "success"; */
  } catch (e) {
    userParsingResult = null;
  } finally {
    console.log(userParsingResult);
  }
};
parseUser(user);

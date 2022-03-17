/* const user = '{ "name":"Tom"'; */
let userParsingResult;

export const parseUser = (user) => {
  try {
    userParsingResult = JSON.parse(user);
    /*     console.log("User data: ", user);
    userParsingResult = "success"; */
  } catch (e) {
    userParsingResult = null;
  } finally {
    return userParsingResult;
  }
};
/* parseUser(user); */

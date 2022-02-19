/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = (userId) => {
  const p = new Promise((resolved, rejected) => {
    if (userId === "broken") {
      setTimeout(() => {
        rejected(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolved({
          name: "John",
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return p;
};

requestUserData("user777")
.then((data) => console.log(data))
.catch(error => console.log(error));

requestUserData("broken")
.then((data) => console.log(data))
.catch(error => console.log(error));;

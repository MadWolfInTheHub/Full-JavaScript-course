const fetchUserData = async (userId) => {
  return fetch(`https://api.github.com/users/${userId}`).then((response) =>
    response.json()
  );
};

export const getUsersBlogs = (usersArr) => {
  usersArr.forEach((element) => {
    fetchUserData(element.blog);
  });
};

getUsersBlogs(["facebook", "google", "gaearon"])/* .then((linkList) =>
  console.log(linkList)
); */
console.log(fetchUserData("facebook"));

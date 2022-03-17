const fetchUserData = async (userId) => {
  return await fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => data.blog);
};

export const getUsersBlogs = (usersArr) => {
  return Promise.all(
    usersArr.map((el) => {
      fetchUserData(el)
    })
  );
};
/* console.log(fetchUserData("facebook"));

console.log(getUsersBlogs(["facebook", "google", "gaearon"])).then((linkList) =>
  console.log(linkList)
); */

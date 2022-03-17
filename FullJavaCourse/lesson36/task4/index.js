const fetchUserData = async (userId) => {
  return await fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => data.blog);
};

export const getUsersBlogs = (usersArr) => {
  const res = []
  usersArr.forEach((el) => {
    res.push(fetchUserData(el));
  });
  return Promise.all(res);
};
/* getUsersBlogs(["facebook", "google", "gaearon"]).then((linkList) => console.log(linkList)); */
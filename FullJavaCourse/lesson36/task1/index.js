export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      /* console.log(null); */
      return null;
    }

    const userData = await response.json();
    /* console.log(userData); */
    return userData;
  } catch (err) {
    /* console.log(err) */;
    throw new Error("Failed to get uaser data");
  }
};

/* fetchUser("facebook")
.then((userData) => console.log(userData))
.catch((err) => err.message); */

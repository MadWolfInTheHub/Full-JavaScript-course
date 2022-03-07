const userAvatarEl = document.querySelector(".user__avatar");
const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");

const dufaultAvatar = "https://avatars3.githubusercontent.com/u10001";

userAvatarEl.src = dufaultAvatar;

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
  /* .then(result => console.log(result)); */
};

const renderUserData = (userData) => {
  console.log(userData);
  const {avatar_url, name, location} = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : '';
};

const showUserElem = document.querySelector(".name-form__btn");
const userNameINputEl = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameINputEl.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserElem.addEventListener("click", onSearchUser);

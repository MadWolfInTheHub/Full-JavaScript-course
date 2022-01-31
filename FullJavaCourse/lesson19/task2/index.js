const getOwnProps = (obj) => {
    let ownProps = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') ownProps.push(prop);
  }
  return ownProps;
};

console.log(getOwnProps(vehicle));
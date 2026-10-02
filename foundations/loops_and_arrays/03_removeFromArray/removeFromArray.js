const removeFromArray = function (array, ...args) {
  return array.filter((item) => {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === item) {
        return false;
      }
    }
    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;

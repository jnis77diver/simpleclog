module.exports = function () {
  var outputs = [];
  for (var i = 0; i < arguments.length; i++) {
    outputs.push(arguments[i]);
  };
  console.log(outputs.join(' '));
};

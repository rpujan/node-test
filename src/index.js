var _ = require("lodash");

//https://mockapi.io
//
function square(n) { return n * n };

console.log(_.map([4,8], square));

fetch('https://644f8c73b61a9f0c4d2534c0.mockapi.io/users/1/tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  console.log(tasks);
}).catch(error => {
  // handle error
})

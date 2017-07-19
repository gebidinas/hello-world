
var users = [ 
   {name: 'John',
    born: 1986
  }
];

var allNewUsers = [];

function newUser(name, born) {
  this.name = name;
  this.age = born;
}

var Gedas = newUser(Gedas, 1986);
allNewUsers.push(Gedas);

function listAllUsers() {
    console.log(users);
    console.log(allNewUsers);
}

module.exports.listAllUsers = listAllUsers;
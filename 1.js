const person = {id : "45"};
const manager = Object.create(person);
manager.ownLevel = 1
function funcOwnProperty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      {console.log(`${key} : ${obj[key]}`);}
  }
};
funcOwnProperty(manager);
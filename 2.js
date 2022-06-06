const person = {id : "45"};
function funcPropertyIn(str, obj) {
  return(obj.hasOwnProperty(str))
};
a = funcPropertyIn("id", person);
console.log(a)
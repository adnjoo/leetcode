//boxlines
function f(x, y, z) {
    return (x + 1) * (y + 1) * z + (x + 1) * y * (z + 1) + x * (y + 1) * (z + 1);
}

//isPalindrome
const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
    ? true
    : false;

console.log(isPalindrome("Abba"));

//who likes it?
function likes(names) {
  let name = "no one";
  let append = " likes this";
  let append2 = " like this";
  if (names.length == 0) {
    return name + append;
  } else if (names.length == 1) {
    return names[0] + append;
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + append2;
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + append2;
  } else if (names.length > 3) {
    console.log('test')
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + ' others' + append2;
  }
}


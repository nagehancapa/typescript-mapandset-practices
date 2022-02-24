// tsc -lib "ES2016","DOM" maptype.ts

let studentScores = new Map([
  ["john", 90],
  ["bob", 80],
  ["ahmet", 90],
]);

console.log(studentScores.get("john"));
studentScores.set("nagehan", 100);
console.log(studentScores.size);
studentScores.delete("nagehan");
console.log(studentScores.has("nagehan"));
// studentScores.clear();
console.log(studentScores.has("john"));
console.log(studentScores.keys());

for (let key of Array.from(studentScores.keys())) {
  console.log(key);
  console.log(studentScores.get(key));
}

console.log(studentScores.values());
console.log(studentScores.entries());

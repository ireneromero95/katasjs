const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (i = 0; i <= 5; i++){
  food = foodSchedule[i]
  if (food.isVegan == false){
    food.name = fruits.shift();
    food.isVegan = true;
  }
}

console.log(foodSchedule);
console.log(fruits);
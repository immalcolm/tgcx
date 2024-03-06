1. Include **axios** in the `index.html`

2. Read in the JSON data from the following URL:  [https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json](https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json) 


3. Display the user's name, mobile number, permanent address and current address, like this
```
<ul>
  <li>Name: user name</li>  
  <li>Mobile Number: 999</li>
  <li>Current Address: Somewhere Street</li>
  <li>Permanent Address: Nowhere Street</li>
</ul>
```

HINT: Remember that you can access the key of an object with the square brackets syntax if *the key is not a valid variable name*. For example:
```
const food = {
  name: "Chicken Rice",
  "calories amount": 300

}

console.log(food.name);  // -> can use dot to access since `name` is a valid variable name
console.log(food["calories amount"]); // -> must use [ ] to access since `calories amount` contains a space so it is not a valid variable name
```

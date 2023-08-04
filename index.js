//Froyo Flavor

//survey

//create an obj with jakes info named customer

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
console.log(customer);

//update the object to fix the typos with bracket notation
// email to "Jak3Smith1992@email.com"
// phone to 3195551234
// zipCode to "63132"
// favoriteFlavors to "coffee", "strawberry", and "matcha"
customer['email']  = "Jak3Smith1992@email.com";

customer["phone"] = 3195551234;

customer["zipCode"] = "63132";

customer["favoriteFlavors"] = ["coffee" , "strawberry", "matcha"];

console.log(customer);

//delete the two keys that the team does not want
//zipCode
// favoriteStore
delete customer["zipCode"];
delete customer["favoriteStore"];
console.log(customer);

//add aditional values using dot notation
// toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
// futureFlavors: "mango"
// todaysPurchaseCost: 5.32

customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];

customer.futureFlavors = "mango";

customer.todaysPurchaseCost = 5.32


//print an array that has the keys in your survey
console.log(Object.keys(customer));


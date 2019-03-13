// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!
var nameArray = [];
// push requirements
nameArray.push("Ronald", "Nagata");
for (count = 1; count <= 10; count++){
    if (genericNumberArray[count-1] !== count)
    {
        genericNumberArray.push(count);
    }
}
// pop requirements
var popResult = colors.pop();
// reverse requirements
scrambledWords.reverse();
phoneNumber.reverse();
// shift requirements
var nextOrder = orderQueue.shift();
// sort requirements
mixedNums.sort();
mixedWords.sort();
// splice requirements, removing
var notFruit = fruitCollection.splice(1, 3);
gemBox.splice(5,2);
// ruby 0, daimond 1, daimond 2, emerald 3, moonstone 4, sapphire 5,
// order changes after the first splice, consider new indexes. Second
// arg is amount of elements to remove, not ending index.
gemBox.splice(6,4);
// splice requirements, inserting elements
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);
brownOnly.splice(1, 5, "brown", "brown", "brown"); 
// unshift requirements
var orderedValuesNewLength = orderedValues.unshift(1,2,3);
// concat requirements
var randomThingsArray = genericNumberArray.concat(colors);
var customOrders = [{ takeOut: "Okonomiyaki"}, {takeOut: "Wakame Udon"}];
var updatedOrders = orderQueue.concat(customOrders);
// join requirements
var sentence = scrambledWords.join(" ");
var myFruits = fruitCollection.join(" + ");
// slice requirements
// zero based index to begin, zero based index before which to stop extracting
var favoriteFriends = friends.slice(1, 3);
var owesMoney = friends.slice(3, 6);
// toString requirements
var monthNameString = monthNames.join();
// indexOf requirements
var favoriteColor = colors.indexOf("Red");
var favoriteEvenNumber = mixedNums.indexOf(76);
// lastIndexOf requirements
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);

function printFirstNames(friends) {
    for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
        var friend = friends_1[_i];
        console.log(friend.firstName);
    }
}
printFirstNames([
    { firstName: "Ogaga" },
    { firstName: "James" },
    { firstName: "Peter" }
]);

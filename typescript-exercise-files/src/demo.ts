interface Friends {
    firstName: string
}

function printFirstNames(friends: Friends[]) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}

printFirstNames([
    {firstName: "Ogaga"},
    {firstName: "James"},
    {firstName: "Peter"}
]);
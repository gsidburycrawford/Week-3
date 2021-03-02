var superHeroes = [
    ["Batman", "Bruce Wayne"],
    ["Spider-Man", "Peter Parker"],
    ["The Flash", "Barry Allen"]
]

var secretIdentity;

secretIdentity = superHeroes.map(
    function(revealArray){
        return revealArray.join(" is ")
    }
);

console.log(secretIdentity.join("\n"));



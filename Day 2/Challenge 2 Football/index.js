// Find a player with the name 'Mike'
// Get an array of all players with position 'RB'
// Get an array of all the players lastNames
// Get an array of the full names of all the running backs with more than 5 touchdowns
// Get the number of touchdowns scored by Running backs


let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

var runningBacks = players.filter(
    function(player) {
        return player.position == 'QB';
});

var lastNames = players.map(
    function(player){
        return player.lastName;
});


var runningBacks_5TD = players.filter(
    function(player){
        if (player.position=='RB' && player.touchdowns > 5) {
            return `${player.firstName} ${player.lastName}`;
}});

var runningBacksTdTotal = players.reduce(function(sum, player){
    if (player.position == 'RB') {
        return sum + player.touchdowns;
    }
}, 0);



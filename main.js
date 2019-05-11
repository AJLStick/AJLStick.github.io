var sticks = 0;

function stickClick(1){
    sticks = sticks + 1;
    document.getElementById("sticks").innerHTML = sticks;
};

var axes
= 0;

function buyAxe(){
    var axeCost = Math.floor(10 * Math.pow(1.1,axes));     //works out the cost of this cursor
    if(sticks >= axeCost){                                   //checks that the player can afford the cursor
        axes = axes + 1;                                   //increases number of cursors
    	sticks = sticks - axeCost;                          //removes the cookies spent
        document.getElementById('axes').innerHTML = axes;  //updates the number of cursors for the user
        document.getElementById('sticks').innerHTML = sticks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next cursor
    document.getElementById('axeCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	stickClick(axes);
	
axes
sticks

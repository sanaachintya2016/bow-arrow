class Player
{
    constructor()
    {
        this.index = null;
        this.scoreCount = null;
        this.positionX = 500;
    }
    getCount()
    {
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value" , function(data){playerCount = data.val()});
    }

    updateCount(count)
    {
        db.ref("/").update({playerCount : count});
    }

    updatePlayerInfo()
    {
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({name: this.name, positionX: this.positionX});
    }

    getPlayerInfo()
    {
        var playerInfoRef = db.ref('players');
        playerInfoRef.on("value", function(data){allPlayers = data.val();});
    }

}
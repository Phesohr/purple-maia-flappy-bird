/* global game, Phaser, playState, menuState, mainMenuState */

var button;

var menuState = {
    
    
    preload: function() { 
        game.load.spirtesheet('button', 'assets/images/retry_btn.png', 193, 71);
        
        game.pageAlignHorizontally = true;
        game.pageAlignVertically = true;
    },
    
    
    create: function() {
        button = game.add.button(game.world.centerX-95, 200, 'button', this.startGame, this, 2, 1, 0);
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);
        
        text = game.add.text(110, 125, 'Score:');
        
        text = game.add.text(225, 125, playState.score);
    },
    
    
    update: function() {
        
    },

    startGame: function() {
         game.state.start('play');
    }

};

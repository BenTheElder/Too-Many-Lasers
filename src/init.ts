declare var Phaser: any;

if ((location.protocol != "https:") && (location.hostname == "capstone.fenichelar.com")) {
  location.protocol = "https:";
}

window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    create: create,
    preload: preload,
    render: render,
    update: update
  });
};
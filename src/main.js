import './styles.css';
import { RealPlayer } from './RPG3.js';
$(function() {

var characterStartingStats;

  $("#createCharacter").click(function(event) {
    event.preventDefault();
    var inputtedStrength = parseInt($("#characterStartingStrength").val());
    var inputtedConstitution = parseInt($("#characterStartingConstitution").val());
    var inputtedAgility = parseInt($("#characterStartingAgility").val());
    var inputtedMagic = parseInt($("#characterStartingMagic").val());

     characterStartingStats = new RealPlayer(inputtedStrength, inputtedConstitution, inputtedAgility, inputtedMagic);

    $("#output").text(inputtedStrength + " Strength " + inputtedConstitution + " Constitution " + inputtedAgility + " Agility " + inputtedMagic + " Magic ");
    statCheck();

    });
    function statCheck() {
      if (characterStartingStats.basePlayer() > 10){
        alert("There is a maximum of 10 starting stat points");
        var inputtedStrength = 0;
        var inputtedConstitution = 0;
        var inputtedAgility = 0;
        var inputtedMagic = 0;

        $("#output").text(inputtedStrength + " Strength " + inputtedConstitution + " Constitution " + inputtedAgility + " Agility " + inputtedMagic + " Magic ");
      }
    }
    $("#gameStart").click(function() {
      $("#gamescreen").fadeIn();
    });
  });


// export function RPG3(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

//export
export function RealPlayer(strength, constitution, agility, magic) {

  // var strength = 0;
  // var constitution = 0;
  // var agility = 0;
  // var magic = 0;
  // var characterStartingStats;
  this.strength = strength,
  this.constitution = constitution,
  this.agility = agility,
  this.magic = magic
}
//Character Prototypes
RealPlayer.prototype.basePlayer = function() {
  return this.strength + this.constitution + this.agility + this.magic
}

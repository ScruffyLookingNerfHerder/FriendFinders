var data= [

  {
    "name": "Tyrion Lannister",
    "picturelink": "https://cdn.80.lv/80.lv/uploads/2017/07/claudio-clemente-claudioclemente-tyrion-render-3dworldmagazine-11.jpg",
    "questions": [
      "5",
      "2",
      "1",
      "4",
      "4",
      "1",
      "1",
      "1",
      "2",
      "3"
    ]
  },
  {
    "name": "Eddard Stark",
    "picturelink": "https://vignette.wikia.nocookie.net/iceandfire/images/2/23/Eddard_stark.jpeg/revision/latest?cb=20130214024122",
    "questions": [
      "1",
      "5",
      "3",
      "1",
      "2",
      "2",
      "5",
      "3",
      "1",
      "1"
    ]
  },
  {
    "name": "Daenerys Targaryen",
    "picturelink": "https://wallpapersite.com/images/wallpapers/daenerys-targaryen-2880x1800-dragon-fan-art-artwork-hd-9897.jpg",
    "questions": [
      "5",
      "1",
      "2",
      "1",
      "1",
      "1",
      "4",
      "5",
      "3",
      "5"
    ]
  },
  {
    "name": "Jon Snow",
    "picturelink": "https://img00.deviantart.net/72b2/i/2015/074/e/5/jon_snow_and_ghost_by_drkujo-d8lsnqh.jpg",
    "questions": [
      "1",
      "5",
      "3",
      "1",
      "2",
      "2",
      "5",
      "4",
      "1",
      "1"
    ]
  }

]
var scores = [];
var answers = [];
var newfriend = {  "name": "Jon Snow",
    "picturelink": "https://img00.deviantart.net/72b2/i/2015/074/e/5/jon_snow_and_ghost_by_drkujo-d8lsnqh.jpg",
    "questions": [
      1,
      5,
      3,
      1,
      2,
      2,
      5,
      4,
      1,
      1
    ]
  }


var friends=[];

    for (var k = 0; k < data.length; k++) {
      friends.push(data[k]);
      // var parsed;
      for (var n = 0; n < data[k].questions.length; n++) {
        data[k].questions[n] = parseInt(data[k].questions[n]);

      }
      scores.push(data[k].questions);
    }
console.log(scores);
  answers = newfriend.questions;
  console.log(answers);
differences= [];
for (var l = 0; l < scores.length; l++) {
  for (var p = 0; p < scores[l].length; p++) {
    var totalDifference = Math.abs(answers[p] - scores[l][p]);
  }

  differences.push(totalDifference);

}
console.log(differences);
var min = Math.min.apply(Math, differences);
console.log(min);
function findsmallest(){
for (var u = 0; u < differences.length; u ++){
  if (differences[u] == min){
    return u;
  }
}
}
console.log(friends);
var index = findsmallest();
console.log(index);
// index = parseInt(index);
console.log(friends[0].name);
console.log(friends[index].name);

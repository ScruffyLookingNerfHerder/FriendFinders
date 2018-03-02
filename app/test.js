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


  for (var k = 0; k < data.length; k++){
    scores.push([data[k].questions]);


  }
answers = []
console.log("Previous scores: " + scores);
  for (var j = 0; j < scores.length; j++){
      var totalDifference = Math.abs(newfriend.questions - scores[j]);
      console.log("Total Differences " + totalDifference);
      answers.push(totalDifference[j]);
  }

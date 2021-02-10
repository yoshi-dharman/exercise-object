const data = 
[
  {
    name: "Alpha",
    class: "Dragon",
    club: ['Bola', 'Bulutangkis']
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ['Membaca', 'Bulutangkis']
  },
]

let result = "";

data.forEach(item => {
  let club = "";
  item.club.forEach(item2 => {
    club += `${item2}, `;
  })

  result += item.name+" ada di kelas "+ item.class +", dia mengikuti club " + club.slice(0, -2) +" ";  //.slice(0,-2) untuk menghilangkan , di akhir string
});

console.log(result);

// console.log(data[0].name+" ada di kelas "+ data[0].class +", dia mengikuti club "+ data[0].club[0] +", "+ data[0].club[1] +" "
// + data[1].name +" ada di kelas "+ data[1].class +", dia mengikuti club "+ data[1].club[0] +", "+ data[1].club[1]);
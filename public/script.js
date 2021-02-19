const apiKey = 3223562564405840;

const heroInfo = document.getElementById("heroInfo");

const heroName = document.getElementById("heroName");

async function hero() {
  const idNumber = Math.floor(Math.random() * 732);

  const heroURL = `https://www.superheroapi.com/api.php/${apiKey}/${idNumber}`;

  const firstFetch = await fetch(heroURL);
  const heroJSON = await firstFetch.json();
  return heroJSON;
}

hero().then((data) => {
  console.log(data);

  let name = data.name;
  let affil = data.connections["group-affiliation"];
  let combat = data.powerstats.combat;
  let dura = data.powerstats.durability;
  let intel = data.powerstats.intelligence;
  let power = data.powerstats.power;
  let speed = data.powerstats.speed;
  let strength = data.powerstats.strength;
  let align = data.biography["alignment"];
  let fullName = data.biography["full-name"];
  let image = data.image["url"];
  // console.log(stats);

  heroInfo.innerHTML = `

<img src=${image} class="image">
<h4>Full Name: ${fullName}</h4>
<h5>Alignment: ${align.charAt(0).toUpperCase() + align.slice(1)}</h5>
<h6> Power Stats </h6>
<p>Combat: ${combat}</p>
<p>Durability: ${dura}</p>
<p>Intelligence: ${intel}</p>
<p>Power: ${power}</p>
<p>Speed: ${speed}</p>
<p>Strength: ${strength}</p>
<h6>All team affiliations</h6>
<p>${affil}</p>
`;
  heroName.innerText = `Hero Details: ${name.toUpperCase()}`;
});




// const heroInfo2 = document.getElementById("heroInfo2");

// const heroName2 = document.getElementById("heroName2");

// async function hero2() {
//   const idNumber = Math.floor(Math.random() * 732);

//   const heroURL = `https://www.superheroapi.com/api.php/${apiKey}/${idNumber}`;

//   const firstFetch = await fetch(heroURL);
//   const heroJSON = await firstFetch.json();
//   return heroJSON;
// }

// hero2().then((data) => {
//   console.log(data);

//   let name = data.name;
//   let affil = data.connections["group-affiliation"];
//   let combat = data.powerstats.combat;
//   let dura = data.powerstats.durability;
//   let intel = data.powerstats.intelligence;
//   let power = data.powerstats.power;
//   let speed = data.powerstats.speed;
//   let strength = data.powerstats.strength;
//   let align = data.biography["alignment"];
//   let fullName = data.biography["full-name"];
//   let image = data.image["url"];
//   // console.log(stats);

//   heroInfo.innerHTML = `

// <img src=${image} class="image">
// <h4>Full Name: ${fullName}</h4>
// <h5>Alignment: ${align.charAt(0).toUpperCase() + align.slice(1)}</h5>
// <h6> Power Stats </h6>
// <p>Combat: ${combat}</p>
// <p>Durability: ${dura}</p>
// <p>Intelligence: ${intel}</p>
// <p>Power: ${power}</p>
// <p>Speed: ${speed}</p>
// <p>Strength: ${strength}</p>
// <h6>All team affiliations</h6>
// <p>${affil}</p>
// `;
//   heroName.innerText = `Hero Details: ${name.toUpperCase()}`;
// });
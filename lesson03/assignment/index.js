function getCard(identity) {
  let Card = `
    <article class="flex-container">
      <div>
         <img class="headshot" id="surprise" class="Card_image" src="${identity.image}">
         <h1 class="Card_name">${identity.name}</h1>
         <h2 class="Card_jobTitle">${identity.jobTitle}</h2>
      </div>
      <div class="details">
         <p class="Card_company"><b>Company: </b>${identity.company}</p>
         <p class="Card_experience"><b>Experience: </b>${identity.experience}</p>
         <p class="Card_school"><b>School: </b>${identity.school}</p>
         <p class="Card_major"><b>Major: </b>${identity.major}</p>
         <p class="Card_email"><b>Email: </b>${identity.email}</p>
         <p><img src="img/linkedin.svg" alt="linkedin logo" class="Card_linkedInUrl"> ${identity.linkedInUrl}</p>
      </div>
    </article>
  `;
  return Card;
}

const demo = employees.map(function(getCard){
  let Card = `<article class="flex-container">
      <div>
         <img class="headshot" id="surprise" class="Card_image" src="${getCard.image}">
         <h1 class="Card_name">${getCard.name}</h1>
         <h2 class="Card_jobTitle">${getCard.jobTitle}</h2>
      </div>
      <div class="details">
         <p class="Card_company"><b>Company: </b>${getCard.company}</p>
         <p class="Card_experience"><b>Experience: </b>${getCard.experience}</p>
         <p class="Card_school"><b>School: </b>${getCard.school}</p>
         <p class="Card_major"><b>Major: </b>${getCard.major}</p>
         <p class="Card_email"><b>Email: </b>${getCard.email}</p>
         <p><img src="img/linkedin.svg" alt="linkedin logo" class="Card_linkedInUrl"> ${getCard.linkedInUrl}</p>
      </div>
    </article>
    `;
    return Card;
  });

// document.getElementById("demo").innerHTML = employees.map(getCard);
$(".test").append(demo);

// cards.map(function(identity){
//   let card = `
//     <article class="flex-container card">
//       <div>
//          <h1 class="card_name">${identity.name}</h1>
//          <h2 class="card_jobTitle">${identity.jobTitle}</h2>
//       </div>
//       <div class="details">
//          <p class="card_company">${identity.company}</p>
//          <p class="card_experience">${identity.experience}</p>
//          <p class="card_school">${identity.school}</p>
//          <p class="card_major">${identity.major}</p>
//          <p class="card_email">${identity.email}</p>
//          <p><img src="img/linkedin.svg" alt="linkedin logo" class="card_linkedInUrl"> ${identity.linkedInUrl}</p>
//       </div>
//     </article>
//   `;
//   return identity;
// });
//
// // loop through the data
// const cardsHTML = cards.map(function(identity){
//   let card = `<article class="flex-container card">
//       <div>
//          <h1 class="card_name">${identity.name}</h1>
//          <h2 class="card_jobTitle">${identity.jobTitle}</h2>
//       </div>
//       <div class="details">
//          <p class="card_company">${identity.company}</p>
//          <p class="card_experience">${identity.experience}</p>
//          <p class="card_school">${identity.school}</p>
//          <p class="card_major">${identity.major}</p>
//          <p class="card_email">${identity.email}</p>
//          <p><img src="img/linkedin.svg" alt="linkedin logo" class="card_linkedInUrl"> ${identity.linkedInUrl}</p>
//       </div>
//     </article>
//     `;
//     return identity;
//   });
//
// //use append() to add the generated code to the .card section
// $(".card").append(cardsHTML);

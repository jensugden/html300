card.map(function(identity){
  let card = `
    <article class="flex-container card">
      <div>
         // <img class="headshot" id="surprise" src="img/unsplash-headshot.jpg" alt="headshot">
         <h1 class="card_name">${identity.name}</h1>
         <h2 class="card_jobTitle">${identity.jobTitle}</h2>
      </div>
      <div class="details">
         <!-- //this is the second column of the flex box and is found in a partials file called details-->
         <p class="card_company">${identity.company}</p>
         <p class="card_experience">${identity.experience}</p>
         <p class="card_school">${identity.school}</p>
         <p class="card_major">${identity.major}</p>
         <p class="card_email">${identity.email}</p>
         <p><img src="img/linkedin.svg" alt="linkedin logo" class="card_linkedInUrl"> ${identity.linkedInUrl}</p>
      </div>
    </article>
  `;
});

let cardHTML = card.map(function(identity){
    let card = `<article class="flex-container card">
      <div>
         // <img class="headshot" id="surprise" src="img/unsplash-headshot.jpg" alt="headshot">
         <h1 class="card_name">${identity.name}</h1>
         <h2 class="card_jobTitle">${identity.jobTitle}</h2>
      </div>
      <div class="details">
         <!-- //this is the second column of the flex box and is found in a partials file called details-->
         <p class="card_company">${identity.company}</p>
         <p class="card_experience">${identity.experience}</p>
         <p class="card_school">${identity.school}</p>
         <p class="card_major">${identity.major}</p>
         <p class="card_email">${identity.email}</p>
         <p><img src="img/linkedin.svg" alt="linkedin logo" class="card_linkedInUrl"> ${identity.linkedInUrl}</p>
      </div>
    </article>`;
});

$(".card").append(cardHTML);

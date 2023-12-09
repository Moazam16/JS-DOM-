// for (var i = 0; i < 10; i++) {
let text = document.getElementById("text");
//   let h1 = document.createElement("h1");
//   let data = document.createTextNode("moazam ali moazam");
//   h1.appendChild(data);
//   text.appendChild(h1);
// }
let Name = ["Sheeraz", "Awais", "Ahmad", "Agha"];
let emailName = [
  "sherry@gmail.com",
  "s@gmail.com",
  "ahmad@gmail.com",
  "agha@gmail.com",
];
let image = [
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?t=st=1702103293~exp=1702103893~hmac=cb6ef42ae8ee6615571c10fc055c33d2d0f74d8da4972267d25f923ad1f1fea7",
  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.468846670.1699717792&semt=sph",
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1702097238~exp=1702097838~hmac=c94666403743b904a24db829932b5147d0cf54417661f0d43344761bee027124",
  "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?size=626&ext=jpg",
];
for (var i = 0; i < image.length; i++) {
  let colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col col-lg-3 mt-1 p-4");
  let imgtag = document.createElement("img");
  let card = document.createElement("div");
  let body = document.createElement("div");
  let cardTextName = document.createElement("p");
  let pData = document.createTextNode(Name[i]);
  let cardTextEmail = document.createElement("p");
  let pDataEmail = document.createTextNode(emailName[i]);

  cardTextName.setAttribute("class", "card-text");
  body.setAttribute("class", "card-body");
  card.setAttribute("class", "card");
  imgtag.src = image[i];
  imgtag.setAttribute("style", "card-img-top");
  cardTextName.appendChild(pData);
  cardTextName.style.textDecoration = "underline";
  cardTextName.style.fontWeight = "bolder";
  cardTextEmail.appendChild(pDataEmail);
  cardTextEmail.style.textDecoration = "underline";

  body.appendChild(cardTextName);
  body.appendChild(cardTextEmail);
  imgtag.style.borderRadius = "50%";
  card.appendChild(imgtag);
  card.appendChild(body);
  card.style.border = "2px solid black";
  card.style.fontSize = "20px";
  colDiv.appendChild(card);
  text.appendChild(colDiv);
}

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body " >
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>

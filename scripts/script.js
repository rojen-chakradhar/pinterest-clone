let images = [
  {name: "No AI", image: "https://images.unsplash.com/vector-1770271041566-3a8aaca9f8ae?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Roblox character profile picture", image: "https://i.pinimg.com/236x/64/11/9b/64119b15e41f962e266fdc7719d67929.jpg"},
  {name: "Gwen profile picture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqEd9PmQR5riUAiyKMRBcn4eQRkqMs1IsoQ&s"},
  {name: "Library", image: "https://images.unsplash.com/photo-1770131748972-b1a08d57efbc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Bauda", image: "https://images.unsplash.com/photo-1770337328092-04b654a8098e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Big Ben", image: "https://images.unsplash.com/photo-1770337328092-04b654a8098e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Mount Fugi", image: "https://images.unsplash.com/photo-1770337328092-04b654a8098e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Sunflower", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Snowy forest", image: "https://images.unsplash.com/photo-1770287691979-6b8ec41f5331?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Urban architecure", image: "https://images.unsplash.com/photo-1767818375225-ad1735e49f41?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Sprial stairway", image: "https://images.unsplash.com/photo-1767859281272-1557d76421db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Bauda", image: "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Flag of Nepal", image: "https://plus.unsplash.com/premium_photo-1670782711832-bf4d7638114a?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Namche Bazar", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Prayer wheel", image: "https://images.unsplash.com/photo-1526712318848-5f38e2740d44?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Patan durbar square", image: "https://images.unsplash.com/photo-1550642249-6e5605421172?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Bhaktapur", image: "https://images.unsplash.com/photo-1623492701360-fb4a1205c789?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Nyatapola temple", image: "https://images.unsplash.com/photo-1586100345684-a135906ef03c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Sindoor jatra", image: "https://images.unsplash.com/photo-1620830634203-a92da9e0aab8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Swoyambhunath stupa", image: "https://images.unsplash.com/photo-1708407298305-63bc288e3272?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Lumbini", image: "https://images.unsplash.com/photo-1611325695972-d22894e3f8d9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Lakhe", image: "https://images.unsplash.com/photo-1726802016078-5cfbf05b249d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Mahakali", image: "https://images.unsplash.com/photo-1622598661631-3a46559a4817?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Night sky", image: "https://images.unsplash.com/photo-1768676972929-88f7b61b98e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

function showImages() {
  let clutter = "";
  images.forEach(function(obj) {
    clutter += `
      <picture class="${obj.name}">
        <img src="${obj.image}" alt="${obj.name}" class="image">
        <p class="caption">${obj.name}</p>
      </picture>`;
  })
  document.querySelector("main").innerHTML = clutter;
}

function searchFunc() {
  let input = document.querySelector("input");
  input.addEventListener("focus", () => {
    document.querySelector(".overlay").style.display = "block";
  })
  input.addEventListener("blur", () => {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".suggestions").style.display = "none";
  })
  input.addEventListener("input", () => {
    const filteredArray = images.filter(obj => obj.name.toLowerCase().startsWith(input.value));
    let clutter = "";
    filteredArray.forEach(function(obj) {
      clutter += `
        <div class="suggestion">
          <i class="ri-search-line"></i>
          <p class="suggestion-txt">${obj.name}</p>
        </div>`;
    })
    document.querySelector(".suggestions").style.display = "flex";
    document.querySelector(".suggestions").innerHTML = clutter;
  })
}

searchFunc();
showImages();
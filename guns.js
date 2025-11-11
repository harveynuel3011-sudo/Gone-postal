const guns = [
  {
    name: "FN FAL",
    price: "$2 400",
    img: "https://i.imgur.com/6p6kJvl.jpg",
    specs: ["Caliber: 7.62×51 mm NATO", "Weight: 4.3 kg", "Mag: 20-rnd", "RoF: 650 rpm"]
  },
  {
    name: "HK416",
    price: "$2 950",
    img: "https://i.imgur.com/Hk416.jpg",
    specs: ["Caliber: 5.56×45 mm NATO", "Weight: 3.5 kg", "Mag: 30-rnd", "RoF: 850 rpm"]
  },
  {
    name: "USAS-12",
    price: "$3 100",
    img: "https://i.imgur.com/USAS12.jpg",
    specs: ["Caliber: 12-gauge", "Weight: 4.7 kg", "Mag: 10-rnd drum", "RoF: 360 rpm"]
  },
  {
    name: "M16A1",
    price: "$1 950",
    img: "https://i.imgur.com/M16A1.jpg",
    specs: ["Caliber: 5.56×45 mm NATO", "Weight: 3.4 kg", "Mag: 20-rnd", "RoF: 700 rpm"]
  },
  {
    name: "MP5K",
    price: "$1 750",
    img: "https://i.imgur.com/MP5K.jpg",
    specs: ["Caliber: 9×19 mm", "Weight: 2.0 kg", "Mag: 30-rnd", "RoF: 900 rpm"]
  }
];

guns.forEach(g => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${g.img}" alt="${g.name}">
    <div class="info">
      <h2>${g.name}</h2>
      <div class="price">${g.price}</div>
      <ul class="specs">
        ${g.specs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>`;
  document.getElementById('gun-grid').appendChild(card);
});

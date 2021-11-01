const apartmentList = 
[
    {
        "img": "img/tokyo_shinjuku.jpg",
        "alt": "Shibuya - Tokyo",
        "label": "東京",
        "rate": 4.5
    },
    {
        "img": "img/nara.jpg",
        "alt": "Nara",
        "label": "奈良",
        "rate": 4.7
    },
    {
        "img": "img/hiroshima2.jpg",
        "alt": "Hiroshima",
        "label": "広島",
        "rate": 4.6
    },
    {
        "img": "img/kamakura.jpg",
        "alt": "Kamakura",
        "label": "鎌倉",
        "rate": 4.8
    },
    {
        "img": "img/kyoto.jpg",
        "alt": "Kyoto",
        "label": "京都",
        "rate": 4.6
    },
    {
        "img": "img/osaka.jpg",
        "alt": "Osaka",
        "label": "大阪",
        "rate": 4.7
    }
]


let index = 3
let stringAPT = '';
apartmentList.forEach(element =>{
    stringAPT +=
    `<div class="apartment">
        <img src="${element.img}" alt="${element.alt}">
        <span class="apt-label">${element.label}</span>
    </div>
    `
})
    

//console.log(stringAPT);

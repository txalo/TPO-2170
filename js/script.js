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
    

console.log(stringAPT);



/*                    <div class="apartment">
                        <img src="img/tokyo_shinjuku.jpg" alt="Shibuya - Tokyo">
                        <span class="apt-label">東京</span>
                    </div>
                    <div class="apartment">
                        <img src="img/nara.jpg" alt="Nara">
                        <span class="apt-label">奈良</span>
                    </div>
                    <div class="apartment">
                        <img src="img/hiroshima2.jpg" alt="Hiroshima">
                        <span class="apt-label">広島</span>
                    </div>
                    <div class="apartment">
                        <img src="img/kamakura.jpg" alt="Kamakura">
                        <span class="apt-label">鎌倉</span>
                    </div>
                    <div class="apartment">
                        <img src="img/kyoto.jpg" alt="Kyoto">
                        <span class="apt-label">京都</span>
                    </div>
                    <div class="apartment">
                        <img src="img/osaka.jpg" alt="Osaka">
                        <span class="apt-label">大阪</span>
                    </div>*/
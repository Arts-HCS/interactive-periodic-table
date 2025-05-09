const elementsArray = [
    {
        elementId: 1,
        an: 5,
        symbol: "B",
        name: "Boro",
        am: 10.81,
        electrons: [2, 3],
        en: 2.04
    },
    {
        elementId: 2,
        an: 6,
        symbol: "C",
        name: "Carbono",
        am: 12.01,
        electrons: [2, 4],
        en: 2.55
    },
    {
        elementId: 3,
        an: 7,
        symbol: "N",
        name: "Nitrógeno",
        am: 14.01,
        electrons: [2, 5],
        en: 3.04
    },
    {
        elementId: 4,
        an: 8,
        symbol: "O",
        name: "Oxígeno",
        am: 16.00,
        electrons: [2, 6],
        en: 3.44
    },
    {
        elementId: 5,
        an: 13,
        symbol: "Al",
        name: "Aluminio",
        am: 26.98,
        electrons: [2, 8, 3],
        en: 1.61
    },
    {
        elementId: 6,
        an: 14,
        symbol: "Si",
        name: "Silicio",
        am: 28.09,
        electrons: [2, 8, 4],
        en: 1.90
    },
    {
        elementId: 7,
        an: 15,
        symbol: "P",
        name: "Fósforo",
        am: 30.97,
        electrons: [2, 8, 5],
        en: 2.19
    },
    {
        elementId: 8,
        an: 16,
        symbol: "S",
        name: "Azufre",
        am: 32.07,
        electrons: [2, 8, 6],
        en: 2.58
    },
    {
        elementId: 9,
        an: 31,
        symbol: "Ga",
        name: "Galio",
        am: 69.72,
        electrons: [2, 8, 18, 3],
        en: 1.81
    },
    {
        elementId: 10,
        an: 32,
        symbol: "Ge",
        name: "Germanio",
        am: 72.63,
        electrons: [2, 8, 18, 4],
        en: 2.01
    },
    {
        elementId: 11,
        an: 33,
        symbol: "As",
        name: "Arsénico",
        am: 74.92,
        electrons: [2, 8, 18, 5],
        en: 2.18
    },
    {
        elementId: 12,
        an: 34,
        symbol: "Se",
        name: "Selenio",
        am: 78.96,
        electrons: [2, 8, 18, 6],
        en: 2.55
    },
    {
        elementId: 13,
        an: 49,
        symbol: "In",
        name: "Indio",
        am: 114.82,
        electrons: [2, 8, 18, 18, 3],
        en: 1.78
    },
    {
        elementId: 14,
        an: 50,
        symbol: "Sn",
        name: "Estaño",
        am: 118.71,
        electrons: [2, 8, 18, 18, 4],
        en: 1.96
    },
    {
        elementId: 15,
        an: 51,
        symbol: "Sb",
        name: "Antimonio",
        am: 121.76,
        electrons: [2, 8, 18, 18, 5],
        en: 2.05
    },
    {
        elementId: 16,
        an: 52,
        symbol: "Te",
        name: "Telurio",
        am: 127.60,
        electrons: [2, 8, 18, 18, 6],
        en: 2.10
    },
    {
        elementId: 17,
        an: 81,
        symbol: "Tl",
        name: "Talio",
        am: 204.38,
        electrons: [2, 8, 18, 32, 18, 3],
        en: 1.62
    },
    {
        elementId: 18,
        an: 82,
        symbol: "Pb",
        name: "Plomo",
        am: 207.2,
        electrons: [2, 8, 18, 32, 18, 4],
        en: 2.33
    },
    {
        elementId: 19,
        an: 83,
        symbol: "Bi",
        name: "Bismuto",
        am: 208.98,
        electrons: [2, 8, 18, 32, 18, 5],
        en: 2.02
    },
    {
        elementId: 20,
        an: 84,
        symbol: "Po",
        name: "Polonio",
        am: 209.0,
        electrons: [2, 8, 18, 32, 18, 6],
        en: 2.00
    }
];

let elementCard = document.getElementById('elementCard');


elementsArray.forEach((element) =>{
    let elementObject = document.getElementById(`${element.elementId}`);
    
    let electronsList = ""
    for (num of element.electrons){
        electronsList += `<li>${num}</li>`
    }

    if (window.innerWidth > 900) {
        elementObject.addEventListener('mouseenter', ()=>{
            elementCard.classList.add('activated');
            elementCard.innerHTML = `
                                    <p class="atomic-number">${element.an}</p>
                                    <h4 class="symbol">${element.symbol}</h4>
                                    <p class="element-name">${element.name}</p>
                                    <p class="element-mass">${element.am}</p>
                                    <p class="element-en">${element.en}</p>
                                    <ul class="element-electrons">
                                        ${electronsList}
                                    </ul>
                                    `
        });
    } else {
        elementObject.addEventListener('click', ()=>{
            elementCard.classList.add('activated');
            elementCard.innerHTML = `
                                    <p class="atomic-number">${element.an}</p>
                                    <h4 class="symbol">${element.symbol}</h4>
                                    <p class="element-name">${element.name}</p>
                                    <p class="element-mass">${element.am}</p>
                                    <p class="element-en">${element.en}</p>
                                    <ul class="element-electrons">
                                        ${electronsList}
                                    </ul>
                                    `
        });
    }


    elementObject.innerHTML = `
                                <p class="atomic-number">${element.an}</p>
                                <h4 class="symbol">${element.symbol}</h4>
                                <p class="element-name">${element.name}</p>
                                <p class="element-mass">${element.am}</p>
                                `
})

let options = document.getElementsByClassName('option');

for (let option of options){
    option.addEventListener('click', ()=>{
        option.classList.toggle('selected');
        let groupNumber = option.innerHTML.slice(-2);
        let groupElements = document.getElementsByClassName(`g${groupNumber}`);
        for (let groupElement of groupElements){
            groupElement.classList.toggle('selected');
        }
        })
    }


let textarea = document.getElementById('textarea');

textarea.value = localStorage.getItem('text') || ""

textarea.addEventListener('input', ()=>{
    let userText = textarea.value;
    localStorage.setItem('text', userText);
})
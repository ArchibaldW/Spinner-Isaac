document.documentElement.style.setProperty("--deg",3600 + parseInt(Math.random()*1800)+ "deg");

listeRoue=[
    ["Libra",5,1],
    ["Bombs are Keys",2,0],
    ["Soy Milk",2,-1],
    ["Magic Mushroom",3,1],
    ["1 pièce",4,0],
    ["Trinket au choix",5,1],
    ["Health down",3,-1],
    ["MissingNo",2,0],
    ["Pillule positive au choix",5,1],
    ["Cursed Eye",2,-1],
    ["Tears up",5,1],
    ["Reset run",1,-2],
    ["La TIQUE",5,0],
    ["Goat Head",5,1],
    ["Pillule négative au pif",5,-1],
    ["QUEDALE",10,0],
    ["Tp boss + skip étage",5,-1],
    ["Champions Belt",5,1],
    ["Coeur gris",4,1],
    ["Perdre trinket + cartes",5,-1],
    ["Health up",5,1],
    ["Perdre un objet au choix",3,-1],
    ["10 pièces",3,1],
    ["Curse of the tower",4,-1],
    ["Pillule au pif",2,0]
]

var spinner = document.getElementById("spinner")
var acc=0;
var i=1;

for (element of listeRoue){
    
    var slice = document.createElement("div");
    slice.classList.add("slice");
    
    switch (element[2]){
        case 1:
            sliceClass="positif";
            break;
        case 0:
            sliceClass="neutre";
            break;
        case -1:
            sliceClass="negatif";
            break;
        case -2:
            sliceClass="MOOOOOORT";
            break;
    }
    slice.classList.add(sliceClass);
    slice.style.setProperty("--part", (90 - 3.6 * element[1]) + "deg");
    slice.style.transform = "rotate("+acc+"deg)";
    
    var label = document.createElement("div");
    label.classList.add("label");
    label.innerHTML = element[0];
    
    slice.append(label);
    spinner.append(slice);
    
    acc += 3.6*element[1];
    i += 1;
}
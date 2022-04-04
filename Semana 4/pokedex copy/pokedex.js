const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./assets/pokesad.jpeg");
        }
        else{
            return res.json();
        }
        //console.log(res);
    }).then((data) => {
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let hp = data.stats[0].base_stat;
        let atk = data.stats[1].base_stat;
        let def = data.stats[2].base_stat;
        let satk = data.stats[3].base_stat;
        let sdef = data.stats[4].base_stat;
        let spd = data.stats[5].base_stat;
        let type = data.types[0].type.name;
        let ab1 = data.abilities[0].ability.name;
        let ab2 = data.abilities[1].ability.name;
        //console.log(type);
        pokeImage(pokeImg);
        pokeHp(hp);
        pokeAtk(atk);
        pokeDef(def);
        pokeSatk(satk);
        pokeSdef(sdef);
        pokeSpd(spd);
        pokeType(type);
        pokeab1(ab1);
        pokeab2(ab2);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;   
}
const pokeHp = (val) => {
    php = document.getElementById("hp").innerHTML = "HP: "+val;
}
const pokeAtk = (val1) => {
    php = document.getElementById("atk").innerHTML = "Atk: "+val1;
}
const pokeDef = (val2) => {
    php = document.getElementById("def").innerHTML = "Def: "+val2;
}
const pokeSatk = (val3) => {
    php = document.getElementById("satk").innerHTML = "S.Atk: "+val3;
}
const pokeSdef = (val4) => {
    php = document.getElementById("sdef").innerHTML = "S.Def: "+val4;
}
const pokeSpd = (val5) => {
    php = document.getElementById("spd").innerHTML = "Spd: "+val5;
}
const pokeType = (val6) => {
    php = document.getElementById("type").innerHTML = "Type: "+val6;
}
const pokeab1 = (val7) => {
    php = document.getElementById("ab1").innerHTML = "Ability 1: "+val7;
}
const pokeab2 = (val8) => {
    php = document.getElementById("ab2").innerHTML = "Ability 2: "+val8;
}
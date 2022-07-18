//STEPS:
//1.Creare l’array di oggetti con le informazioni fornite.
//2.Stampare su console le informazioni di nome, ruolo e la stringa della foto
//3.Stampare le stesse informazioni su DOM sottoforma di stringhe


//Bonus1: Trasformare la stringa foto in una immagine effettiva
//Bonus2: Organizzare i singoli membri in card/schede

//1.Creo Array "teamComponents" composto al suo interno da Oggetti:

const teamComponents = [

    {'Nome': 'Wayne Barnett',
     'Ruolo': 'Founder & CEO',
     'Foto' : 'wayne-barnett-founder-ceo.jpg'
    },

    {'Nome': 'Angela Caroll',
     'Ruolo': 'Chief Editor',
     'Foto' : 'angela-caroll-chief-editor.jpg'
    },

    {'Nome': 'Walter Gordon',
     'Ruolo': 'Office Manager',
     'Foto' : 'walter-gordon-office-manager.jpg'
    },

    {'Nome': 'Angela Lopez',
     'Ruolo': 'Social Media Manager',
     'Foto' : 'angela-lopez-social-media-manager.jpg'
    },

    {'Nome': 'Scott Estrada',
     'Ruolo': 'Developer',
     'Foto' : 'scott-estrada-developer.jpg'
    },

    {'Nome': 'Barbara Ramos',
     'Ruolo': 'Graphic Designer',
     'Foto' : 'barbara-ramos-graphic-designer.jpg',
    }

];

let object = {'Nome': 'Barbara Ramos',
'Ruolo': 'Graphic Designer',
'Foto' : 'barbara-ramos-graphic-designer.jpg'
}

for(let chiave in object) {
    console.log(chiave);
    console.log(object[chiave]);
}

//2.Stampare su console le informazioni di nome, ruolo e la stringa della foto:

console.log (teamComponents) ;

//3.Stampare le stesse informazioni su DOM sottoforma di stringhe:


for (let i = 0; i < teamComponents.length; i++) {

    console.log (teamComponents[i]);  //stampo i singoli oggetti nell' Array
    let cards_containerDOM = document.querySelector ('.cards_container');

    for ( let key in teamComponents[i]) {

        console.log(key, teamComponents[i][key])
        cards_containerDOM.innerHTML += '<div>' + key + ':' + teamComponents[i][key] + '</div>' 
    }

    cards_containerDOM.innerHTML += '<img src="img/' + teamComponents[i].Foto +  ' " />'

};



















//Funzioni/////////////////////////////////////
//function createGridCards () {

    //const currentCard = Document.createElement ('div');
    //currentCard.classList.add ('card')
    //return currentCard
//}
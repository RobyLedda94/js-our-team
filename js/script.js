

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.


// array di oggetti composto da chiave e valore (proprietà)
const team = [
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office-Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder-Ceo',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
]

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


// CONSOLE LOG DELL'ARRAY DI OGGETTI
console.log(team);

// CICLO FOR IN PER VISUALIZZARE I DATI IN CONSOLE
for (let key in team){
    // console.log(key + " " + team[key]);
    console.log(team[key]);
}

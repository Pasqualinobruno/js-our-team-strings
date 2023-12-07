/* 
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/


//Creare l’array di stringhe contenente i nomi dei membri del team.
const team_player = ["Kakà", "Inzaghi", "Leao", "Pirlo", "Maldini", "Cafù", "Dida", "Giroud", "Gattuso", "Sedoorf"];
console.log(team_player);

const row_element = document.querySelector('#team')
const row_banch = document.querySelector('#banch')


for (let i = 0; i < team_player.length; i++) {
    //creato la lista dei giocatori da inserire all'interno della card
    const player = team_player[i];
    //console.log(player);

    const card_element = generete_card(player)
    card_element.innerText = player;

    /* //il team può contenere minimo 5 giocatori */
    /* if (team_player.length >= 5) { */
    /*     //console.log('ok'); */
    /*      */
    /* } else { */
    /*     alert("La squadra non può contenere meno di 5 giocatori") */
    /* } */

    //aggiungere i giocatori in panchina al click
    card_element.addEventListener('click', function add_card_to_banch() {
    alert('Aggiunto alla panchina');
    //append in panchina 
    row_banch.append(card_element)

    card_element.classList.add("opacity")


    })
    
    //aggiungo le card alla dom
    row_element.append(card_element)

}

function generete_card(name) {

    //creato le card da appendere alla dom
    const card_element = document.createElement('div');
    card_element.className = 'card'; 
    console.log(card_element);
    return card_element

}

document.querySelector('button').addEventListener('click', function add_player_on_team(value) {
    const player_add_user = document.querySelector('input').value;
    console.log(player_add_user);

    team_player.push(player_add_user);
    console.log(team_player);
})

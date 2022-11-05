let Bomb = [];

let score = 0;

function Play() {
    //reload
    Bomb = [];
    score = 0;
    let table = document.getElementById("grid");
    table.innerHTML = '';
    document.getElementById("points").innerHTML = `il punteggio è ${score}`
    //take the option from the html
    let option = document.getElementById("selection").value;
    console.log(option);
    switch (option) {
        case "1":
            console.log("creation 10x10 table");
            createTable(100, "sq10");
            break;
        case "2":
            createTable(81, "sq9");
            break;
        case "3":
            createTable(49, "sq7")
            break;
    }
}


function createTable(n_square, style) {
    //make a node/connection with the grid
    const table = document.getElementById("grid");
    //create an array with the bomb in random position
    createArray(n_square);

    //creation square by square
    for (let i = 1; i <= n_square; i++) {
        //function that create a single square
        console.log(style);
        let instant_square = singleSquare(style, i);
        //select item
        instant_square.addEventListener("click", function () {
            console.log(this);
            if (Bomb.includes(parseInt(this.innerHTML))) {
                this.classList.toggle('bomb');
                this.innerHTML = "boom";
                alert("Hai perso!!! il tuo punteggio è: " + score);
                location.reload();
            } else {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    score++;
                    document.getElementById("points").innerHTML = `il punteggio è ${score}`
                }

            }
        })
        table.append(instant_square);
    }
}





function singleSquare(style, count) {
    const div = document.createElement('div');
    div.classList.add(style);
    div.innerHTML = count;
    return div;
}


function createArray(n) {
    for (let i = 0; i < 16; i++) {
        let randomBomb = Math.round(Math.random() * (n + 1));
        if (Bomb.includes(randomBomb)) {
            i--;
        } else {
            Bomb.push(randomBomb);
        }
    }
    console.log(Bomb);
}

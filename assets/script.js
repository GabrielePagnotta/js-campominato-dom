// -VARIABILI-
let grid = document.getElementById('main');
let x = 0;


// -FUNZIONI-
function squares() {
    let div = document.createElement('div');
    div.classList.add('quadrato');
    let num = div.innerText = x += 1

    return div;
}

function squares_1() {
    let div = document.createElement('div');
    div.classList.add('quadrato_int');
    let num = div.innerText = x += 1

    return div;
}

function squares_2() {
    let div = document.createElement('div');
    div.classList.add('quadrato_dif');
    let num = div.innerText = x += 1

    return div;
}



// -EVENTO-
btn.addEventListener('click', function () {
    let level = document.getElementById('difficulty').value;


    if (level == "facile") {

        for (let i = 0; i < 100; i++) {

            let quadrati = squares();

                quadrati.addEventListener('click', function () {
                this.classList.toggle('background');
            })


            grid.append(quadrati)
        }


    }

    else if (level == "intermedio") {


        for (let i = 0; i < 81; i++) {

            let quadrati = squares_1();

                quadrati.addEventListener('click', function () {
                this.classList.toggle('background');
            })


            grid.append(quadrati)
        }




    }


    else {
        for (let i = 0; i < 49; i++) {

            let quadrati = squares_2();

                quadrati.addEventListener('click', function () {
                this.classList.toggle('background');
            })


            grid.append(quadrati)
        }

    }

}, {once : true});




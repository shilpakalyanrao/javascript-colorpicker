  var btns = document.querySelectorAll(".btns");
    var body = document.querySelector("body");
    var p = document.querySelector("p");

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (e.target.id === 'red') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'yellow') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'orange') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'green') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'pink') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'black') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'blue') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'brown') {
                body.style.backgroundColor = e.target.id;
            }

        });
    });

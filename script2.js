// pilihan computer
function getPilihanComp() {
    const comp = Math.random();

    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'kertas';
}

// rules
function getHasil(comp, player) {
    if (player == comp) return 'SERI!';

    if (player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';

    if (player == 'gunting') return (comp == 'batu') ? 'KALAH!' : 'MENANG!';

    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
}


function putar() {
    const random = document.querySelector(".random");
    const gambar = ["batu", "gunting", "kertas"];
    let i = 0;
    const mulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - mulai > 1000) {
            clearInterval;
            return;
        }
        random.setAttribute("src", "img/" + gambar[i++] + "-kanan.png");
        if (i == gambar.length) i = 0;
    }, 100)
}

// pilihan player
let m = 1;
let k = 1;
let s = 1;
const pilihan = document.querySelectorAll(".panel1 li img");
pilihan.forEach(function (pil) {
    pil.addEventListener("click", function () {
        const comp = getPilihanComp();
        const player = pil.className;
        const hasil = getHasil(comp, player);

        const menang = document.querySelector(".menang");
        const kalah = document.querySelector(".kalah");
        const seri = document.querySelector(".seri");


        putar();



        setTimeout(function () {
            if (hasil == "MENANG!") {
                menang.innerHTML = "Menang : " + m++;
            } else if (hasil == "KALAH!") {
                kalah.innerHTML = "Kalah : " + k++;
            } else {
                seri.innerHTML = "Seri : " + s++;
            }


            const random = document.querySelector(".random");
            random.setAttribute("src", "img/" + comp + "-kanan.png");

            const info = document.querySelector(".info");
            info.innerHTML = (hasil);
        }, 1000);
    })
})
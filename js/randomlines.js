{

    { //wr1
        const d1 = [
            "No one could understand me better than you do, no one is there whom I could speak my heart out,nor I want to make any.",
            "We both know these all are temporary chapters and will leave permanent marks and lessons, will leave us in pain.",
            "They speak to you because you are the most broken one they could ever see.",
            "No one wants to stay with you forever, You are not eligible.",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * d1.length);
            document.getElementById('l1').innerHTML = d1[randomLine];
        }();
    }

    { //wr2
        const d2 = [
            " To be Published soon ",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * d2.length);
            document.getElementById('l2').innerHTML = d2[randomLine];
        }();
    }
}
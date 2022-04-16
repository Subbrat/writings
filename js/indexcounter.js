{
        const countE0 = document.getElementById('ldpg');
        updateVisitCount();

        function updateVisitCount() {
                fetch('https://api.countapi.xyz/update/subbrat/wrlandingpg/?amount=+1')
                        .then(res => res.json())
                        .then(res => {
                                countE0.innerHTML = res.value;
                        })
        }
}

{ // writingone
        const E1 = document.getElementById('wr01');
        updateVisitCount();

        function updateVisitCount() {
                fetch('https://api.countapi.xyz/get/subbrat/writingone')
                        .then(res => res.json())
                        .then(res => {
                                E1.innerHTML = res.value;
                                countE1.innerHTML = res.value;
                        })
        }
}


{ // writingtwo
        const E2 = document.getElementById('wr02');
        updateVisitCount();

        function updateVisitCount() {
                fetch('https://api.countapi.xyz/get/subbrat/writingtwo')
                        .then(res => res.json())
                        .then(res => {
                                E2.innerHTML = res.value;
                                countE2.innerHTML = res.value;
                        })
        }
}
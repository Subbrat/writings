{       // writingone
        const E2 = document.getElementById('wr1counter');
        updateVisitCount();

        function updateVisitCount() {
        fetch('https://api.countapi.xyz/get/subbrat/writingone')
        .then(res => res.json())
        .then(res => {
                E2.innerHTML = res.value + "    reads" ;
                countE2.innerHTML = res.value ;
        })
        }
}

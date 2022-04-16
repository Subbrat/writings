{
    const countE0 = document.getElementById('wr01');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/writingone/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}
{
        const countEl = document.getElementById('count');
    updateVisitCount();

    function updateVisitCount() {
      fetch('https://api.countapi.xyz/get/subbrat/teasepagecounter/')
        .then(res => res.json())
        .then(res => {
          countEl.innerHTML = res.value;
        })
}
}
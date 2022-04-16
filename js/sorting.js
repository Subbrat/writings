{
        function toggleorder() {
            var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
            list = document.getElementById("sorting");
            switching = true;
            dir = "asc";
            while (switching) {
                switching = false;
                b = list.getElementsByTagName("LI");
                for (i = 0; i < (b.length - 1); i++) {
                    shouldSwitch = false;
                    if (dir == "asc") {
                        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else if (dir == "desc") {
                        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
                if (shouldSwitch) {
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                    switchcount++;
                } else {
                    if (switchcount == 0 && dir == "asc") {
                        dir = "desc";
                        switching = true;
                    }
                }
            }
    }
}
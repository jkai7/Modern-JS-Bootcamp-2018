const takeWordAway = document.querySelectorAll("p");
    
    takeWordAway.forEach(function (p) {
            if (p.textContent.toLowerCase().includes("the")) {
                p.remove()
            }
        });




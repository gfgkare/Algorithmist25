document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("title").style.display = "block";
        document.body.style.opacity = 1;
    }, 1000);

    const algorithmsContainer = document.getElementById("algorithms-container");


    algorithms.forEach(function(algorithm, index) {
        setTimeout(function() {
            const algorithmDiv = document.createElement("div");
            algorithmDiv.className = "algorithm";
            algorithmDiv.textContent = algorithm;
            algorithmsContainer.appendChild(algorithmDiv);
            algorithmDiv.style.opacity = 1;
        }, (index + 1) * 1000); // Delay each algorithm by 1 second
    });
});

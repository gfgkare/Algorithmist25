document.addEventListener("DOMContentLoaded", function () {
    const algorithmsContainer = document.getElementById("algorithms-container");

    
    algorithmsContainer.classList.add("disable-hover-transition");

    
    setTimeout(function () {
        document.getElementById("intro-container").style.display = "none";
       
        algorithmsContainer.classList.remove("disable-hover-transition");
    }, 2000);

   
    setTimeout(function () {
        document.getElementById("title").style.display = "block";
        document.body.style.opacity = 1;
    }, 2000);

    algorithms.forEach(function (algorithm, index) {
        
        const algorithmDiv = document.createElement("div");
        algorithmDiv.className = "algorithm";
        algorithmDiv.textContent = algorithm;

        
        algorithmDiv.classList.add("fade-in");

     
        algorithmsContainer.appendChild(algorithmDiv);

       
        setTimeout(function () {
            algorithmDiv.style.opacity = 1;
        }, (index + 1) * 1000); 
    });
});

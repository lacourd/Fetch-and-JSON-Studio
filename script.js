// TODO: add code here
window.addEventListener("load", function(){
    let json=[];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const insertion = document.getElementById("container")
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace
            });
            insertion.innerHTML += `
            <div>
            <h4>Astronaut count: ${json.length}
            `
            for (let i = 0 ; i < json.length; i++) {
                if (json[i].active === true){
                insertion.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li class="active">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(", ")}</li>
                            </ul>
                    </div>
                <img class="avatar" src="${json[i].picture}">
                </div>
                `
                } else {
                    insertion.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                </ul>
                        </div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>
                    `   
                }
            };

        });

    });



});
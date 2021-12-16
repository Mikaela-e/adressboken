window.addEventListener("load", renderTeams)
// fetch för att hämta alla anställda
fetch('ateam.json')
.then(response => response.json())
.then(data =>{
    console.log(data[0].name)
    
    
    renderTeams(data)
    
});


// skapa listan med de anställda..
function renderTeams(ateams){
    let theAteams = [""];
    let ateamList = document.createElement("ul");
    ateamList.id = "ateam";
    
    for (let i =0; i <theAteams.length; i++){
        let Listan = document.createElement("li")
        let thestaff = document.createElement("p")
        thestaff.innerText = "Anställdas Title, namn och emailadress:"
        thestaff.style.fontSize = "25px";
        Listan.insertAdjacentHTML("beforeend", "<li>" +"Title:"+ " " + ateams[3].title +"<br>"+"Namn:"+ " " + ateams[3].name +"<br>"+"Email:"+ " " + ateams[3].email + "</li>" + "<br>"+ "<li>" +"Title:"+ " " + ateams[1].title +"<br>"+"Namn:"+ " " + ateams[1].name +"<br>"+"Email:"+ " " + ateams[1].email + "</li>"+"<br>"+ "<li>" +"Title:"+ " " + ateams[2].title +"<br>"+"Namn:"+ " " + ateams[2].name +"<br>"+"Email:"+ " " + ateams[2].email + "</li>"+"<br>"+ "<li>" +"Title:"+ " " + ateams[0].title +"<br>"+"Namn:"+ " " + ateams[0].name +"<br>"+"Email:"+ " " + ateams[0].email + "</li>")
        ateamList.append(thestaff ,Listan)
    }

    document.body.append(ateamList);

};
renderTeams();
   
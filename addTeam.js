let localTeam = JSON.parse(localStorage.getItem("teamInfo"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inp_val = $("#inp1").val();
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }

    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }

   localTeam.push(addData);
   localStorage.setItem("teamInfo", JSON.stringify(localTeam)); 

   location.href = `./teamsInfo.html?name=${addData.sName}`;
})

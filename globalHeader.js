function loadHeader() {  
 /* if (localStorage.getItem("loggedin") != true) {
    window.location.href = "/index2.html";
  } */
  setTimeout(function(){    document.getElementById("enclosure").innerHTML = '<header style="width: 100%;">        <a class="homelink" href="/league"> <img src="/ufa-alt.png"            style="aspect-ratio: 1 / 1; width: auto; height: 40px; text-align: center; margin: auto; vertical-align: middle; margin-top: -10px; background: none;"></a>        <div class="dropdown">          <a href="index.html" class="dropbtn">            <b>Stats</b></a>          <div class="dropdown-content">            <a href="/league/stats/qb">QB</a>            <a href="/league/stats/wr">WR</a>            <a href="/league/stats/db">DB</a>            <a href="/league/stats/de">DE</a>          </div>        </div>        <a href="/league/standings">          <b>Standings</b>        </a>      <a href="/league/rulebook" style="margin-left:15px;">          <b>Rulebook</b>        </a>       <div class="dropdown" style="float: right; margin-right: 30px;">          <a href="index.html" class="dropbtn">          <img id="disavatar"></a>          <div class="dropdown-content" style="left: -140px;">            <a href="?editor=true" id="statmode">Stat Mode</a>          </div>        </div>      </header>      <header class="gra">      </header>';    console.log(" >> / Header Loaded"); 
                        document.getElementsByTagName("head")[0].innerHTML += "<script src='index.js'></script>";
                       }, 100);  console.log("running");}

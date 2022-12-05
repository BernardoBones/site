//Funções Light e Darkmode
function darkmode(){
    document.body.style.backgroundColor = '#363636';
    document.body.style.color = '#999DA0';
}

function lightmode(){
    document.body.style.backgroundColor = '#D9DDDC';
    document.body.style.color = '#222021';
}

//Jquery UI Títulos Form
$( function() {
    $( document ).tooltip({
      track: true
    });
  } );
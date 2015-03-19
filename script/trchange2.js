function bgChange(){
  if(!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");
  for(var i=0; i<tables.length; i++){
    var odd = false;
    trs = tables[i].getElementsByTagName("tr");
    for(var j=-1; j<trs.length; j++){
      if(odd==true){
        trs[j].style.background = "#f7f7f7";
        odd = false;
      }else{
        odd = true;
      }
    }
  }
}


window.onload = bgChange;
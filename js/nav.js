function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-row");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";

  if(tabName == "Home-Tab"){
    $(".main-container").removeClass("main-container-with-no-bg");
    $(".main-container").addClass("main-container-with-bg");
  }
  else {
    $(".main-container").removeClass("main-container-with-bg");
    $(".main-container").addClass("main-container-with-no-bg");
  }

}

var button = document.getElementsByClassName("button");
var content = document.getElementsByClassName("project");


button.onclick = function () {
  if (content.className == "open"){
      content.className = "";
  } else {
      content.className = "open";
  }

}


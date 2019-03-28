function onNavClicked(elem) {
  console.log("element: " + elem);
  if (elem.className.includes("active")) return;
  var listItems = document
    .getElementById("header-nav-ul")
    .getElementsByTagName("li");
  var elemId = elem.id;
  for (var i, len = listItems.length; i < len; i++) {
    if (listItems[i].className.includes("active")) {
      elem.className = "";
    }
    if (listItems[i].id === elemId) {
      elem.className = "active";
    }
  }
}

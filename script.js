function getOptions() {
  var count = document.getElementById("mySelect").length,
      // items = document.querySelectorAll("option"),
      // x;
      itemOne = document.querySelectorAll("option")[0].innerHTML,
      itemTwo = document.querySelectorAll("option")[1].innerHTML,
      itemThree = document.querySelectorAll("option")[2].innerHTML,
      itemFour = document.querySelectorAll("option")[3].innerHTML;

  // for (var i = 0; i < items.length; i++) {
  //   currentItem = items[i];

  // }

  alert("Number of items: " + count);
  alert("Items: " + itemOne + ", " + itemTwo + ", " + itemThree + ", " + itemFour);
}
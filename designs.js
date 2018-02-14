// Select color input
// Select size input  let height, weight;
let height, weight;
$("#inputHeight").change(function() {
  h = $("#inputHeight").val();
  if (h > 100) {
    height = 100;
  } else {
    height = h ;
  };
});

$("#inputWeight").change(function() {
  w = $("#inputWeight").val();
  if (w > 100) {
    weight = 100;
  } else {
    weight = w ;
  };
});

// When size is submitted by the user, call makeGrid()
function makeGrid(h,w) {
  for(let r = 0; r<h; r++) {
    $("#pixelCanvas").append("<tr></tr>");
  }
  for(let c = 0; c<w; c++) {
    $("tr").append("<td></td>");
  }
}

function clearGrid() {
  $("tr").remove();
}

//创建新的网格
$("form").submit(function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid(height,weight);
});

//选颜色，画图
let colorval = $("#colorPicker").val();
$("#colorPicker").change(function() {
  colorval = $("#colorPicker").val();
});
//为什么是table而不是td?
$("table").click(function(event) {
    $(event.target).css('background', colorval);
});

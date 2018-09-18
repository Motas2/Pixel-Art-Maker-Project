var k = document.getElementById("pixelCanvas");

function makeGrid() {
    //    clears table color and reset user's input
    k.innerHTML = "";

    //Get user's input for rows and cols
    var row = document.getElementById("inputWidth").value;
    var col = document.getElementById("inputHeight").value;
    for (var i = 0; i < row; i++) {
        //       adds new table rows 
        k.innerHTML += '<tr class="rows"></tr>';
        var tablerows = document.getElementsByClassName("rows");
        for (var j = 0; j < col; j++) {
            //add table cols per row
            tablerows[i].innerHTML += '<td></td>';
        }
    }
    var grid = document.getElementsByTagName('td');
    for (var x = 0; x < grid.length; x++) {
        //add eventlistener when user clicks on td
        grid[x].addEventListener('click', function () {
            //get color# number
            var chosenColor = document.getElementById("colorPicker").value;
            this.style.backgroundColor = chosenColor;
        });
    }
}

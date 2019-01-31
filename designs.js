 //  on to get canvas element,height,width etc
const cvass = document.getElementById('pixel_canvas');
let tw = $("#input_width");
let th = $("#input_height");

//button click event listener  .
$('#input_submit').click(function(click) {
    click.preventDefault();
    makeGrid();
});

let coloron = $("#colorPicker");

//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() 
{

    cvass.innerHTML = '';
    let height = th.val();
    let width = tw.val();

    //A function which fills color in the cell that was clicked and changes the color.
    let addEvent = function(cellfill) {
        cellfill.addEventListener('click', function() {
            cellfill.style.backgroundColor = coloron.val();
        });
    }

    // calls addEvent function to changes it's color.
    for (let i = 0; i < height; i++) {
        let r = cvass.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cellfill = r.insertCell(j);
            cellfill.addEventListener('click', addEvent(cellfill));
        }
    }
} 

$(document).ready(function () {
    $(".stall").click(function () {
        let bgColor = $(this).css('background-color');
        //alert(bgColor);
        if (bgColor === 'rgb(255, 0, 0)') {
            alert("OK");
            $(this).css('background-color', 'blue');
        }
        else if (bgColor === 'rgb(0, 0, 255)'){
            $(this).css('background-color', 'green');
        }
        else {
            $(this).css('background-color', 'red');
        }
        
        
    });
});
$(document).ready(function() {
    $('.color-box').click(function() {

        //Temp. input to copy color to clip Board 
        let temp1 = $("<input>");
        $("body").append(temp1);
        temp1.val($(this).find('.hex-number').text()).select();
        document.execCommand("copy");
        temp1.remove();

        // //Temp. <p> for displaying "color copied !"
        // let temp2 = $("<p>");
        // temp2.css({
        //     "font-weight": "bold"
        // })
        // $(this).append(temp2);
        // temp2.html('Color Copied !');
        // temp2.fadeIn();
        // setTimeout(() => {
        //     temp2.fadeOut().remove();
        // }, 1000);

        //Changing hexNumber to "Copied!"
        let hexNumber = $(this).find('.hex-number').text();
        $(this).find('.hex-number').text('Copied!');
        setTimeout(() => {
            $(this).find('.hex-number').text(hexNumber);
        }, 1000);
    });
});
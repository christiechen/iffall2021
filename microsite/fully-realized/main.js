$(function(){

    // HORIZONTAL SCROLL BARS
    //ORIGINS SCROLL BAR
    let originsArr=['images/origins-1.png', 'images/origins-1b.jpeg', 'images/origins-1c.jpeg'];
    let originsInd = 0;
    $('.origins .horizontalScroll .scrollBar.left').click(()=>{
        originsInd = switchImgBack(originsArr, originsInd, $('.origins .horizontalScroll img'));
    });
    $('.origins .horizontalScroll .scrollBar.right').click(()=>{
        originsInd = switchImgForward(originsArr, originsInd, $('.origins .horizontalScroll img'));
    });

    //LABOR SCROLL BAR
    let laborArr=['images/labor-1.jpeg', 'images/labor-1b.jpeg', 'images/labor-1c.jpeg'];
    let laborInd = 0;
    $('.labor .horizontalScroll .scrollBar.left').click(()=>{
        console.log('hello');
        laborInd = switchImgBack(laborArr, laborInd, $('.labor .horizontalScroll img'));
    });
    $('.labor .horizontalScroll .scrollBar.right').click(()=>{
        laborInd = switchImgForward(laborArr, laborInd, $('.labor .horizontalScroll img'));
    });

    //NAV BAR HOVERS 
    $('nav a').hover((e)=>{
        let parent = $(e.target).parent();
        parent.find('.button').toggleClass('hover');
    })

    let selectedParent = $('nav div.selected');
    selectedParent.find('.button').addClass('selected');

    //SMALL NAV BAR
    $('nav.small').click((e)=>{
        $('nav.small').toggleClass('open');
        $('.h1').toggleClass('open');
    })

});

function switchImgBack(array, index, image){
    index = index === 0 ? array.length-1 : index-1;
    image.attr('src',array[index]);
    return index;
}
function switchImgForward(array, index, image){
    index = index === array.length-1 ? 0 : index+1;
    image.attr('src',array[index]);
    return index;
}
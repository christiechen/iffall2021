$(function(){
    let imgGrids = $('.lg-show .imgGrid');
    Array.from(imgGrids).forEach((el)=> {
        let numCols = el.children.length;
        let children = el.children; 
        Array.from(children).forEach((col)=>{
            col.style.width = 100/numCols + "%";
        })
    })

    $('#sideMenuButton').on("click", ()=>{
        $('#sideMenu').toggle('hide');
    })

});
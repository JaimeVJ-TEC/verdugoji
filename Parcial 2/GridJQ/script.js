$(document).ready(function()
{
    $('#grid1').click(function(e){
        
        console.log(e.target.id)
        
        if(e.target.id !== 'grid1')
        $(e.target).toggleClass('rainbow-bg');
    })
});
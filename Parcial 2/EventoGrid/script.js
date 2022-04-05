window.onload = function()
{
    document.getElementById("grid1").addEventListener("click",function(e)
    {
        console.log(e.target.id)
        
        if(e.target.id !== "grid1")
        document.getElementById(e.target.id).classList.toggle("cajaToggle");
    });
} 
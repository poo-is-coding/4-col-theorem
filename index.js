function init(){
    const hex = document.querySelector(".hex");
    const bg = document.querySelector(".bg");
    const banner = document.getElementById("banner");
    hex.addEventListener("mousemove",(e)=>{
        let x,y;
        x = e.clientX;
        y = e.clientY;
        bg.style.left = `${x}px`;
        bg.style.top = `${y}px`;
    });
    hex.addEventListener("mouseout",()=>{
        bg.style.display = "none";
    });
    hex.addEventListener("mouseover",()=>{
        bg.style.display = "block";
    });
    banner.addEventListener("mousemove",(e)=>{
        let x,y;
        x = e.clientX;
        y = e.clientY;
        bg.style.left = `${x}px`;
        bg.style.top = `${y}px`;
    });
    banner.addEventListener("mouseout",()=>{
        bg.style.display = "none";
    });
    banner.addEventListener("mouseover",()=>{
        bg.style.display = "block";
    });
}
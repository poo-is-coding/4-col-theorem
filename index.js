function init(){
    const hex = document.querySelector(".hex");
    const bg = document.querySelector(".bg");
    const banner = document.getElementById("banner");
    const but = document.querySelector(".but");
    const light = document.querySelectorAll("#light");
    const first_section_word = document.querySelector(".text");
    const sec_two = document.getElementById("sec_two");
    const sli = document.querySelectorAll(".sli");
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
    sec_two.addEventListener("mousemove",(e)=>{
        let x,y;
        x = e.clientX;
        y = e.clientY;
        bg.style.left = `${x}px`;
        bg.style.top = `${y}px`;
    });
    sec_two.addEventListener("mouseout",()=>{
        bg.style.display = "none";
    });
    sec_two.addEventListener("mouseover",()=>{
        bg.style.display = "block";
    });
    but.addEventListener("click",()=>{
        but.style.display = "none";
        banner.classList.add("banner_out");
        for (let i=0;i<4;i++){
            light[i].classList.add("light_out");
        }
        window.setTimeout(()=>{
            first_section_word.style.display = "none";
            for (let i=0;i<4;i++){
                light[i].style.display = "none";
                light[i].classList.remove("light_out");
                sec_two.style.removeProperty("display");
                sec_two.classList.add("section_two");
                for (let i=1;i<5;i++){
                    let ccard = document.getElementById(String(i)+"ver");
                    ccard.style.removeProperty("display");
                    ccard.classList.add("card");
                }
            }
        },2000);
    });
    for(i=0;i<4;i++){
        const hhh = document.getElementById("h"+String(i));
        const context = document.querySelector(".sli_text"+String(i+1));
        sli[i].addEventListener("mouseover",()=>{
            hhh.style.display = "none";
            context.style.display = "block";
        });
        sli[i].addEventListener("mouseout",()=>{
            hhh.style.display = "block";
            context.style.display = "none";
        });
    }

}
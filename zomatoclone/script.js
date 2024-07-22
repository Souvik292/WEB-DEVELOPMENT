let circle1=document.querySelector("#circle1");
let circle2=document.querySelector("#circle2");
let circle3=document.querySelector("#circle3");
let circle4=document.querySelector("#circle4");
let cir1cle =document.querySelector(".cir1cle");
let cir2cle =document.querySelector(".cir2cle");

let emailsection=document.querySelector(".emailsection");
let phonesection=document.querySelector(".phone");
let countrycodearray=document.querySelector(".countrycodearrow");
let allcountrycode=document.querySelector(".allcountrycode");
let mainnumber=document.querySelector(".number4");
let choosenumber=document.querySelectorAll(".numbers2");
let forallexplore=document.querySelectorAll(".forallexplorea2");
let foralltabindex=document.querySelectorAll(".foralltabindex");

let title1explore=document.querySelector(".title1explore");
let title2explore=document.querySelector(".title2explore");
let title3explore=document.querySelector(".title3explore");
let title4explore=document.querySelector(".title4explore");

let tab1explore=document.querySelector(".tab1explore");
let tab2explore=document.querySelector(".tab2explore");
let tab3explore=document.querySelector(".tab3explore");
let tab4explore=document.querySelector(".tab4explore");

let forall1explore=document.querySelector(".forall1explore");
let forall2explore=document.querySelector(".forall2explore");
let forall3explore=document.querySelector(".forall3explore");
let forall4explore=document.querySelector(".forall4explore");

let arrow1=document.querySelector(".tab1explorearrow")
let arrow2=document.querySelector(".tab2explorearrow")
let arrow3=document.querySelector(".tab3explorearrow")
let arrow4=document.querySelector(".tab4explorearrow")

let choosenavbar=document.querySelector(".choosenavsearchbar");
let charat=document.querySelector(".digital-caret");
let turn=true;
charat.addEventListener("click",()=>{
    if(turn){
        choosenavbar.classList.remove("none");
        charat.style.transition="transform 0.2s ease 0s";
        charat.style.transform="rotate(180deg)";
        turn=false;
    }
    else{
        choosenavbar.classList.add("none");
        charat.style.transition="transform 0.2s ease-in 0s";
        charat.style.transform="none";
        turn=true;
    }
})

    cir1cle.addEventListener(("click"),()=>{
        circle1.style.stroke=" rgb(239, 79, 95)"
        circle2.classList.remove("hidden");
        circle2.style.fill="rgb(239, 79, 95)";
        circle2.style.stroke="none";

        
        circle3.style.stroke=" rgb(156, 156, 156)";
            circle4.classList.add("hidden");
            circle4.style.fill="rgb(255,255,255)";
            circle4.style.stroke="none";

            emailsection.classList.remove("none");
            phonesection.classList.add("none");


    });
        cir2cle.addEventListener("click",()=>{
            circle3.style.stroke=" rgb(239, 79, 95)"
            circle4.classList.remove("hidden");
            circle4.style.fill="rgb(239, 79, 95)";
            circle4.style.stroke="none";

            
        circle1.style.stroke=" rgb(156, 156, 156)";
        circle2.classList.add("hidden");
        circle2.style.fill="rgb(255,255,255)";
        circle2.style.stroke="none";

        emailsection.classList.add("none");
        phonesection.classList.remove("none");
        });
let a=true;
        countrycodearray.addEventListener("click",()=>{
            if(a){
            allcountrycode.classList.remove("none");
            countrycodearray.style.transition=" transform 0.2s ease 0s";
            countrycodearray.style.transform="rotate(180deg)";
            a=false;
            }
            else{
                allcountrycode.classList.add("none");
                countrycodearray.style.transition=" transform 0.2s ease 0s";
                countrycodearray.style.transform="rotate(0deg)";
                a=true;
                
            }
           
        });
let c;
    choosenumber.forEach((e) => {
        e.addEventListener("click",()=>{
            c=mainnumber.innerText;
            mainnumber.innerText=e.innerText;
            e.innerText=c;
            allcountrycode.classList.add("none");
            countrycodearray.style.transition=" transform 0.2s ease 0s";
            countrycodearray.style.transform="rotate(0deg)";
        });     
        });

let d=true;
    tab1explore.addEventListener("click",()=>{
        if(d){
            title1explore.classList.add("bottomborder");
            forall1explore.classList.remove("none");
            arrow1.style.transition="transform 0.2s ease 0s";
            arrow1.style.transform="rotate(180deg)"
            d=false;
        }
        else{
            title1explore.classList.remove("bottomborder");
            forall1explore.classList.add("none");
            arrow1.style.transition="transform 0.2s ease 0s";
            arrow1.style.transform="rotate(0deg)"
            d=true;
        }
     
       });

let e=true;
    tab2explore.addEventListener("click",()=>{
        if(e){
            title2explore.classList.add("bottomborder");
            forall2explore.classList.remove("none")
            arrow2.style.transition="transform 0.2s ease 0s";
           arrow2.style.transform="rotate(180deg)"
           e=false;

        }
        else{
            title2explore.classList.remove("bottomborder");
            forall2explore.classList.add("none")
            arrow2.style.transition="transform 0.2s ease 0s";
           arrow2.style.transform="rotate(0deg)";
           e=true;
        }
    
       });

let g=true;
    tab3explore.addEventListener("click",()=>{
        if(g){
            title3explore.classList.add("bottomborder");
            forall3explore.classList.remove("none");
            arrow3.style.transition="transform 0.25s ease-in 0s";
           arrow3.style.transform="rotate(180deg)";
           g=false;
        }
        else{
            title3explore.classList.remove("bottomborder");
            forall3explore.classList.add("none");
            arrow3.style.transition="transform 0.25s ease-in 0s";
           arrow3.style.transform="rotate(0deg)"
           g=true;
        }
      
       });

let i=true;
    tab4explore.addEventListener("click",()=>{
        if(i){ title4explore.classList.add("bottomborder");
            forall4explore.classList.remove("none");
            arrow4.style.transition="transform 0.25s ease-in 0s";
           arrow4.style.transform="rotate(180deg)"
           
           i=false;

        }
        else{
           
           title4explore.classList.remove("bottomborder");
           forall4explore.classList.add("none");
           arrow4.style.transition="transform 0.25s ease-in 0s";
          arrow4.style.transform="rotate(0deg)"
          i=true;
        }
     
       });

       

  
      
   


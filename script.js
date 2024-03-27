let box=document.querySelector("#container");
let btn=document.querySelectorAll(".btn");
// btn[0] btn[1] btn[2] btn[3]
btn[0].style.backgroundColor="yellow";
let img=1;

//automatically move slides
 setInterval( ()=>{ left()} , 3000)// 1000 ms = 1 sec

//// left
function left(){

    if(img===1)
    {
        box.setAttribute("class","image5") 
        btn[0].style.backgroundColor="white";
        btn[4].style.backgroundColor="yellow";
        img=5;
    }
    else if(img===5)
    {
        box.setAttribute("class","image4") 
        btn[4].style.backgroundColor="white";
        btn[3].style.backgroundColor="yellow";
        img=4;
    }
    else if(img===4)
    {
        box.setAttribute("class","image3") 
        btn[3].style.backgroundColor="white";
        btn[2].style.backgroundColor="yellow";
        img=3;
    }
    else if(img===3)
    {
        box.setAttribute("class","image2") 
        btn[2].style.backgroundColor="white";
        btn[1].style.backgroundColor="yellow";
        img=2;
    }
    else if(img===2)
    {
        box.setAttribute("class","image1") 
        btn[1].style.backgroundColor="white";
        btn[0].style.backgroundColor="yellow";
        img=1;
    }
}





function right(){
    if(img===1)
    {
        box.setAttribute("class","image2") 
        btn[0].style.backgroundColor="white";
        btn[1].style.backgroundColor="yellow";
        img=2;
    }
    else if(img===2)
    {
        box.setAttribute("class","image3") 
        btn[1].style.backgroundColor="white";
        btn[2].style.backgroundColor="yellow";
        img=3;
    }
    else if(img===3)
    {
        box.setAttribute("class","image4") 
        btn[2].style.backgroundColor="white";
        btn[3].style.backgroundColor="yellow";
        img=4;
    }
    else if(img===4)
    {
        box.setAttribute("class","image5") 
        btn[3].style.backgroundColor="white";
        btn[4].style.backgroundColor="yellow";
        img=5;
    }
    else if(img===5)
    {
        box.setAttribute("class","image1") 
        btn[4].style.backgroundColor="white";
        btn[0].style.backgroundColor="yellow";
        img=1;
    }
}


let form =document.querySelector("form");
let cardholder_name=form.querySelector(".cardholder-name input");
let customer_name=document.querySelector(".details .name");
let customer_number=document.querySelector(".card1 .id");
let name_input=document.querySelector(".cardholder-name input");
let number_input=document.querySelector(".card-num input");
let message1=document.querySelector(".cardholder-name .error");
let message2=document.querySelector(".card-num .error");
let message3=document.querySelector(".date .down .error");
let message4=document.querySelector(".date .down .cv .mistake");
let cv_error=document.querySelector(".date .down .cv .error ");


let month_input=document.querySelector(".date .down #month");
let customer_date=document.querySelector(".card1 .details .date");
let year_input=document.querySelector(".date .down #year");
let cv_input=document.querySelector(".date .down #cv");
// console.log(cv_input);
let customer_cv=document.querySelector(".card2 .num");




form.addEventListener("submit",(e)=>{
    e.preventDefault();

        Name(name_input.value);
        Num(number_input.value);
        Month(month_input.value,year_input.value);
        cv(cv_input.value);
})


function cv(input)
{  
    console.log(input);
    if(input.length===3)
    {
        customer_cv.innerHTML=input;
    }
    else if(input.length!==3 && input.length!==0)
    {   
        console.log(message4);
        message4.style.display="block";
        cv_input.style.borderColor="red";
        document.addEventListener("click",()=>{
            message4.style.display="none";
            cv_input.style.borderColor="#eee";
        })
    }
    else
    {   console.log(cv_error);
       
        
        cv_error.style.display="block";
        cv_input.style.borderColor="red";

        document.addEventListener("click",()=>{
            cv_error.style.display="none";
            cv_input.style.borderColor="#eee";
        })
    }
    
}




function Month(month,year)
{
    
    let regex=/^\d{1,2}$/ig;
    let res=regex.test(month);
    if(res && year!=="")
    {
        console.log("hello");
        customer_date.innerHTML=month<10?`0${month}/${year<10?`0${year}`:`${year}`}` : `${month}/${year<10?`0${year}`:`${year}`}` ;
    }

    else if(year=="" && res)
    {   
        console.log(regex.test(month));
        customer_date.innerHTML=month<10?`0${month}/00` : `${month}/00` ;
    }


    if(month=="")
    {
        message3.style.display="block";
        month_input.style.borderColor="red";
    //     number_input.addEventListener("focus",function(){
    //     message2.style.display="none";
    //     number_input.style.borderColor="#eee";
    // })
    document.addEventListener("click",()=>{
        message3.style.display="none";
        month_input.style.borderColor="#eee";
    })
    }
    else
    {
        document.querySelector(".date .down .month .mistake").style.display="block";
        number_input.style.borderColor="red";
        // number_input.addEventListener("focus",function(){
        //     document.querySelector(".mistake").style.display="none";
        //     name_input.style.borderColor="#eee";
        // })
        document.addEventListener("click",()=>{
            document.querySelector(".date .mistake").style.display="none";
            number_input.style.borderColor="#eee";
        })
    }
}


function Name(name)
{   
    if(name!=="")
    {
        console.log(name);
        customer_name.innerHTML=name;
    }
    else
    {
        message1.style.display="block";
        name_input.style.borderColor="red";
        // name_input.addEventListener("focus",function(){
        //     message1.style.display="none";
        //     name_input.style.borderColor="#eee";
        // })
        document.addEventListener("click",()=>{
            message1.style.display="none";
            name_input.style.borderColor="#eee";
        })
    }
    
}



function Num(numb)
{   
    
    let regex=/\d{4} \d{4} \d{4} \d{3}/ig;
    if(regex.test(numb))
    {  
        console.log(numb);
        customer_number.innerHTML=numb;
    }
    else if(numb=="")
    {
        message2.style.display="block";
     number_input.style.borderColor="red";
     number_input.addEventListener("focus",function(){
        message2.style.display="none";
        number_input.style.borderColor="#eee";
    })
    document.addEventListener("click",()=>{
        message2.style.display="none";
        number_input.style.borderColor="#eee";
    })
    }
    else
    {
        document.querySelector(".mistake").style.display="block";
        number_input.style.borderColor="red";
        // number_input.addEventListener("focus",function(){
        //     document.querySelector(".mistake").style.display="none";
        //     name_input.style.borderColor="#eee";
        // })
        document.addEventListener("click",()=>{
            document.querySelector(".mistake").style.display="none";
            name_input.style.borderColor="#eee";
        })
    }
    
}


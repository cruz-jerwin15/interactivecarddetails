const cardform = document.querySelector('.form-data');
const holdername = cardform.elements.holdername;
const cardnumber = cardform.elements.cardnumber;
const expiredate = cardform.elements.expiredate;
const expireyear = cardform.elements.expireyear;
const span = document.querySelectorAll('span');
const cvc = cardform.elements.cvc;

const dispcardnumber = document.querySelector('.credentials h1');
const h2 = document.querySelectorAll('.cred h2');
const nameholder=h2[0];
const expired = h2[1];
const displaycvc = document.querySelector('.back-div h2');

const bottom = document.querySelector('.bottom-div');
const complete = document.querySelector('.complete-div');
const completeBtn = document.querySelector('.complete-div button');

let isSubmit=true;

cardform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let step=0;
    let cardholder=holdername.value;
    let numbercard=cardnumber.value;
    let months = expiredate.value;
    let years = expireyear.value;
    let pass = cvc.value;
    if((cardholder)&&(cardholder.trim().length>0)){
        span[0].style.display="none";
        nameholder.innerText=cardholder;
        holdername.style.borderColor="hsl(270, 3%, 87%)";
        step++;
    }else{
        span[0].style.display="inline";
        holdername.style.borderColor="hsl(0, 100%, 66%)";
    }

    if((numbercard)&&(numbercard.trim().length>0)&&(!isNaN(numbercard))){
        span[1].style.display="none";
        if(numbercard.length===16){
            let displaycard="";
            for(let i=0;i<16;i++){
                if(i%4==0){
                    displaycard+=" ";
                }
                displaycard+=numbercard[i];
            }
            dispcardnumber.innerText=displaycard;
            cardnumber.style.borderColor="hsl(270, 3%, 87%)";
            step++;
        }else{
            span[1].style.display="inline";
            cardnumber.style.borderColor="hsl(0, 100%, 66%)";
            span[1].innerText="Card number must be 16 digits";
        }
        
    }else{
        span[1].style.display="inline";
        cardnumber.style.borderColor="hsl(0, 100%, 66%)";
        if(isNaN(cardnumber)){
            span[1].innerText="Wrong format, numbers only";
        }else{
            span[1].innerText="Can't be blank";
        } 
    }
    let expire=0;
    if((months)&&(months.trim().length>0)&&(!isNaN(months))&&(months.length==2)&&(months<=12)){
       
        expiredate.style.borderColor="hsl(270, 3%, 87%)";
        expire++;
    }else{
        span[2].style.display="inline";
        expiredate.style.borderColor="hsl(0, 100%, 66%)";
        if(isNaN(months)){
            span[2].innerText="Wrong format, numbers only";
        }else if((months.length!=2)||(months>12)){
            span[2].innerText="Wrong format, 01 to 12";
        }else{
            span[2].innerText="Can't be blank";
        } 
    }
    if((years)&&(years.trim().length>0)&&(!isNaN(years))&&(years.length==2)){
        
        expireyear.style.borderColor="hsl(270, 3%, 87%)";
        expire++;
    }else{
        span[2].style.display="inline";
        expireyear.style.borderColor="hsl(0, 100%, 66%)";
        if(isNaN(years)){
            span[2].innerText="Wrong format, numbers only";
        }else if(years.length!=2){
            span[2].innerText="Wrong format, 00 - 99";
        }else{
            span[2].innerText="Can't be blank";
        } 
    }

    if(expire>=2){
        let expiration = `${months}/${years}`;
        expired.innerText=expiration;
        span[2].style.display="none";
        step++;
    }
    
    if((pass)&&(pass.trim().length>0)&&(!isNaN(pass))&&(pass.length==3)){
        span[3].style.display="none";
        cvc.style.borderColor="hsl(270, 3%, 87%)";
        displaycvc.innerText=pass;
        step++;
    }else{
        span[3].style.display="inline";
        cvc.style.borderColor="hsl(0, 100%, 66%)";
        if(isNaN(pass)){
            span[3].innerText="Wrong format, numbers only";
        }else if(pass.length!=3){
            span[3].innerText="CVC must be 3 digits";
        }else{
            span[3].innerText="Can't be blank";
        } 
    }

    if(step>=4){
        isSubmit=true;
        completeContinue();
    }

    
});
completeBtn.addEventListener('click',()=>{
    isSubmit=false;
    completeContinue();
});

const completeContinue=()=>{
    if(!isSubmit){
        bottom.style.display="block";
        complete.style.display="none";
    }else{
        bottom.style.display="none";
        complete.style.display="block";
    }
}





const resultField=document.querySelector("#result");
const degree=document.querySelector("#degree");
const convertBtn=document.querySelector("#convert_btn");
const tempType=document.querySelector("#temp_type");

window.addEventListener("load", () =>{
    degree.value="";
    resultField.innerHTML="";
})

convertBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    getResult();

    convertBtn.innerHTML="<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
    setTimeout(()=>{
        convertBtn.innerHTML="<span>Convert</span>"
    },1000)
})
function getResult(){
    let inputValue=degree.value;

    if(tempType.value==="fahrenheit"){
        const fahrenheitToCelsius=(inputValue-32)*(5/9);
        resultField.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(tempType.value==="Celsius"){
        const CelsiusTofahrenheit=(inputValue*(9/5))+32;
        resultField.innerHTML=`${CelsiusTofahrenheit.toFixed(3)}
        Fahrenheit`;
    }
}
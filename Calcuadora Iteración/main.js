function lagrangeSegundoOrden(){
    let x = parseFloat(document.getElementById("xValue3").value);
    let fx= parseFloat(document.getElementById("fxValue3").value);
    let x0= parseFloat(document.getElementById("x0Value3").value);
    let fx0= parseFloat(document.getElementById("fx0Value3").value);
    let x1= parseFloat(document.getElementById("x1Value3").value);
    let fx1= parseFloat(document.getElementById("fx1Value3").value);
    let x2= parseFloat(document.getElementById("x2Value3").value);
    let fx2= parseFloat(document.getElementById("fx2Value3").value);
    let div1= (x-x1)/(x0-x1);
    let div2= (x-x2)/(x0-x2);
    let mult1= (div1 * div2) * fx0;
    let div3= (x-x0)/(x1-x0);
    let div4= (x-x2)/(x1-x2);
    let mult2= (div3 * div4) * fx1;
    let div5= (x-x0)/(x2-x0);
    let div6= (x-x1)/(x2-x1);
    let mult3= (div5 * div6) * fx2;
    let resultado = mult1 + mult2 + mult3;
    let et= fx - resultado;
    if (fx != ""){
        document.getElementById("errort3").innerHTML = et;
        }  else {
         document.getElementById("errort3").innerHTML = "";
        }
    let erroraprox= (et/fx)*100;
    document.getElementById("errora3").innerHTML = erroraprox.toFixed(2) + "%";
    document.getElementById("segundoorden").innerHTML = resultado;
}

function secante(){
    let x0= parseFloat(document.getElementById("inpx01").value);
    let x1= parseFloat(document.getElementById("inpx11").value);
    let fx0= parseFloat(document.getElementById("inpfx01").value);
    let fx1= parseFloat(document.getElementById("inpfx11").value);
    let error = parseFloat(document.getElementById("inperror1").value);
    let errorI= (x1-resultado)/x1;

    for(let i=errorI; i<=error; i--){
        document.getElementById("xM1").innerHTML= resultado;
    }

    let mult1= x0 - x1;
    let mult= fx1 * mult1;
    let div= mult /(fx0 - fx1);
    let resultado= x1 - div;
    

}

function clear(){
    document.getElementById("inpfx0").value= "";
    document.getElementById("inpfx1").value= "";
    document.getElementById("inpx0").value= "";
    document.getElementById("inpx1").value = "";
    document.getElementById("inperror").value = "";
}


function clear1(){
    document.getElementById("inpfx01").value= "";
    document.getElementById("inpfx11").value= "";
    document.getElementById("inpx01").value= "";
    document.getElementById("inpx11").value = "";
    document.getElementById("inperror1").value = "";
}

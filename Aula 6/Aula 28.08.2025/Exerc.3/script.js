document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");
   
    btn.addEventListener("click",() =>{
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite dois números válidos!");
            return;
        }
        document.getElementById("soma").textContent = num1 + num2;
        document.getElementById("subtração").textContent = num1 - num2;
        document.getElementById("multiplicação").textContent = num1 * num2;
        document.getElementById("divisão").textContent = num2 !== 0? (num1 / num2).toFixed(2) : "Divisão por zero";
        document.getElementById("resto").textContent = num2 !==0? num1 % num2 : "Não aplicável";
    });
});

const somar = (a,b) => a+b;
const subtração = (a,b) => a-b;
const multiplicação = (a,b) => a*b;
const divisão = (a,b) { return b === 0 ? 'Divisão por zero': a/b};

document.addEventListener('DOMContentLoaded', ()=>{
    const A = document.getElementById('a');
    const B = document.getElementById('b');
    const btn =document.getElementById('btnCalc');

    const outSoma = document.getElementById('soma');
    const outSub = document.getElementById('sub');
    const outMul = document.getElementById('mul');
    const outDiv = document.getElementById('div');

    btn.addEventListener('click', () =>{
        const a = Number(A.value);
        const b = Number(B.value);

        if (Number.isNaN(a)) || (Number.isNaN(b)) {
            outSoma.textContent = outSub.textContent = outMul.textContent = '';
            outDiv.textContent = 'Informe números válidos';
            outDiv.classList.add('error');
            return;
        }

        outDiv.classList.remove('error');
        outSoma.textContent = somar (a,b);
        outSub.textContent = subtrair (a,b);
        outMul.textContent = multiplicar (a,b);
        outDiv.textContent = dividir (a,b);
    });
});



function saudacao(nome){
    return `Olá, ${nome}! Bem-vinda(o)!`;
}
document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.getElementById("btnSaudar");
    const out = document.getElementById("out");
    const input = document.getElementById("nome");

    btn.addEventListener('click',()=>{
        const nome = input.ariaValueMax.trim();
        const alvo = nome || 'Visitante';
        out.textContent = saudacao('alvo');
    });
});
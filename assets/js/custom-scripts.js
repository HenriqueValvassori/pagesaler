// custom-scripts.js

// Adicione este script se precisar de funcionalidades extras.
// Por exemplo, para manipular eventos ou dados de afiliados.

// Exemplo de script simples para alterar o texto dinamicamente
document.addEventListener("DOMContentLoaded", function() {
  const heroTitle = document.querySelector(".hero__caption h1");
  if (heroTitle) {
    heroTitle.textContent = "Curso Fatura AI";
  }
});

// Ações para o link do Mercado Livre (exemplo)
// const mercadolivreLink = document.querySelector('.hero__caption .btn');
// mercadolivreLink.addEventListener('click', () => {
//   // Lógica para enviar o usuário para o Mercado Livre com o ID de afiliação
//   window.open('https://www.mercadolivre.com.br?aff_id=SEU_ID_DE_AFILIADO', '_blank');
// });
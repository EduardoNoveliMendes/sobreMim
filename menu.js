document.addEventListener("DOMContentLoaded", function () {
    // 1. Faz a requisição para buscar o arquivo HTML do menu
    fetch("menu.html")
        .then(response => {
            // Verifica se o arquivo foi encontrado com sucesso
            if (!response.ok) {
                throw new Error("Não foi possível carregar o menu.");
            }
            return response.text(); // Converte o conteúdo capturado em texto bruto
        })
        .then(html => {
            // 2. Injeta o HTML do menu logo no início (topo) do <body> da página atual
            document.body.insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.error("Erro ao carregar o menu compartilhado:", error);
        });
});
// apiService.js
const apiUrl = 'http://localhost:8080/medicacao_notificacao/teste'; // Substitua com a URL correta da sua API

export function Confirmar(medicacaoId) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: Number(medicacaoId)
            // medicacaoTomada: true
        }),
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Erro ao interagir com a API:', error);
        throw error; // Lança o erro para ser tratado onde a função for chamada
    });
}

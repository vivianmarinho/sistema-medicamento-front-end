/*import { enviarMensagemParaAPI } from './apiService';

function ConfirmAction(choice) {
    const handleYesChoice = () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const medicacaoId = urlSearchParams.get('medicacaoId');
        console.log(medicacaoId);

        enviarMensagemParaAPI(medicacaoId)
            .then(data => {
                console.log('Resposta da API:', data);
                alert("Recebida com sucesso");
            })
            .catch(error => console.error('Erro ao interagir com a API:', error));
    };

    // ... (restante do código para o 'no' choice permanece o mesmo)

    useEffect(() => {
        if (choice === 'yes') {
            handleYesChoice();
        } else if (choice === 'no') {
            handleNoChoice();
        }
    }, [choice]);

    return null; // Se você estiver usando essa função em um componente, retorne o que for apropriado aqui
}

export default ConfirmAction;*/

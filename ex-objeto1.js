
    function Restaurante(nome,cardapio){
        this.nome = nomeRestaurante,
        this.cardapio = cardapio ['acompanhamento', 'carne', 'massa', 'peixe']};
    
        
        let restaurante ={
            nomeRestaurante: "Julio's Burguer",
            cardapio : ['burguer1', 'burguer2', 'burguer3', 'burguer4', 'burguer5'],
            entrada : function(){
                return "Bem vindo ao " + this.nomeRestaurante + ", confira o nosso cardápio: " + this.cardapio; 
            }
        }
        console.log (restaurante.entrada());
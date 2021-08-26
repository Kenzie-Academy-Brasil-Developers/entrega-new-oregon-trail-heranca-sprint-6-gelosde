# language: pt

Funcionalidade : Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável
    E deve entregar parte da sua caça para os outros viajantes quando pedido caso tenha a quantidade pedida

    Contexto:
        Dado um Hunter de nome "Sergio"
        E ele sempre começa a viagem com 2 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vez
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 5 e o Hunter não ficará doente

    Cenário: deu comida a outro traveler
        O motorista do  vagão solicitou "4" comidas para o Traveler "Samuel"
        apos receber um pedido para dar a "Samuel" "4" de comida ele entrega 

    Cenário: Tentou comer e ficou doente
        Quando o Hunter parar para comer "1" vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente

    Cenário: tentou caçar doente
        Quando o Hunter parar para caçar a pos ficar doente
        ele não conseguira caçar
    








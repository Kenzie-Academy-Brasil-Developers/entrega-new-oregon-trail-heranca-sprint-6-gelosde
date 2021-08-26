# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável
    E curar os Travelers doentes.

    Contexto: 
        Dado uma Dotora de nome "Simone"
        E ela sempre começa a viagem com "1" refeição
        E ela sempre começa a viagem saudável.
    
    cenario: Hunter jonas fica doentes
       Dado Hunter "jonas" esta doente 
       E "Simone" cura "jonas".
    
    cenario: Doctor fica doente
       Dado "Simone" ficou doente
       E "Simone" não pode se curar ou curar outros.
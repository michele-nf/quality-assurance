# **Validação de Máquina de Cartão** 

### **Pergunta 1:**
Um cliente adquiriu um novo modelo de máquina de cartão que aceita as bandeiras Visa, Master, 
Elo, Amex e Hiper. A máquina suporta tanto transações de débito quanto de crédito para cada uma 
dessas bandeiras. 
Pergunta: Como você estruturaria o plano de testes para validar essa máquina, considerando todas 
as bandeiras e tipos de transação? Quantos casos de teste seriam necessários e qual técnica de 
teste você utilizaria para garantir a cobertura completa e eficiente dos cenários? 

> **Resposta:**  
>
> Cinco bandeiras: Visa, Master, Elo, Amex e Hiper
> 
> Duas transações: Débito e Crédito
> 
> O plano de testes precisa cobrir cada uma dessas 10 combinações. Para cada combinação, os seguintes testes devem ser considerados:
>Plano de testes:
>
> - Transações aprovadas:
>   - Transação com um cartão válido
>       - Validar sucesso da transação
>       - Validar envio do comprovante de transação
>       - Validar com valores diferentes
>       - Validar dentro do limite do cartão
>       - Validar com cartão utilizando chip
>       - Validar com cartão utilizando aproximação
> 
> - Transações recusadas:
>   - Transação com um cartão inválido
>       - Validar cartão com bandeiras diferentes de Visa, Master, Elo, Amex, Hiper (Por exemplo, cartão internacional)
>   - Transação com um cartão bloqueado
>       - Validar informação de cartão bloqueado e a não realização da transação
>   - Transação com um cartão válido
>       - Testar fora do limite do cartão
>       - Validar negação de transação de débito e crédito com valor 0 (zero)
>       - Validar senha incorreta
>       - Validar caso o usuário erre 3x (vezes) a senha, o cartão é bloqueado
> 
> - Transações com falhas:
>   - Simulação de falha de comunicação com a rede bancária
>   - Simulação de falha de comunicação com a internet
>
> - Tempo de resposta da transação
>
> Total de casos de testes considerando o plano: 10 combinações para 15 casos de teste.
>
> Técnicas de teste: Caixa preta, teste exploratório, teste funcional e teste não-funcional (desempenho).

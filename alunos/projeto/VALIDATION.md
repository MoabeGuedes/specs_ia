# Plano de validação

## Estratégia

O sistema será aberto no navegador para verificar se funciona.

## Critérios automatizados

Os critérios de aceitação abaixo foram derivados dos casos de uso e das regras de negócio consolidadas na especificação UML congelada.

- AC-01: emissão de senha cria a primeira senha com número 1 e estado `WAITING`.
- AC-02: cada nova emissão incrementa o número da senha e mantém a sequência na sessão.
- AC-03: a chamada da próxima senha retorna a primeira senha aguardando e a move para `IN_SERVICE`.
- AC-04: chamar a próxima senha quando não há senhas em `WAITING` não seleciona nenhuma senha.
- AC-05: há no máximo uma senha em `IN_SERVICE` por vez.
- AC-06: finalizar um atendimento válido move a senha de `IN_SERVICE` para `FINISHED`.
- AC-07: finalizar sem atendimento ativo ou com número inválido não altera a fila e reporta erro.

## Validação manual

- abrir a aplicação no navegador;
- emitir senhas e verificar a numeração em sequência;
- chamar a próxima senha e confirmar que a primeira da fila entra em atendimento;
- tentar chamar a próxima senha com fila vazia e confirmar a mensagem de ausência de senhas;
- finalizar a senha em atendimento e confirmar a transição para `FINISHED`;
- tentar finalizar sem atendimento ativo e confirmar o erro de validação.

## Matriz de rastreabilidade

| Caso de uso | Regra | Diagrama principal | Critério |
|---|---|---|---|
| UC-01 | RN-01, RN-03 | Emitir senha | AC-01, AC-02 |
| UC-02 | RN-02, RN-03, RN-04 | Chamar próxima senha | AC-03, AC-04, AC-05 |
| UC-03 | RN-03, RN-04, RN-05 | Finalizar atendimento | AC-06, AC-07 |
| UC-04 | RN-02, RN-03, RN-04 | Consultar fila | Validado manualmente pela visualização da fila e da senha ativa |


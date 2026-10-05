# UC-03 — Finalizar atendimento

## Objetivo

Finalizar o atendimento da senha que está em atendimento.

## Ator principal

Atendente.

## Pré-condições

- Existe pelo menos uma senha com estado `IN_SERVICE`.
- O atendente conhece o número da senha ativa.

## Gatilho

O atendente informa o número da senha e aciona **Finalizar**.

## Fluxo principal

1. A interface envia `finishTicket(number)` ao serviço.
2. O serviço localiza a senha informada.
3. O serviço confirma que a senha está em `IN_SERVICE`.
4. O serviço altera o estado da senha para `FINISHED`.
5. A interface confirma a finalização para o atendente.

## Fluxos alternativos

- Se o número informado não existir na fila, o sistema não altera nenhum estado e informa que a senha não foi encontrada.
- Se não houver nenhuma senha em `IN_SERVICE`, o sistema não finaliza atendimento e informa que não há atendimento ativo.

## Pós-condições

- A senha informada está em estado `FINISHED`.
- A fila continua consistente com a regra de um atendimento ativo por vez.

## Regras relacionadas

- RN-03.
- RN-04.
- RN-05.


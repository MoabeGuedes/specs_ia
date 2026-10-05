# UC-02 — Chamar próxima senha

## Objetivo

Permitir que o atendente chame a próxima senha aguardando.

## Ator principal

Atendente.

## Pré-condições

- Existe pelo menos uma senha em estado `WAITING`.
- Não existe outra senha em estado `IN_SERVICE`.

## Gatilho

O atendente aciona **Chamar próxima**.

## Fluxo principal

1. O sistema identifica a primeira senha em estado `WAITING` conforme a ordem de chegada.
2. O sistema altera o estado dessa senha para `IN_SERVICE`.
3. A interface apresenta a senha chamada ao atendente.

## Fluxos alternativos

- Se não houver senhas em `WAITING`, o sistema não chama ninguém e informa que a fila está vazia.
- Se houver várias senhas em `WAITING`, o sistema escolhe somente a primeira da fila, sem alterar a ordem das demais.

## Pós-condições

- Uma senha foi movida de `WAITING` para `IN_SERVICE`.
- A senha chamada está disponível para atendimento pelo atendente.

## Regras relacionadas

- RN-02.
- RN-03.
- RN-04.


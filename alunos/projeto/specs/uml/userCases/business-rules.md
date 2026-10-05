# Regras de negócio

## RN-01 — Numeração

As senhas recebem números.

- A numeração da sessão começa em 1.
- Cada nova senha recebe o próximo número disponível.
- O número é único dentro da sessão e não é reutilizado.
- A fila não persiste após o fim da sessão.

## RN-02 — Escolha da próxima senha

O sistema deve escolher uma senha aguardando.

- A ordem de atendimento é a ordem de chegada.
- A próxima senha é a primeira da fila em estado `WAITING`.
- Nenhuma senha prioritária ou seleção manual é permitida.

## RN-03 — Estados

Uma senha pode estar `WAITING`, `IN_SERVICE` ou `FINISHED`.

- `WAITING`: aguardando atendimento.
- `IN_SERVICE`: atualmente sendo atendida pelo atendente.
- `FINISHED`: atendimento finalizado.
- A transição permitida é: `WAITING -> IN_SERVICE -> FINISHED`.
- Não existem transições alternativas de reabertura, cancelamento ou retorno para a fila.

## RN-04 — Atendimento simultâneo

- Há apenas um atendente operando a aplicação.
- A aplicação permite no máximo uma senha em `IN_SERVICE` por vez.
- Enquanto uma senha está em atendimento, as demais permanecem em `WAITING` ou `FINISHED`.

## RN-05 — Finalização

O atendente pode finalizar uma senha informando seu número.

- A senha informada deve estar em `IN_SERVICE` para ser finalizada.
- A finalização altera o estado da senha para `FINISHED`.
- A finalização não cria nova senha, não altera a ordem de atendimento e não reabre a fila.


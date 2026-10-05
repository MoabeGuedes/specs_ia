# UC-04 — Consultar fila

## Objetivo

Visualizar o estado atual da fila de atendimento.

## Ator principal

Atendente.

## Pré-condições

- A aplicação está aberta.
- A fila pode estar vazia, parcialmente preenchida ou com senhas finalizadas.

## Gatilho

O atendente abre a tela da fila ou atualiza a visualização.

## Fluxo principal

1. O sistema consulta a fila atual.
2. O sistema identifica a senha em atendimento, as senhas aguardando e as senhas finalizadas.
3. A interface apresenta a fila organizada pela ordem de chegada.
4. A interface mostra a senha ativa e o estado geral da fila.

## Fluxos alternativos

- Se a fila estiver vazia, a interface exibe o estado sem senhas aguardando e sem senha em atendimento.
- Se todas as senhas já estiverem finalizadas, a interface exibe a fila sem senhas em espera e identifica o último estado concluído.

## Pós-condições

- A fila atual está visível na tela.
- O atendente consegue identificar a senha em atendimento e o restante da fila.

## Regras relacionadas

- RN-02.
- RN-03.
- RN-04.


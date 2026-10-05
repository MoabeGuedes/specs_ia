# UC-01 — Emitir senha

## Objetivo

Criar uma nova senha para o aluno e adicioná-la ao fim da fila.

## Ator principal

Aluno.

## Pré-condições

- A aplicação está aberta.
- A sessão da fila está ativa.

## Gatilho

O aluno aciona **Emitir senha**.

## Fluxo principal

1. A interface solicita `createTicket()` ao serviço.
2. O serviço calcula o próximo número disponível da sessão.
3. O serviço cria uma senha com o próximo número e estado `WAITING`.
4. O serviço insere a senha no fim da fila.
5. A interface mostra o número recebido ao aluno.

## Fluxos alternativos

- Se o sistema não conseguir registrar a senha, a operação é interrompida e nenhuma senha nova é adicionada.

## Pós-condições

- Existe uma nova senha na fila com estado `WAITING`.
- O número da nova senha foi exibido ao aluno.

## Regras relacionadas

- RN-01.
- RN-02.
- RN-03.


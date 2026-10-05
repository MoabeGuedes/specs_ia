# Protocolo de desenvolvimento humano–IA — incompleto

## Finalidade

Definir como a equipe e o agente trabalharão durante o projeto.

## Fonte de verdade

BRIEF.md define o problema e as restrições do domínio. PROJECT.md registra decisões de implementação e escopo para o projeto. UML descreve o comportamento esperado nos casos de uso, estados e interações. VALIDATION.md define critérios de verificação. Quando houver contradição entre esses documentos, a especificação deve ser revisada antes de prosseguir e a IA deve interromper a execução até que a inconsistência seja resolvida.

## Responsabilidades humanas

- informar o objetivo geral;
- aceitar o resultado produzido pelo agente.

TODO: completar as responsabilidades que não podem ser transferidas para a IA.

## Responsabilidades do agente

- produzir o sistema solicitado;
- resolver ambiguidades somente dentro dos limites da especificação aprovada;
- interromper imediatamente quando a especificação estiver contraditória;
- modificar outros documentos somente quando isso for necessário para manter consistência documental e não alterar o escopo aprovado.

> Atenção: algumas regras acima podem ser incompatíveis com desenvolvimento orientado por especificações. A equipe deve revisá-las.

## Regras de interação

1. Cada prompt deve informar a tarefa.
2. O agente pode ajustar os testes quando necessário para concluir mais rapidamente.
3. Não é necessário revisar alterações intermediárias se o sistema executar.

TODO: corrigir e completar as regras.

## Política de falhas

Se houver contradição documental, o agente deve interromper o trabalho, reportar a inconsistência e aguardar orientação antes de continuar. Erros de código, ambiente ou uso devem ser tratados como eventos operacionais; quando a inconsistência da especificação impedir a decisão correta, a interrupção tem precedência sobre a tentativa de correção automática.

## Evidência mínima

TODO: definir o que o agente deve informar ao concluir cada etapa.


# Sequência — UC-02 Chamar próxima senha

```plantuml
@startuml
actor Atendente
boundary Interface
control QueueManager
entity Ticket

Atendente -> Interface: aciona Chamar próxima
Interface -> QueueManager: getNext()
alt existe senha em WAITING
  QueueManager -> Ticket: status = IN_SERVICE
  QueueManager --> Interface: ticket
  Interface --> Atendente: mostra senha
else fila vazia
  QueueManager --> Interface: sem senha aguardando
  Interface --> Atendente: informa que a fila está vazia
end
@enduml
```


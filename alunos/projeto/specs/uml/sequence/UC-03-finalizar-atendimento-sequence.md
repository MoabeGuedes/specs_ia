# Sequência — UC-03 Finalizar atendimento

```plantuml
@startuml
actor Atendente
boundary Interface
control QueueManager
entity Ticket

Atendente -> Interface: informa número e aciona Finalizar
Interface -> QueueManager: finishTicket(number)
alt senha inexistente ou não está em IN_SERVICE
  QueueManager --> Interface: erro / sem atendimento
  Interface --> Atendente: informa que não há atendimento para finalizar
else senha atual em IN_SERVICE
  QueueManager -> Ticket: status = FINISHED
  QueueManager --> Interface: ticket
  Interface --> Atendente: confirma finalização
end
@enduml
```


# Sequência — UC-01 Emitir senha

```plantuml
@startuml
actor Aluno
boundary Interface
control QueueManager
entity Ticket

Aluno -> Interface: aciona Emitir senha
Interface -> QueueManager: createTicket()
QueueManager -> QueueManager: nextNumber = nextNumber + 1
QueueManager -> Ticket: new(number)
QueueManager -> QueueManager: enqueue(ticket)
QueueManager --> Interface: ticket
Interface --> Aluno: mostra número
@enduml
```


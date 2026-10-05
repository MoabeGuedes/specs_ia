export const TicketStatus = Object.freeze({
  WAITING: 'WAITING',
  IN_SERVICE: 'IN_SERVICE',
  FINISHED: 'FINISHED',
});

export class Ticket {
  constructor(number, status = TicketStatus.WAITING, createdAt = new Date()) {
    this.number = number;
    this.status = status;
    this.createdAt = createdAt;
  }
}

export class QueueManager {
  constructor() {
    this.tickets = [];
    this.nextNumber = 1;
  }

  createTicket() {
    const ticket = new Ticket(this.nextNumber, TicketStatus.WAITING, new Date());
    this.tickets.push(ticket);
    this.nextNumber += 1;
    return ticket;
  }

  getNext() {
    const hasActiveTicket = this.tickets.some((ticket) => ticket.status === TicketStatus.IN_SERVICE);
    if (hasActiveTicket) {
      return null;
    }

    const waitingTicket = this.tickets.find((ticket) => ticket.status === TicketStatus.WAITING);
    if (!waitingTicket) {
      return null;
    }

    waitingTicket.status = TicketStatus.IN_SERVICE;
    return waitingTicket;
  }

  finishTicket(number) {
    const ticket = this.tickets.find((item) => item.number === number);
    if (!ticket) {
      throw new Error(`Ticket ${number} not found.`);
    }

    if (ticket.status !== TicketStatus.IN_SERVICE) {
      throw new Error(`Ticket ${number} is not in service.`);
    }

    ticket.status = TicketStatus.FINISHED;
    return ticket;
  }
}

export const QueueService = QueueManager;

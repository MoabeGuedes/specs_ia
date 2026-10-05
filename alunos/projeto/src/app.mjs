import { QueueManager, TicketStatus } from './domain.mjs';

const queue = new QueueManager();

const emitButton = document.querySelector('#emit-ticket-button');
const nextButton = document.querySelector('#next-ticket-button');
const finishButton = document.querySelector('#finish-ticket-button');
const finishInput = document.querySelector('#finish-number-input');
const statusMessage = document.querySelector('#status-message');
const activeTicket = document.querySelector('#active-ticket');
const waitingList = document.querySelector('#waiting-list');
const finishedList = document.querySelector('#finished-list');

function renderQueue() {
  const active = queue.tickets.find((ticket) => ticket.status === TicketStatus.IN_SERVICE) ?? null;
  const waiting = queue.tickets.filter((ticket) => ticket.status === TicketStatus.WAITING);
  const finished = queue.tickets.filter((ticket) => ticket.status === TicketStatus.FINISHED);

  activeTicket.textContent = active ? `Senha ${active.number}` : 'Nenhuma senha em atendimento.';

  waitingList.innerHTML = waiting.length
    ? waiting.map((ticket) => `<li>Senha ${ticket.number}</li>`).join('')
    : '<li>Nenhuma senha aguardando.</li>';

  finishedList.innerHTML = finished.length
    ? finished.map((ticket) => `<li>Senha ${ticket.number}</li>`).join('')
    : '<li>Nenhuma senha finalizada.</li>';

  nextButton.disabled = !waiting.length || Boolean(active);
}

function showMessage(message) {
  statusMessage.textContent = message;
}

emitButton.addEventListener('click', () => {
  const ticket = queue.createTicket();
  showMessage(`Senha ${ticket.number} emitida.`);
  renderQueue();
});

nextButton.addEventListener('click', () => {
  const nextTicket = queue.getNext();

  if (!nextTicket) {
    showMessage('Não há senha aguardando para chamar.');
    renderQueue();
    return;
  }

  showMessage(`Senha ${nextTicket.number} chamada para atendimento.`);
  renderQueue();
});

finishButton.addEventListener('click', () => {
  const value = finishInput.value.trim();

  if (!value) {
    showMessage('Informe o número da senha para finalizar o atendimento.');
    return;
  }

  const number = Number.parseInt(value, 10);

  try {
    const ticket = queue.finishTicket(number);
    finishInput.value = '';
    showMessage(`Atendimento da senha ${ticket.number} finalizado.`);
    renderQueue();
  } catch (error) {
    showMessage(error instanceof Error ? error.message : 'Não foi possível finalizar o atendimento.');
    renderQueue();
  }
});

renderQueue();

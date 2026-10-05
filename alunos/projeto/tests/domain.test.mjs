import test from 'node:test';
import assert from 'node:assert/strict';

import { QueueManager, TicketStatus } from '../src/domain.mjs';

test('AC-01: createTicket emits the first ticket with number 1 and WAITING status', () => {
  const queue = new QueueManager();
  const ticket = queue.createTicket();

  assert.equal(ticket.number, 1);
  assert.equal(ticket.status, TicketStatus.WAITING);
});

test('AC-02: successive tickets keep the session numbering sequence', () => {
  const queue = new QueueManager();

  const first = queue.createTicket();
  const second = queue.createTicket();
  const third = queue.createTicket();

  assert.deepEqual([first.number, second.number, third.number], [1, 2, 3]);
  assert.equal(first.status, TicketStatus.WAITING);
  assert.equal(second.status, TicketStatus.WAITING);
  assert.equal(third.status, TicketStatus.WAITING);
});

test('AC-03: getNext selects the first waiting ticket and moves it to IN_SERVICE', () => {
  const queue = new QueueManager();
  queue.createTicket();
  queue.createTicket();

  const ticket = queue.getNext();

  assert.equal(ticket.number, 1);
  assert.equal(ticket.status, TicketStatus.IN_SERVICE);
});

test('AC-04: getNext returns null when there is no waiting ticket', () => {
  const queue = new QueueManager();

  assert.equal(queue.getNext(), null);
});

test('AC-05: only one ticket can be in service at a time', () => {
  const queue = new QueueManager();
  queue.createTicket();
  queue.createTicket();

  const active = queue.getNext();
  const next = queue.getNext();

  assert.equal(active.number, 1);
  assert.equal(active.status, TicketStatus.IN_SERVICE);
  assert.equal(next, null);
});

test('AC-06: finishTicket finalizes the active ticket', () => {
  const queue = new QueueManager();
  queue.createTicket();
  queue.getNext();

  const finished = queue.finishTicket(1);

  assert.equal(finished.number, 1);
  assert.equal(finished.status, TicketStatus.FINISHED);
});

test('AC-07: finishTicket rejects invalid or inactive tickets without changing the queue state', () => {
  const queue = new QueueManager();
  queue.createTicket();

  assert.throws(() => queue.finishTicket(99), /not found|in service|active/i);
  assert.throws(() => queue.finishTicket(1), /not found|in service|active/i);
  assert.equal(queue.getNext(), null);
});

// Ticket management utilities using localStorage
const TICKETS_KEY = 'ticketapp_tickets';

// Initialize with some sample tickets if none exist
const initializeTickets = () => {
  const existing = localStorage.getItem(TICKETS_KEY);
  if (!existing) {
    // Initialize with an empty array instead of sample tickets
    localStorage.setItem(TICKETS_KEY, JSON.stringify([]));
  }
};

export const ticketService = {
  // Get all tickets
  getAll: () => {
    initializeTickets();
    const tickets = localStorage.getItem(TICKETS_KEY);
    return tickets ? JSON.parse(tickets) : [];
  },

  // Get single ticket by ID
  getById: (id) => {
    const tickets = ticketService.getAll();
    return tickets.find(t => t.id === parseInt(id));
  },

  // Create new ticket
  create: (ticketData) => {
    // Validation
    if (!ticketData.title || !ticketData.title.trim()) {
      throw new Error('Title is required');
    }

    if (!ticketData.status) {
      throw new Error('Status is required');
    }

    if (!['open', 'in_progress', 'closed'].includes(ticketData.status)) {
      throw new Error('Invalid status. Must be: open, in_progress, or closed');
    }

    const tickets = ticketService.getAll();
    const newTicket = {
      id: Date.now(),
      title: ticketData.title.trim(),
      description: ticketData.description?.trim() || '',
      status: ticketData.status,
      priority: ticketData.priority || 'medium',
      createdAt: new Date().toISOString()
    };

    tickets.push(newTicket);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
    return newTicket;
  },

  // Update existing ticket
  update: (id, ticketData) => {
    // Validation
    if (!ticketData.title || !ticketData.title.trim()) {
      throw new Error('Title is required');
    }

    if (!ticketData.status) {
      throw new Error('Status is required');
    }

    if (!['open', 'in_progress', 'closed'].includes(ticketData.status)) {
      throw new Error('Invalid status. Must be: open, in_progress, or closed');
    }

    const tickets = ticketService.getAll();
    const index = tickets.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
      throw new Error('Ticket not found');
    }

    tickets[index] = {
      ...tickets[index],
      title: ticketData.title.trim(),
      description: ticketData.description?.trim() || '',
      status: ticketData.status,
      priority: ticketData.priority || 'medium',
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
    return tickets[index];
  },

  // Delete ticket
  delete: (id) => {
    const tickets = ticketService.getAll();
    const filtered = tickets.filter(t => t.id !== parseInt(id));
    localStorage.setItem(TICKETS_KEY, JSON.stringify(filtered));
  },

  // Get statistics
  getStats: () => {
    const tickets = ticketService.getAll();
    const total = tickets.length;
    const open = tickets.filter(t => t.status === 'open').length;
    const inProgress = tickets.filter(t => t.status === 'in_progress').length;
    const closed = tickets.filter(t => t.status === 'closed').length;

    const calculatePercentage = (count, total) => {
      if (total === 0) {
        return 0;
      }
      return Math.round((count / total) * 100);
    };

    return {
      total,
      open,
      inProgress,
      closed,
      openPercentage: calculatePercentage(open, total),
      inProgressPercentage: calculatePercentage(inProgress, total),
      closedPercentage: calculatePercentage(closed, total),
    };
  }
};


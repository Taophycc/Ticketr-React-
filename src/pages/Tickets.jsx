import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../utils/auth';
import { ticketService } from '../utils/tickets';
import Toast from '../components/Toast';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

const Tickets = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [toast, setToast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [currentTicket, setCurrentTicket] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', status: 'open', priority: 'medium' });
  const [errors, setErrors] = useState({});

  const location = useLocation();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    loadTickets();

    if (location.state?.openCreateModal) {
      openCreateModal();
    }
  }, []);

  const loadTickets = () => {
    const allTickets = ticketService.getAll();
    setTickets(allTickets);
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  const openCreateModal = () => {
    setModalMode('create');
    setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
    setErrors({});
    setShowModal(true);
  };

  const openEditModal = (ticket) => {
    setModalMode('edit');
    setCurrentTicket(ticket);
    setFormData({ title: ticket.title, description: ticket.description || '', status: ticket.status, priority: ticket.priority || 'medium' });
    setErrors({});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTicket(null);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.status) newErrors.status = 'Status is required';
    if (!['open', 'in_progress', 'closed'].includes(formData.status)) newErrors.status = 'Invalid status value';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      if (modalMode === 'create') {
        ticketService.create(formData);
        setToast({ message: 'Ticket created successfully!', type: 'success' });
      } else {
        ticketService.update(currentTicket.id, formData);
        setToast({ message: 'Ticket updated successfully!', type: 'success' });
      }
      loadTickets();
      closeModal();
    } catch (error) {
      setToast({ message: error.message, type: 'error' });
    }
  };

  const handleDelete = (ticket) => setDeleteConfirm(ticket);

  const confirmDelete = () => {
    try {
      ticketService.delete(deleteConfirm.id);
      setToast({ message: 'Ticket deleted successfully!', type: 'success' });
      loadTickets();
      setDeleteConfirm(null);
    } catch (error) {
      setToast({ message: error.message, type: 'error' });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-status-open';
      case 'in_progress': return 'bg-status-progress';
      case 'closed': return 'bg-status-closed';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'in_progress': return 'In Progress';
      case 'closed': return 'Closed';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-lg md:text-2xl font-bold text-primary dark:text-indigo-400 hover:text-primary-light transition">
              TicketFlow
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-300">Welcome, <strong>{user?.name || 'User'}</strong></span>
              <div className="border-l border-gray-300 dark:border-gray-600 h-6"></div>
              <ThemeToggle />
              <button
                onClick={handleLogout}
                className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container mx-auto px-4 py-12">
        <Link to="/dashboard" className="text-primary dark:text-indigo-400 hover:text-primary-light dark:hover:text-indigo-300 font-semibold inline-block mb-4 transition">
          &larr; Back to Dashboard
        </Link>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="md:text-4xl text-xl font-bold text-gray-900 dark:text-white mb-2">Ticket Management</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Create, view, edit, and delete tickets</p>
          </div>
          <button onClick={openCreateModal} className="bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-primary-light transition focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50">
            + Create Ticket
          </button>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-lg text-center">
            <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 576 512">
              <path d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tickets yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Get started by creating your first ticket</p>
            <button onClick={openCreateModal} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50">
              Create Your First Ticket
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map(ticket => (
              <div key={ticket.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <span className={`${getStatusColor(ticket.status)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>{getStatusLabel(ticket.status)}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">#{ticket.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ticket.title}</h3>
                {ticket.description && <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{ticket.description}</p>}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="capitalize">Priority: {ticket.priority}</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => openEditModal(ticket)} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Edit</button>
                  <button onClick={() => handleDelete(ticket)} className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{modalMode === 'create' ? 'Create New Ticket' : 'Edit Ticket'}</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white focus:outline-none" aria-label="Close modal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Title <span className="text-red-500">*</span></label>
                  <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-400 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:placeholder-gray-400 ${errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Enter ticket title" aria-invalid={!!errors.title} />
                  {errors.title && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.title}</p>}
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Description</label>
                  <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-400 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:placeholder-gray-400" placeholder="Enter ticket description (optional)"></textarea>
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Status <span className="text-red-500">*</span></label>
                  <select id="status" name="status" value={formData.status} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-400 focus:border-transparent transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.status ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} aria-invalid={!!errors.status}>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  {errors.status && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.status}</p>}
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Priority</label>
                  <select id="priority" name="priority" value={formData.priority} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-400 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={closeModal} className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">Cancel</button>
                  <button type="submit" className="flex-1 bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-light transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">{modalMode === 'create' ? 'Create' : 'Update'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Delete Ticket</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Are you sure you want to delete "<strong>{deleteConfirm.title}</strong>"? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">Cancel</button>
                <button onClick={confirmDelete} className="flex-1 bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Tickets;

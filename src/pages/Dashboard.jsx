import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../utils/auth";
import { ticketService } from "../utils/tickets";
import Footer from "../components/Footer";
import SkeletonCard from "../components/SkeletonCard";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);

      const ticketStats = ticketService.getStats();
      setStats(ticketStats);

      setLoading(false);
    }, 700);
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="md:text-2xl text-lg font-bold text-primary dark:text-indigo-400 transition"
            >
              Ticketr
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 dark:text-gray-300">
                Welcome, <strong>{user?.name || "User"}</strong>
              </span>
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

      {/* Main Content */}
      <main className="max-w-container mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Overview of your ticket management system
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {/* Total Tickets */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">
                  Total Tickets
                </h3>
                <p className="text-3xl font-bold text-primary dark:text-indigo-400">
                  {stats.total}
                </p>
              </div>

              {/* Open Tickets */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-status-open rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 5.25c0-.966.784-1.75 1.75-1.75h15a1.75 1.75 0 011.75 1.75v13.5a1.75 1.75 0 01-1.75 1.75h-15a1.75 1.75 0 01-1.75-1.75V5.25zm18.56 1.28a.75.75 0 00-1.06-1.06L12 12.94 4.53 5.47a.75.75 0 00-1.06 1.06l7.5 7.5a.75.75 0 001.06 0l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">
                  Open Tickets
                </h3>
                <p className="text-3xl font-bold text-status-open">
                  {stats.open}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stats.openPercentage}% of total
                </p>
              </div>

              {/* In Progress Tickets */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-status-progress rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">
                  In Progress
                </h3>
                <p className="text-3xl font-bold text-status-progress">
                  {stats.inProgress}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stats.inProgressPercentage}% of total
                </p>
              </div>

              {/* Closed Tickets */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-status-closed rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1">
                  Resolved Tickets
                </h3>
                <p className="text-3xl font-bold text-status-closed">
                  {stats.closed}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stats.closedPercentage}% of total
                </p>
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <p className="mb-6 text-indigo-100">
            Manage your tickets efficiently with our comprehensive tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/tickets"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              View All Tickets
            </Link>
            <Link
              to="/tickets/new"
              state={{ openCreateModal: true }}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition text-center focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Create New Ticket
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;

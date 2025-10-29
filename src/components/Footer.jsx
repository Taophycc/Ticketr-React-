import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm py-12 px-6">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-indigo-400">
              <a href="/">TicketFlow</a>
            </h3>
            <p>
              Streamline your ticket management with our powerful and intuitive
              platform.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-primary dark:hover:text-white transition hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/auth/login"
                  className="hover:text-primary dark:hover:text-white transition hover:underline"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-primary dark:hover:text-white transition hover:underline"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h4>
            <p>
              Email: support@ticketflow.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TicketFlow. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.x.com/taophyc_"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.452.23-2.224.084.626 1.956 2.444 3.379 4.6 3.419-1.625 1.278-3.688 2.038-5.923 2.038-.384 0-.76-.022-1.129-.065 2.099 1.354 4.608 2.148 7.32 2.148 8.778 0 13.59-7.278 13.59-13.59 0-.207-.005-.412-.013-.617a9.717 9.717 0 002.383-2.48z" />
              </svg>
            </a>
            <a
              href="https://www.github.com/taophycc"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/taofeek-kassim"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      {/* Hero Section with Wave Background */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
        {/* Decorative Circle - Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="white" opacity="0.3"/>
            <circle cx="100" cy="100" r="60" fill="white" opacity="0.2"/>
            <circle cx="100" cy="100" r="40" fill="white" opacity="0.1"/>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-4 pt-48 pb-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to TicketFlow
            </h1>
            <p className="text-lg md:text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
              Streamline your ticket management with our powerful, intuitive platform. 
              Track, manage, and resolve tickets efficiently.
            </p>
          </div>
        </div>

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
            <path className="fill-gray-50 dark:fill-gray-900" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Why Choose TicketFlow?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Box 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Easy Ticket Management</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Create, update, and track tickets with an intuitive interface designed for efficiency.
            </p>
          </div>

          {/* Feature Box 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Real-time Analytics</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get insights into your ticket pipeline with comprehensive dashboard statistics.
            </p>
          </div>

          {/* Feature Box 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Secure & Reliable</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Your data is protected with industry-standard security practices and reliable infrastructure.
            </p>
          </div>
        </div>

        {/* Decorative Circle - Bottom Left */}
        <div className="relative mt-16">
          <div className="absolute bottom-0 left-0 w-48 h-48 -ml-24 -mb-24 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#4F46E5"/>
              <circle cx="100" cy="100" r="60" fill="#6366F1"/>
              <circle cx="100" cy="100" r="40" fill="#818CF8"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join thousands of teams already using TicketFlow to streamline their workflow.
          </p>
          <Link 
            to="/auth/signup"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 dark:hover:bg-gray-200"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">MyWebDev</h2>
            <p className="mt-2 text-sm">
              Solusi profesional untuk website impian kamu. Desain, pengembangan, dan dukungan teknis.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: support@mywebdev.com</p>
            <p className="text-sm">WhatsApp: +62 812 3456 7890</p>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 text-center py-3 text-sm">
          © {new Date().getFullYear()} MyWebDev. All rights reserved.
        </div>
      </footer>
    );
  }
  
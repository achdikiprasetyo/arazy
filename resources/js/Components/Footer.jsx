export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 mt-10">

        <div className="bg-gray-200 dark:bg-gray-700 text-center py-3 text-sm">
          © {new Date().getFullYear()} Arazy. All rights reserved.
        </div>
      </footer>
    );
  }
  
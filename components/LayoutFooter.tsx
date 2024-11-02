export default function LayoutFooter() {
  return (
    <footer className="bg-gray-500 text-white p-4">
      <div className="max-w-7xl mx-auto border-t border-gray-600 pt-4">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}

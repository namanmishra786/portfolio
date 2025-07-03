export default function Footer() {
  return (
    <footer
      className="px-8 py-12 text-center text-gray-500 text-sm"
      data-aos="fade-up"
    >
      © {new Date().getFullYear()} Naman — Built with ☕ & a hint of chaos.
    </footer>
  );
}

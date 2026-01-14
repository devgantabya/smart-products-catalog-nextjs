export default function Footer() {
  return (
    <footer className="py-10 text-center opacity-70">
      <div className="max-w-7xl mx-auto">
        © {new Date().getFullYear()} Smart Product Catalog. All rights reserved.
      </div>
    </footer>
  );
}

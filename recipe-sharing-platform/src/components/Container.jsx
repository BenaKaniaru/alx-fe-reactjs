export default function Container({ children }) {
  return (
    <div className="grid gap-4 px-16 py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

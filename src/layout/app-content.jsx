export default function AppContent({ children }) {
  return (
    <main className="flex-1 p-6 mt-4 bg-background">
      {children}
    </main>
  )
}
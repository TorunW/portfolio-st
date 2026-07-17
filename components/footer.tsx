export default function Footer() {
  return (
    <footer className='relative z-10 flex flex-col items-center justify-between gap-3 border-t border-bdr px-6 py-8 text-[11px] tracking-[0.05em] text-muted md:flex-row md:px-10'>
      <span>© {new Date().getFullYear()} Torun Wikström</span>
      <span className='text-bdr'>{'///'}</span>
      <span>Designed &amp; built by hand</span>
    </footer>
  );
}

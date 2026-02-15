export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-silver/10 py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-heading text-xs tracking-[0.3em] text-text-muted uppercase">
          Bartlett Labs
        </span>
        <span className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Bartlett Labs LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

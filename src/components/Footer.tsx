const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="font-mono text-sm text-muted-foreground mb-2">
        Powered by Java. Strengthened by DSA. Tuned by phonk.
      </p>
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Mohit Kumar. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

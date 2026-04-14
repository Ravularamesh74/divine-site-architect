import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="MaplePeak" className="h-10 w-10 rounded-full object-cover border-2 border-primary/30" />
              <span className="text-lg font-display font-bold text-gradient-gold">MaplePeak Staffing</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Premium staffing solutions connecting top talent with organizations across Canada and the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+916309503257" className="block hover:text-primary transition-colors">+91 6309503257</a>
              <a href="mailto:[EMAIL_ADDRESS]" className="block hover:text-primary transition-colors">[EMAIL_ADDRESS]</a>
              <p>Canada & United States</p>
            </div>
          </div>
        </div>

        <div className="section-divider w-full mb-8" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MaplePeak Staffing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

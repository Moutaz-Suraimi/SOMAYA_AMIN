import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.19 8.19 0 004.77 1.53V6.81a4.84 4.84 0 01-1-.12z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SOMAYA AMIN</h3>
            <p className="text-earth-foreground/70 text-sm leading-relaxed mb-4">
              قائدة أعمال في DXN، ملهمة ومدربة تساعدك على بناء دخل مستدام وتحقيق الحرية المالية.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-earth-foreground/70 hover:text-earth-foreground transition-colors">الرئيسية</Link>
              <Link to="/about" className="text-earth-foreground/70 hover:text-earth-foreground transition-colors">من نحن</Link>
              <Link to="/opportunity" className="text-earth-foreground/70 hover:text-earth-foreground transition-colors">الفرصة</Link>
              <Link to="/training" className="text-earth-foreground/70 hover:text-earth-foreground transition-colors">التدريب</Link>
              <Link to="/contact" className="text-earth-foreground/70 hover:text-earth-foreground transition-colors">تواصل معنا</Link>
              <a href="https://www.dxnarabia.com/pws/820459279" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-earth-foreground transition-colors font-bold">سجّل في DXN الآن</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <p className="text-sm text-earth-foreground/70 mb-2">واتساب: +967 734 471 621</p>
            <a
              href="https://wa.me/967734471621?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D9%86%D8%B6%D9%85%D8%A7%D9%85%20%D8%A5%D9%84%D9%89%20%D9%81%D8%B1%D9%8A%D9%82%20SOMAYA%20AMIN%20ALI%20AL%20NOZAILY%20%D9%81%D9%8A%20DXN%20%D9%88%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
        <div className="border-t border-earth-foreground/20 mt-8 pt-6 text-center text-xs text-earth-foreground/50 flex items-center justify-center gap-1">
          <span>صنع بـ</span>
          <Heart size={12} className="fill-accent text-accent" />
          <span>SOMAYA AMIN × DXN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

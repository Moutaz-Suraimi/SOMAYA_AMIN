import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import { Star, Globe, Leaf, TrendingUp, Home, Clock, Users, BookOpen, Award, DollarSign, Instagram, Facebook, ExternalLink } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/967734471621?text=" + encodeURIComponent("السلام عليكم، أرغب في الانضمام إلى فريق SOMAYA AMIN في DXN وأريد معرفة التفاصيل.");
const DXN_REGISTER_URL = "https://www.dxnarabia.com/pws/820459279";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.19 8.19 0 004.77 1.53V6.81a4.84 4.84 0 01-1-.12z" />
  </svg>
);

const benefits = [
  { icon: DollarSign, title: "بدون رأس مال كبير", desc: "ابدأ مشروعك بأقل تكلفة ممكنة" },
  { icon: Home, title: "اعمل من المنزل", desc: "لا تحتاج لمكتب أو موقع" },
  { icon: Clock, title: "ساعات مرنة", desc: "أنت تختار وقتك" },
  { icon: Users, title: "تدريب وإرشاد", desc: "فريق دعم متكامل" },
  { icon: TrendingUp, title: "دخل سلبي", desc: "ابنِ دخلاً مستداماً" },
  { icon: Award, title: "تطوير قيادي", desc: "طوّر مهاراتك القيادية" },
];

const testimonials = [
  {
    name: "أم محمد",
    role: "ربة منزل",
    text: "بفضل الله ثم بفضل فريق سمية، تمكنت من بناء دخل إضافي وأنا في منزلي. DXN غيّرت حياتي بالكامل!",
  },
  {
    name: "أحمد العمري",
    role: "طالب جامعي",
    text: "بدأت مع DXN وأنا طالب، والآن أحقق دخلاً يفوق راتب موظف. التدريب والدعم كان مفتاح النجاح.",
  },
  {
    name: "فاطمة الحسني",
    role: "موظفة سابقة",
    text: "تركت وظيفتي وانتقلت لمشروع DXN بدوام كامل. أفضل قرار اتخذته في حياتي!",
  },
];

const products = [
  {
    name: "قهوة لينجزي السوداء",
    desc: "قهوة فاخرة مدعّمة بفطر الجانوديرما الطبيعي لتعزيز الطاقة والتركيز.",
    price: "مناسب للجميع",
    emoji: "☕",
  },
  {
    name: "سبيرولينا DXN",
    desc: "مكمل غذائي طبيعي غني بالبروتينات والفيتامينات لتقوية المناعة.",
    price: "الأكثر مبيعاً",
    emoji: "🌿",
  },
  {
    name: "معجون أسنان جانوزي",
    desc: "معجون أسنان طبيعي بخلاصة الفطر الريشي لعناية فائقة بصحة الفم.",
    price: "للعناية اليومية",
    emoji: "🦷",
  },
  {
    name: "زيت جانو للتدليك",
    desc: "زيت طبيعي مستخلص من الأعشاب لتخفيف التوتر وتجديد النشاط.",
    price: "للاسترخاء",
    emoji: "🧴",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="خلفية طبيعية" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="section-container relative z-10 py-20">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold gradient-gold text-accent-foreground mb-6">
              فرصة العمر مع DXN
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-foreground">
              ابدأ رحلتك نحو{" "}
              <span className="text-gradient-gold">الحرية المالية</span>{" "}
              مع DXN
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              غير حياتك اليوم وابدأ مشروعك بدون رأس مال كبير
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg"
              >
                انضم الآن
              </a>
              <a
                href="/opportunity"
                className="px-8 py-4 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg"
              >
                تعلم كيف تبدأ
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-3 items-center">
              <span className="text-sm text-muted-foreground">تابعنا:</span>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <TikTokIcon size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              من هي <span className="text-primary">SOMAYA AMIN</span>؟
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              قائدة أعمال ومدربة في شركة DXN العالمية، تؤمن بأن كل شخص يستحق فرصة لتغيير حياته. بخبرتها في التسويق الشبكي وقيادة الفرق، ساعدت المئات على بناء دخل مستدام وتحقيق أحلامهم.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              تركز على تمكين المرأة والشباب وبناء قادة حقيقيين في مجال الأعمال.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why DXN */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">لماذا <span className="text-gradient-gold">DXN</span>؟</h2>
            <p className="text-muted-foreground text-lg">شركة عالمية بتاريخ يزيد عن 30 عاماً من النجاح</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "شركة عالمية", desc: "تعمل في أكثر من 180 دولة حول العالم" },
              { icon: Leaf, title: "منتجات طبيعية", desc: "منتجات صحية من الفطر الريشي والأعشاب" },
              { icon: TrendingUp, title: "خطة تعويض قوية", desc: "نظام عمولات ومكافآت مجزية" },
              { icon: Star, title: "سجل حافل", desc: "أكثر من 30 عاماً من النمو المستمر" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DXN Products Section */}
      <section className="py-20 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">منتجات <span className="text-gradient-gold">DXN</span> الصحية</h2>
            <p className="text-muted-foreground text-lg">منتجات طبيعية عالية الجودة من قلب الطبيعة</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="glass-card overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-40 gradient-primary flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {p.emoji}
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent-foreground mb-2">{p.price}</span>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <a
              href={DXN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold gradient-gold text-accent-foreground hover:opacity-90 transition-opacity text-lg"
            >
              <span>تسوّق واشترك في DXN</span>
              <ExternalLink size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 gradient-primary">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">مميزات الانضمام</h2>
            <p className="text-primary-foreground/80 text-lg">كل ما تحتاجه لبناء مستقبلك</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <b.icon size={28} className="text-accent mb-3" />
                <h3 className="font-bold text-lg mb-1 text-primary-foreground">{b.title}</h3>
                <p className="text-sm text-primary-foreground/70">{b.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">شاهد وتعرّف على <span className="text-gradient-gold">DXN</span></h2>
            <p className="text-muted-foreground text-lg">تعرّف أكثر على الفرصة والمنتجات من خلال هذا الفيديو</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-video bg-card">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-XVc3Nn_rcM"
                title="فيديو تعريفي عن DXN"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              أرسل لنا رابط الفيديو الخاص بك لعرضه هنا
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">قصص نجاح ملهمة</h2>
            <p className="text-muted-foreground text-lg">أشخاص عاديون حققوا نتائج استثنائية</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DXN Registration CTA */}
      <section className="py-16 gradient-gold">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent-foreground">
              سجّل الآن في DXN وابدأ مشروعك
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              من خلال رابط التسجيل الرسمي، يمكنك الانضمام لفريق SOMAYA AMIN مباشرة
            </p>
            <a
              href={DXN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold bg-foreground text-background hover:opacity-90 transition-opacity text-lg"
            >
              <span>سجّل من هنا</span>
              <ExternalLink size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-earth">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-earth-foreground">
              قرارك اليوم قد يغير حياتك بالكامل
            </h2>
            <p className="text-earth-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              لا تؤجل مستقبلك. الفرصة أمامك الآن للانضمام إلى مشروع DXN وبناء دخل مستدام تحت إشراف SOMAYA AMIN.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg"
              >
                تواصل عبر واتساب الآن
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold border-2 border-earth-foreground text-earth-foreground hover:bg-earth-foreground hover:text-earth transition-colors text-lg"
              >
                انضم للفريق
              </a>
            </div>
            <p className="text-earth-foreground/60 text-sm">واتساب: +967 734 471 621</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;

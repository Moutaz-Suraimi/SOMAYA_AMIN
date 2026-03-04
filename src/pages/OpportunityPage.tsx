import AnimatedSection from "@/components/AnimatedSection";
import { Layers, Users, TrendingUp, Globe, ArrowLeft, CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/967734471621?text=" + encodeURIComponent("السلام عليكم، أرغب في الانضمام إلى فريق SOMAYA AMIN في DXN وأريد معرفة التفاصيل.");

const steps = [
  { num: "١", title: "التسجيل", desc: "سجّل كعضو في DXN من خلال فريقنا بسهولة تامة" },
  { num: "٢", title: "التعلّم", desc: "احصل على التدريب والمواد التعليمية اللازمة" },
  { num: "٣", title: "البيع المباشر", desc: "ابدأ بتسويق منتجات DXN الصحية الطبيعية" },
  { num: "٤", title: "بناء الفريق", desc: "ادعُ آخرين للانضمام وابنِ شبكتك الخاصة" },
  { num: "٥", title: "النمو", desc: "حقق الترقيات واستفد من خطة التعويض" },
];

const OpportunityPage = () => {
  return (
    <div>
      <section className="py-20 gradient-earth">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-earth-foreground">
              الفرصة التي تنتظرك
            </h1>
            <p className="text-xl text-earth-foreground/80">اكتشف كيف يمكنك بناء دخل مستدام مع DXN</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-foreground">نموذج العمل في DXN</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              تعتمد DXN على نظام البيع المباشر والتسويق الشبكي، حيث يمكنك كسب الدخل من خلال بيع المنتجات مباشرة وبناء فريقك الخاص. كلما نما فريقك وزادت مبيعاته، زاد دخلك بشكل تراكمي.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: Layers, title: "البيع المباشر", desc: "أرباح فورية من كل عملية بيع تقوم بها للمنتجات الصحية" },
              { icon: Users, title: "بناء الفريق", desc: "عمولات مستمرة من مبيعات فريقك على عدة مستويات" },
              { icon: TrendingUp, title: "الترقيات", desc: "نظام ترقيات واضح مع مكافآت وحوافز متصاعدة" },
              { icon: Globe, title: "التوسع الدولي", desc: "إمكانية بناء شبكتك في أكثر من 180 دولة" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-muted/50">
        <div className="section-container max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">كيف تبدأ؟</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0 font-bold text-lg text-accent-foreground">
                  {s.num}
                </div>
                <div className="glass-card p-5 flex-1">
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Income Vision */}
      <section className="py-20">
        <div className="section-container max-w-3xl">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">رؤية الدخل طويل المدى</h2>
            <div className="glass-card p-8 space-y-4">
              {[
                "دخل إضافي يبدأ من الشهر الأول",
                "عمولات تراكمية تنمو مع فريقك",
                "مكافآت شهرية وسنوية للقادة المتميزين",
                "رحلات دولية مجانية كحوافز",
                "بناء إرث مالي يستمر للأجيال",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-right">
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="py-16 gradient-primary">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <p className="text-2xl font-bold text-primary-foreground mb-4">
              "لا تنتظر الظروف المثالية. ابدأ الآن بما لديك، ومن حيث أنت."
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-accent text-accent-foreground hover:opacity-90 transition-opacity text-lg mt-4"
            >
              <span>ابدأ رحلتك اليوم</span>
              <ArrowLeft size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default OpportunityPage;

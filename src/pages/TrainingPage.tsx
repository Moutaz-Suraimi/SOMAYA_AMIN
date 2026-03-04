import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Video, Users, Smartphone, HeartHandshake, Rocket } from "lucide-react";

const features = [
  { icon: Video, title: "تدريب أونلاين", desc: "دورات تدريبية مسجلة ومباشرة تغطي جميع جوانب العمل" },
  { icon: HeartHandshake, title: "إرشاد شخصي", desc: "متابعة فردية من SOMAYA AMIN وفريق القيادة" },
  { icon: BookOpen, title: "نظام خطوة بخطوة", desc: "خطة عمل واضحة ومنهجية مُثبتة للنجاح" },
  { icon: Smartphone, title: "أدوات تسويقية", desc: "محتوى جاهز للنشر وأدوات رقمية لتسهيل عملك" },
  { icon: Users, title: "مجتمع داعم", desc: "مجموعات دعم نشطة وتبادل خبرات مستمر" },
  { icon: Rocket, title: "تطوير مستمر", desc: "ورش عمل ومؤتمرات لتطوير مهاراتك القيادية" },
];

const TrainingPage = () => {
  return (
    <div>
      <section className="py-20 bg-nature text-primary-foreground">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-4">نظام التدريب والدعم</h1>
            <p className="text-xl text-primary-foreground/80">لن تكون وحدك أبداً في هذه الرحلة</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">ماذا ستحصل عليه عند الانضمام؟</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="glass-card p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <f.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="section-container max-w-3xl">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">رحلتك التدريبية</h2>
            <div className="space-y-8 text-right">
              {[
                { week: "الأسبوع الأول", title: "الأساسيات", desc: "فهم المنتجات، نظام العمل، إعداد حساباتك" },
                { week: "الأسبوع الثاني", title: "المبيعات الأولى", desc: "كيف تبيع، كيف تتحدث عن المنتجات، أول عملائك" },
                { week: "الأسبوع الثالث", title: "بناء الفريق", desc: "كيف تدعو الآخرين، فن العرض، التعامل مع الاعتراضات" },
                { week: "الشهر الثاني وما بعده", title: "القيادة والنمو", desc: "تطوير فريقك، الترقيات، استراتيجيات التوسع" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold gradient-gold text-accent-foreground mb-2">
                    {item.week}
                  </span>
                  <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;

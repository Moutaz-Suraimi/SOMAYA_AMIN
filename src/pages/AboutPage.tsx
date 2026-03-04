import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Target, Eye, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary-foreground">
              SOMAYA AMIN
            </h1>
            <p className="text-xl text-primary-foreground/80">قائدة أعمال | مدربة | ملهمة</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="section-container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-foreground">القصة والرحلة</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                بدأت SOMAYA AMIN رحلتها في عالم الأعمال بحثاً عن فرصة تمنحها الاستقلال المالي والقدرة على إحداث تأثير حقيقي في حياة الآخرين. وجدت في DXN المنصة المثالية التي تجمع بين المنتجات الصحية الطبيعية وفرصة بناء عمل مستدام.
              </p>
              <p>
                من خلال الإيمان العميق بقوة التسويق الشبكي وبناء الفرق، استطاعت أن تبني شبكة واسعة من الموزعين والقادة الذين يعملون معاً نحو أهداف مشتركة. رحلتها لم تكن سهلة، لكن الإصرار والتعلم المستمر كانا مفتاح النجاح.
              </p>
              <p>
                اليوم، تكرّس وقتها لتدريب وتوجيه الأعضاء الجدد، مع التركيز بشكل خاص على تمكين المرأة والشباب لبناء مستقبل أفضل.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">الرؤية والقيم</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "الرؤية", desc: "بناء مجتمع من القادة الذين يحققون الحرية المالية من خلال DXN" },
              { icon: Target, title: "المهمة", desc: "تمكين كل شخص طموح من بناء عمله الخاص وتحقيق أحلامه" },
              { icon: Heart, title: "القيم", desc: "النزاهة، التعاون، التطوير المستمر، والعطاء بلا حدود" },
              { icon: Users, title: "القيادة", desc: "القائد الحقيقي هو من يصنع قادة آخرين ويلهمهم للنجاح" },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-8 text-center">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
              "النجاح ليس حكراً على أحد. كل شخص يملك القدرة على تغيير حياته، يحتاج فقط للقرار الصحيح والدعم المناسب."
            </blockquote>
            <p className="text-accent font-bold mt-6">— SOMAYA AMIN</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

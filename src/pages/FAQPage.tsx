import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "هل أحتاج خبرة سابقة؟",
    a: "لا، لا تحتاج لأي خبرة سابقة. نوفر لك تدريباً شاملاً ودعماً مستمراً من اليوم الأول. كل ما تحتاجه هو الرغبة في التعلم والعمل.",
  },
  {
    q: "هل أحتاج رأس مال كبير للبدء؟",
    a: "لا، التسجيل في DXN يتطلب مبلغاً بسيطاً جداً مقارنة بأي مشروع تجاري آخر. يمكنك البدء بشراء حزمة بسيطة من المنتجات واستخدامها شخصياً أو بيعها.",
  },
  {
    q: "هل هو مناسب للنساء؟",
    a: "بالتأكيد! العمل في DXN مناسب جداً للنساء، خاصة ربات البيوت والأمهات. يمكنك العمل من المنزل في أوقاتك المناسبة مع الحفاظ على خصوصيتك.",
  },
  {
    q: "كم يمكنني أن أربح؟",
    a: "الدخل يعتمد على مجهودك وحجم فريقك. هناك أعضاء يحققون دخلاً إضافياً بسيطاً، وهناك قادة يحققون آلاف الدولارات شهرياً. الفرصة مفتوحة للجميع.",
  },
  {
    q: "كيف أبدأ؟",
    a: "الخطوة الأولى هي التواصل معنا عبر واتساب. سنشرح لك كل التفاصيل ونساعدك في التسجيل والبدء فوراً مع الفريق والتدريب.",
  },
  {
    q: "هل أحتاج لترك وظيفتي؟",
    a: "لا، يمكنك البدء بجانب عملك الحالي. الكثير من الأعضاء الناجحين بدأوا بدوام جزئي ثم تفرغوا عندما أصبح دخلهم من DXN يكفيهم.",
  },
  {
    q: "ما هي منتجات DXN؟",
    a: "DXN متخصصة في المنتجات الصحية الطبيعية المبنية على فطر الجانوديرما (الريشي) والسبيرولينا. تشمل المشروبات الصحية، المكملات الغذائية، ومنتجات العناية الشخصية.",
  },
];

const FAQPage = () => {
  return (
    <div>
      <section className="py-20 gradient-gold">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-accent-foreground">الأسئلة الشائعة</h1>
            <p className="text-xl text-accent-foreground/80">كل ما تريد معرفته قبل الانضمام</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <AccordionItem value={`item-${i}`} className="glass-card px-6 border-none">
                  <AccordionTrigger className="text-right font-bold text-foreground hover:no-underline text-base py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;

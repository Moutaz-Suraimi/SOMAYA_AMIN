import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/967734471621?text=" + encodeURIComponent("السلام عليكم، أرغب في الانضمام إلى فريق SOMAYA AMIN في DXN وأريد معرفة التفاصيل.");

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `السلام عليكم، أنا ${formData.name}، رقمي: ${formData.phone}. ${formData.message}`;
    window.open(`https://wa.me/967734471621?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div>
      <section className="py-20 gradient-primary">
        <div className="section-container text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary-foreground">تواصل معنا</h1>
            <p className="text-xl text-primary-foreground/80">نحن هنا لمساعدتك في كل خطوة</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6 text-foreground">ابدأ رحلتك اليوم</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                لا تتردد في التواصل معنا. فريق SOMAYA AMIN جاهز للإجابة على جميع استفساراتك ومساعدتك في الانطلاق.
              </p>

              <div className="space-y-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-5 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">واتساب</p>
                    <p className="text-sm text-muted-foreground">تواصل الآن عبر واتساب</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass-card p-5">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Phone size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">الهاتف</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">+967 734 471 621</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-2">أرسل لنا رسالة</h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">الاسم</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="رقم واتساب"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">الرسالة</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold gradient-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>إرسال عبر واتساب</span>
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Motivational Close */}
      <section className="py-16 bg-muted/50">
        <div className="section-container text-center max-w-2xl">
          <AnimatedSection>
            <p className="text-2xl font-bold text-foreground mb-4">
              "الخطوة الأولى هي الأصعب دائماً، لكنها الأهم"
            </p>
            <p className="text-muted-foreground">
              لا تدع التردد يمنعك من فرصة قد تغير حياتك. تواصل معنا الآن وابدأ رحلتك نحو النجاح.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

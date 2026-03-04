import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/967734471621?text=" + encodeURIComponent("السلام عليكم، أرغب في الانضمام إلى فريق SOMAYA AMIN في DXN وأريد معرفة التفاصيل.");

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all whatsapp-pulse group"
      aria-label="تواصل عبر واتساب"
    >
      <span className="hidden sm:block text-sm font-bold group-hover:block">تواصل الآن عبر واتساب</span>
      <MessageCircle size={24} className="fill-white" />
    </a>
  );
};

export default WhatsAppFloat;

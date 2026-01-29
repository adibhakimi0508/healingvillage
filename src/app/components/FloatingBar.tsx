import { MessageCircle, Instagram } from 'lucide-react';

// TikTok Icon (as lucide-react doesn't have it)
function TikTokIcon() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

export function FloatingBar() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=60194090982&text=HealingVillage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
        style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)' }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/healingvillage.my"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
        style={{ boxShadow: '0 4px 20px rgba(253, 29, 29, 0.3)' }}
        aria-label="Instagram"
      >
        <Instagram className="w-7 h-7 text-white" />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@healingvillage.my"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group active:scale-95"
        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
        aria-label="Share on TikTok"
      >
        <TikTokIcon />
      </a>
    </div>
  );
}
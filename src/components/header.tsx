import Image from "next/image";
import { Briefcase, Code, MapPin, Phone, Globe, Clock, Mail, ArrowUpRight } from "lucide-react";

const socialCards = [
  {
    platform: "X (formerly Twitter)",
    handle: "@sanskar0627",
    href: "https://x.com/sanskar0627",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: "GitHub",
    handle: "sanskar0627",
    href: "https://github.com/sanskar0627",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    handle: "sanskar2003",
    href: "https://linkedin.com/in/sanskar2003",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    platform: "LeetCode",
    handle: "sanskar_2706",
    href: "https://leetcode.com/sanskar_2706",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFA116">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.626a1.317 1.317 0 0 0-1.004.5c-2.512 3.167-2.512 8.328 0 11.495a1.319 1.319 0 0 0 1.004.5l5.405 5.188a1.374 1.374 0 0 0 2.3-1.018v-4.22h.85a1.674 1.674 0 0 0 1.673-1.675v-1.11A1.674 1.674 0 0 0 15.674 14h-.849A1.674 1.674 0 0 0 13.15 12.325v-1.11a1.674 1.674 0 0 0 1.675-1.675V8.43a1.674 1.674 0 0 0-1.675-1.674h.85a1.674 1.674 0 0 0 1.673-1.675v-1.11a1.674 1.674 0 0 0-1.673-1.675h-.85v-4.22a1.374 1.374 0 0 0-1.341-1.373zM5.836 12l5.405-5.187a1.319 1.319 0 0 1 1.004-.5l-5.406 5.187A1.319 1.319 0 0 1 5.836 12zm0 0a1.319 1.319 0 0 1 1.003.5l5.406 5.188a1.319 1.319 0 0 1-1.004.5L5.836 12z"/>
      </svg>
    ),
  },
];

const InfoItem = ({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) => (
  <div className="flex items-center gap-3 text-[13px] text-zinc-400 font-mono tracking-tight">
    <div className="flex w-7 h-7 items-center justify-center bg-[#121214] rounded-md border border-[#27272a] text-zinc-400 shrink-0">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export function Header() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Banner */}
      <div 
        className="w-full h-56 sm:h-64 bg-[#0a0a0a] relative flex items-center justify-center border-b border-[#1e1e24]"
        style={{ 
          backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)', 
          backgroundSize: '24px 24px',
          backgroundPosition: '12px 12px'
        }}
      >
        <span 
          className="text-6xl sm:text-7xl text-zinc-300 opacity-90 select-none pb-4" 
          style={{ fontFamily: 'var(--font-dancing), cursive' }}
        >
          Sanskar Shukla
        </span>
      </div>

      <div className="mx-auto max-w-[1100px] w-full relative z-10 px-6 box-border">
        {/* Profile + Title */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 -mt-16 sm:-mt-20">
          {/* Avatar */}
          <div className="relative w-32 h-32 sm:w-[150px] sm:h-[150px] rounded-full border-[6px] border-[#050505] bg-[#050505] shrink-0 overflow-hidden">
             <Image
               src="/me.png"
               alt="Sanskar Shukla"
               fill
               className="object-cover"
               sizes="(max-width: 768px) 128px, 150px"
               priority
             />
             
             {/* Badge Over Profile */}
             <div className="absolute top-0 left-0 bg-white rounded-sm shadow-sm flex items-center justify-center px-1.5 py-0.5" style={{ zIndex: 10 }}>
               <span className="text-[12px] leading-none">🇮🇳</span>
             </div>
          </div>
          
          {/* Title Text */}
          <div className="pt-4 sm:pt-24 flex-1">
            <div className="text-[#8d8d95] text-xs font-mono mb-1.5">text-3xl text-zinc-50 font-medium</div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-3xl text-zinc-50 font-medium">Sanskar Shukla</h2>
              <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-[20px] h-[20px] text-[#1d9bf0]" fill="currentColor">
                <g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.756 2.76 1.88 3.42-.047.24-.072.49-.072.74 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C9.182 21.585 10.49 22.5 12 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.792 3.918-4 0-.25-.025-.5-.072-.74 1.124-.66 1.88-1.96 1.88-3.42zm-12.722 3.1l-3.328-3.33 1.414-1.41 1.914 1.91 4.586-4.59 1.414 1.41-6 6z"></path></g>
              </svg>
            </div>
            <p className="text-zinc-400 font-mono text-sm tracking-tight">Backend Systems Developer</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 mb-8 border border-[#1e1e24] bg-[#0a0a0a] rounded-2xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex flex-col gap-3.5">
            <InfoItem icon={<Briefcase size={14} />} text="Software Developer" />
            <InfoItem icon={<Code size={14} />} text="SUPER30 - 2.0 @100xDevs" />
            <InfoItem icon={<MapPin size={14} />} text="Delhi, India" />
            <InfoItem icon={<Phone size={14} />} text="+91 9907507343" />
            <InfoItem icon={<Globe size={14} />} text="www.sanskarshukla.com" />
          </div>
          <div className="flex flex-col gap-3.5 justify-end mt-4 md:mt-0">
            <InfoItem icon={<Clock size={14} />} text="17:15 // same time" />
            <InfoItem icon={<Mail size={14} />} text="sanskar0627@gmail.com" />
            <InfoItem 
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                  <circle cx="10" cy="14" r="5"/><line x1="13.54" y1="10.46" x2="21" y2="3"/><polyline points="16 3 21 3 21 8"/>
                </svg>
              } 
              text="he/him" 
            />
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e24] border border-[#1e1e24] overflow-hidden rounded-2xl mb-12">
          {socialCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-5 bg-[#0a0a0a] hover:bg-[#121214] transition-colors group relative"
            >
              <div className="flex items-center justify-center w-[46px] h-[46px] rounded-[14px] border border-[#27272a] bg-[#050505] shrink-0 text-zinc-100">
                {card.icon}
              </div>
              <div className="ml-4 flex-1 mt-0.5">
                <h3 className="text-sm font-medium text-zinc-200 leading-none mb-1.5">{card.platform}</h3>
                <p className="text-[13px] text-zinc-500 leading-none">{card.handle}</p>
              </div>
              <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-zinc-300 transition-colors absolute top-5 right-5" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

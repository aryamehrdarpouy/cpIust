import React from 'react'
import { 
  User, 
  GraduationCap, 
  FlaskConical, 
  BookOpen, 
  ExternalLink, 
  ShieldCheck,
  Building2,
  X
} from 'lucide-react'
import iustLogo from '../assets/iust_logo.png'

export default function Sidebar({ 
  activeSection, 
  setActiveSection, 
  isOpen, 
  onClose 
}) {
  const navItems = [
    {
      id: 'profile',
      label: 'صفحه اصلی و معرفی',
      icon: User,
      targetId: 'section-hero'
    },
    {
      id: 'courses',
      label: 'دروس ارائه شده',
      icon: GraduationCap,
      targetId: 'section-courses'
    },
    {
      id: 'lab',
      label: 'آزمایشگاه و پژوهش‌ها',
      icon: FlaskConical,
      targetId: 'section-lab'
    },
    {
      id: 'publications',
      label: 'مقالات و انتشارات',
      icon: BookOpen,
      targetId: 'section-publications'
    }
  ]

  const handleNavClick = (item) => {
    setActiveSection(item.id)
    const element = document.getElementById(item.targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    if (onClose) onClose()
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Aside element */}
      <aside 
        className={`fixed top-0 right-0 z-50 lg:z-20 h-screen w-[288px] bg-white border-l border-[#DFE0E0] shadow-[0px_1px_8px_rgba(26,9,89,0.04)] flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
        dir="rtl"
      >
        <div>
          {/* Top Brand Header */}
          <div className="h-[64px] bg-[#F2F4F6] border-b border-[#ECEEF0] px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#DFE0E0] flex items-center justify-center p-1 shadow-xs">
                <img 
                  src={iustLogo} 
                  alt="IUST Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[13px] font-bold text-[#191C1E] leading-snug">
                  دانشگاه علم و صنعت ایران
                </span>
                <span className="text-[10px] text-[#616363] leading-snug">
                  سامانه اساتید و اعضای هیئت علمی
                </span>
              </div>
            </div>

            {/* Mobile close button */}
            <button 
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#616363] hover:text-[#191C1E] hover:bg-gray-200 transition"
              aria-label="بستن منو"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4">
            <div className="text-[11px] font-semibold text-[#787581] mb-2 px-3">
              منوی ناوبری اصلی
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                      isActive
                        ? 'bg-[#1A0959] text-white shadow-sm'
                        : 'text-[#484550] hover:bg-[#F2F4F6] hover:text-[#191C1E]'
                    }`}
                  >
                    <IconComponent 
                      size={17} 
                      className={isActive ? 'text-white' : 'text-[#5E549F]'} 
                    />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Student Card */}
        <div className="p-4 border-t border-[#ECEEF0]">
          <div className="bg-[#F7F9FB] border border-[#DFE0E0] rounded-xl p-3.5 shadow-xs">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[10px] font-semibold text-[#616363]">
                کاربر عمومی / دانشجو
              </span>
            </div>
            <div className="text-[12px] font-bold text-[#191C1E] leading-tight">
              پرتال ارتباطی دانشجویان
            </div>
            <div className="text-[10px] text-[#787581] mt-0.5">
              دانشگاه علم و صنعت ایران
            </div>
            <a 
              href="https://golestan.iust.ac.ir" 
              target="_blank" 
              rel="noreferrer"
              className="mt-2.5 flex items-center justify-between text-[11px] text-[#1A0959] hover:underline font-medium pt-2 border-t border-[#DFE0E0]/60"
            >
              <span>ورود به سامانه گلستان</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

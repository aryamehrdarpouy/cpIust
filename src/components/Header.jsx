import React, { useState } from 'react'
import { Search, Bell, HelpCircle, Calendar, Menu, X, Check } from 'lucide-react'
import avatarSmall from '../assets/avatar_small.jpg'

export default function Header({ 
  profile, 
  searchTerm, 
  setSearchTerm, 
  onToggleSidebar, 
  isSidebarOpen 
}) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full h-[64px] bg-[#F7F9FB]/90 backdrop-blur-md border-b border-[#ECEEF0] px-4 md:px-6 flex items-center justify-between transition-all">
      {/* Right side in RTL (User info, actions, search) */}
      <div className="flex items-center gap-3 md:gap-4 flex-1 max-w-3xl">
        {/* Mobile menu trigger */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-[#191C1E] hover:bg-gray-200/60 transition"
          aria-label="منوی سایت"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Profile Card in Header */}
        <div className="hidden sm:flex items-center gap-2.5 bg-white border border-[#DFE0E0] rounded-lg px-2.5 py-1.5 shadow-[0px_1px_3px_rgba(26,9,89,0.04)]">
          <img
            src={avatarSmall}
            alt={profile.fullName}
            className="w-8 h-8 rounded-full object-cover border border-[#DFE0E0]"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className="flex flex-col text-right">
            <span className="text-[12px] font-bold text-[#191C1E] leading-tight">
              {profile.fullName}
            </span>
            <span className="text-[10px] text-[#616363] leading-tight mt-0.5">
              {profile.headerRole}
            </span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden sm:block w-[1px] h-6 bg-[#DFE0E0]" />

        {/* Quick action buttons */}
        <div className="flex items-center gap-1.5">
          {/* Help Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowHelp(!showHelp)
                setShowNotifications(false)
              }}
              title="پشتیبانی سامانه‌ها"
              className="w-9 h-9 rounded-lg bg-white border border-[#DFE0E0] flex items-center justify-center text-[#484550] hover:text-[#1A0959] hover:border-[#1A0959]/30 transition shadow-sm"
              aria-label="پشتیبانی سامانه‌ها"
            >
              <HelpCircle size={18} />
            </button>

            {showHelp && (
              <div className="absolute right-0 top-11 w-64 bg-white border border-[#DFE0E0] rounded-xl shadow-xl p-3 text-right z-50 animate-fadeIn">
                <p className="text-[12px] font-bold text-[#191C1E] mb-1">پشتیبانی و ارتباط با سامانه</p>
                <p className="text-[11px] text-[#616363] mb-2">
                  در صورت بروز اشکال در دسترسی به سامانه LMS یا ایمیل، با مرکز فناوری اطلاعات IUST تماس حاصل فرمایید.
                </p>
                <div className="text-[11px] font-mono text-[#1A0959] bg-[#F2F4F6] p-1.5 rounded">
                  تلفن داخلی: ۴۱۸۰ • it@iust.ac.ir
                </div>
              </div>
            )}
          </div>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications)
                setShowHelp(false)
              }}
              title="اعلان‌ها"
              className="relative w-9 h-9 rounded-lg bg-white border border-[#DFE0E0] flex items-center justify-center text-[#484550] hover:text-[#1A0959] hover:border-[#1A0959]/30 transition shadow-sm"
              aria-label="اعلان‌ها"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#F73846] ring-2 ring-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-11 w-72 bg-white border border-[#DFE0E0] rounded-xl shadow-xl p-3 text-right z-50 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-[#ECEEF0] mb-2">
                  <span className="text-[12px] font-bold text-[#191C1E]">اعلان‌های اخیر</span>
                  <span className="text-[10px] bg-[#E5DEFF] text-[#1A0959] px-1.5 py-0.5 rounded font-medium">۲ جدید</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-[#F7F9FB] hover:bg-[#F2F4F6] transition text-[11px]">
                    <p className="font-semibold text-[#191C1E]">برگزاری جلسه حل تمرین هوش مصنوعی</p>
                    <p className="text-[#616363] text-[10px] mt-0.5">پنج‌شنبه ساعت ۱۶ در سامانه مجازی</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F7F9FB] hover:bg-[#F2F4F6] transition text-[11px]">
                    <p className="font-semibold text-[#191C1E]">تمدید مهلت ارسال رزومه آزمایشگاه NLP</p>
                    <p className="text-[#616363] text-[10px] mt-0.5">تا پایان آبان ماه مهلت ارسال تمدید شد.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجو در دروس، دانشجویان، مقالات..."
            className="w-full h-9 pr-9 pl-4 text-[12px] bg-white border border-[#DFE0E0] rounded-lg text-[#191C1E] placeholder-[#787581] focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] shadow-[0px_1px_2px_rgba(0,0,0,0.03)] transition"
          />
          <Search size={15} className="absolute right-3 top-2.5 text-[#787581]" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute left-2.5 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Left side in RTL (Semester Badge) */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-white border border-[#DFE0E0] rounded-lg px-3 py-1.5 text-[11px] md:text-[12px] font-medium text-[#484550] shadow-[0px_1px_2px_rgba(0,0,0,0.04)]">
          <Calendar size={14} className="text-[#5E549F]" />
          <span>{profile.semester}</span>
        </div>
      </div>
    </header>
  )
}

import React, { useState } from 'react'
import { 
  Send, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Check, 
  Copy,
  ShieldCheck
} from 'lucide-react'
import profPhoto from '../assets/prof_photo.jpg'

export default function FacultyHero({ profile, onOpenContactModal }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section 
      id="section-hero"
      className="bg-white border border-[#DFE0E0] rounded-xl p-5 sm:p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all"
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Right column in RTL: Portrait & Status Pill */}
        <div className="flex flex-col items-center flex-shrink-0 self-center md:self-start">
          <div className="relative w-36 h-36 rounded-xl overflow-hidden border-2 border-[#DFE0E0] shadow-sm bg-gray-100">
            <img
              src={profPhoto}
              alt={profile.fullName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>

          {/* Status Badge below photo */}
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-[#E5DEFF]/50 border border-[#E5DEFF] rounded-full text-[11px] font-semibold text-[#1A0959]">
            <span className="w-2 h-2 rounded-full bg-[#1A0959]"></span>
            <span>{profile.facultyStatus}</span>
          </div>
        </div>

        {/* Left column in RTL: Bio, Name, Badges, Action Row */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Name & Academic Rank Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[24px] sm:text-[28px] font-bold text-[#191C1E] leading-tight">
                {profile.fullName}
              </h1>
              <span className="px-2.5 py-1 bg-[#E6E8EA] text-[#191C1E] rounded-md text-[12px] font-semibold tracking-wide">
                {profile.academicRank}
              </span>
            </div>

            {/* Department line */}
            <div className="text-[13px] sm:text-[14px] font-bold text-[#5E549F] mt-1.5 flex items-center gap-1.5">
              <span>{profile.department}</span>
            </div>

            {/* Bio paragraph */}
            <p className="text-[13px] sm:text-[14px] text-[#484550] leading-relaxed mt-3 text-justify">
              {profile.bio}
            </p>
          </div>

          {/* Action Row / Contact Info Pills */}
          <div className="mt-5 pt-4 border-t border-[#ECEEF0] flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Primary Action Button */}
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A0959] hover:bg-[#120640] text-white rounded-lg text-[13px] font-semibold shadow-sm transition active:scale-95"
            >
              <Send size={15} />
              <span>ارسال پیام و هماهنگی</span>
            </button>

            {/* Email Pill with Copy */}
            <div className="relative group">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-50 border border-[#DFE0E0] rounded-lg text-[12px] text-[#191C1E] transition font-mono"
                title="کلیک برای کپی ایمیل"
              >
                {copied ? (
                  <Check size={14} className="text-[#10B981]" />
                ) : (
                  <Mail size={14} className="text-[#5E549F]" />
                )}
                <span>{profile.email}</span>
                <span className="text-[10px] text-gray-400 font-sans mr-1">
                  {copied ? '(کپی شد)' : ''}
                </span>
              </button>
            </div>

            {/* Office Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F2F4F6] border border-[#DFE0E0] rounded-lg text-[12px] text-[#484550]">
              <MapPin size={14} className="text-[#5E549F]" />
              <span>{profile.office}</span>
            </div>

            {/* Lab Website Link */}
            <a
              href={profile.labUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F7F9FB] hover:bg-[#E5DEFF]/40 border border-[#DFE0E0] rounded-lg text-[12px] text-[#1A0959] font-medium transition"
            >
              <ExternalLink size={14} className="text-[#5E549F]" />
              <span>{profile.labName}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

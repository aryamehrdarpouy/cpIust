import React from 'react'
import { Clock, Video, CheckCircle, Info } from 'lucide-react'

export default function OfficeHoursCard({ officeHours, onBookMeet }) {
  return (
    <div className="bg-white border border-[#DFE0E0] rounded-xl p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECEEF0] mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
          <Clock size={18} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-[#191C1E]">
            {officeHours.title}
          </h3>
          <p className="text-[11px] text-[#616363]">
            {officeHours.location}
          </p>
        </div>
      </div>

      {/* Dark Purple Status Banner */}
      <div className="bg-[#1A0959] text-white rounded-xl p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-medium text-white/80">
            وضعیت فعلی دفتر:
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-[11px] font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
            <span>{officeHours.currentStatus}</span>
          </span>
        </div>
        <p className="text-[11.5px] text-white/85 leading-relaxed text-justify">
          {officeHours.guidanceText}
        </p>
      </div>

      {/* Schedule Slots */}
      <div className="space-y-2.5 mb-4">
        {officeHours.slots.map((slot) => (
          <div
            key={slot.id}
            className="flex items-center justify-between p-2.5 rounded-lg border border-[#DFE0E0] bg-[#F7F9FB] text-[12px]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A0959]"></span>
              <span className="font-semibold text-[#191C1E]">{slot.day}</span>
            </div>
            <div className="font-medium text-[#484550]">
              {slot.time}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="flex items-start gap-1.5 text-[11px] text-[#616363] bg-[#F2F4F6] p-2.5 rounded-lg border border-[#ECEEF0]">
        <Info size={14} className="text-[#5E549F] flex-shrink-0 mt-0.5" />
        <span>{officeHours.footerNote}</span>
      </div>
    </div>
  )
}

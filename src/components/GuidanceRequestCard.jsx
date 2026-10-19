import React from 'react'
import { FileEdit, AlertCircle, CheckCircle } from 'lucide-react'

export default function GuidanceRequestCard({ guidance, onOpenGuidanceModal }) {
  return (
    <div className="bg-white border border-[#DFE0E0] rounded-xl p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-[#ECEEF0] mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
          <FileEdit size={18} />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-[#191C1E]">
            {guidance.title}
          </h3>
          <p className="text-[11px] text-[#616363]">
            {guidance.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[12px] text-[#484550] leading-relaxed text-justify mb-4">
        {guidance.description}
      </p>

      {/* Primary Action Button */}
      <button
        onClick={onOpenGuidanceModal}
        className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1A0959] hover:bg-[#120640] text-white rounded-lg text-[13px] font-bold shadow-sm transition active:scale-[0.98] mb-4"
      >
        <FileEdit size={16} />
        <span>{guidance.buttonText}</span>
      </button>

      {/* Notice Box */}
      <div className="p-3 bg-[#F2F4F6] border border-[#DFE0E0] rounded-lg">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#191C1E] mb-1.5">
          <AlertCircle size={14} className="text-[#5E549F]" />
          <span>نکات مهم برای متقاضیان:</span>
        </div>
        <ul className="space-y-1 text-[11px] text-[#484550] pr-1">
          {guidance.notices.map((notice, idx) => (
            <li key={idx} className="flex items-start gap-1 leading-snug">
              <span>{notice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

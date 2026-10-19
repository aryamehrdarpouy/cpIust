import React from 'react'
import { FlaskConical, ArrowLeft, Users, Sparkles } from 'lucide-react'

export default function ResearchLabSection({ researchLab, onApply }) {
  return (
    <section 
      id="section-lab"
      className="bg-white border border-[#DFE0E0] rounded-xl p-5 sm:p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ECEEF0] mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
            <FlaskConical size={18} />
          </div>
          <h2 className="text-[17px] sm:text-[19px] font-bold text-[#191C1E]">
            {researchLab.title}
          </h2>
        </div>

        <span className="px-2.5 py-1 bg-[#E5DEFF] text-[#1A0959] rounded-md text-[11px] font-bold border border-[#E5DEFF]">
          {researchLab.badge}
        </span>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#484550] leading-relaxed text-justify mb-5">
        {researchLab.description}
      </p>

      {/* Positions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchLab.positions.map((pos) => (
          <div
            key={pos.id}
            className="p-4 rounded-xl border border-[#DFE0E0] bg-[#F7F9FB]/60 hover:bg-[#F2F4F6] hover:border-[#1A0959]/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1A0959]"></span>
                <h3 className="text-[14px] font-bold text-[#191C1E]">
                  {pos.title}
                </h3>
              </div>
              <p className="text-[12px] text-[#484550] leading-relaxed text-justify">
                {pos.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DFE0E0] flex items-center justify-between text-[11px]">
              <span className="font-semibold text-[#616363]">
                {pos.capacity}
              </span>
              <button
                onClick={() => onApply(pos.title)}
                className="inline-flex items-center gap-1 font-bold text-[#1A0959] hover:text-[#5E549F] transition"
              >
                <span>ارسال رزومه</span>
                <ArrowLeft size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

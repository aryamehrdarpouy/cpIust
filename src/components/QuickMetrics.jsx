import React from 'react'
import { GraduationCap, FileText, Users, Briefcase } from 'lucide-react'

export default function QuickMetrics({ metrics }) {
  const iconMap = {
    GraduationCap,
    FileText,
    Users,
    Briefcase
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
      {metrics.map((item) => {
        const IconComponent = iconMap[item.icon] || FileText
        return (
          <div
            key={item.id}
            className="bg-white border border-[#DFE0E0] rounded-xl p-4 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200 flex items-center justify-between"
          >
            <div>
              <div className="text-[12px] font-medium text-[#616363]">
                {item.title}
              </div>
              <div className="text-[16px] sm:text-[18px] font-bold text-[#191C1E] mt-1">
                {item.value}
              </div>
            </div>

            <div className="w-10 h-10 rounded-lg bg-[#F2F4F6] border border-[#ECEEF0] flex items-center justify-center text-[#1A0959] flex-shrink-0">
              <IconComponent size={20} className="text-[#1A0959]" />
            </div>
          </div>
        )
      })}
    </section>
  )
}

import React from 'react'
import { BookOpen, ExternalLink, Award } from 'lucide-react'

export default function PublicationsSection({ publications }) {
  return (
    <section 
      id="section-publications"
      className="bg-white border border-[#DFE0E0] rounded-xl p-5 sm:p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ECEEF0] mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
            <BookOpen size={18} />
          </div>
          <h2 className="text-[17px] sm:text-[19px] font-bold text-[#191C1E]">
            گزیده مقالات و انتشارات شاخص اخیر
          </h2>
        </div>

        <a
          href={publications.scholarUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#1A0959] hover:underline"
        >
          <span>صفحه گوگل اسکولار</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {publications.items.map((pub) => (
          <div
            key={pub.id}
            className="p-4 rounded-xl border border-[#DFE0E0] bg-white hover:border-[#1A0959]/40 hover:shadow-xs transition-all flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            {/* Journal / Venue Badge Box */}
            <div className="w-full md:w-36 flex-shrink-0 bg-[#F2F4F6] border border-[#ECEEF0] rounded-lg p-2.5 text-center flex flex-col justify-center">
              <span className="font-mono text-[12px] font-bold text-[#191C1E] tracking-tight">
                {pub.venue}
              </span>
              <span className="font-mono text-[11px] text-[#616363] mt-0.5">
                ({pub.year})
              </span>
            </div>

            {/* Paper Title & Authors */}
            <div className="flex-1">
              <h3 className="text-[14px] sm:text-[15px] font-bold text-[#191C1E] leading-snug tracking-tight font-sans">
                "{pub.title}"
              </h3>
              <p className="text-[12px] text-[#484550] mt-1.5 leading-relaxed">
                {pub.authors} <span className="text-[#DFE0E0] mx-1">•</span>{' '}
                <span className="text-[#5E549F] font-medium">{pub.metric}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

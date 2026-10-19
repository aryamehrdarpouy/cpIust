import React from 'react'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import campusMapImg from '../assets/campus_map.png'

export default function CampusMapCard({ campusLocation }) {
  return (
    <div className="bg-white border border-[#DFE0E0] rounded-xl p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#ECEEF0] mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
            <MapPin size={18} />
          </div>
          <h3 className="text-[14px] font-bold text-[#191C1E]">
            {campusLocation.title}
          </h3>
        </div>
      </div>

      {/* Map Image Container */}
      <div className="relative rounded-xl overflow-hidden border border-[#DFE0E0] shadow-xs group">
        <img
          src={campusMapImg}
          alt="نقشه پردیس دانشگاه علم و صنعت"
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top-Right Badge: Farjam Gate */}
        <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold text-[#191C1E] border border-[#DFE0E0] shadow-xs">
          {campusLocation.gate}
        </div>

        {/* Bottom Banner: Building Location Tag */}
        <div className="absolute bottom-2 inset-x-2 bg-[#1A0959]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg flex items-center justify-between text-[11px] shadow-sm">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin size={13} className="text-[#E5DEFF] flex-shrink-0" />
            <span className="font-semibold truncate">{campusLocation.building}</span>
          </div>
          <span className="text-[10px] text-white/80 flex-shrink-0 mr-1 font-mono">
            اتاق ۴۱۸
          </span>
        </div>
      </div>

      {/* Navigation action */}
      <a
        href="https://nshn.ir/map"
        target="_blank"
        rel="noreferrer"
        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 bg-[#F2F4F6] hover:bg-[#E5DEFF]/50 text-[#1A0959] rounded-lg text-[12px] font-semibold transition border border-[#DFE0E0]"
      >
        <Navigation size={13} />
        <span>مسیریابی در نقشه دانشگاه</span>
      </a>
    </div>
  )
}

import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import FacultyHero from './components/FacultyHero'
import QuickMetrics from './components/QuickMetrics'
import CoursesSection from './components/CoursesSection'
import ResearchLabSection from './components/ResearchLabSection'
import PublicationsSection from './components/PublicationsSection'
import OfficeHoursCard from './components/OfficeHoursCard'
import GuidanceRequestCard from './components/GuidanceRequestCard'
import CampusMapCard from './components/CampusMapCard'
import ContactModal from './components/ContactModal'
import GuidanceModal from './components/GuidanceModal'
import { facultyData } from './data/facultyData'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSection, setActiveSection] = useState('profile')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false)

  const handleApplyPosition = (positionTitle) => {
    setIsGuidanceModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex flex-col font-vazir text-[#191C1E]" dir="rtl">
      {/* Persistent Sidebar (Right side in RTL) */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Layout Area (Offset by 288px on desktop) */}
      <div className="lg:mr-[288px] flex-1 flex flex-col min-w-0 transition-all">
        {/* Top Sticky Header */}
        <Header
          profile={facultyData.profile}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Content Container (max-width 1152px as in Figma) */}
        <main className="flex-1 w-full max-w-[1152px] mx-auto p-4 sm:p-6 space-y-6">
          {/* Hero Banner */}
          <FacultyHero
            profile={facultyData.profile}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />

          {/* Quick Metrics (4 pillars) */}
          <QuickMetrics metrics={facultyData.metrics} />

          {/* Main 2-Column Grid (8 cols / 4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Primary Column (Courses, Research, Publications - 8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <CoursesSection
                courses={facultyData.courses}
                searchTerm={searchTerm}
              />

              <ResearchLabSection
                researchLab={facultyData.researchLab}
                onApply={handleApplyPosition}
              />

              <PublicationsSection
                publications={facultyData.publications}
              />
            </div>

            {/* Secondary Column (Office Hours, Guidance Request, Map - 4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <OfficeHoursCard
                officeHours={facultyData.officeHours}
                onBookMeet={() => setIsContactModalOpen(true)}
              />

              <GuidanceRequestCard
                guidance={facultyData.guidance}
                onOpenGuidanceModal={() => setIsGuidanceModalOpen(true)}
              />

              <CampusMapCard
                campusLocation={facultyData.campusLocation}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-[#DFE0E0] py-6 px-4 text-center mt-12">
          <div className="max-w-[1152px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#616363]">
            <p>
              © ۱۴۰۳ پرتال اعضای هیئت علمی دانشکده مهندسی کامپیوتر • دانشگاه علم و صنعت ایران (IUST)
            </p>
            <p className="font-mono text-[11px] text-[#787581]">
              نسخه سامانه: v1.4.2 • آخرین به‌روزرسانی: مهر ۱۴۰۳
            </p>
          </div>
        </footer>
      </div>

      {/* Contact & Message Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        professorEmail={facultyData.profile.email}
      />

      {/* Thesis & Guidance Request Modal */}
      <GuidanceModal
        isOpen={isGuidanceModalOpen}
        onClose={() => setIsGuidanceModalOpen(false)}
      />
    </div>
  )
}

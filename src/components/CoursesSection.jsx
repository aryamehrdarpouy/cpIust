import React from 'react'
import { GraduationCap, ExternalLink, BookOpen, Clock, MapPin, Mail, Award } from 'lucide-react'

export default function CoursesSection({ courses, searchTerm = '' }) {
  const filteredCourses = courses.filter((c) => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return (
      c.title.toLowerCase().includes(term) ||
      c.code.includes(term) ||
      c.syllabus.toLowerCase().includes(term) ||
      (c.ta && (c.ta.name.includes(term) || c.ta.email.includes(term)))
    )
  })

  return (
    <section 
      id="section-courses"
      className="bg-white border border-[#DFE0E0] rounded-xl p-5 sm:p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
    >
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ECEEF0] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F2F4F6] text-[#1A0959] flex items-center justify-center">
            <GraduationCap size={18} />
          </div>
          <h2 className="text-[17px] sm:text-[19px] font-bold text-[#191C1E]">
            دروس ارائه شده نیمسال جاری (۱۴۰۳-۱۴۰۴)
          </h2>
        </div>

        <span className="px-2.5 py-1 bg-[#F2F4F6] text-[#616363] rounded-md text-[11px] font-medium border border-[#DFE0E0]">
          دسترسی عمومی سامانه یادگیری
        </span>
      </div>

      {/* Courses List */}
      <div className="space-y-5">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-8 text-[#787581] text-[13px]">
            هیچ درسی مطابق با عبارت جستجو یافت نشد.
          </div>
        ) : (
          filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`p-4 sm:p-5 rounded-xl border border-[#DFE0E0] bg-white hover:border-[#1A0959]/40 hover:shadow-sm transition-all duration-200 ${
                index > 0 ? 'mt-4' : ''
              }`}
            >
              {/* Course Top Line: Title, Level, LMS Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#191C1E]">
                    {course.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${course.levelColor}`}
                  >
                    {course.level}
                  </span>
                </div>

                {/* Direct LMS Access Button */}
                <a
                  href={course.lmsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A0959] hover:bg-[#120640] text-white rounded-lg text-[12px] font-medium shadow-xs transition"
                >
                  <span>ورود به سامانه LMS</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Code, Units, Schedule */}
              <div className="text-[12px] sm:text-[13px] text-[#484550] mt-2 flex flex-wrap items-center gap-1.5">
                <span>کد درس: <strong className="font-mono text-[#191C1E]">{course.code}</strong></span>
                <span>•</span>
                <span>{course.units}</span>
                <span>•</span>
                <span>{course.schedule}</span>
              </div>

              {/* Syllabus Box */}
              <div className="mt-3 p-3 bg-[#F7F9FB] rounded-lg border border-[#ECEEF0] text-[12px] sm:text-[13px] text-[#484550] leading-relaxed text-justify">
                <strong className="text-[#191C1E] font-semibold">سرفصل‌ها: </strong>
                {course.syllabus}
              </div>

              {/* Footer row: TA info, Notes, Status Badge */}
              <div className="mt-3 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <div>
                  {course.ta ? (
                    <span className="text-[#484550]">
                      دستیار آموزشی (TA): <strong className="text-[#191C1E] font-medium">{course.ta.name}</strong>{' '}
                      <span className="font-mono text-[#5E549F]">({course.ta.email})</span>
                    </span>
                  ) : course.note ? (
                    <span className="text-[#616363]">{course.note}</span>
                  ) : null}
                </div>

                {course.statusBadge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#E6E8EA] text-[#191C1E] rounded text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A0959]"></span>
                    <span>{course.statusBadge}</span>
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

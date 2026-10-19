import React, { useState } from 'react'
import { X, Send, CheckCircle2, FileText, Upload, GraduationCap } from 'lucide-react'

export default function GuidanceModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    degree: 'master', // bachelor, master, phd
    major: 'هوش مصنوعی و رباتیک',
    gpa: '',
    topicTitle: '',
    statement: '',
    hasFile: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 2500)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-[#DFE0E0] w-full max-w-xl overflow-hidden transition-all duration-300"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-[#1A0959] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <GraduationCap size={18} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold">ثبت درخواست راهنمایی پایان‌نامه و پروژه</h3>
              <p className="text-[12px] text-white/70">تکمیل فرم پذیرش برای دانشجویان کارشناسی و تحصیلات تکمیلی</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            aria-label="بستن پنجره"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={58} className="text-[#10B981] mx-auto mb-3" />
              <h4 className="text-[18px] font-bold text-[#191C1E] mb-2">درخواست شما در سامانه ثبت گردید</h4>
              <p className="text-[13px] text-[#484550] max-w-md mx-auto">
                کد پیگیری شما: <span className="font-mono font-bold text-[#1A0959]">REQ-۱۴۰۳-۹۸۲</span>
                <br />
                نتیجه بررسی رزومه و سرفصل پیشنهادی ظرف حداکثر ۴۸ ساعت کاری به ایمیل شما ارسال می‌شود.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                    نام و نام خانوادگی <span className="text-[#F73846]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: مریم کریمی"
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                    شماره دانشجویی <span className="text-[#F73846]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    placeholder="مثال: ۴۰۰۱۲۳۴۵"
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">مقطع تحصیلی</label>
                  <select
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] bg-white"
                  >
                    <option value="bachelor">کارشناسی (پروژه پایانی)</option>
                    <option value="master">کارشناسی ارشد (پایان‌نامه)</option>
                    <option value="phd">دکتری تخصصی (رساله)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">گرایش تحصیلی</label>
                  <input
                    type="text"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">معدل کل</label>
                  <input
                    type="text"
                    placeholder="مثال: ۱۸.۵۰"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                  عنوان یا حوزه پیشنهادی پژوهش <span className="text-[#F73846]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.topicTitle}
                  onChange={(e) => setFormData({ ...formData, topicTitle: e.target.value })}
                  placeholder="مثال: مدل‌های زبانی فارسی، یادگیری تقویتی، بینایی ماشین"
                  className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                  خلاصه پیشینه و انگیزه نامه (یا لینک GitHub)
                </label>
                <textarea
                  rows={3}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="سوابق مرتبط در دروس یادگیری ماشین، پایتون یا مهارت‌های پژوهشی..."
                  className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] resize-none"
                />
              </div>

              {/* Fake file upload */}
              <div className="border border-dashed border-[#DFE0E0] rounded-lg p-3 text-center bg-[#F7F9FB] hover:bg-[#F2F4F6] transition cursor-pointer">
                <Upload size={18} className="mx-auto text-[#5E549F] mb-1" />
                <span className="text-[12px] text-[#484550]">
                  {formData.hasFile ? 'فایل کارنامه و رزومه پیوست شد (PDF)' : 'پیوست فایل رزومه یا کارنامه (اختیاری - PDF)'}
                </span>
                <input 
                  type="file" 
                  accept=".pdf" 
                  className="hidden" 
                  id="cv-upload"
                  onChange={() => setFormData({ ...formData, hasFile: true })}
                />
                <label htmlFor="cv-upload" className="block text-[11px] text-[#5E549F] mt-0.5 cursor-pointer font-bold">
                  انتخاب فایل
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-[13px] text-[#484550] bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium text-white bg-[#1A0959] hover:bg-[#120640] rounded-lg shadow-sm transition disabled:opacity-50"
                >
                  <Send size={14} />
                  {isSubmitting ? 'در حال ثبت...' : 'ارسال درخواست راهنمایی'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

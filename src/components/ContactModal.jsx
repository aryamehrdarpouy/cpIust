import React, { useState } from 'react'
import { X, Send, CheckCircle2, User, Mail, MessageSquare, AlertCircle } from 'lucide-react'

export default function ContactModal({ isOpen, onClose, professorEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    subject: '',
    message: ''
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
      }, 2200)
    }, 800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-[#DFE0E0] w-full max-w-lg overflow-hidden transition-all duration-300"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-[#F2F4F6] px-6 py-4 flex items-center justify-between border-b border-[#DFE0E0]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1A0959] text-white flex items-center justify-center">
              <MessageSquare size={16} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#191C1E]">ارسال پیام و هماهنگی جلسه</h3>
              <p className="text-[12px] text-[#616363]">مکاتبه مستقیم با دکتر علیرضا محمدی</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-[#616363] hover:text-[#191C1E] p-1.5 rounded-lg hover:bg-gray-200/60 transition"
            aria-label="بستن پنجره"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle2 size={54} className="text-[#10B981] mx-auto mb-3 animate-bounce" />
              <h4 className="text-[18px] font-bold text-[#191C1E] mb-2">پیام شما با موفقیت ارسال شد</h4>
              <p className="text-[13px] text-[#484550]">
                پاسخ به آدرس ایمیل دانشگاهی شما ارسال خواهد شد. معمولاً زمان پاسخگویی ۴۸ ساعت کاری است.
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
                    placeholder="مثال: علی رضایی"
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                    شماره دانشجویی (اختیاری)
                  </label>
                  <input
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    placeholder="مثال: ۹۹۵۲۱۱۲۳"
                    className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                  آدرس ایمیل دانشگاهی <span className="text-[#F73846]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@iust.ac.ir"
                  className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition font-mono"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                  موضوع پیام <span className="text-[#F73846]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="رفع اشکال درس / مشاوره پروژه / تعیین وقت جلسه"
                  className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#191C1E] mb-1">
                  متن پیام <span className="text-[#F73846]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="متن پیام خود را به دقت بنویسید..."
                  className="w-full px-3 py-2 text-[13px] border border-[#DFE0E0] rounded-lg focus:outline-none focus:border-[#1A0959] focus:ring-1 focus:ring-[#1A0959] transition resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-[#616363]">
                  گیرنده: <span className="font-mono text-[#1A0959]">{professorEmail}</span>
                </span>
                <div className="flex gap-2">
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
                    {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { contentData } from './data/content'

export default function Home() {
  const [activeSection, setActiveSection] = useState('Intro')
  const [activeContent, setActiveContent] = useState<{response: string, theory: string} | null>(null)

  const currentSection = contentData.find(section => section.section === activeSection)

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#fecfb3] p-4">
      {/* Header with Logo */}
      <div className="w-full max-w-[800px] mb-8">
        <Image
          src="/linea-logo.png"
          alt="Linea Capital Logo"
          width={800}
          height={267}
          priority
          className="w-full h-auto"
          onError={(e) => {
            console.error('Error loading image:', e)
          }}
        />
      </div>

      {/* Main Navigation Buttons */}
      <div className="w-full grid grid-cols-4 gap-4 mb-6">
        {contentData.map(({ section }) => (
          <button
            key={section}
            className={`py-6 px-4 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
              activeSection === section 
                ? 'bg-gradient-to-br from-[#c30017] to-[#8b0010] text-white border border-[#ff0420]/20' 
                : 'bg-gradient-to-br from-[#3d0000] to-[#2d0000] text-white hover:from-[#c30017] hover:to-[#8b0010] border border-white/10'
            }`}
            onClick={() => {
              setActiveSection(section)
              setActiveContent(null)
            }}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Sub Navigation Buttons */}
      <div className="w-full grid grid-cols-6 gap-2 mb-8">
        {currentSection?.subOptions.map((option, i) => (
          <button
            key={i}
            className={`py-4 px-3 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              activeContent?.response === option.response
                ? 'bg-gradient-to-br from-[#c30017] to-[#8b0010] text-white border border-[#ff0420]/20'
                : 'bg-gradient-to-br from-[#e6bebc] to-[#d6aeac] text-[#3d0000] hover:from-[#c30017] hover:to-[#8b0010] hover:text-white border border-white/20'
            }`}
            onClick={() => setActiveContent({
              response: option.response,
              theory: option.theory
            })}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Content Panes */}
      <div className="w-full grid grid-cols-2 gap-6">
        {/* Left Pane */}
        <div className="bg-gradient-to-br from-white to-[#f8f8f8] p-8 rounded-lg shadow-xl border border-white/50 backdrop-blur-sm min-h-[400px] transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-[#3d0000] border-b border-[#3d0000]/10 pb-3">Suggested Response</h2>
          <p className="text-black text-lg leading-relaxed">
            {activeContent?.response || 'Select an option above to see the suggested response.'}
          </p>
        </div>

        {/* Right Pane */}
        <div className="bg-gradient-to-br from-white to-[#f8f8f8] p-8 rounded-lg shadow-xl border border-white/50 backdrop-blur-sm min-h-[400px] transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-[#3d0000] border-b border-[#3d0000]/10 pb-3">Theory & Reasoning</h2>
          <p className="text-black text-lg leading-relaxed">
            {activeContent?.theory || 'The explanation for the suggested response will appear here.'}
          </p>
        </div>
      </div>
    </main>
  )
}

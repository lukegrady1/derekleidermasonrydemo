'use client'

import { useState } from 'react'
import Link from 'next/link'

type Issue =
  | 'cracking-walls'
  | 'water-basement'
  | 'old-brick'
  | 'new-patio'
  | 'driveway'
  | 'foundation'
  | 'commercial-upkeep'
  | ''

export default function ServiceWizard() {
  const [selectedIssue, setSelectedIssue] = useState<Issue>('')
  const [showResult, setShowResult] = useState(false)

  const issues = [
    { id: 'cracking-walls' as Issue, label: 'Cracking or crumbling walls' },
    { id: 'water-basement' as Issue, label: 'Water in my basement' },
    { id: 'old-brick' as Issue, label: 'Old or damaged brickwork' },
    { id: 'new-patio' as Issue, label: 'Want a new patio or walkway' },
    { id: 'driveway' as Issue, label: 'Need a new driveway' },
    { id: 'foundation' as Issue, label: 'Foundation needs coating' },
    { id: 'commercial-upkeep' as Issue, label: 'Commercial property maintenance' },
  ]

  const recommendations: Record<Issue, { services: string[]; links: string[] }> = {
    'cracking-walls': {
      services: ['Brickwork', 'Concrete Services'],
      links: ['/services/brickwork', '/services/concrete-services'],
    },
    'water-basement': {
      services: ['Waterproofing', 'Parging'],
      links: ['/services/waterproofing', '/services/parging'],
    },
    'old-brick': {
      services: ['Brickwork'],
      links: ['/services/brickwork'],
    },
    'new-patio': {
      services: ['Stonework', 'Concrete Services'],
      links: ['/services/stonework', '/services/concrete-services'],
    },
    'driveway': {
      services: ['Concrete Services'],
      links: ['/services/concrete-services'],
    },
    'foundation': {
      services: ['Parging', 'Waterproofing'],
      links: ['/services/parging', '/services/waterproofing'],
    },
    'commercial-upkeep': {
      services: ['Commercial Landscaping Maintenance'],
      links: ['/services/commercial-maintenance'],
    },
    '': { services: [], links: [] },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedIssue) {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setSelectedIssue('')
    setShowResult(false)
  }

  return (
    <div className="bg-white border-2 border-stone-200 rounded-lg p-8">
      {!showResult ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="text-lg font-semibold text-stone-900 mb-4">
              What issue are you facing?
            </legend>
            <div className="space-y-3">
              {issues.map((issue) => (
                <label
                  key={issue.id}
                  className="flex items-center p-4 border-2 border-stone-200 rounded-lg cursor-pointer hover:border-brand-500 hover:bg-brand-50 transition-all"
                >
                  <input
                    type="radio"
                    name="issue"
                    value={issue.id}
                    checked={selectedIssue === issue.id}
                    onChange={(e) => setSelectedIssue(e.target.value as Issue)}
                    className="w-4 h-4 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="ml-3 text-stone-900">{issue.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!selectedIssue}
            className="btn btn-primary w-full mt-6"
          >
            See Recommended Services
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">
            We recommend:
          </h3>
          <div className="space-y-3 mb-6">
            {recommendations[selectedIssue].services.map((service, index) => (
              <div
                key={service}
                className="bg-brand-50 border-2 border-brand-200 rounded-lg p-4"
              >
                <h4 className="text-lg font-bold text-brand-900 mb-2">
                  {service}
                </h4>
                <Link
                  href={recommendations[selectedIssue].links[index]}
                  className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
                >
                  View service details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-stone-600 hover:text-stone-900 font-medium"
          >
            ← Start over
          </button>
        </div>
      )}
    </div>
  )
}

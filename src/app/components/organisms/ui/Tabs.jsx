'use client'

import { useState } from 'react'
import { TABS_ABOUT } from '@/utils/const'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('mision')

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          {TABS_ABOUT.map(({ id, name }) => (
            <li key={id} className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id={id}
                data-tabs-target={`#${id}`}
                type="button"
                role="tab"
                aria-controls={id}
                aria-selected={activeTab === id}
                onClick={() => toggleTab(id)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {TABS_ABOUT.map(({ id, name, content }) => (
          <div
            key={id}
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === id ? 'block' : 'hidden'}`}
            id={id}
            role="tabpanel"
            aria-labelledby={id}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

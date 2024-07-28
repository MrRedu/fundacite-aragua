'use client'
import propTypes from 'prop-types'
import { useState } from 'react'

export const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[2].id)

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
          {items.map(({ id, name }) => (
            <li key={id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === id ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
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
        {items.map(({ id, content }) => (
          <div
            key={id}
            className={`p-4 flex flex-col gap-2 ${activeTab === id ? 'block' : 'hidden'}`}
            id={id}
            role="tabpanel"
            aria-labelledby={id}
          >
            {typeof content === 'string' ? (
              <p className="text-pretty font-light text-gray-500  dark:text-gray-400">
                {content}
              </p>
            ) : (
              content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-pretty font-light text-gray-500  dark:text-gray-400"
                >
                  {paragraph}
                </p>
              ))
            )}
          </div>
        ))}
      </div>
    </>
  )
}

Tabs.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
}

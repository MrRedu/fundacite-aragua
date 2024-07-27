'use client'
import { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Image from 'next/image'
import { ONE_SECOND_IN_MILLISECONDS } from '@/utils/const'

export const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, ONE_SECOND_IN_MILLISECONDS * 10)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex transition ease-out duration-700 w-full md:h-[635px]`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((href, index) => {
          return (
            <Image
              width={1280}
              height={720}
              priority
              loading="eager"
              quality={100}
              alt={`Carousel image ${index + 1}`}
              key={index + 1}
              src={href}
              className="w-full min-w-full h-full object-contain"
            />
          )
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-red-600 px-10 text-3xl">
        <button
          type="button"
          onClick={previousSlide}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-opacity duration-400 ease-out ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg
            className="w-4 h-4 transform rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">{`Imagen anterior`}</span>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">{`Siguiente imagen`}</span>
        </button>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  images: propTypes.array,
}

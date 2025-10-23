'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
  location: string
  year: string
}

interface GalleryClientProps {
  items: GalleryItem[]
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [filter, setFilter] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'brickwork', label: 'Brickwork' },
    { id: 'stonework', label: 'Stonework' },
    { id: 'concrete-services', label: 'Concrete' },
    { id: 'parging', label: 'Parging' },
    { id: 'waterproofing', label: 'Waterproofing' },
    { id: 'commercial-maintenance', label: 'Commercial' },
  ]

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter)

  const openLightbox = (item: GalleryItem) => {
    setCurrentImage(item)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!currentImage) return
    const currentIndex = filteredItems.findIndex((item) => item.id === currentImage.id)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }
    setCurrentImage(filteredItems[newIndex])
  }

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === category.id
                ? 'bg-brand-600 text-white'
                : 'bg-white border-2 border-stone-200 text-stone-700 hover:border-brand-500'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Placeholder for images */}
              <div className="w-full h-full flex items-center justify-center text-stone-400">
                <span className="text-sm">Image placeholder</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-200">
                    {item.location} • {item.year}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-stone-600 text-lg">
            No projects found in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-brand-400 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            className="absolute left-4 text-white hover:text-brand-400 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-stone-800 rounded-lg overflow-hidden">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-stone-700 flex items-center justify-center">
                <span className="text-stone-400">Image: {currentImage.alt}</span>
              </div>

              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
                <p className="text-stone-300">
                  {currentImage.location} • {currentImage.year}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            className="absolute right-4 text-white hover:text-brand-400 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

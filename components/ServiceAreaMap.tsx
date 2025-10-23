'use client'

import { useEffect, useRef } from 'react'

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Google Maps script
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    
    // Don't try to load maps if no API key is available
    if (!apiKey) {
      console.warn('Google Maps API key not found')
      return
    }
    
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,drawing`
    script.async = true
    script.defer = true

    script.onload = () => {
      initMap()
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initMap = () => {
    if (!mapRef.current || !window.google) return

    // Center on Wilmington, MA
    const center = { lat: 42.5465, lng: -71.1739 }

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 10,
      center: center,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
    })

    // Service area polygon coordinates (approximate boundary)
    const serviceAreaCoords = [
      { lat: 42.698, lng: -71.137 }, // North Andover
      { lat: 42.658, lng: -71.083 }, // Andover
      { lat: 42.631, lng: -71.053 }, // North Reading area
      { lat: 42.600, lng: -70.933 }, // Danvers
      { lat: 42.570, lng: -70.880 }, // Beverly
      { lat: 42.520, lng: -70.882 }, // Salem
      { lat: 42.472, lng: -70.885 }, // Marblehead
      { lat: 42.460, lng: -70.918 }, // Swampscott/Lynn
      { lat: 42.433, lng: -70.950 }, // Nahant
      { lat: 42.408, lng: -71.012 }, // Revere
      { lat: 42.395, lng: -71.052 }, // Chelsea
      { lat: 42.390, lng: -71.090 }, // Medford/Malden
      { lat: 42.416, lng: -71.156 }, // Arlington
      { lat: 42.447, lng: -71.223 }, // Lexington
      { lat: 42.493, lng: -71.276 }, // Bedford
      { lat: 42.562, lng: -71.270 }, // Billerica
      { lat: 42.610, lng: -71.234 }, // Tewksbury
      { lat: 42.658, lng: -71.180 }, // Andover area
    ]

    // Create the polygon
    const serviceArea = new window.google.maps.Polygon({
      paths: serviceAreaCoords,
      strokeColor: '#2563eb',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#3b82f6',
      fillOpacity: 0.25,
    })

    serviceArea.setMap(map)

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; font-family: system-ui, sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1c1917;">
            Derek Leider Masonry
          </h3>
          <p style="margin: 0 0 4px 0; font-size: 14px; color: #44403c;">
            510 Main Street<br>
            Wilmington, MA 01887
          </p>
          <p style="margin: 8px 0 0 0; font-size: 13px; color: #78716c;">
            <strong style="color: #d97706;">Service Area:</strong> Greater Boston & North Shore
          </p>
        </div>
      `,
      position: center,
    })

    // Show info window on marker click
    map.addListener('click', (e: any) => {
      if (
        window.google.maps.geometry.poly.containsLocation(
          e.latLng,
          serviceArea
        )
      ) {
        infoWindow.setPosition(e.latLng)
        infoWindow.open(map)
      }
    })
  }

  return (
    <div className="relative bg-white rounded-lg shadow-lg border-2 border-stone-200 overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-[500px]"
        style={{ minHeight: '500px' }}
      />
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg shadow-md p-3 border border-stone-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-blue-600 bg-blue-500/25" />
          <span className="text-xs font-semibold text-stone-900">
            Service Area Coverage
          </span>
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: any
  }
}

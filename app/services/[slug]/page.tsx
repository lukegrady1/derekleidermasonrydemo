import { notFound } from 'next/navigation'
import Link from 'next/link'
import { serviceData } from '@/lib/service-data'
import { COMPANY_INFO } from '@/lib/constants'
import ServiceDetailClient from './ServiceDetailClient'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }))
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = params
  const service = serviceData[slug]

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}

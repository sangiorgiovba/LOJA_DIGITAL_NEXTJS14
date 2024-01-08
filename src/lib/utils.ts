import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price: number | string,
  options: {
    currency?: 'BRL' | 'EUR' 
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'BRL', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export function constructMetadata({
  title = 'Loja Digital |  mercado para produtos digitais',
  description = 'Loja Digital | é um mercado de código aberto para produtos digitais de alta qualidade',
  image = '/thumbnail.jpg',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@sangiorgiovba',
    },
    icons,
    metadataBase: new URL('https://lojadigital.up.railway.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}


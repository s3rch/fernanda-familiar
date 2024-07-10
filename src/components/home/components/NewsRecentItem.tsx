'use client'

import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '../interfaces/news-item';

export const NewsRecentItem = ({
  excerpt,
  image,
  slug,
  title,
}: NewsItem) => {
  return (
    <li className='pb-10'>
      <Link
        className='group'
        href={`/noticias/${slug}`}
        onClick={() => sendGTMEvent({ event: 'btnNewsRecentList', value: { slug } })}
      >
        <div className='md:flex'>
          <div className='mb-5 md:basis-2/3 md:pr-5 md:mb-0'>
            <h4
              className='text-2xl pb-3 font-semibold group-hover:text-red-500 transition duration-300'
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>

          <div className='md:basis-1/3 md:pl-5'>
            <div style={{ position: 'relative', width: '300px', height: '200px' }}>
              <Image
                src={image}
                sizes='300px'
                fill
                style={{
                  objectFit: 'cover',
                }}
                alt={title}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

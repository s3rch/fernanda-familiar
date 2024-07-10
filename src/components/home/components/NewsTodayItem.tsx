'use client'

import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '../interfaces/news-item';

export const NewsTodayItem = ({
  excerpt,
  image,
  slug,
  title,
}: NewsItem) => {
  return (
    <Link
      className='group'
      href={`/noticias/${slug}`}
      onClick={() => sendGTMEvent({ event: 'btnNewsToday', value: { slug } })}
      >
      <div className='basis-1/3 pb-5'>
        <div style={{ position: 'relative', width: 'auto', height: '350px' }}>
          <Image
            src={image}
            sizes='500px'
            fill
            style={{
              objectFit: 'cover',
            }}
            alt={title}
          />
        </div>
      </div>

      <div className='basis-2/3'>
        <h4
          className='text-2xl pb-3 font-semibold group-hover:text-red-500 transition duration-300'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </Link>
  )
}

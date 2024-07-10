'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialPinterest, TiSocialYoutube } from "react-icons/ti";
import { NewsDetailProps } from "../";

export const NewsDetail = ({
  date,
  title,
  image,
  content,
}: NewsDetailProps) => {
  const myDAte = DateTime.fromISO(date).setLocale('es');

  return (
    <div>
      <h2
        className="text-4xl py-16 font-semibold"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className="lg:flex pb-14">
        <div className="lg:basis-1/3 lg:pr-4 pb-10">
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
          <div className="capitalize my-3">
            {myDAte.toFormat('LLLL d, y')}
          </div>
        </div>

        <div className="lg:basis-2/3 lg:pl-4">
          <ul className="flex items-center my-3 text-gray-500">
            <li className="text-3xl"><TiSocialInstagram /></li>
            <li className="text-3xl"><TiSocialPinterest /></li>
            <li className="text-3xl"><TiSocialLinkedin /></li>
            <li className="text-3xl"><TiSocialFacebook /></li>
            <li className="text-3xl"><TiSocialYoutube /></li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Link
            href="/"
            className="inline-block mt-12 px-4 py-2 text-sm text-white font-medium bg-red-500 border border-gray-300 rounded-md shadow-sm"
            onClick={() => sendGTMEvent({ event: 'btnNewsDetail', value: { title } })}
          >
            Regresar a la página de inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

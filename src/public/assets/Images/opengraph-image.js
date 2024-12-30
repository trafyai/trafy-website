import { ImageResponse } from 'next/og'
 import og from '@public/assets/Images/opengraph-image.png'
 import Image from 'next/image'
export const runtime = 'edge'
 
export default async function Images() {

 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={og} height="100" />
      </div>
    )
  )
}
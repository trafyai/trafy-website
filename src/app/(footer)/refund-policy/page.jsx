import React from 'react'
import Refund from '@components/footer/compliance/RefundPolicy';
import Head from 'next/head';
export const metadata = {
  robots: "noindex, nofollow",
};
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Refund/>
    </div>
  )
}

export default page
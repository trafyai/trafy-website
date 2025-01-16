import React from 'react'
import Privacy from '@components/footer/compliance/PrivacyPolicy';
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
        <Privacy/>
    </div>
  )
}

export default page
import React from 'react';
import Terms from '@components/footer/compliance/TermsOfService'
import Head from 'next/head';
export const metadata = {
  robots: "noindex, nofollow",
};
const terms = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Terms/>
    </div>
  )
}

export default terms;
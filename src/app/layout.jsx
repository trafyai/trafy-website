import "@styles/globals.css";
import Header from "@components/common/header/Header.jsx";
import Footer from "@components/common/footer/Footer";
import { AuthContextProvider } from "@context/AuthContext";
import { CourseContextProvider } from "@context/CourseContext";
import { CartProvider } from "@context/CartContext";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'


// export const metadata = {
//   title: "trafy - Your Personalised AI mentor",
//   description:
//     "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
//   metadataBase: new URL("https://trafy.ai/"),
//   openGraph: {
//     type: "website",
//     url: "https://trafy.ai",
//     title: "trafy - Your Personalised AI mentor",
//     description:
//       "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
//       images: [
//         {
//           url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
//           width: 1200,
//           height: 630,
//           alt: "trafy",
//         },
//       ],

//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: "trafy - Your Personalised AI mentor",
//     description:"Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
//     url: `https://trafy.ai`,
//     image: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
//   },
// }
 
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
 
export const metadata= {
  metadataBase: new URL("https://academy.trafy.ai"),
  openGraph: {
    siteName: "trafy - Your Personalised AI mentor",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://academy.trafy.ai/rss.xml"
    }
  },
  applicationName: "Blog | Minh Vu",
  appleWebApp: {
    title: "trafy - Your Personalised AI mentor",
    statusBarStyle: "default",
    capable: true
  },
  // verification: {
  //   google: "YOUR_DATA",
  //   yandex: ["YOUR_DATA"],
  //   other: {
  //     "msvalidate.01": ["YOUR_DATA"],
  //     "facebook-domain-verification": ["YOUR_DATA"]
  //   }
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NX8D4BFD');`
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '534717322824766');
          fbq('track', 'PageView');`
        }}
      />

      {/* <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=3787797684869991&ev=PageView&noscript=1"
      /></noscript> */}
      
          </head>
      <body>



        <AuthContextProvider>
          <CartProvider>
            <main className="app">
              <Header />
              {children}
              <Footer />
            </main>
            <GoogleAnalytics gaId="G-THWZDJH6WZ" />
          </CartProvider>
        </AuthContextProvider>
      </body>
     
  

    </html>
  );
}




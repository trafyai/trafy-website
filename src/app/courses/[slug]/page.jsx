import React from "react";
import "@styles/course/course-single/Course.css";
import "@styles/course/course-landing/CourseLanding.css";
import {
  CourseHeroData,
  CourseAboutData,
  CourseSyllabusData,
  CourseProjectData,
  CourseReviewData,
  CourseCertificateData,
  CoursePaymentData,
  CourseFaqData,
  CourseSimilarData,
} from "@api/course/course-single/CourseData";
import CourseHero from "@components/course-page/course-page/CourseHero";
import CourseAbout from "@components/course-page/course-page/CourseAbout";
import CourseSyllabus from "@components/course-page/course-page/CourseSyllabus";
import CourseProject from "@components/course-page/course-page/CourseProject";
import CourseReview from "@components/course-page/course-page/CourseReview";
import CourseCertificate from "@components/course-page/course-page/CourseCertificate";
import CoursePayment from "@components/course-page/course-page/CoursePayment";
import CourseFaq from "@components/course-page/course-page/CourseFaq";
import CourseSimilar from "@components/course-page/course-page/CourseSimilar";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params;
  const data = CourseHeroData.find((course) => course.id === slug);

  return {
    title: data.courseHeading,
    description: data.courseDescription,
    alternates: {
      canonical: `https://academy.trafy.ai/courses/${data.id}`,
    },
    openGraph: {
      url: `https://academy.trafy.ai/courses/${data.id}`,
      type: "website",
      title: data.courseHeading,
      description:data.courseDescription,
    //   images: [
    //     {
    //       url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
    //       width: 1200,
    //       height: 630,
    //       alt: "trafy"
    //     }
    //   ]
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "trafy - Your Personalised AI mentor",
    //   description:
    //   "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
    //   // creator: "@dminhvu02",
    //   // site: "@dminhvu02",
    //   images: [
    //     {
    //       url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
    //       width: 1200,
    //       height: 630,
    //       alt: "trafy"
    //     }
    //   ]
    },
}
}

export default function CoursePage({ params }) {
  const { slug } = params;

  // Find the course data based on the course slug
  const HeroData = CourseHeroData.find((course) => course.id === slug);
  const AboutData = CourseAboutData.find((course) => course.id === slug);
  const SyllabusData = CourseSyllabusData.find((course) => course.id === slug);
  const ProjectData = CourseProjectData.find((course) => course.id === slug);
  const ReviewData = CourseReviewData.find((course) => course.id === slug);
  const CertificateData = CourseCertificateData.find(
    (course) => course.id === slug,
  );
  const PaymentData = CoursePaymentData.find((course) => course.id === slug);
  const FaqData = CourseFaqData.find((course) => course.id === slug);
  const SimilarData = CourseSimilarData.find((course) => course.id === slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',  //e.g., Person, Article, Organization
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://academy.trafy.ai/courses/${HeroData.id}`,
    },    name: HeroData.courseHeading,
    description: HeroData.courseDescription,
  }

  return (
    <div>
      <CourseHero {...HeroData} />
      <CourseAbout {...AboutData} />
      <CourseSyllabus {...SyllabusData} />
      <CourseProject {...ProjectData} />
      <CourseReview {...ReviewData} />
      <CourseCertificate {...CertificateData} />
      <CoursePayment {...PaymentData} />
      <CourseFaq {...FaqData} />
      {/* <CourseSimilar {...SimilarData} /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

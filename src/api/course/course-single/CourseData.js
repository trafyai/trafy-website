import Share from "@public/assets/Images/course-page/hero-section/share.svg";
import RatingStar from "@public/assets/Images/course-page/hero-section/rating-star.svg";
import Phone from "@public/assets/Images/course-page/hero-section/iPhone.png";
import Macbook from "@public/assets/Images/course-page/hero-section/iMac.png";
import Tab from "@public/assets/Images/course-page/hero-section/iTab.png";
import Vision from "@public/assets/Images/course-page/hero-section/iVision.png";
import Watch from "@public/assets/Images/course-page/hero-section/iWatch.png";
import Whatsapp from '@public/assets/Images/comman/common/socials/whatsapp.png';
import Facebook from '@public/assets/Images/comman/common/socials/facebook.png';
import Linkedin from '@public/assets/Images/comman/common/socials/linkedin.png';
import X from '@public/assets/Images/comman/common/socials/twitter.png';
import close from '@public/assets/Images/comman/header/close.svg';

//----------------------------- About-------------------------

import Figma from "@public/assets/Images/course-page/hero-section/Figma.png";
import Miro from "@public/assets/Images/course-page/hero-section/Miro.png";
import Chatgpt from "@public/assets/Images/course-page/hero-section/ChatGPT.png";
import Gemini from "@public/assets/Images/course-page/hero-section/Gemini.png";
import Framer from "@public/assets/Images/course-page/hero-section/Framer.png";
import Gtm from "@public/assets/Images/course-page/hero-section/GTM.png";
import Analytics from "@public/assets/Images/course-page/hero-section/analytics.png";
import Mailchimp from "@public/assets/Images/course-page/hero-section/mailchimp.png";
import Hubspot from "@public/assets/Images/course-page/hero-section/hubspot.png";

// --------------------------- Syllabus---------------------------------------

import ExpandMore from '@public/assets/Images/course-page/syllabus-section/expand_more.svg';

// -------------------------------- Certificate---------------------------------

import dmcertificate from '@public/assets/Images/course-page/certificate/Digital Marketing.jpg';
import uiuxcertificate from '@public/assets/Images/course-page/certificate/UIUX.jpg';

//------------------------------------- Payment ----------------------------------

import Gpay from '@public/assets/Images/course-page/payment-section/Gpay.png';
import PhonePe from '@public/assets/Images/course-page/payment-section/Phonepe.png';
import Visa from '@public/assets/Images/course-page/payment-section/Visa.png';
import Mastercard from '@public/assets/Images/course-page/payment-section/Mastercard.png';
import Rupay from '@public/assets/Images/course-page/payment-section/rupay.png';
import Upi from '@public/assets/Images/course-page/payment-section/UPI.png';
// import Airtel from '@public/assets/Images/course-page/payment-section/airtel payment bank.png';
import Freecharge from '@public/assets/Images/course-page/payment-section/freecharge.png';
import Mobikwik from '@public/assets/Images/course-page/payment-section/MobiKwik.png';
import Ola from '@public/assets/Images/course-page/payment-section/ola money.png';
import Jio from '@public/assets/Images/course-page/payment-section/jio money.png';


const CourseHeroData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        category:"Digital Marketing",
        popularity:"Popular",
        shareIcon:Share,
        courseHeading:"Learn AI Powered Digital Marketing",
        courseDescription:"Gain deep understanding of digital marketing principles, strategies, and practices and develop practical skills in SEO, content creation, social media, email campaigns, and paid advertising.",
        rating:"4.5",
        ratingIcon:RatingStar,
        rate:"15,000 ",
        initialRate:"",
        enrolled:"126 Enrolled in last week",
        whatsappIcon:Whatsapp,
        facebookIcon:Facebook,
        linkedinIcon:Linkedin,
        xIcon:X,
        closeIcon:close,
        platform:"Learn",
        iphoneIcon:Phone,
        macIcon:Macbook,
        tabIcon:Tab,
        visionICon:Vision,
        watchIcon:Watch,
        startDateH:"Start date",
        startDate:"January 10, 2025",
        levelH:"Level",
        level:"Advanced",
        durationH:"Duration",
        duration:"4 weeks",
        formLink:"https://courseenquiryform-default-rtdb.firebaseio.com/DM-CourseEnquiryFormData.json",
        demoLink:"https://uiux-advance-formdata-default-rtdb.firebaseio.com/DM-FreeDemoFormData.json",
        fee:"15000",
        totAmount:"",
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        category:"UI/UX",
        popularity:"Popular",
        shareIcon:Share,
        courseHeading:"Responsive UI Design",
        courseDescription:"Learn how to apply design principles and create a responsive pages.",
        rating:"4.8",
        ratingIcon:RatingStar,
        rate:"10,000 /",
        initialRate:"17,500",
        enrolled:"126 Enrolled in last week",
        whatsappIcon:Whatsapp,
        facebookIcon:Facebook,
        linkedinIcon:Linkedin,
        xIcon:X,
        closeIcon:close,
        platform:"Learn",
        iphoneIcon:Phone,
        macIcon:Macbook,
        tabIcon:"",
        visionICon:"",
        watchIcon:"",
        startDateH:"Start date",
        startDate:"January 10, 2025",
        levelH:"Level",
        level:"Beginner",
        durationH:"Duration",
        duration:"4 weeks",
        formLink:"https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-BeginnersEnquiryFormData.json",
        formCourse:"UI/UX Beginner",
        demoLink:"https://freedemo-form-default-rtdb.firebaseio.com/UIUX-BeginnersFreeDemoForm.json",
        fee:"10000",
        formtype:"uiuxCourse",
        courseName:"UIUX-responsive-ui-designs",
        totAmount:"",
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        category:"UI/UX",
        popularity:"Popular",
        shareIcon:Share,
        courseHeading:"Building Functional UX",
        courseDescription:"Learn to build projects with native features of platforms and devices. ",
        rating:"4.8",
        ratingIcon:RatingStar,
        rate:"20,000 /",
        initialRate:"45,000",
        enrolled:"126 Enrolled in last week",
        whatsappIcon:Whatsapp,
        facebookIcon:Facebook,
        linkedinIcon:Linkedin,
        xIcon:X,
        closeIcon:close,
        platform:"Learn",
        iphoneIcon:Phone,
        macIcon:Macbook,
        tabIcon:Tab,
        visionICon:"",
        watchIcon:Watch,
        startDateH:"Start date",
        startDate:"January 10, 2025",
        levelH:"Level",
        level:"Intermediate",
        durationH:"Duration",
        duration:"8 weeks",
        formLink:"https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-IntermediateEnquiryFormData.json",
        formCourse:"UI/UX Intermediate",
        demoLink:"https://freedemo-form-default-rtdb.firebaseio.com/UIUX-IntermediateFreeDemoForm.json",
        fee:"20000",
        formtype:"uiuxCourse",
        courseName:"UIUX-building-functional-ux",
        totAmount:"",
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        category:"UI/UX",
        popularity:"Popular",
        shareIcon:Share,
        courseHeading:"Spatial UI Design",
        courseDescription:"Learn to create immersive spatial and connected application. ",
        rating:"4.8",
        ratingIcon:RatingStar,
        rate:"60,000 /",
        initialRate:"1,25,000",
        enrolled:"126 Enrolled in last week",
        whatsappIcon:Whatsapp,
        facebookIcon:Facebook,
        linkedinIcon:Linkedin,
        xIcon:X,
        closeIcon:close,
        platform:"Learn",
        iphoneIcon:Phone,
        macIcon:Macbook,
        tabIcon:Tab,
        visionICon:Vision,
        watchIcon:Watch,
        startDateH:"Start date",
        startDate:"January 10, 2025",
        levelH:"Level",
        level:"Advanced",
        durationH:"Duration",
        duration:"12 weeks",
        formLink:"https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-AdvanceEnquiryFormData.json",
        formCourse:"UI/UX Advanced",
        demoLink:"https://freedemo-form-default-rtdb.firebaseio.com/UIUX-AdvanceFreeDemoForm.json",
        fee:"60000",
        formtype:"uiuxCourse",
        courseName:"UIUX-spatial-ui-designs",
        totAmount:"",
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#e6f7ff",
        "category": "AI",
        "popularity": "Trending",
        "shareIcon": "Share",
        "courseHeading": "5 Days GEN-AI Crash Course",
        "courseDescription": "Master Python and Large Language Models with hands-on projects.",
        "rating": "4.7",
        "ratingIcon": RatingStar,
        "rate": "799 /",
        "initialRate": "10,000",
        "enrolled": "200+ enrolled last week",
        "whatsappIcon": Whatsapp,
        "facebookIcon": Facebook,
        "linkedinIcon": Linkedin,
        "xIcon": X,
        "closeIcon": close,
        "platform": "Learn",
        "iphoneIcon": Phone,
        "macIcon": Macbook,
        "tabIcon": Tab,
        "visionIcon": Vision,
        "watchIcon": Watch,
        "startDateH": "Start date",
        startDate:"January 10, 2025",
        "levelH": "Level",
        "level": "Certification",
        "durationH": "Duration",
        "duration": "5 days",
        formLink:"https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-AdvanceEnquiryFormData.json",
        "formCourse": "AI Certification",
        demoLink:"https://freedemo-form-default-rtdb.firebaseio.com/UIUX-AdvanceFreeDemoForm.json",
        "fee": "799",
        "formtype": "genAICourse",
        "courseName": "gen-ai-crash-course",
        totAmount:"",
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#e6f7ff",
        "category": "AI/ML",
        "popularity": "Trending",
        "shareIcon": Share,
        "courseHeading":"Advanced Generative AI Certification Program",
        "courseDescription": "Master advanced AI concepts including machine learning, deep learning, and natural language processing through hands-on projects and career guidance.",
        "rating": "4.8",
        "ratingIcon": RatingStar,
        "rate": "60,000 /",
        "initialRate": "1,45,000",
        "enrolled": "200+ enrolled last week",
        "whatsappIcon": Whatsapp,
        "facebookIcon": Facebook,
        "linkedinIcon": Linkedin,
        "xIcon": X,
        "closeIcon": close,
        "platform": "Learn",
        "iphoneIcon": Phone,
        "macIcon": Macbook,
        "tabIcon": Tab,
        "visionIcon": Vision,
        "watchIcon": Watch,
        "startDateH": "Start date",
        startDate:"January 10, 2025",
        "levelH": "Level",
        "level": "Advanced Certification",
        "durationH": "Duration",
        "duration": "12 weeks",
        "formLink": "https://uiux-beginners-formdata-default-rtdb.firebaseio.com/UIUX-AdvanceEnquiryFormData.json",
        "formCourse": "Advanced Generative AI Certification",
        "demoLink": "https://freedemo-form-default-rtdb.firebaseio.com/UIUX-AdvanceFreeDemoForm.json",
        "fee": "60000",
        "formtype": "advancedGenAICourse",
        "courseName": "advanced-gen-ai-certification",
        totAmount:"",
    }
    
    
]


const CourseAboutData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        aboutH:"About the Course",
        description:"This course is structured to explore the core pillars of digital marketing, from SEO and content creation to social media strategy and email campaigns. Learn how to leverage paid advertising effectively and optimize your efforts through analytics, ensuring a strong online presence and measurable results. Ideal for marketers and entrepreneurs seeking to excel in the digital landscape.",
        toolsH:"Tools Covered",
        toolsimg:[
            {url:Gtm,alt:"GTM"},
            {url:Analytics,alt:"Analytics"},
            {url:Chatgpt,alt:"Chatgpt"},
            {url:Mailchimp,alt:"Mailchimp"},
            {url:Hubspot,alt:"Hubspot"}

        ],
        
        skillsH:"Skills you will Master",
        skillP:[
            "SEO",
            "Content creation ",
            "Social media marketing ",
            "Email campaigns",
            "PPC",
            "Designing for Conversation AI’s"
        ]
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        aboutH:"About the Course",
        description:"Introduction to Responsive UI Design course provides a structured journey through fundamental principles and practical techniques for creating engaging digital experiences. From user-centered design basics to advanced topics like the latest trends, you'll master typography, colors, user flows, wireframing, and landing page development.",
        toolsH:"Tools Covered",
        toolsimg:[
            {url:Figma,alt:"Figma"},
            {url:Miro,alt:"Miro"},

        ],
        
        skillsH:"Skills you will Master",
        skillP:[
            "Typography",
            " Colour mastery",
            "UI Component Creation",
            "User Flow",
            "Wire Framing",
            "Landing Page Development"
        ]
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        aboutH:"About the Course",
        description:"Design and Develop Multi-Device UI/UX Course begins with foundational concepts like user-centric design to advanced topics such as data-driven design and mobile UX, you'll gain a diverse skill set. Learn the latest design trends and core UX principles adaptable to evolving trends. ",
        toolsH:"Tools Covered",
        toolsimg:[
            {url:Figma,alt:"Figma"},
            {url:Miro,alt:"Miro"},
            {url:Framer,alt:"Framer"} 

        ],
        
        skillsH:"Skills you will Master",
        skillP:[
            "User Flow & Wire Framing",
            "Landing Page Development",
            " Data Visualization ",
            "Mobile UX",
            "Visual Design",
            "Journey Mapping"
        ]
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        aboutH:"About the Course",
        description:"Spatial and Immersive UI/UX Design curriculum is built on deep core values like user research, usability, testing, designing for modern technologies like Wear OS and Vision OS. Our strategic gamified learning process helps you gain foundational knowledge and build diversified projects for your portfolio.",
        toolsH:"Tools Covered",
        toolsimg:[
            {url:Figma,alt:"Figma"},
            {url:Miro,alt:"Miro"},
            {url:Chatgpt,alt:"Chatgpt"},
            {url:Gemini,alt:"Gemini"},
            {url:Framer,alt:"Framer"} 

        ],
        
        skillsH:"Skills you will Master",
        skillP:[
            "Emotional Design",
            " Spatial Design ",
            " Accessibility and Inclusive Design ",
            " Designing for Virtual Reality",
            "Creating Dynamic User Experience",
            "Designing for Conversation AI’s"
        ]
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#e6f7ff",
        "aboutH": "About the Course",
        "description": "Our 5-day certification program in Python and LLMs builds a strong programming foundation and practical skills in AI, featuring hands-on projects like a Gen AI chatbot for portfolio enhancement. You'll gain proficiency in integrating Large Language Models with Python applications and learn best practices for deploying AI solutions.",
        // "toolsH": "Tools Covered",
        // toolsimg:[
        //     {url:Figma,alt:"Figma"},
        //     {url:Miro,alt:"Miro"},
        //     {url:Chatgpt,alt:"Chatgpt"},
        //     {url:Gemini,alt:"Gemini"},
        //     {url:Framer,alt:"Framer"} 

        // ],
        "skillsH": "Skills you will Master",
        "skillP": [
            "Python Programming",
            "Data Types and Structures",
            "Conditional Statements and Loops",
            "Functions and Classes",
            "LLM Integration",
            "Gen AI Chatbot Development"
        ]
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#e6f7ff",
        "aboutH": "About the Course",
        "description": "Our 12-week Advanced Generative AI Certification Program offers an in-depth exploration of machine learning, deep learning, and natural language processing. You will gain hands-on experience with Python, LLMs, and advanced AI models through industry-relevant projects, preparing you for a successful career in AI.",
        "skillsH": "Skills you will Master",
        "skillP": [
            "Python Programming",
            "Data Types and Structures",
            "Machine Learning Fundamentals",
            "Deep Learning with Neural Networks",
            "Natural Language Processing (NLP)",
            "Generative AI Models and Techniques",
            "Data Visualization",
        ]
    }
    
    
]


const CourseSyllabusData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        viewMore:"#ff9c70",
        hoverColor:"1c1623",
        dropIcon:ExpandMore,
        heading:"Course Syllabus",
        syllabus:[
        {title:"Introduction to Digital Marketing",
         contents:"Learn the basics of digital marketing, including its importance, key concepts, and various channels."
        },
        {title:"Understanding the Digital Landscape",
         contents:"Explore consumer behavior online, emerging trends, and the impact of digital technologies on marketing strategies."
        },
        {title:"Introduction to SEO",
        contents:"Learn Search Engine Optimization, including keyword research, on-page optimization, and off-page optimization techniques."
        },
        {title:"Content Marketing Strategy",
        contents:"Learn to develop a comprehensive content plan aligned with business objectives, target audience, and distribution channels."
        },
        {title:"Social Media Marketing",
        contents:"Explore strategies for leveraging social media platforms effectively to build brand awareness, engage with the audience, and drive conversions."
        },
        {title:"Email Marketing Strategy",
        contents:"Learn to Design and implement successful email campaigns, including segmentation, automation, and personalization techniques."
        },
        {title:"Paid Advertising",
        contents:" Different paid advertising channels, ad formats, targeting options, and budget management strategies."
        },
        {title:"Google Analytics Fundamentals",
        contents:"Understand the basics of Google Analytics, including tracking website traffic, user behaviour, and conversion data."
        },
        {title:"Conversion Rate Optimization (CRO)",
        contents:" Learn the techniques for optimizing website performance and improving conversion rates through testing, analysis, and iteration."
        },
         
        ]
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        viewMore:"#6d28d9",
        hoverColor:"1c1623",
        heading:"Course Syllabus",
        dropIcon:ExpandMore,
        syllabus:[
        {title:"Introduction to UI/UX",
         contents:"Understand the fundamentals of user interface and experience design and explore the importance of user research, usability testing, and user personas in the design process."
        },
        {title:"Typography, Colors & Components",
         contents:"Learn how to effectively use typography, color theory, and UI components to create visually appealing and user-friendly interfaces, with a focus on consistency, hierarchy, and readability."
        },
        {title:"User flow, Wireframing and Building a Landing Page",
        contents:"Learn the process of designing user flows, creating wireframes, and implementing them to build a functional landing page, emphasising usability and user-centric design principles."
        },
        {title:"Concepts of 21 Design",
        contents:"Explore emerging design trends and concepts shaping the digital landscape, including responsive design, micro-interactions, and minimalist design principles, to stay ahead in the rapidly evolving field of UI/UX."
        },
        {title:"Core Principles of UX & UX Adaption for Evolving Trends",
        contents:"Delve into the core principles of UX design and learn how to adapt them to changing trends and user behaviors, ensuring designs remain relevant and effective over time."
        }        ]
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        viewMore:"#6d28d9",
        hoverColor:"1c1623",
        heading:"Course Syllabus",
        dropIcon:ExpandMore,
        syllabus:[
        {title:"Introduction to UI/UX",
         contents:"Understand the fundamentals of user interface and experience design and explore the importance of user research, usability testing, and user personas in the design process."
        },
        {title:"Typography, Colors & Components",
         contents:"Learn how to effectively use typography, color theory, and UI components to create visually appealing and user-friendly interfaces, with a focus on consistency, hierarchy, and readability."
        },
        {title:"User flow, Wireframing and Building a Landing Page",
        contents:"Learn the process of designing user flows, creating wireframes, and implementing them to build a functional landing page, emphasising usability and user-centric design principles."
        },
        {title:"Concepts of 21 Design",
        contents:"Explore emerging design trends and concepts shaping the digital landscape, including responsive design, micro-interactions, and minimalist design principles, to stay ahead in the rapidly evolving field of UI/UX."
        },
        {title:"Core Principles of UX & UX Adaption for Evolving Trends",
        contents:"Delve into the core principles of UX design and learn how to adapt them to changing trends and user behaviors, ensuring designs remain relevant and effective over time."
        },
        {title:"Data Visualization & Data Driven Design",
        contents:"Explore the techniques for visualizing data effectively in user interfaces and leveraging data-driven design principles to create personalized and intuitive user experiences."
        },
        {title:"Mobile UX Concepts",
        contents:" Understand the unique considerations and best practices for designing user experiences on mobile devices, including responsive design, touch interactions, and mobile-first design approaches."
        },
        {title:"Visual Design & Journey Mapping",
        contents:"Learn how to use visual design elements effectively and map user journeys to create cohesive and engaging experiences across different touchpoints and channels."
        },
        
         
        ]
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        viewMore:"#6d28d9",
        hoverColor:"1c1623",
        heading:"Course Syllabus",
        dropIcon:ExpandMore,
        syllabus:[
        {title:"Introduction to UI/UX",
         contents:"Understand the fundamentals of user interface and experience design and explore the importance of user research, usability testing, and user personas in the design process."
        },
        {title:"Typography, Colors & Components",
         contents:"Learn how to effectively use typography, color theory, and UI components to create visually appealing and user-friendly interfaces, with a focus on consistency, hierarchy, and readability."
        },
        {title:"User flow, Wireframing and Building a Landing Page",
        contents:"Learn the process of designing user flows, creating wireframes, and implementing them to build a functional landing page, emphasising usability and user-centric design principles."
        },
        {title:"Concepts of 21 Design",
        contents:"Explore emerging design trends and concepts shaping the digital landscape, including responsive design, micro-interactions, and minimalist design principles, to stay ahead in the rapidly evolving field of UI/UX."
        },
        {title:"Core Principles of UX & UX Adaption for Evolving Trends",
        contents:"Delve into the core principles of UX design and learn how to adapt them to changing trends and user behaviors, ensuring designs remain relevant and effective over time."
        },
        {title:"Data Visualization & Data Driven Design",
        contents:"Explore the techniques for visualizing data effectively in user interfaces and leveraging data-driven design principles to create personalized and intuitive user experiences."
        },
        {title:"Mobile UX Concepts",
        contents:" Understand the unique considerations and best practices for designing user experiences on mobile devices, including responsive design, touch interactions, and mobile-first design approaches."
        },
        {title:"Visual Design & Journey Mapping",
        contents:"Learn how to use visual design elements effectively and map user journeys to create cohesive and engaging experiences across different touchpoints and channels."
        },
        {title:"Emotional Design & Spatial Design",
        contents:"Explore the psychological aspects of design, including emotional design principles and spatial considerations, to create immersive and memorable user experiences that resonate with users on a deeper level."
        },
        {title:"Accessibility and Inclusive Design",
        contents:"Understand the importance of designing for accessibility and inclusivity, including techniques for making digital products usable for people with disabilities and diverse user groups."
        },
        {title:"Designing for Virtual Reality & Designing for Conversation AI’s",
        contents:" Learn the principles and best practices for designing immersive virtual reality experiences and conversational interfaces, including considerations for interaction design and user engagement."
        },
        {title:"Creating a Dynamic User Experience",
        contents:" Learn advanced techniques for creating dynamic and interactive user experiences, including animation, gamification, and personalization, to captivate users and drive engagement."
        },
         
        ]
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#e6f7ff",
        "viewMore": "#6d28d9",
        "hoverColor": "#1c1623",
        "heading": "Course Syllabus",
        "dropIcon": "ExpandMore",
        "syllabus": [
            {
                "title": "Getting Started with Python",
                "contents": "Introduction to Python, installation process, and understanding IDEs. Write 'Hello World' and explore basics such as syntax, variables, data types, data structures, loops, functions, arrays, and classes."
            },
            {
                "title": "Advanced Python Concepts",
                "contents": "Dive into core Python topics like conditional statements, loops, classes, objects, and practice exercises to solidify your foundation in Python programming."
            },
            {
                "title": "Getting Started with Large Language Models (LLMs)",
                "contents": "Introduction to LLMs, installation of LLM tools (e.g., Ollama), and working with them on your local machine to understand their potential in AI projects."
            },
            {
                "title": "Integrating LLMs with Python",
                "contents": "Learn how to integrate LLMs within Python applications on your local machine, including best practices for combining LLM capabilities with Python code."
            },
            {
                "title": "Building Your Own Gen AI Chatbot",
                "contents": "Develop a Gen AI chatbot from scratch using Python and LLMs, complete with deployment and review sessions to refine and showcase your project."
            }
        ]
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#e6f7ff",
        "viewMore": "#6d28d9",
        "hoverColor": "#1c1623",
        "heading": "Course Syllabus",
        "dropIcon": "ExpandMore",
        "syllabus": [
            {
                "title": "Getting Started with Python",
                "contents": "Introduction to Python, installation process, and understanding IDEs. Write 'Hello World' and explore basics such as syntax, variables, data types, data structures, loops, functions, arrays, and classes."
            },
            {
                "title": "Advanced Python Concepts",
                "contents": "Dive into core Python topics like conditional statements, loops, classes, objects, and practice exercises to solidify your foundation in Python programming."
            },
            {
                "title": "Introduction to Data Science",
                "contents": "Learn the basics of data science, including data types, libraries such as Pandas, NumPy, and Scikit-Learn, and understanding their application in AI projects."
            },
            {
                "title": "Data Processing and Visualization",
                "contents": "Get hands-on experience with data cleaning, manipulation, and visualization using libraries like Pandas, Matplotlib, and Seaborn. Explore how to handle missing data and create meaningful visualizations."
            },
            {
                "title": "Machine Learning Algorithms",
                "contents": "Introduction to supervised and unsupervised learning algorithms, including regression, classification, clustering, and decision trees. Learn how to apply machine learning techniques using Scikit-Learn."
            },
            {
                "title": "Deep Learning and Neural Networks",
                "contents": "Study the fundamentals of deep learning, including neural networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and their application in tasks like image and text processing."
            },
            {
                "title": "Natural Language Processing (NLP)",
                "contents": "Learn the basics of NLP, including text preprocessing, tokenization, and using pre-trained models like GPT for text generation and other NLP tasks."
            },
            {
                "title": "Generative AI and GANs",
                "contents": "Explore Generative Adversarial Networks (GANs) and their use in generating images, text, and other media. Build and train a GAN model using frameworks like TensorFlow or PyTorch."
            },
            {
                "title": "Large Language Models (LLMs)",
                "contents": "Understand the theory and application of LLMs, including GPT and other transformer-based models. Learn how to fine-tune and deploy LLMs in your own projects."
            },
            {
                "title": "Introduction to Deep Learning",
                "contents": "Understand the principles behind deep learning, including artificial neural networks, and learn to implement deep learning models with Python libraries like TensorFlow and PyTorch."
            },
            {
                "title": "Artificial Neural Networks (ANNs)",
                "contents": "Study the architecture of ANNs, including training processes, forward and backward propagation, and activation functions. Learn how to implement a neural network from scratch."
            },
            {
                "title": "Convolutional Neural Networks (CNNs)",
                "contents": "Learn about CNNs and their application in image classification and computer vision. Implement CNN models using TensorFlow and PyTorch on datasets like MNIST and CIFAR-10."
            },
            {
                "title": "Recurrent Neural Networks (RNNs)",
                "contents": "Explore RNNs and their use in time-series data, text generation, and natural language processing. Understand Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks."
            },
            {
                "title": "Generative Adversarial Networks (GANs)",
                "contents": "Dive into GANs, including theory, architecture, and real-world applications. Build GANs using frameworks like TensorFlow and Keras."
            },
            {
                "title": "Introduction to Natural Language Processing (NLP)",
                "contents": "Learn how to preprocess text data, perform tokenization, and apply NLP techniques for text analysis, including sentiment analysis, text classification, and entity recognition."
            },
            {
                "title": "Text Preprocessing and Tokenization",
                "contents": "Explore how to clean, normalize, and tokenize text data using Python libraries like NLTK, SpaCy, and Hugging Face."
            },
            {
                "title": "Transformers and GPT Models",
                "contents": "Understand transformer architecture, including attention mechanisms and multi-head attention. Learn how to fine-tune pre-trained models like GPT for text generation and other NLP tasks."
            },
            {
                "title": "Text Generation with LLMs",
                "contents": "Explore techniques for generating human-like text using LLMs like GPT-3, including text completion, summarization, and creative writing applications."
            },
            {
                "title": "Building Your Own Gen AI Chatbot",
                "contents": "Develop a Gen AI chatbot from scratch using Python and LLMs, complete with deployment and review sessions to refine and showcase your project."
            },
            {
                "title": "Data Visualization and Plotting",
                "contents": "Learn to create various types of plots using Matplotlib, Seaborn, and Plotly, including line charts, bar plots, scatter plots, and heatmaps."
            },
            {
                "title": "Exploring Machine Learning Pipelines",
                "contents": "Learn how to build machine learning pipelines using Scikit-Learn, including data preprocessing, model training, and hyperparameter tuning."
            },
            {
                "title": "AI Model Evaluation and Tuning",
                "contents": "Understand how to evaluate AI models using metrics like accuracy, precision, recall, and F1-score. Learn how to optimize models using techniques like cross-validation and grid search."
            }
        ]
    }
    
    
]


const CourseProjectData=[
    {
        id:"digital-marketing-course",
        heading:"Projects",
        bgColor:"#ffe4d8",
        project:[
            {
                title:"SEO",
                description:"Explore the intricate world of Search Engine Optimization (SEO) and learn how to optimise website content to rank higher in search engine results. Understand the importance of keywords, meta tags, and backlinks.",
                
            },
            {
                title:"Marketing Funnel",
                description:"Delve into the concept of the marketing funnel from initial awareness to final conversion. Learn to craft tailored strategies for each stage of the funnel, effectively nurturing leads and maximising sales opportunities for your business.",
               
            },
            {
                title:"Email Campaigns",
                description:"Master the art of crafting engaging and impactful email campaigns and explore techniques for building subscriber lists and optimising email deliverability to drive customer engagement, foster brand loyalty, and generate revenue.",
                
            },
            {
                title:"PPC (Pay-Per-Click)",
                description:"Dive into the world of Pay-Per-Click (PPC) advertising and discover how to create targeted ad campaigns that deliver immediate results. Learn to leverage platforms like Google Ads and social media advertising to reach your target audience.",
              
            },
            {
                title:"Social Media Management",
                description:"Develop strategies for building and managing your brand's presence across social media platforms. Learn to create compelling content, engage with your audience, and analyse performance metrics.",
                
            }
         ]
    },
    {
        id:"responsive-ui-designs",
        heading:"Projects",
        bgColor:"#d9cefb",
        project:[
            {
                title:"Agency Landing Page ",
                description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                bg_color:""
            },
            {
                title:"Blog Website",
                description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                bg_color:""
            },
         ]
    },
    {
        id:"building-functional-ux",
        heading:"Projects",
        bgColor:"#d9cefb",
        project:[
            {
                title:"Agency Landing Page ",
                description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                bg_color:""
            },
            {
                title:"Blog Website",
                description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                bg_color:""
            },
            {
                title:"Ecommerce Web App",
                description:"Develop a robust e-commerce app with intuitive navigation, seamless checkout, and personalized product recommendations for effortless online shopping.",
                bg_color:""
            },
           
            {
                title:"Payments Mobile App",
                description:"Create an intuitive, secure mobile app for payments, with streamlined user flows and real-time transaction tracking for convenient financial management.",
                bg_color:""
            },
            
         ]
    },
    {
        id:"spatial-ui-designs",
        heading:"Projects",
        bgColor:"#d9cefb",
        project:[
            {
                title:"Agency Landing Page ",
                description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                bg_color:""
            },
            {
                title:"Blog Website",
                description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                bg_color:""
            },
            {
                title:"Ecommerce Web App",
                description:"Develop a robust e-commerce app with intuitive navigation, seamless checkout, and personalized product recommendations for effortless online shopping.",
                bg_color:""
            },
          
            {
                title:"Payments Mobile App",
                description:"Create an intuitive, secure mobile app for payments, with streamlined user flows and real-time transaction tracking for convenient financial management.",
                bg_color:""
            },
            {
                title:"Spatial Web Design ",
                description:"Create an immersive and visually captivating spatial web design for streaming platforms, similar to the seamless experience offered by Netflix.",
                bg_color:""
            },
            {
                title:"Fitness Smartwatch App",
                description:"Design a dynamic fitness app for smartwatches, featuring customizable workouts and real-time activity tracking to empower users to reach their fitness goals.",
                bg_color:""
            },
         ]
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "heading": "Projects",
        "bgColor": "#e6f7ff",
        "project": [

            {
                "title": "Chatbot with LLM Integration",
                "description": "Design and build a chatbot that leverages LLM technology to provide user-specific responses and simulate real-time conversations.",
                "bg_color": ""
            },

        ]
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "heading": "Projects",
        "bgColor": "#d9cefb",
        "project": [
            {
                "title": "Generative AI Chatbot",
                "description": "Build an AI-powered chatbot using Python and Large Language Models (LLMs). The chatbot will handle user queries with natural responses and can be deployed on various platforms.",
                "bg_color": "#f0f8ff"
            },
            {
                "title": "Data Visualization Dashboard",
                "description": "Create an interactive and dynamic data visualization dashboard using Python and libraries like Matplotlib, Seaborn, and Plotly. The dashboard will display insights from data analysis on a web interface.",
                "bg_color": "#f4f4f4"
            },
            {
                "title": "AI-Driven Content Generation Platform",
                "description": "Develop a content generation platform that uses GPT-3 for creating articles, blogs, or other types of content based on user input. The system will leverage NLP for automatic text generation.",
                "bg_color": "#d1e8ff"
            },
            {
                "title": "Generative Adversarial Network (GAN) Image Generation",
                "description": "Create a project that uses GANs to generate realistic images from random noise. The project will explore image generation techniques and handle common challenges like mode collapse.",
                "bg_color": "#f3f3f3"
            },
            {
                "title": "Time-Series Analysis and Forecasting App",
                "description": "Develop an app that uses deep learning models, such as LSTMs, for time-series forecasting. This project will focus on predicting future trends based on historical data.",
                "bg_color": "#f1e6f6"
            }
        ]
    }
    
    
]

const CourseReviewData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        heading:"Reviews",
        review:[
            { name: "Divya Nair", content: "This course exceeded my expectations! The instructors were knowledgeable and provided practical insights that I could immediately apply to my business. Highly recommended!" },
            {name: "Dinesh Kumar", content: "I've taken several digital marketing courses before, but this one stands out for its comprehensive coverage and hands-on approach. I feel much more confident in my digital marketing skills now!" },
            { name: "Abishek", content: "As someone new to digital marketing, I found this course incredibly helpful in demystifying the complex world of online promotion. The instructors were engaging, and the content was well-structured. Thank you!" },
            
        ]
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        heading:"Reviews",
        review:[
            { name: "Karthik Raj", content: "This course exceeded my expectations! The instructors provided clear explanations and practical exercises that helped me level up my design skills. Highly recommended for anyone serious about pursuing a career in UI/UX design." },
            {name: "Payal Singh", content: "As someone with a background in graphic design, I found this course to be valuable in expanding my skill set. The lessons on user research and prototyping were especially too good. I feel more confident in my ability to create designs that not only look great but also prioritize user needs." },
            { name: "Deepanjali", content: "I've taken several online courses on UI/UX design, but none have been as comprehensive and engaging as this one. The instructors break down complex concepts, making it easy to follow along. Plus, the projects are fun and challenging—I've already started building my portfolio!" },
            
        ]
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        heading:"Reviews",
        review:[
            { name: "Karthik Raj", content: "This course exceeded my expectations! The instructors provided clear explanations and practical exercises that helped me level up my design skills. Highly recommended for anyone serious about pursuing a career in UI/UX design." },
            {name: "Payal Singh", content: "As someone with a background in graphic design, I found this course to be valuable in expanding my skill set. The lessons on user research and prototyping were especially too good. I feel more confident in my ability to create designs that not only look great but also prioritize user needs." },
            { name: "Deepanjali", content: "I've taken several online courses on UI/UX design, but none have been as comprehensive and engaging as this one. The instructors break down complex concepts, making it easy to follow along. Plus, the projects are fun and challenging—I've already started building my portfolio!" },
            
        ]
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        heading:"Reviews",
        review:[
            { name: "Karthik Raj", content: "This course exceeded my expectations! The instructors provided clear explanations and practical exercises that helped me level up my design skills. Highly recommended for anyone serious about pursuing a career in UI/UX design." },
            {name: "Payal Singh", content: "As someone with a background in graphic design, I found this course to be valuable in expanding my skill set. The lessons on user research and prototyping were especially too good. I feel more confident in my ability to create designs that not only look great but also prioritize user needs." },
            { name: "Deepanjali", content: "I've taken several online courses on UI/UX design, but none have been as comprehensive and engaging as this one. The instructors break down complex concepts, making it easy to follow along. Plus, the projects are fun and challenging—I've already started building my portfolio!" },
            
        ]
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#e6f7ff",
        "heading": "Reviews",
        "review": [
            {
                "name": "Aarav Patel",
                "content": "This course gave me a solid understanding of Python and Large Language Models. The instructors made complex topics easy to grasp with hands-on projects that helped me gain confidence in coding and AI. Perfect for beginners looking to dive into AI!"
            },
            {
                "name": "Neha Verma",
                "content": "I was a bit intimidated by the idea of working with LLMs, but this course made it accessible. The practical exercises were especially helpful, and now I can build a basic chatbot on my own. Highly recommended for anyone interested in AI."
            },
            {
                "name": "Rohit Sharma",
                "content": "Excellent crash course! The Python basics were covered well, and the progression to LLMs was smooth. I appreciated the project-based approach, which allowed me to apply what I learned immediately. Great value for a 5-day program."
            }
        ]
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#e6f7ff",
        "heading": "Reviews",
        "review": [
            {
                "name": "Isha Reddy",
                "content": "This program gave me a comprehensive understanding of data science, deep learning, and AI. The hands-on projects helped me apply concepts like Python, LLMs, and GANs to real-world problems. The instructors were excellent, and the career support was invaluable. Highly recommend for anyone serious about advancing their AI skills!"
            },
            {
                "name": "Vikram Mehta",
                "content": "The Advanced Generative AI program exceeded my expectations. I was able to master complex topics like machine learning, NLP, and deep learning in a practical and structured manner. The mini and major projects enhanced my portfolio, and the placement guidance was a big plus. Worth every penny!"
            },
            {
                "name": "Ananya Desai",
                "content": "A game-changing course for anyone interested in AI. The combination of theory and practical application was perfect. I learned not just how to use Python and machine learning libraries but also how to deploy AI models effectively. The course also helped me build projects that showcased my skills. Excellent program!"
            }
        ]
    }
    
    
]

const CourseCertificateData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        image:dmcertificate,
        heading:"Earn Industry Recognised Certificate",
        description:"Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success."
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        image:uiuxcertificate,
        heading:"Earn Industry Recognised Certificate",
        description:"Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success."
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        image:uiuxcertificate,
        heading:"Earn Industry Recognised Certificate",
        description:"Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success."
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        image:uiuxcertificate,
        heading:"Earn Industry Recognised Certificate",
        description:"Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success."
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#e6f7ff",
        // "image": "genai-certificate", 
        "heading": "Earn Industry Recognized Certificate",
        "description": "Upon completing the course, you'll receive a certificate that showcases your expertise in Python and Large Language Models. Add this credential to your LinkedIn profile, resume, or CV, and share your achievement to highlight your proficiency in AI and Python development."
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#e6f7ff",
        "heading": "Earn Industry Recognized Certificate",
        "description": "Upon completing the Advanced Generative AI Certification Program, you'll receive a certificate that highlights your proficiency in AI, machine learning, deep learning, and Python programming. This certification demonstrates your expertise in building advanced AI models, including Generative AI Chatbots, GANs, and LLMs. Showcase your skills to potential employers and stand out in the rapidly growing AI field by adding this credential to your LinkedIn profile, resume, or CV."
    }
    
    
]

const CoursePaymentData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fff8f5",
        shadowColor:"0px 0px 41px -8px #ffd9ca",
        feeH:"Course Fee",
        weeks:"3 weeks",
        start:"Starting at",
        rate:"INR 15,000",
        initialRate:"",
        sub:"Including",
        sublist:[
            {list:"Lifetime access to course materials"},
            {list:"Doubt clearing sessions"},
            {list:"Career guidance and Mock Interviews"}
        ],
        paymentH:"Payment options",
        payment:[
            {heading:"UPI",
            images:[
                {image:Gpay,alt:"Gpay"},
                 {image:PhonePe,alt:"Phonepe"},
                 {image:Upi,alt:"Upi"}
            ]
        
            },
            {heading:"Card",
            images:[
                 {image:Mastercard,alt:"Mastercard"},
                 {image:Rupay,alt:"Rupay"},
                 {image:Visa,alt:"Visa"}
            ]
        
            },
            {heading:"Wallet",
            images:[
                 {image:Freecharge,alt:"Freecharge"},
                 {image:Mobikwik,alt:"Mobikwik"},
                 {image:Ola,alt:"Ola"},
                 {image:Jio,alt:"Jio"}
            ]
        
            }
        ]

    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f4f0ff",
        shadowColor:"0px 0px 41px -8px #d5bdff",
        feeH:"Course Fee",
        weeks:"4 weeks",
        start:"Starting at",
        rate:"INR 10,000 /",
        initialRate:"17,500",
        sub:"Including",
        sublist:[
            {list:"Lifetime access to course materials"},
            {list:"Doubt clearing sessions"},
            {list:"Career guidance and Mock Interviews"}
        ],
        paymentH:"Payment options",
        payment:[
            {heading:"UPI",
            images:[
                {image:Gpay,alt:"Gpay"},
                 {image:PhonePe,alt:"Phonepe"},
                 {image:Upi,alt:"Upi"}
            ]
        
            },
            {heading:"Card",
            images:[
                 {image:Mastercard,alt:"Mastercard"},
                 {image:Rupay,alt:"Rupay"},
                 {image:Visa,alt:"Visa"}
            ]
        
            },
            {heading:"Wallet",
            images:[
                 {image:Freecharge,alt:"Freecharge"},
                 {image:Mobikwik,alt:"Mobikwik"},
                 {image:Ola,alt:"Ola"},
                 {image:Jio,alt:"Jio"}
            ]
        
            }
        ]
    },
{
    id:"building-functional-ux",
    bgColor:"#f4f0ff",
    shadowColor:"0px 0px 41px -8px #d5bdff",
    feeH:"Course Fee",
    weeks:"8 weeks",
    start:"Starting at",
    rate:"INR 20,000 /",
    initialRate:"45,000",
    sub:"Including",
    sublist:[
        {list:"Lifetime access to course materials"},
        {list:"Doubt clearing sessions"},
        {list:"Career guidance and Mock Interviews"}
    ],
    paymentH:"Payment options",
    payment:[
        {heading:"UPI",
        images:[
            {image:Gpay,alt:"Gpay"},
             {image:PhonePe,alt:"Phonepe"},
             {image:Upi,alt:"Upi"}
        ]
    
        },
        {heading:"Card",
        images:[
             {image:Mastercard,alt:"Mastercard"},
             {image:Rupay,alt:"Rupay"},
             {image:Visa,alt:"Visa"}
        ]
    
        },
        {heading:"Wallet",
        images:[
             {image:Freecharge,alt:"Freecharge"},
             {image:Mobikwik,alt:"Mobikwik"},
             {image:Ola,alt:"Ola"},
             {image:Jio,alt:"Jio"}
        ]
    
        }
    ]

},
{
    id:"spatial-ui-designs",
    bgColor:"#f4f0ff",
    shadowColor:"0px 0px 41px -8px #d5bdff",
    feeH:"Course Fee",
    weeks:"12 weeks",
    start:"Starting at",
    rate:"INR 60,000 /",
    initialRate:"1,25,000",
    sub:"Including",
    fee:"60000",
    sublist:[
        {list:"Lifetime access to course materials"},
        {list:"Doubt clearing sessions"},
        {list:"Career guidance and Mock Interviews"}
    ],
    paymentH:"Payment options",
    payment:[
        {heading:"UPI",
        images:[
            {image:Gpay,alt:"Gpay"},
             {image:PhonePe,alt:"Phonepe"},
             {image:Upi,alt:"Upi"}
        ]
    
        },
        {heading:"Card",
        images:[
             {image:Mastercard,alt:"Mastercard"},
             {image:Rupay,alt:"Rupay"},
             {image:Visa,alt:"Visa"}
        ]
    
        },
        {heading:"Wallet",
        images:[
             {image:Freecharge,alt:"Freecharge"},
             {image:Mobikwik,alt:"Mobikwik"},
             {image:Ola,alt:"Ola"},
             {image:Jio,alt:"Jio"}
        ]
    
        }
    ]

},
{
    id:"5-days-gen-ai-crash-course",
    "bgColor": "#e0f7fa",
    "shadowColor": "0px 0px 41px -8px #80deea",
    "feeH": "Course Fee",
    "weeks": "5 days",
    "start": "Starting at",
    "rate": "INR 799 /",
    "initialRate": "INR 10,000",
    "sub": "Including",
    "fee": "799",
    "courseHeading": "5 Days GEN-AI Crash Course",

    sublist:[
        {list:"Lifetime access to course materials"},
        {list:"Doubt clearing sessions"},
        {list:"Career guidance and Mock Interviews"}
    ],
    paymentH:"Payment options",
    payment:[
        {heading:"UPI",
        images:[
            {image:Gpay,alt:"Gpay"},
             {image:PhonePe,alt:"Phonepe"},
             {image:Upi,alt:"Upi"}
        ]
    
        },
        {heading:"Card",
        images:[
             {image:Mastercard,alt:"Mastercard"},
             {image:Rupay,alt:"Rupay"},
             {image:Visa,alt:"Visa"}
        ]
    
        },
        {heading:"Wallet",
        images:[
             {image:Freecharge,alt:"Freecharge"},
             {image:Mobikwik,alt:"Mobikwik"},
             {image:Ola,alt:"Ola"},
             {image:Jio,alt:"Jio"}
        ]
    
        }
    ]

},
{
    "id": "advanced-generative-ai-certification-program",
    "bgColor": "#e0f7fa",
    "shadowColor": "0px 0px 41px -8px #80deea",
    "feeH": "Course Fee",
    "weeks": "12 weeks",
    "start": "Starting at",
    "rate": "INR 60,000 /",
    "initialRate": "INR 1,45,000",
    "sub": "Including",
    "fee": "60000",
    "courseHeading": "Advanced Generative AI Certification Program",
    sublist:[
        {list:"Lifetime access to course materials"},
        {list:"Doubt clearing sessions"},
        {list:"Career guidance and Mock Interviews"}
    ],
    paymentH:"Payment options",
    payment:[
        {heading:"UPI",
        images:[
            {image:Gpay,alt:"Gpay"},
             {image:PhonePe,alt:"Phonepe"},
             {image:Upi,alt:"Upi"}
        ]
    
        },
        {heading:"Card",
        images:[
             {image:Mastercard,alt:"Mastercard"},
             {image:Rupay,alt:"Rupay"},
             {image:Visa,alt:"Visa"}
        ]
    
        },
        {heading:"Wallet",
        images:[
             {image:Freecharge,alt:"Freecharge"},
             {image:Mobikwik,alt:"Mobikwik"},
             {image:Ola,alt:"Ola"},
             {image:Jio,alt:"Jio"}
        ]
        }
    ]
},


]


const CourseFaqData=[
    {
        id:"digital-marketing-course",
        bgColor:"#fdfcfb",
        dropIcon:ExpandMore,
        heading:"Frequently asked questions",
        faq:[
        {title:"Who is this course for?",
         contents:"This course is ideal for marketing professionals, business owners, entrepreneurs, or anyone looking to enhance their digital marketing skills and effectively promote their products or services online."
        },
        {title:"Do I need any prior experience in digital marketing?",
         contents:"No prior experience is required. This course is designed to accommodate beginners as well as those with some background in marketing looking to expand their knowledge in the digital realm."
        },
        {title:"What software/tools will I need?",
        contents:"Participants will need access to a computer with internet connectivity. Additionally, we'll utilise various digital marketing tools and platforms throughout the course, many of which offer free versions or trials."
        },
        {title:"Will there be any assignments or assessments?",
        contents:"Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios."
        }
        ]
    },
    {
        id:"responsive-ui-designs",
        bgColor:"#f9f7ff",
        dropIcon:ExpandMore,
        heading:"Frequently asked questions",
        faq:[
        {title:"Is this course suitable for beginners?",
         contents:"Absolutely! Whether you're new to design or looking to enhance your existing skills, this course caters to students of all levels."
        },
        {title:"Will I receive a certificate upon completion of the course?",
         contents:"Yes, upon successful completion of the course, you will receive a certificate to showcase your skills and knowledge in UI/UX design."
        },
        {title:"Can I access the course materials after I finish the course?",
        contents:"Yes, you will have lifetime access to all course materials, including lectures, assignments, and resources. This allows you to revisit content and continue learning at your own pace even after completing the course."
        },
        {title:"What career opportunities can I pursue after completing this course?",
        contents:"Yes! Our course is designed to accommodate busy schedules. With flexible learning options, you can balance your coursework with your professional commitments."
        },
        {title:"Can I enroll in this course if I'm currently employed full-time?",
        contents:"Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios."
        },
        ]
    },
    {
        id:"building-functional-ux",
        bgColor:"#f9f7ff",
        dropIcon:ExpandMore,
        heading:"Frequently asked questions",
        faq:[
        {title:"Is this course suitable for beginners?",
         contents:"Absolutely! Whether you're new to design or looking to enhance your existing skills, this course caters to students of all levels."
        },
        {title:"Will I receive a certificate upon completion of the course?",
         contents:"Yes, upon successful completion of the course, you will receive a certificate to showcase your skills and knowledge in UI/UX design."
        },
        {title:"Can I access the course materials after I finish the course?",
        contents:"Yes, you will have lifetime access to all course materials, including lectures, assignments, and resources. This allows you to revisit content and continue learning at your own pace even after completing the course."
        },
        {title:"What career opportunities can I pursue after completing this course?",
        contents:"Yes! Our course is designed to accommodate busy schedules. With flexible learning options, you can balance your coursework with your professional commitments."
        },
        {title:"Can I enroll in this course if I'm currently employed full-time?",
        contents:"Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios."
        },
        ]
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#f9f7ff",
        dropIcon:ExpandMore,
        heading:"Frequently asked questions",
        faq:[
        {title:"Is this course suitable for beginners?",
         contents:"Absolutely! Whether you're new to design or looking to enhance your existing skills, this course caters to students of all levels."
        },
        {title:"Will I receive a certificate upon completion of the course?",
         contents:"Yes, upon successful completion of the course, you will receive a certificate to showcase your skills and knowledge in UI/UX design."
        },
        {title:"Can I access the course materials after I finish the course?",
        contents:"Yes, you will have lifetime access to all course materials, including lectures, assignments, and resources. This allows you to revisit content and continue learning at your own pace even after completing the course."
        },
        {title:"What career opportunities can I pursue after completing this course?",
        contents:"Yes! Our course is designed to accommodate busy schedules. With flexible learning options, you can balance your coursework with your professional commitments."
        },
        {title:"Can I enroll in this course if I'm currently employed full-time?",
        contents:"Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios."
        },
        ]
    },
    {
        "id": "5-days-gen-ai-crash-course",
        "bgColor": "#f9f7ff",
        "dropIcon": "ExpandMore",
        "heading": "Frequently Asked Questions",
        "faq": [
            {
                "title": "Who is this course for?",
                "contents": "This course is ideal for those looking to gain practical skills in Python programming and AI, including beginners, aspiring developers, and AI enthusiasts."
            },
            {
                "title": "Do I need prior experience in Python or AI?",
                "contents": "No prior experience is required. The course is designed for beginners, covering everything from basic Python to advanced integration with Large Language Models."
            },
            {
                "title": "What tools will I be using during the course?",
                "contents": "You will be using Python, IDEs for development, LLM tools such as Ollama, and other related tools to integrate AI functionality into your applications."
            },
            {
                "title": "Will I receive a certificate upon completion?",
                "contents": "Yes, upon successful completion of the course, you will receive a certificate to showcase your skills and knowledge in Python and Large Language Models."
            }
        ]
    },
    {
        "id": "advanced-generative-ai-certification-program",
        "bgColor": "#f9f7ff",
        "dropIcon": "ExpandMore",
        "heading": "Frequently Asked Questions",
        "faq": [
            {
                "title": "Is this course suitable for beginners?",
                "contents": "This course is advanced level, but it covers Python basics and progresses to deep learning, NLP, and AI concepts, making it suitable for learners who have foundational programming skills and are looking to deepen their knowledge in AI."
            },
            {
                "title": "Will I receive a certificate upon completion of the course?",
                "contents": "Yes, upon successful completion of the course, you will receive an industry-recognized certificate that demonstrates your expertise in Python, AI, machine learning, and large language models (LLMs)."
            },
            {
                "title": "Can I access the course materials after I finish the course?",
                "contents": "Yes, you'll have lifetime access to all course materials, including video lectures, assignments, and resources, enabling you to revisit content whenever you need a refresher."
            },
            {
                "title": "What career opportunities can I pursue after completing this course?",
                "contents": "Upon completion of this course, you will be equipped to pursue roles like AI Developer, Data Scientist, Machine Learning Engineer, NLP Engineer, and other positions in the AI and tech industry."
            },
            {
                "title": "Can I enroll in this course if I'm currently employed full-time?",
                "contents": "Yes, this course is designed with flexible learning options to accommodate professionals with busy schedules. You can manage your learning alongside your job responsibilities."
            }
        ]
    }
    
]

const CourseSimilarData=[
    {
        id:"responsive-ui-designs",
        course:"uiuxCourse",
        ids:[
            "responsive-ui-designs"
        ]
    },
    {
        id:"building-functional-ux",
        course:"uiuxCourse",
        ids:[
            "responsive-ui-designs",
            "building-functional-ux"
        ]
    },  
    {
        id:"spatial-ui-designs",
        course:"uiuxCourse",
        ids:[
            "responsive-ui-designs",
            "building-functional-ux",
            "spatial-ui-designs"
        ]
    },
    {
        id:"5-days-gen-ai-crash-course",
        course:"aiCourse",
        ids:[
            "advanced-generative-ai-certification-program",
        ]
    }

]



export { CourseHeroData, CourseAboutData , CourseSyllabusData , CourseProjectData, CourseReviewData ,CourseCertificateData , CoursePaymentData, CourseFaqData,  CourseSimilarData};
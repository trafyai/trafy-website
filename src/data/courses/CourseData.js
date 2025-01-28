import RatingStar from "@public/assets/Images/course-page/hero-section/rating-star.svg";

//----------------------------- About-------------------------

import Figma from "@public/assets/Images/course-page/hero-section/Figma.png";
import Miro from "@public/assets/Images/course-page/hero-section/Miro.png";
import Chatgpt from "@public/assets/Images/course-page/hero-section/ChatGPT.png";
import Gemini from "@public/assets/Images/course-page/hero-section/Gemini.png";
import python from '@public/assets/Images/course-page/tools/python.png'
import claude from '@public/assets/Images/course-page/tools/claude.png'
import colab from '@public/assets/Images/course-page/tools/colab.png'
import huggingface from '@public/assets/Images/course-page/tools/huggingface.png'
import jupyter from '@public/assets/Images/course-page/tools/jupyter.png'
import numpy from '@public/assets/Images/course-page/tools/numpy.png'
import ollama from '@public/assets/Images/course-page/tools/ollama.png'
import pandas from '@public/assets/Images/course-page/tools/pandas.png'



 const courseData = [
    {
        id:"responsive-ui-designs",
        bgColor:"#D9CEFB",
        category:"UI/UX Course",
        level:"Beginner",
        duration:"4 Weeks",
        courseHeading:"Introduction to Responsive UI Design",
        courseDescription:"Introduction to Responsive UI Design course provides a structured journey hrough fundamental principles and practical techniques for creating",
        certificationCourse:"Certification Courses: AI-Powered UI/UX Development with FIGMA",
        rating:"4.8",
        ratingIcon:RatingStar,
        ratings:"1000 ratings",
        learnPoints:[
            "Foundational Skills: Explore typography, color theory, and common UI components. Learn how to use these elements effectively to create visually appealing, user-friendly, and accessible interfaces.",
            "This section explores the core principles of UX, including usability, accessibility, and findability. You'll also learn how to adapt UX strategies for evolving trends like voice interfaces and AI.",
            "Design Process & Methodology: Learn to map user journeys, create wireframes, and design effective landing pages. This section emphasizes practical skills for the design process.",
            "UX Fundamentals: Explore core UX principles like usability and accessibility. Learn to adapt UX strategies for evolving trends like voice interfaces and AI."
        ],
        skillsGain:[
            "Experience Design",
            "User Experience",
            "User Research",
            "User Interface (UI) Design",
            "Interaction Design",
            "Usability"
        ],
        toolsIcon:[
            {image:Figma.src,alt:"figma"},
            {image:Miro.src,alt:"miro"},
        ],
        courseIncludes:[
            "Flexible Payment Plan",
            "Extensive Placement Support",
            "Free Doubt Clearing Sessions",
            "Freshers Friendly Curriculum",
            "Live Classes"
        ],
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
            }        ],
            project:[
                {
                    title:"Agency Landing Page ",
                    description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                },
                {
                    title:"Blog Website",
                    description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                },
             ],
             review:[
                { name: "Karthik Raj",letter:"K", content: "This course exceeded my expectations! The instructors provided clear explanations and practical exercises that helped me level up my design skills. Highly recommended for anyone serious about pursuing a career in UI/UX design." },
                {name: "Payal Singh",letter:"P", content: "As someone with a background in graphic design, I found this course to be valuable in expanding my skill set. The lessons on user research and prototyping were especially too good. I feel more confident in my ability to create designs that not only look great but also prioritize user needs." },
                { name: "Deepanjali",letter:"D", content: "I've taken several online courses on UI/UX design, but none have been as comprehensive and engaging as this one. The instructors break down complex concepts, making it easy to follow along. Plus, the projects are fun and challenging—I've already started building my portfolio!" },
                
            ]
    },
    {
        id:"building-functional-ux",
        bgColor:"#D9CEFB",
        category:"UI/UX Course",
        level:"Intermediate",
        duration:"8 Weeks",
        courseHeading:"Introduction to Building Functional UX",
        courseDescription:"The Building Functional UX course provides a comprehensive foundation in user interface and experience design, guiding you through key principles, tools, and techniques to create effective and user-centric digital experiences.",
        certificationCourse:"Certification Courses: AI-Powered UI/UX Development with FIGMA",
        rating:"4.8",
        ratingIcon:RatingStar,
        ratings:"1000 ratings",
        "learnPoints": [
            "Introduction to UI/UX: Understand the fundamentals of UI/UX design, including user research, usability testing, and creating user personas.",
            "Typography, Color Theory & Components: Learn to apply typography, color theory, and UI components to create user-friendly and visually appealing interfaces.",
            "User Flows, Wireframing & Landing Page Design: Master the design of user flows, wireframing techniques, and how to implement them to create functional landing pages.",
            "Emerging Trends in UI/UX Design: Explore the latest trends in design, such as responsive design, micro-interactions, and minimalist principles.",
            "Core Principles of UX Design: Delve into the core principles of UX and learn how to adapt to evolving trends and user behavior for more effective designs.",
            "Data-Driven Design & Visualization: Learn to integrate data visualization and design strategies that cater to user preferences and enhance user experience."
        ],
        "skillsGain": [
            "User Interface (UI) Design",
            "User Experience (UX) Design",
            "Wireframing & Prototyping",
            "User Research",
            "Typography & Color Theory",
            "Data Visualization"
        ],
        toolsIcon:[
            {image:Figma.src,alt:"figma"},
            {image:Miro.src,alt:"miro"},
        ],
        courseIncludes:[
            "Flexible Payment Plan",
            "Extensive Placement Support",
            "Free Doubt Clearing Sessions",
            "Freshers Friendly Curriculum",
            "Live Classes"
        ],
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
            ],
            project:[
                {
                    title:"Agency Landing Page ",
                    description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                },
                {
                    title:"Blog Website",
                    description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                },
                {
                    title:"Ecommerce Web App",
                    description:"Develop a robust e-commerce app with intuitive navigation, seamless checkout, and personalized product recommendations for effortless online shopping.",
                },
               
                {
                    title:"Payments Mobile App",
                    description:"Create an intuitive, secure mobile app for payments, with streamlined user flows and real-time transaction tracking for convenient financial management.",
                },
                
             ],
             "review": [
                { "name": "Siddhi Mehta", "letter": "S", "content": "This course has provided me with the solid foundation I needed to start my journey in UI/UX design. The focus on usability and data-driven design was incredibly useful, and I now feel more confident in my ability to design intuitive user experiences." },
                { "name": "Amit Sharma", "letter": "A", "content": "The course provided practical knowledge that helped me apply design theory to real-world projects. The lessons on wireframing and mobile UX were especially valuable for me." },
                { "name": "Neha Patel", "letter": "N", "content": "I enjoyed every module of this course. The pace was perfect, and the focus on user research and adapting to trends really set this course apart. I highly recommend it to anyone interested in a career in UI/UX design." }
            ]
    },
    {
        id:"spatial-ui-designs",
        bgColor:"#D9CEFB",
        category:"UI/UX Course",
        level:"Advanced",
        duration:"12 Weeks",
        courseHeading:"Introduction to Spatial UI Design",
        courseDescription:"This course dives deep into advanced UI/UX design concepts and equips you with the skills needed to design innovative, user-centric experiences.",
        certificationCourse:"Certification Courses: AI-Powered UI/UX Development with FIGMA",
        rating:"4.9",
        ratingIcon:RatingStar,
        ratings:"1200 ratings",
        "learnPoints": [
            "Advanced UX Strategy: Understand how to create user-centric experiences, from research to final design, by mastering interaction design and usability testing.",
            "Data Visualization: Learn techniques for presenting complex data in a visually appealing and accessible way, enhancing the user's understanding and experience.",
            "Mobile-first and Responsive Design: Master mobile design principles and learn how to create responsive layouts that work across devices.",
            "Emotional Design & Accessibility: Dive into emotional design and accessibility, ensuring your designs resonate emotionally while being inclusive for all users.",
            "Immersive Design: Learn the principles behind designing for Virtual Reality (VR) and conversational AI interfaces, with a focus on user interaction and engagement."
        ],
        "skillsGain": [
            "User Experience (UX) Research",
            "Interaction Design",
            "Usability Testing",
            "Data Visualization & Analysis",
            "Mobile-first Design",
            "Emotional and Inclusive Design",
            "Designing for VR & Conversational AI"
        ],
        toolsIcon:[
            {image:Figma.src,alt:"figma"},
            {image:Miro.src,alt:"miro"},
            {image:Chatgpt.src,alt:"chatgpt"},
            {image:Gemini.src,alt:"gemini"},
        ],
        courseIncludes:[
            "Flexible Payment Plan",
            "Extensive Placement Support",
            "Free Doubt Clearing Sessions",
            "Freshers Friendly Curriculum",
            "Live Classes"
        ],
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
            }],
            project:[
                {
                    title:"Agency Landing Page ",
                    description:"Craft a sleek, professional landing page showcasing your services or agency expertise, with clear calls-to-action to drive conversions.",
                },
                {
                    title:"Blog Website",
                    description:"Design a user-friendly, visually appealing blog with seamless navigation and engaging content presentation for an immersive reader experience.",
                },
                {
                    title:"Ecommerce Web App",
                    description:"Develop a robust e-commerce app with intuitive navigation, seamless checkout, and personalized product recommendations for effortless online shopping.",
                },
              
                {
                    title:"Payments Mobile App",
                    description:"Create an intuitive, secure mobile app for payments, with streamlined user flows and real-time transaction tracking for convenient financial management.",
                },
                {
                    title:"Spatial Web Design ",
                    description:"Create an immersive and visually captivating spatial web design for streaming platforms, similar to the seamless experience offered by Netflix.",
                },
                {
                    title:"Fitness Smartwatch App",
                    description:"Design a dynamic fitness app for smartwatches, featuring customizable workouts and real-time activity tracking to empower users to reach their fitness goals.",
                },
             ],
             "review": [
                { "name": "Samantha Verma", "letter": "S", "content": "This course exceeded my expectations! The advanced topics on VR and mobile UX were extremely insightful. I feel equipped to take on complex projects now!" },
                { "name": "Rohit Malhotra", "letter": "R", "content": "The instructors break down the complex aspects of design in an easily digestible way. I now have a deeper understanding of accessibility and inclusive design." },
                { "name": "Priya Sharma", "letter": "P", "content": "The course provided practical insights into modern design tools and strategies. The focus on emotional design and accessibility helped me design more thoughtful user experiences." }
            ]
    },
    {
        "id": "prompt-engineering",
        "bgColor": "#FAE1FA",
        "category": "AI Course",
        "level": "Beginner to Advanced",
        "duration": "8 Weeks",
        "courseHeading": "Comprehensive Guide to Prompt Engineering",
        "courseDescription": "This course provides a structured journey through the fundamentals and advanced techniques of prompt engineering, enabling learners to harness the power of generative AI models like ChatGPT and GPT-4.",
        "certificationCourse": "Certification Courses: AI-Powered Prompt Engineering with OpenAI GPT",
        "rating": "4.9",
        "ratingIcon": "RatingStar",
        "ratings": "850 ratings",
        "learnPoints": [
            "Foundational Skills: Understand the basics of AI models like GPT, NLP, training, and fine-tuning. Grasp the input-output relationships to optimize prompt creation.",
            "Basic Prompting: Practice experimenting with basic prompts and learn how rephrasing and context can affect AI responses.",
            "Intermediate Prompt Techniques: Master techniques like using open vs. closed questions, giving explicit instructions, and using context for better outputs.",
            "Advanced Prompt Engineering: Learn advanced techniques including few-shot learning, chain-of-thought prompting, and multi-turn dialogues to create highly complex AI responses.",
            "Performance Optimization: Experiment with prompt variations and learn how to optimize for performance and efficiency.",
            "Domain-Specific Prompts: Gain expertise in crafting prompts for specialized domains such as creative writing, code generation, and data analysis."
        ],
        "skillsGain": [
            "Prompt Engineering",
            "Natural Language Processing (NLP)",
            "AI Model Integration",
            "Optimizing AI Outputs",
            "Few-Shot Learning",
            "Complex Problem Solving"
        ],
        "toolsIcon": [
            {image:Chatgpt.src,alt:"chatgpt"},
            {image:Gemini.src,alt:"gemini"},
            {image:claude.src,alt:"claude"},
        ],
        "courseIncludes": [
            "Flexible Payment Plan",
            "Extensive Placement Support",
            "Free Doubt Clearing Sessions",
            "Industry-Aligned Curriculum",
            "Hands-On Projects"
        ],
        "syllabus": [
            { "title": "Understand AI Basics", "contents": "Learn how generative AI models like ChatGPT and GPT-4 work, focusing on Natural Language Processing (NLP), model training, fine-tuning, and input-output relationships." },
            { "title": "Experiment with Basic Prompts", "contents": "Practice creating clear, concise prompts and observe how changes in phrasing affect AI responses. Experiment with various types of questions." },
            { "title": "Learn Prompt Techniques", "contents": "Master key prompt techniques including asking open-ended vs. closed questions, using explicit instructions, and providing context for improved outputs." },
            { "title": "Master Prompt Variations", "contents": "Explore how small changes in your prompt can drastically affect the output, including rephrasing and adding constraints like tone and style." },
            { "title": "Study NLP Concepts", "contents": "Get familiar with key NLP concepts like tokenization, word embeddings, and attention mechanisms to understand how AI processes language." },
            { "title": "Explore Use Cases", "contents": "Experiment with common use cases like summarization, content generation, and data transformation to practice applying prompt engineering in real-world scenarios." },
            { "title": "Design Advanced Prompts", "contents": "Learn advanced techniques like few-shot learning, chain-of-thought prompting, and multi-turn dialogue to create complex AI-driven tasks." },
            { "title": "Optimize for Performance", "contents": "Experiment with prompt length, variations, and fine-tuning to optimize output accuracy, efficiency, and performance." },
            { "title": "Integrate AI Models into Applications", "contents": "Learn how to integrate prompt engineering into applications using APIs and tools like LangChain for creating automated workflows." },
            { "title": "Build Domain-Specific Expertise", "contents": "Focus on mastering prompt engineering for specific domains like creative writing, coding, or data analysis, tailoring prompts for each." }
        ],
        "project": [
            {
                "title": "Build a Summarizer Bot",
                "description": "Create a summarization bot that can take lengthy articles or documents and provide concise, informative summaries using effective prompt engineering."
            },
            {
                "title": "AI-Powered FAQ Chatbot",
                "description": "Develop an AI-powered FAQ chatbot for a specific domain, using advanced prompt techniques to ensure accurate and context-aware responses."
            },
            {
                "title": "Content Generation Assistant",
                "description": "Design an AI writing assistant that generates creative blog posts or emails based on user input, focusing on style, tone, and clarity."
            }
        ],
        "review": [
            { "name": "Ravi Kumar", "letter": "R", "content": "This course completely transformed the way I think about prompt engineering. The hands-on projects and advanced techniques covered in the course are invaluable for anyone looking to work with generative AI." },
            { "name": "Asha Patel", "letter": "A", "content": "As a developer, I found the course incredibly helpful in understanding the underlying mechanisms of NLP and how to optimize prompts for real-world applications. The projects were also highly practical and fun!" },
            { "name": "Suresh Rao", "letter": "S", "content": "A comprehensive course that covers everything from the basics to advanced prompt techniques. The learning curve is smooth, and I was able to apply what I learned to my own AI projects right away!" }
        ]
    },
    {
        "id": "python-programming",
        "bgColor": "#FAE1FA",
        "category": "AI Course",
        "level": "Beginner to Intermediate",
        "duration": "25 Days",
        "courseHeading": "Python Programming Crash Course",
        "courseDescription": "This Python Crash Course covers key concepts from basic syntax to working with LLMs, ideal for beginners and skill enhancement.",
        "certificationCourse": "Certification Course: AI Programming with Python",
        "rating": "4.9",
        "ratingIcon": "RatingStar",
        "ratings": "1200 ratings",
        "learnPoints": [
            "Foundational Python Skills: Learn the basics of Python, including syntax, variables, data types, and operators, essential for any developer.",
            "Advanced Concepts: Explore more complex topics like object-oriented programming (OOP), inheritance, polymorphism, and working with modules.",
            "Introduction to LLMs: Dive into Large Language Models (LLMs), learning how to integrate and use them for creating Python-based AI applications.",
            "Practical Application: Build real-world projects like a chatbot using Python and integrate LLMs to enhance functionality."
        ],
        "skillsGain": [
            "Python Programming",
            "Object-Oriented Programming (OOP)",
            "Working with LLMs",
            "Data Handling with Libraries (NumPy, Pandas)",
            "API Integration",
            "Chatbot Development"
        ],
        "toolsIcon": [
            {image:python.src,alt:"python"},
            {image:jupyter.src,alt:"jupyter"},
            {image:ollama.src,alt:"ollama"},
        ],
        "courseIncludes": [
            "Flexible Payment Plan",
            "Live Classes with Real-Time Examples",
            "Free Doubt Clearing Sessions",
            "Career Support and Guidance",
            "Hands-on Projects"
        ],
        "syllabus": [
            {
                "title": "Introduction to Python",
                "contents": "Get started with Python, exploring its versatile applications in web development, data analysis, AI, and automation. Learn the philosophy behind Python’s design and its impact on modern programming."
            },
            {
                "title": "Installing Python and Setting Up the Environment",
                "contents": "Learn how to install Python and set up the development environment using IDEs like PyCharm, VSCode, or Jupyter Notebook for smooth development workflow."
            },
            {
                "title": "Writing and Running Your First Python Program",
                "contents": "Write and run your first Python program, 'Hello, World!', and learn the basic structure and syntax that forms the foundation of all Python code."
            },
            {
                "title": "Variables, Data Types & Operators",
                "contents": "Master Python's built-in data types (int, float, str, bool) and operators (arithmetic, logical, relational) for performing essential programming tasks."
            },
            {
                "title": "Conditional Statements and Loops",
                "contents": "Learn to make decisions in your code using if-else conditions and control repetitive tasks with for and while loops."
            },
            {
                "title": "Functions and Modules",
                "contents": "Understand the power of functions and how to organize your code for reusability. Dive into Python modules for better code management."
            },
            {
                "title": "Working with Lists, Tuples, Dictionaries, and Sets",
                "contents": "Learn the core data structures in Python: lists, tuples, dictionaries, and sets, and how to use them to store and manipulate data effectively."
            },
            {
                "title": "Object-Oriented Programming (OOP)",
                "contents": "Explore Object-Oriented Programming concepts like classes, objects, inheritance, and polymorphism to design efficient, scalable Python programs."
            },
            {
                "title": "Introduction to Large Language Models (LLMs)",
                "contents": "Discover the world of Large Language Models (LLMs) and their applications in Python. Learn about popular LLMs like GPT and how to integrate them into your projects."
            },
            {
                "title": "Building Python-based Chatbots with LLMs",
                "contents": "Build a chatbot using Python and LLM APIs to handle real-time conversations and deploy the chatbot locally or in the cloud."
            }
        ],
        "project": [
            {
                "title": "Python-Based Chatbot",
                "description": "Build a conversational AI chatbot using Python, integrating LLMs to handle various user inputs and generate intelligent responses."
            },
            {
                "title": "Data Analysis with Python",
                "description": "Analyze datasets using Python's NumPy, Pandas, and Matplotlib libraries, applying various data manipulation and visualization techniques."
            }
        ],
        "review": [
            {
                "name": "Amit Verma",
                "letter": "A",
                "content": "This course was amazing! The instructor explained complex topics like OOP and LLMs in a simple and engaging way. The hands-on projects were very useful in applying the concepts learned."
            },
            {
                "name": "Sita Kumari",
                "letter": "S",
                "content": "As a beginner, I found this Python course to be extremely helpful. It provided the right balance of theory and practical projects, and the LLM section was an eye-opener."
            },
            {
                "name": "Rahul Sharma",
                "letter": "R",
                "content": "I’ve taken several Python courses, but this one stood out due to its clear explanations and step-by-step approach. The chatbot project helped me gain real-world Python skills!"
            }
        ]
    },
    {
        "id": "advanced-generative-ai-course",
        "bgColor": "#FAE1FA",
        "category": "AI Course",
        "level": "Advanced",
        "duration": "12 Weeks",
        "courseHeading": "Advanced Generative AI Certification Course",
        "courseDescription": "This advanced AI certification program covers Python, machine learning, deep learning, and NLP, with hands-on projects to help you build AI solutions like chatbots and text generation models.",
        "certificationCourse": "Certification Course: Advanced Generative AI Programming",
        "rating": "4.9",
        "ratingIcon": "RatingStar",
        "ratings": "800 ratings",
        "learnPoints": [
            "Foundational Python Skills: Master Python programming basics, including syntax, data types, and operators, essential for AI development.",
            "Deep Learning & Neural Networks: Learn advanced techniques in deep learning, including CNNs, RNNs, LSTMs, and GANs, to build robust AI models.",
            "Natural Language Processing (NLP): Dive into NLP concepts like text preprocessing, tokenization, stemming, lemmatization, and apply them in real-world projects.",
            "Generative Models: Learn how to create and use Generative Adversarial Networks (GANs) to generate data like images, text, and more.",
            "Hands-on Projects: Build AI-driven projects such as text generation systems and neural network models to apply your learning."
        ],
        "skillsGain": [
            "Advanced Python Programming",
            "Machine Learning (Regression, Classification, Naïve Bayes)",
            "Deep Learning (Neural Networks, CNNs, RNNs, LSTMs, GANs)",
            "Natural Language Processing (NLP)",
            "Generative Adversarial Networks (GANs)",
            "Data Processing and Visualization"
        ],
        "toolsIcon": [
            {image:python.src,alt:"python"},
            // {image:pandas.src,alt:"pandas"},
            // {image:numpy.src,alt:"numpy"},
            {image:jupyter.src,alt:"jupyter"},
            {image:huggingface.src,alt:"huggingface"},
            {image:ollama.src,alt:"ollama"},
            {image:Chatgpt.src,alt:"chatgpt"},
        ],
        "courseIncludes": [
            "Flexible Payment Plan",
            "Live Classes with Real-Time Examples",
            "Free Doubt Clearing Sessions",
            "Career Support and Guidance",
            "Hands-on Projects"
        ],
        "syllabus": [
            {
                "title": "Introduction to Python Programming",
                "contents": "Begin with the basics of Python programming, focusing on its application in AI and data science, and explore Python's role in AI development."
            },
            {
                "title": "Advanced Python Concepts",
                "contents": "Learn about advanced Python concepts such as object-oriented programming, data structures, and error handling for building efficient AI solutions."
            },
            {
                "title": "Machine Learning Fundamentals",
                "contents": "Cover foundational machine learning concepts, including supervised and unsupervised learning, and learn algorithms like linear regression, decision trees, and Naïve Bayes."
            },
            {
                "title": "Deep Learning with Neural Networks",
                "contents": "Dive deep into artificial neural networks (ANNs), and learn how to implement and train deep learning models using Python and TensorFlow."
            },
            {
                "title": "Convolutional Neural Networks (CNNs)",
                "contents": "Understand CNNs and their applications in image classification and processing, including hands-on work with datasets like MNIST."
            },
            {
                "title": "Recurrent Neural Networks (RNNs) and LSTMs",
                "contents": "Learn about RNNs and LSTMs, and understand their applications in sequential data like text and time series."
            },
            {
                "title": "Generative Adversarial Networks (GANs)",
                "contents": "Explore GANs, understanding their structure and how they generate data, such as images and text. Learn how to implement GANs in Python."
            },
            {
                "title": "Natural Language Processing (NLP)",
                "contents": "Master NLP techniques like text preprocessing, tokenization, and lemmatization, and apply them in real-world text-based applications."
            },
            {
                "title": "Text Generation and Language Models",
                "contents": "Learn to build generative text models, including working with large language models (LLMs) for AI-driven content generation."
            }
        ],
        "project": [
            {
                "title": "AI-Based Text Generation",
                "description": "Create a text generation model using neural networks and LLMs to generate coherent and contextually relevant text."
            },
            {
                "title": "Generative Adversarial Network (GAN) Implementation",
                "description": "Build a GAN model for generating realistic images from noise and understand the training challenges involved."
            },
            {
                "title": "NLP Chatbot with Python",
                "description": "Develop a chatbot using NLP techniques, including text preprocessing and tokenization, and enhance its responses with LLM integration."
            }
        ],
        "review": [
            {
                "name": "Anjali Mehta",
                "letter": "A",
                "content": "The AI course was transformative! The instructor broke down complex topics into manageable chunks, and the hands-on projects gave me practical experience in AI development."
            },
            {
                "name": "Vikas Raj",
                "letter": "V",
                "content": "As someone with a strong interest in deep learning, this course was perfect for me. It covered everything from the basics to advanced models like GANs, and the projects were incredibly engaging."
            },
            {
                "name": "Priya Sharma",
                "letter": "P",
                "content": "This was the best course I’ve taken! The deep learning modules were particularly insightful, and the GAN and NLP sections really opened my eyes to what AI can do."
            }
        ]
    }
    
    
    
]


export default courseData;

// import logo from "../../../public/logo.png";
// import pepsi from "../../../public/pepsi 1.png";
// import pepsis from "../../../public/pepsi 2.png";
// import conline from "../../../public/conline.jpg";
// import conlines from "../../../public/conline2.jpg";
// import lg from "../../../public/lg.jpg";
// import life from "../../../public/life's good.jpg";
// import partinvest from "../../../public/partiinvest.png";
// import borcelle from "../../../public/borcelle.png"
// import huawei from "../../../public/huawei.png"


const jobs = [
    {
        id: 1,
        company: 'Borcelle Build',
        logo: "/borcelle.png",
        position: 'Senior Product Designer',
        location: 'Lagos',
        timePosted: '5 mins ago',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦500k-₦800k',
        applied: 50,
        skill: 'UI/UX Design',
        jobSummary: {
            aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            aboutJob: 'In this role, you will be instrumental in designing user-centered digital products, from initial concept to final implementation. You will work closely with product managers, developers, and other stakeholders to translate user needs and business goals into compelling and user-friendly interfaces.',
            jobTitle: 'Senior Product Designer',
            experience: '5 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Conduct user research, including interviews, surveys, and usability testing, to understand user behaviors, needs, and pain points.',
                'Translate research findings, business requirements, and technical constraints into intuitive and elegant user flows, wireframes, prototypes, and high-fidelity mockups.',
                'Design and iterate on user interfaces for various platforms (web, mobile, etc.), ensuring consistency with brand guidelines and design systems.'
            ],
            qualifications: [
                '3+ years of professional experience in UX/UI design.',
                'A strong portfolio showcasing a range of UX/UI design projects, demonstrating user design process and problem-solving abilities.',
                'Excellent communication, collaboration, and presentation skills.',
                'Ability to work independently and as part of a team in a fast-paced environment.'
            ],
            benefits: [
                '3+ years of professional experience in UX/UI design.',
                'A strong portfolio showcasing a range of UX/UI design projects, demonstrating user design process and problem-solving abilities.',
                'Excellent communication, collaboration, and presentation skills.',
                'Ability to work independently and as part of a team in a fast-paced environment.'
            ],
            bonusPoints: [
                'Experience with design systems and component libraries.',
                'Familiarity with front-end development (HTML, CSS, JavaScript).',
                'Knowledge of accessibility standards and best practices.'
            ]
        }
    },
    {
        id: 2,
        company: 'CONLINE',
        logo: "/conline.jpg",
        position: 'Frontend Developer',
        location: 'Abuja',
        timePosted: '10 mins ago',
        description: 'We are seeking a talented Frontend Developer to join our dynamic team and help build cutting-edge web applications.',
        type: 'Full-time',
        level: 'Mid Level',
        remote: 'Remote',
        salary: '₦300k-₦500k',
        applied: 30,
        skill: 'Frontend Development',
        jobSummary: {
            aboutUs: 'CONLINE is a leading technology company specializing in innovative digital solutions. We pride ourselves on creating exceptional user experiences and cutting-edge web applications that drive business growth.',
            aboutJob: 'As a Frontend Developer, you will be responsible for building responsive and performant web applications. You will collaborate with designers and backend developers to create seamless user experiences across all devices and platforms.',
            jobTitle: 'Frontend Developer',
            experience: '3 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Develop new user-facing features using React.js and modern JavaScript frameworks.',
                'Build reusable code and libraries for future use.',
                'Ensure the technical feasibility of UI/UX designs.',
                'Optimize applications for maximum speed and scalability.',
                'Collaborate with team members and stakeholders.'
            ],
            qualifications: [
                '3+ years of experience in frontend development.',
                'Proficiency in React.js, JavaScript (ES6+), HTML5, and CSS3.',
                'Experience with state management libraries (Redux, Context API).',
                'Understanding of RESTful APIs and asynchronous request handling.',
                'Familiarity with modern build tools and version control (Git).'
            ],
            benefits: [
                'Competitive salary and performance bonuses.',
                'Remote work flexibility.',
                'Professional development opportunities.',
                'Health insurance coverage.',
                'Collaborative and innovative work environment.'
            ],
            bonusPoints: [
                'Experience with TypeScript.',
                'Knowledge of testing frameworks (Jest, React Testing Library).',
                'Familiarity with CI/CD pipelines.',
                'Contributions to open-source projects.'
            ]
        }
    },
    {
        id: 3,
        company: 'PARTNERSHIP INVESTMENT',
        logo: "/partiinvest.png",
        position: 'Product Manager',
        location: 'Remote',
        timePosted: '1 hour ago',
        description: 'Looking for an experienced Product Manager to lead product strategy and drive innovation in our fintech solutions.',
        type: 'Contract',
        level: 'Lead',
        remote: 'Remote',
        salary: '₦800k-₦1M',
        applied: 75,
        skill: 'Product Management',
        jobSummary: {
            aboutUs: 'PARTNERSHIP INVESTMENT is a forward-thinking fintech company revolutionizing the investment landscape in Nigeria. We combine technology and financial expertise to deliver innovative solutions for our clients.',
            aboutJob: 'As a Product Manager, you will own the product roadmap and work cross-functionally to deliver exceptional products. You will gather requirements, prioritize features, and ensure successful product launches while maintaining a customer-centric approach.',
            jobTitle: 'Product Manager',
            experience: '5 Years',
            jobType: 'Contract',
            location: 'Remote',
            responsibilities: [
                'Define product vision, strategy, and roadmap aligned with business objectives.',
                'Conduct market research and competitive analysis to identify opportunities.',
                'Gather and prioritize product requirements from stakeholders and customers.',
                'Work closely with engineering, design, and marketing teams to deliver products.',
                'Monitor product performance metrics and iterate based on user feedback.',
                'Lead product launches and go-to-market strategies.'
            ],
            qualifications: [
                '5+ years of product management experience, preferably in fintech.',
                'Proven track record of successfully launching and scaling products.',
                'Strong analytical and problem-solving skills.',
                'Excellent communication and stakeholder management abilities.',
                'Experience with agile methodologies and product management tools.'
            ],
            benefits: [
                'Competitive contract compensation.',
                'Fully remote position with flexible hours.',
                'Opportunity to shape product direction.',
                'Work with a talented and passionate team.',
                'Potential for full-time conversion.'
            ],
            bonusPoints: [
                'MBA or advanced degree.',
                'Experience with investment platforms or financial products.',
                'Technical background or understanding of software development.',
                'Previous startup experience.'
            ]
        }
    },
    {
        id: 4,
        company: "Life's Good",
        logo: "/life's good.jpg",
        position: 'Backend Developer',
        location: 'Lagos',
        timePosted: '2 hours ago',
        description: 'Join our backend team to build scalable and robust server-side applications that power our consumer electronics platform.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦500k-₦800k',
        applied: 40,
        skill: 'Backend Development',
        jobSummary: {
            aboutUs: "Life's Good is a global consumer electronics company committed to delivering innovative products and services. Our technology division builds the digital infrastructure that connects millions of users worldwide.",
            aboutJob: 'As a Backend Developer, you will design and implement server-side logic, APIs, and database architecture. You will ensure high performance and responsiveness while maintaining code quality and security standards.',
            jobTitle: 'Backend Developer',
            experience: '4 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Design and develop RESTful APIs and microservices.',
                'Optimize database queries and ensure data integrity.',
                'Implement security and data protection measures.',
                'Integrate third-party services and payment gateways.',
                'Write clean, maintainable, and well-documented code.',
                'Participate in code reviews and mentor junior developers.'
            ],
            qualifications: [
                '4+ years of backend development experience.',
                'Proficiency in Node.js, Python, or Java.',
                'Strong understanding of database systems (PostgreSQL, MongoDB).',
                'Experience with cloud platforms (AWS, Azure, or GCP).',
                'Knowledge of authentication and authorization protocols.',
                'Familiarity with Docker and containerization.'
            ],
            benefits: [
                'Competitive salary with annual reviews.',
                'Health and wellness benefits.',
                'Remote work options.',
                'Learning and development budget.',
                'Employee discount on company products.',
                'Annual performance bonuses.'
            ],
            bonusPoints: [
                'Experience with GraphQL.',
                'Knowledge of message queues (RabbitMQ, Kafka).',
                'Understanding of DevOps practices.',
                'Contributions to open-source projects.'
            ]
        }
    },
    {
        id: 5,
        company: 'PEPSI',
        logo: "/pepsi 2.png",
        position: 'UI/UX Designer',
        location: 'Ibadan',
        timePosted: '3 hours ago',
        description: 'We are looking for a creative UI/UX Designer to help reimagine our digital brand experience and create engaging interfaces.',
        type: 'Part-time',
        level: 'Entry Level',
        remote: 'Remote',
        salary: '₦100k-₦300k',
        applied: 15,
        skill: 'UI/UX Design',
        jobSummary: {
            aboutUs: 'PEPSI is a global beverage leader with a diverse portfolio of brands. Our digital team is focused on creating innovative and engaging experiences that connect with consumers across all touchpoints.',
            aboutJob: 'As a UI/UX Designer, you will create intuitive and visually appealing interfaces for our digital products. You will work closely with the marketing and development teams to ensure designs align with brand guidelines and user needs.',
            jobTitle: 'UI/UX Designer',
            experience: '1-2 Years',
            jobType: 'Part-time',
            location: 'Remote',
            responsibilities: [
                'Create wireframes, mockups, and prototypes for web and mobile applications.',
                'Conduct user research and usability testing.',
                'Design user interfaces that align with brand guidelines.',
                'Collaborate with developers to ensure design implementation.',
                'Maintain and update design systems and style guides.',
                'Present design concepts to stakeholders.'
            ],
            qualifications: [
                '1-2 years of UI/UX design experience.',
                'Proficiency in design tools (Figma, Adobe XD, Sketch).',
                'Understanding of design principles and user-centered design.',
                'Portfolio demonstrating design projects.',
                'Good communication and presentation skills.',
                'Ability to work independently in a remote setting.'
            ],
            benefits: [
                'Flexible part-time schedule.',
                'Opportunity to work with a global brand.',
                'Remote work environment.',
                'Professional growth opportunities.',
                'Potential for full-time conversion.'
            ],
            bonusPoints: [
                'Experience with motion design or animation.',
                'Knowledge of HTML/CSS basics.',
                'Familiarity with design systems.',
                'Understanding of accessibility standards.'
            ]
        }
    },
    {
        id: 6,
        company: 'TechCorp',
        logo: "/lg.jpg",
        position: 'Data Scientist',
        location: 'Port Harcourt',
        timePosted: '5 hours ago',
        description: 'Seeking an experienced Data Scientist to extract insights from data and build machine learning models that drive business decisions.',
        type: 'Freelance',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦1M+',
        applied: 90,
        skill: 'Data Science',
        jobSummary: {
            aboutUs: 'TechCorp is a technology consulting firm that helps businesses leverage data and AI to transform their operations. We work with clients across various industries to deliver data-driven solutions.',
            aboutJob: 'As a Data Scientist, you will analyze complex datasets, build predictive models, and provide actionable insights. You will work on diverse projects across multiple industries, applying advanced analytics and machine learning techniques.',
            jobTitle: 'Data Scientist',
            experience: '5+ Years',
            jobType: 'Freelance',
            location: 'Remote',
            responsibilities: [
                'Analyze large datasets to identify patterns and trends.',
                'Build and deploy machine learning models.',
                'Create data visualizations and dashboards.',
                'Collaborate with stakeholders to understand business requirements.',
                'Communicate findings and recommendations to non-technical audiences.',
                'Stay updated with latest data science techniques and tools.'
            ],
            qualifications: [
                '5+ years of experience in data science or analytics.',
                'Proficiency in Python and data science libraries (pandas, scikit-learn, TensorFlow).',
                'Strong statistical knowledge and experience with ML algorithms.',
                'Experience with SQL and database systems.',
                'Excellent problem-solving and analytical skills.',
                'Advanced degree in Computer Science, Statistics, or related field preferred.'
            ],
            benefits: [
                'Competitive freelance rates.',
                'Flexible project-based work.',
                'Fully remote position.',
                'Opportunity to work on diverse projects.',
                'Potential for long-term engagement.'
            ],
            bonusPoints: [
                'Experience with big data tools (Spark, Hadoop).',
                'Knowledge of deep learning frameworks.',
                'Experience with cloud ML platforms (AWS SageMaker, Azure ML).',
                'Published research or contributions to the data science community.'
            ]
        }
    },
    {
        id: 7,
        company: "Life's Good",
        logo: "/life's good.jpg",
        position: 'Senior Product Designer',
        location: 'Lagos',
        timePosted: '5 mins ago',
        description: 'Lead design initiatives for our next-generation smart home products and create exceptional user experiences.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦500k-₦800k',
        applied: 50,
        skill: 'UI/UX Design',
        jobSummary: {
            aboutUs: "Life's Good is revolutionizing the smart home industry with innovative connected devices. Our design team is at the forefront of creating intuitive interfaces that make technology accessible to everyone.",
            aboutJob: 'As a Senior Product Designer, you will lead design projects from concept to launch. You will mentor junior designers, establish design standards, and work closely with product and engineering teams to deliver world-class user experiences.',
            jobTitle: 'Senior Product Designer',
            experience: '6 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Lead end-to-end design process for complex product features.',
                'Conduct user research and translate insights into design solutions.',
                'Create high-fidelity prototypes and interaction designs.',
                'Establish and maintain design systems and guidelines.',
                'Mentor and guide junior designers on the team.',
                'Present design work to executives and stakeholders.',
                'Collaborate with cross-functional teams across multiple time zones.'
            ],
            qualifications: [
                '6+ years of product design experience.',
                'Strong portfolio showcasing complex design projects.',
                'Expert knowledge of design tools and prototyping software.',
                'Experience with IoT or smart home products preferred.',
                'Excellent leadership and communication skills.',
                'Understanding of design systems and component libraries.'
            ],
            benefits: [
                'Competitive salary package.',
                'Stock options.',
                'Comprehensive health benefits.',
                'Remote work flexibility.',
                'Professional development budget.',
                'Latest design tools and equipment.',
                'Annual team retreats.'
            ],
            bonusPoints: [
                'Experience designing for IoT or hardware products.',
                'Motion design or animation skills.',
                'Understanding of front-end development.',
                'Experience managing design teams.'
            ]
        }
    },
    {
        id: 8,
        company: 'HUAWEI Company',
        logo: "/huawei.png",
        position: 'Senior Product Designer',
        location: 'Lagos',
        timePosted: '5 mins ago',
        description: 'Design innovative mobile experiences for next-generation smartphones and create seamless user journeys.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦500k-₦800k',
        applied: 50,
        skill: 'UI/UX Design',
        jobSummary: {
            aboutUs: 'HUAWEI is a global leader in telecommunications and consumer electronics. Our design philosophy centers on creating beautiful, functional products that enhance people\'s lives through thoughtful innovation.',
            aboutJob: 'Join our design team to create the future of mobile experiences. You will design interfaces for our flagship smartphones, working on features used by millions of users worldwide. This role requires a deep understanding of mobile design patterns and emerging technologies.',
            jobTitle: 'Senior Product Designer',
            experience: '5 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Design mobile interfaces for Android-based smartphones.',
                'Create design specifications and documentation for developers.',
                'Conduct competitive analysis and stay current with design trends.',
                'Prototype and test designs with real users.',
                'Work within brand guidelines while pushing creative boundaries.',
                'Collaborate with global design teams across different regions.'
            ],
            qualifications: [
                '5+ years of mobile product design experience.',
                'Deep understanding of Android design guidelines.',
                'Portfolio demonstrating shipped mobile products.',
                'Experience with gesture-based and voice interfaces.',
                'Strong visual design skills.',
                'Ability to work in a fast-paced, deadline-driven environment.'
            ],
            benefits: [
                'Competitive compensation package.',
                'Latest HUAWEI devices for personal use.',
                'International collaboration opportunities.',
                'Health and wellness programs.',
                'Relocation assistance if needed.',
                'Career advancement opportunities.'
            ],
            bonusPoints: [
                'Experience with foldable device design.',
                'Knowledge of AR/VR interfaces.',
                'Multilingual capabilities.',
                'Experience in Asian markets.'
            ]
        }
    },
    {
        id: 9,
        company: 'CONLINE',
        logo: "/conline2.jpg",
        position: 'Senior Product Designer',
        location: 'Lagos',
        timePosted: '5 mins ago',
        description: 'Shape the future of e-commerce experiences through innovative design solutions and user-centered thinking.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦500k-₦800k',
        applied: 50,
        skill: 'UI/UX Design',
        jobSummary: {
            aboutUs: 'CONLINE is transforming online shopping in Africa with our innovative e-commerce platform. We combine local market understanding with global best practices to create shopping experiences that delight our customers.',
            aboutJob: 'As a Senior Product Designer, you will reimagine the online shopping experience for African consumers. You will work on features like product discovery, checkout optimization, and mobile-first experiences tailored to local needs.',
            jobTitle: 'Senior Product Designer',
            experience: '5 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Design end-to-end e-commerce experiences for web and mobile.',
                'Optimize conversion funnels through data-driven design.',
                'Create personalized shopping experiences.',
                'Design for emerging markets with connectivity challenges.',
                'Conduct A/B testing and iterate based on results.',
                'Work with product managers to define feature requirements.'
            ],
            qualifications: [
                '5+ years of product design experience, preferably in e-commerce.',
                'Strong understanding of conversion optimization.',
                'Experience designing for mobile-first audiences.',
                'Data-driven approach to design decisions.',
                'Portfolio demonstrating e-commerce or marketplace projects.',
                'Understanding of payment systems and checkout flows.'
            ],
            benefits: [
                'Competitive salary and equity.',
                'Health insurance for you and your family.',
                'Remote-first culture.',
                'Learning and development stipend.',
                'Employee shopping discounts.',
                'Quarterly team bonding events.'
            ],
            bonusPoints: [
                'Experience designing for African markets.',
                'Understanding of local payment methods.',
                'Knowledge of logistics and delivery experiences.',
                'Experience with progressive web apps (PWAs).'
            ]
        }
    },
    {
        id: 10,
        company: 'PEPSI',
        logo: "/pepsi 1.png",
        position: 'Mobile App Developer',
        location: 'Lagos',
        timePosted: '6 hours ago',
        description: 'Build high-performance mobile applications that deliver exceptional shopping experiences to millions of users.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦600k-₦900k',
        applied: 65,
        skill: 'Mobile Development',
        jobSummary: {
            aboutUs: 'CONLINE is Africa\'s fastest-growing e-commerce platform. Our mobile app is central to our growth strategy, serving millions of users across the continent with seamless shopping experiences.',
            aboutJob: 'Join our mobile team to build and optimize our flagship shopping app. You will work on features like offline functionality, payment integration, and performance optimization to ensure a smooth experience even on low-end devices.',
            jobTitle: 'Mobile App Developer',
            experience: '4 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Develop and maintain iOS and Android applications using React Native or Flutter.',
                'Implement offline-first architecture for unreliable networks.',
                'Optimize app performance and reduce bundle sizes.',
                'Integrate payment gateways and third-party services.',
                'Write unit and integration tests.',
                'Collaborate with designers to implement pixel-perfect UIs.',
                'Monitor app performance and crash reports.'
            ],
            qualifications: [
                '4+ years of mobile development experience.',
                'Proficiency in React Native or Flutter.',
                'Strong understanding of mobile app architecture.',
                'Experience with state management (Redux, MobX, Provider).',
                'Knowledge of native modules and platform-specific code.',
                'Published apps on App Store and Google Play.',
                'Understanding of mobile security best practices.'
            ],
            benefits: [
                'Competitive salary package.',
                'Stock options.',
                'Latest mobile devices for testing.',
                'Health and dental insurance.',
                'Flexible remote work.',
                'Conference and training budget.',
                'Annual performance bonuses.'
            ],
            bonusPoints: [
                'Experience with native iOS/Android development.',
                'Knowledge of CI/CD for mobile apps.',
                'Experience with app store optimization.',
                'Contributions to mobile open-source projects.'
            ]
        }
    },
    {
        id: 11,
        company: 'CONLINE',
        logo: "/logo.png",
        position: 'Mobile App Developer',
        location: 'Lagos',
        timePosted: '6 hours ago',
        description: 'Build high-performance mobile applications that deliver exceptional shopping experiences to millions of users.',
        type: 'Full-time',
        level: 'Senior',
        remote: 'Remote',
        salary: '₦600k-₦900k',
        applied: 65,
        skill: 'Mobile Development',
        jobSummary: {
            aboutUs: 'CONLINE is Africa\'s fastest-growing e-commerce platform. Our mobile app is central to our growth strategy, serving millions of users across the continent with seamless shopping experiences.',
            aboutJob: 'Join our mobile team to build and optimize our flagship shopping app. You will work on features like offline functionality, payment integration, and performance optimization to ensure a smooth experience even on low-end devices.',
            jobTitle: 'Mobile App Developer',
            experience: '4 Years',
            jobType: 'Full-time',
            location: 'Remote',
            responsibilities: [
                'Develop and maintain iOS and Android applications using React Native or Flutter.',
                'Implement offline-first architecture for unreliable networks.',
                'Optimize app performance and reduce bundle sizes.',
                'Integrate payment gateways and third-party services.',
                'Write unit and integration tests.',
                'Collaborate with designers to implement pixel-perfect UIs.',
                'Monitor app performance and crash reports.'
            ],
            qualifications: [
                '4+ years of mobile development experience.',
                'Proficiency in React Native or Flutter.',
                'Strong understanding of mobile app architecture.',
                'Experience with state management (Redux, MobX, Provider).',
                'Knowledge of native modules and platform-specific code.',
                'Published apps on App Store and Google Play.',
                'Understanding of mobile security best practices.'
            ],
            benefits: [
                'Competitive salary package.',
                'Stock options.',
                'Latest mobile devices for testing.',
                'Health and dental insurance.',
                'Flexible remote work.',
                'Conference and training budget.',
                'Annual performance bonuses.'
            ],
            bonusPoints: [
                'Experience with native iOS/Android development.',
                'Knowledge of CI/CD for mobile apps.',
                'Experience with app store optimization.',
                'Contributions to mobile open-source projects.'
            ]
        }
    }
];

export default jobs
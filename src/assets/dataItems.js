import { Description } from "@headlessui/react";

// paper 
export const conferenceStructure = [
  {
    track: "Keynote Talks",
    description: "Delivered by renowned experts in AI, Engineering, and Technology Management."
  },
  {
    track: "Panel Discussions",
    description: "Covering topics such as AI Ethics, the future of engineering education, and the role of technological innovations."
  },
  {
    track: "Technical Sessions",
    description: "Focused on cutting-edge research and practical case studies in AI and engineering."
  },
  {
    track: "Workshops",
    description: "Hands-on sessions for participants to engage with AI tools, techniques, and methodologies in engineering and management."
  },
  {
    track: "Poster Sessions",
    description: "Opportunities for researchers and students to present their work on conference theme."
  },
  {
    track: "Networking Events",
    description: "Facilitated discussions and social events to foster collaboration between attendees from different sectors."
  }
];

export const potentialSpeakers = [
  {
    track: "Industry Leaders",
    description: "CEOs, CTOs, and Innovation Officers from leading tech companies."
  },
  {
    track: "Academicians and Researchers",
    description: "Professors and scholars from top universities specializing in AI, engineering, and management"
  },
  {
    track: "Government Representatives",
    description: "Policy makers involved in AI regulation and technology policy"
  },
  {
    track: "Entrepreneurs",
    description: "Founders of startups that are pioneering new applications of AI in engineering and management"
  }
];

export const importantDates = [
  { tableData: ['Paper Submission Closes', 'July 05, 2025'] },
  { tableData: ['Notification of Acceptance', 'August 08, 2025'] },
  { tableData: ['Final Camera-ready Paper', 'August 21, 2025'] },
  { tableData: ['Early Submission Paper Registration Closes', 'August 23, 2025'] },
  { tableData: ['Regular Paper Registration Closes', 'September 02, 2025'] },
  { tableData: ['Conference Date', 'October 08-10, 2025'] },
];

export const registrationFees = [
  { tableData: ['IEEE Member', '9,000 INR', '350 USD', '11,000 INR', '400 USD'] },
  { tableData: ['Non-IEEE Member', '11,000 INR', '450 USD', '13,000 INR', '500 USD'] },
  { tableData: ['IEEE TEMS Member', '8,000 INR', '300 USD', '10,000 INR', '350 USD'] },
  { tableData: ['IEEE Student Member', '6,500 INR', '225 USD', '7,500 INR', '275 USD'] },
  { tableData: ['Non-IEEE Student Member', '7,500 INR', '250 USD', '8,500 INR', '300 USD'] },
  { tableData: ['IEEE TEMS Student Member', '6,000 INR', '200 USD', '7,000 INR', '250 USD'] },
  { tableData: ['Charges per additional accepted paper (Student authors)', '5,000 INR', '175 USD', '5,000 INR', '175 USD'] },
  { tableData: ['Charges per additional accepted paper (Other authors)', '5,000 INR', '175 USD', '5,000 INR', '175 USD'] },
];

export const registrationNotes = [
  { description: "All Costs above are in INR / USD.", },
  { description: "Payment will be processed in the local currency after the conversion from USD to INR.", },
  { description: "All participants(authors / co - authors / non - authors) need to individually register for the conference.", },
  { description: "Each full - registration allows only one paper.", },
  { description: "Author registration includes only one paper free.Please add the extra paper in your registration if you have more than one paper to present, and pay the additional fee for extra paper.", },
  { description: "All papers must be registered.Unregistered papers will not be included in the Program.", },
  { description: "All conference registration categories will have access to technical sessions, welcome reception, inauguration, closing ceremony, daily working lunch, and conference banquet.", },
  { track: "Cancellation Policy", description: "Registration fee is non - refundable.", },
]

export const deligates = [
  { tableData: ['IEEE Member', '2,000 INR / Day'] },
  { tableData: ['IEEE TEMS Member', '1,500 INR / Day'] },
  { tableData: ['Non-IEEE Member', '2,500 INR / Day'] },
];

export const sponsorsAndExhibitors = [
  {
    track: "Technology Companies",
    description: "AI, software, and engineering firms."
  },
  {
    track: "Universities and Research Institutions",
    description: "Leading educational bodies with programs in AI, engineering, and management."
  },
  {
    track: "Government Agencies",
    description: "Bodies interested in the development and regulation of AI and technology."
  }
];
export const conferenceTracks = [
  {
    id: 0,
    track: "Track 1 - Innovations in Power Engineering",
    bgColor: "bg-green-400", // Tailwind Green for sustainability and power
    textColor: "text-gray-800", // Dark text for good contrast with green
    topics: [
      "Sustainable Power Generation, transportation",
      "Power Electronic Converters and Topologies",
      "Digital Twin of Power Electronic Systems",
      "Scalable and Sustainable Renewable and Clean Energy including Green Hydrogen",
      "Electric and Hybrid Electric Vehicles and charging technologies",
      "Artificial Intelligence in Electrical Engineering",
      "Security Aspects of Cyber Physical Energy Systems",
      "IoT for Power Electronics Systems",
      "Smart Grids and the commerce around it",
      "Power-to-X and Green Hydrogen",
    ]
  },
  {
    id: 1,
    track: "Track 2 - Artificial Intelligence, Machine Learning and Cyber Security",
    bgColor: "bg-blue-500", // Tailwind Blue for technology and AI
    textColor: "text-yellow-100", // Lighter text for contrast against blue
    topics: [
      "Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks",
      "Generative AI",
      "Language Models and Transformers",
      "Image processing, Object Detection and Recognition",
      "Augmented Reality (AR) and Virtual Reality (VR) Applications",
      "Predictive Analytics and Forecasting",
      "Big Data Analytics in niche applications",
      "AI Ethics, Cybersecurity, Data Privacy and Protection",
      "Machine Learning in medical applications",
      "Policies and Governance for AI and Cyber Security era",
      "Risk and Threats of AI adaption"
    ]
  },
  {
    id: 2,
    track: "Track 3 - Smart Systems and Communications",
    bgColor: "bg-orange-400", // Tailwind Orange for communication and innovation
    textColor: "text-yellow-950", // Dark text for good contrast with orange
    topics: [
      "Edge Computing and Fog Computing",
      "IoT, Sensor Networks and Data Acquisition",
      "Smart Cities and Smart Homes",
      "Cryptography and Encryption Techniques",
      "Blockchain Systems, Security and Privacy",
      "High-Performance Computing (HPC)",
      "Software-Defined Networking (SDN) and Network Function Virtualization (NFV)",
      "Embedded Systems and Real-Time Computing",
      "Wireless, Optical Fibre and Sensor Networks",
      "New era RF & Microwave Communications",
      "5G and 6G Networks"
    ]
  },
  {
    id: 3,
    track: "Track 4 - Engineering and Smart Management",
    bgColor: "bg-purple-400", // Tailwind Purple for management and innovation
    textColor: "text-white", // White text for contrast
    topics: [
      "Software Engineering and Management",
      "Smart Manufacturing and Automation",
      "Predictive Maintenance and AI-Driven Production Systems",
      "Digital Twins and Simulation of Business Models",
      "Organizational Change Management in Digital Transformations",
      "AI-Driven CRM and Personalization",
      "AI-Powered Financial Forecasting and Risk Management",
      "Automation of Decision-Making Processes in Management",
      "Challenges of Digital Currencies, CBDCs and Cryptocurrency Regulation",
      "Cloud-Based Analytics Platforms for Agile Business Decisions"
    ]
  },
  {
    id: 4,
    track: "Track 5 - Advancements in VLSI, Embedded systems and Signal Processing",
    bgColor: "bg-red-400", // Tailwind Red for engineering and processing
    textColor: "text-white", // White text for contrast
    topics: [
      "Audio & Acoustic Signal Processing",
      "Image, Video & Multidimensional Signal Processing, Computer Vision",
      "Design, construction, control of mobile robots and Outdoor services",
      "Aerial robots (Guidance, Navigation and Control)",
      "Man-machine interfaces applied to single and Multi-robot systems",
      "AI-assisted VLSI Designs and challenges",
      "Neuromorphic and Quantum Computing Trends",
      "Deep Submicron Design and Modeling Issues"
    ]
  },
  {
    id: 5,
    track: "Track 6 - Innovations and Entrepreneurship",
    bgColor: "bg-yellow-400", // Tailwind Yellow for innovation and entrepreneurship
    textColor: "text-gray-800", // Dark text for good contrast with yellow
    topics: [
      "Disruptive product ideas",
      "Inclusive business models",
      "AI-powered sales and marketing strategies"
    ]
  }
];




export const submissionGuidelines = [
  "All conference submissions should be written in English with a maximum paper length of six (6) printed pages (10-point font), including figures and tables.",
  "LaTeX is the preferred method to prepare your manuscript. Please use the standard LaTeX IEEE conference template. Please find the format in the download section below.",
  "For Microsoft Word, please use the most current version of the IEEE conference template, which will help reduce word-to-pdf conversion issues such as embedded fonts, bookmarks, etc. Please find the format in the download section below.",
  "All the co-authors must be listed with affiliation details in the initial submission. No further authors can be added for selected papers.",
  "Authors who receive final acceptance after paper revision can only register for the conference. The authors will also be expected to submit a final version of the manuscript that will be added to IEEE proceedings as per the conference template.",
  "Please upload camera-ready paper and an eCopy transfer file in Microsoft CMT.",
  "All the registered papers must be presented at the conference.",
  "Please make sure that the camera-ready paper has been generated by the template provided to you (Contains IEEE copyright notice on the first page bottom left, and the conference name as the footer on the rest of the pages) and verified with the <a class='text-blue-700' href='https://ieee-pdf-express.org/account/login?ReturnUrl=%2F' target='_blank'>PDF Express website</a>.",
  "The completed IEEE electronic copyright form (ECF) needs to be transferred (as and when it is made available) as per IEEE requirements.",
  "Review is single blind and Papers having poor quality and/or high similarity index will be desk rejected (with out review).",
  "All presented papers will be submitted to IEEE for possible publication in IEEE Xplore.",
  "Paper <a class='text-blue-700' href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTEMSMET2025' target='_blank'>Submission Link</a>.",
];

export const aboutConference = [
  {
    description: "4th IEEE TEMSMET 2025 is a global series and an annual flagship conference of IEEE Technology and Engineering Management Society (TEMS)."
  },

  {
    description: "The series started in the year 2020, attracting researchers from across the world to deliberate on broad understanding of technical and business practices in the world of technological advancements."
  },

  {
    description: "4th IEEE TEMSMET 2025 will be a unique platform offering deliberations on multiple dimensions of Innovation, Technology, Management and Humanity. The conference invites original research and innovative solutions or papers on interdisciplinary approaches, methods and frameworks, theories and standards used as innovation to help technology management."
  },

  {
    description: "The conference ensures presentation and discussion on quality research work done in recent times by academicians, researchers both from technology and management background, students, industry experts, analysts, business managers and practitioners."
  },

  {
    description: "Plenary sessions by recognized researchers and presentation of research papers accepted after quality review process are the major attractions for the research fraternity across industry and academia."
  },
]

export const aboutHost = [
  {
    description: "The National Institute of Technology Delhi (NITD), established in 2010 by an Act of Parliament, is one of the thirty-one NITs in India and has been recognized as an Institute of National Importance. Spanning fifty-one acres, its permanent campus has been allocated on NH-44, GT Karnal Road, Delhi-110036, promising a state-of-the-art environment for academic excellence and innovation."
  },
  {
    description: "NIT Delhi is an autonomous Institute which functions under the aegis of Ministry of Education, Government of India. It aims to provide instructions and research facilities in various disciplines of Engineering, Science and Technology, Management, Social Sciences and Humanities for advance learning and dissemination of knowledge."
  },
  {
    description: "The Institute has secured a remarkable NIRF 45 rank in 2024 among 4000 engineering colleges in India."
  },
]

export const destinations = [
  {
    name: "Agra",
    image: "./new_images/taj-agra.jpg",
    description: "Agra, home to the magnificent Taj Mahal, is one of India's most iconic cities. Apart from the Taj, you can explore the Agra Fort, Fatehpur Sikri, and several Mughal-era monuments.",
    distance: "230 km from Delhi",
    travelOptions: "Car: 3.5-4 hours | Bus: 4-5 hours | Train: 2-2.5 hours"
  },
  {
    name: "Vrindavan",
    image: "./new_images/vrindhavan.webp",
    description: "Vrindavan, another sacred city associated with Lord Krishna, is known for its ancient temples, serene ghats, and the vibrant Holi celebrations. Visit the Banke Bihari Temple and the Prem Mandir for spiritual experiences.",
    distance: "159 km from Delhi",
    travelOptions: "Car: 3-3.5 hours | Bus: 4-5 hours | Train (via Mathura): 2.5-3 hours"
  },
  {
    name: "Mathura",
    image: "./new_images/mathura.jpg",
    description: "Mathura, the birthplace of Lord Krishna, is a sacred city filled with temples and ghats. The famous Dwarkadhish Temple, Banke Bihari Temple, and the Krishna Janmabhoomi Temple are must-visit spots.",
    distance: "162 km from Delhi",
    travelOptions: "Car: 3-3.5 hours | Bus: 4-5 hours | Train: 2.5-3 hours"
  },
  {
    name: "Haridwar",
    image: "./new_images/haridwar.jpg",
    description: "Haridwar is a sacred city known for its temples and ghats along the River Ganga. The evening Ganga Aarti at Har Ki Pauri is a mesmerizing sight. It's one of the seven holiest places in Hinduism.",
    distance: "225 km from Delhi",
    travelOptions: "Car: 5-6 hours | Bus: 6-7 hours | Train: 5-6 hours"
  },
  {
    name: "Rishikesh",
    image: "./new_images/rishikesh.jpg",
    description: "Rishikesh, the 'Yoga Capital of the World,' offers spiritual experiences along with adventure sports like rafting and trekking. The Beatles Ashram and the Ganga Aarti at Triveni Ghat are major attractions.",
    distance: "240 km from Delhi",
    travelOptions: "Car: 5-6 hours | Bus: 6-7 hours | Train (via Haridwar): 5.5-6 hours"
  },
  {
    name: "Mussoorie",
    image: "./new_images/mussoorie.jpg",
    description: "Mussoorie is a charming hill station with breathtaking views of the Himalayan range. Famous for its colonial charm, the Camel's Back Road, Kempty Falls, and Mussoorie Lake are major attractions.",
    distance: "297 km from Delhi",
    travelOptions: "Car: 7-8 hours | Bus: 8-9 hours | Train (via Dehradun): 6-7 hours"
  },
  {
    name: "Devprayag",
    image: "./new_images/devprayag.jpg",
    description: "Devprayag is a sacred town where the Bhagirathi and Alaknanda rivers meet to form the Ganges. Known for its spiritual significance and scenic beauty, it is a quiet retreat for those seeking peace and meditation.",
    distance: "320 km from Delhi",
    travelOptions: "Car: 10-11 hours | Bus: 12 hours | Train (via Rishikesh): 10 hours"
  },
  {
    name: "Shimla",
    image: "./new_images/shimla.jpg",
    description: "Shimla, the capital of Himachal Pradesh, is a picturesque hill station known for its colonial architecture, scenic views, and cool weather. Popular spots include Mall Road, Ridge, and Jakhoo Temple.",
    distance: "366 km from Delhi",
    travelOptions: "Car: 7-8 hours | Bus: 8-10 hours | Train (Kalka-Shimla Toy Train): 6-7 hours"
  },
  {
    name: "Manali",
    image: "./new_images/manali.jpg",
    description: "Manali, a popular hill station in Himachal Pradesh, is known for its adventure sports, scenic landscapes, and snow-capped mountains. Solang Valley, Rohtang Pass, and Old Manali are key attractions.",
    distance: "520 km from Delhi",
    travelOptions: "Car: 12-14 hours | Bus: 14-16 hours | Train (via Chandigarh): 11 hours"
  },
];

export const delhiPlaces = [
  {
    name: "Red Fort",
    description: "Built by Emperor Shah Jahan in 1648, the Red Fort is an iconic symbol of India’s history and freedom. This UNESCO World Heritage Site served as the main residence of the Mughal emperors and now hosts the Prime Minister’s Independence Day speech. Its stunning red sandstone walls, intricate Mughal architecture, and the bustling Chatta Chowk market inside attract millions of visitors annually.",
    image: "./new_images/delhi-images/red-fort.jpg"
  },
  {
    name: "Qutub Minar",
    description: "Standing tall at 73 meters, the Qutub Minar is the tallest brick minaret in the world. Built in 1193 by Qutb-ud-din Aibak to celebrate Muslim rule in Delhi, it is surrounded by the Qutub Complex, which includes ancient ruins and the enigmatic Iron Pillar. This site is a testament to Indo-Islamic architecture and remains a significant historical landmark.",
    image: "./new_images/delhi-images/qutub-minar.jpg"
  },
  {
    name: "India Gate",
    description: "The India Gate, a 42-meter-high war memorial, commemorates 70,000 Indian soldiers who sacrificed their lives during World War I. Designed by Sir Edwin Lutyens, it is surrounded by lush gardens and illuminated beautifully at night, making it a favorite spot for picnics and patriotic gatherings in Delhi.",
    image: "./new_images/delhi-images/indiagate.webp"
  },
  {
    name: "Lotus Temple",
    description: "Known for its architectural brilliance, the Lotus Temple resembles a blooming lotus flower. This Bahá'í House of Worship, open to people of all faiths, provides a serene space for meditation and reflection. Completed in 1986, its pristine white structure amidst landscaped gardens makes it a must-visit for its peaceful ambiance.",
    image: "./new_images/delhi-images/lotus-temple.jpeg"
  },
  {
    name: "Humayun’s Tomb",
    description: "Built in 1570, Humayun’s Tomb is a masterpiece of Mughal architecture and a precursor to the Taj Mahal. This UNESCO World Heritage Site was commissioned by Empress Bega Begum for her husband, Emperor Humayun. Its symmetrical gardens, red sandstone structure, and Persian influences leave visitors awestruck.",
    image: "./new_images/delhi-images/humayuns.jpg"
  },
  {
    name: "Chandni Chowk",
    description: "One of Delhi’s oldest and busiest markets, Chandni Chowk was established by Shah Jahan in the 17th century. It offers a vibrant experience with its narrow lanes packed with shops selling traditional jewelry, spices, textiles, and street food. The market also houses historical landmarks like the Gurdwara Sis Ganj Sahib and Fatehpuri Masjid.",
    image: "./new_images/delhi-images/chandini-chowk.jpg"
  },
  {
    name: "Jama Masjid",
    description: "The Jama Masjid, built by Shah Jahan in 1656, is one of India’s largest mosques, accommodating over 25,000 worshippers. Its grand red sandstone and marble structure, intricate carvings, and peaceful courtyards offer a spiritual retreat while providing breathtaking views of Old Delhi from its minarets.",
    image: "./new_images/delhi-images/jama-masjid.jpg"
  },
  {
    name: "Akshardham Temple",
    description: "The Akshardham Temple, inaugurated in 2005, is a modern architectural marvel that showcases India’s ancient culture and spirituality. With intricate carvings, exhibitions, musical fountains, and boat rides, this temple dedicated to Bhagwan Swaminarayan is a celebration of Indian heritage and values.",
    image: "./new_images/delhi-images/akshardham-temple.jpg"
  },
  {
    name: "Rashtrapati Bhavan",
    description: "The Rashtrapati Bhavan, home to the President of India, is a stunning example of colonial architecture. Designed by Sir Edwin Lutyens, it sprawls over 320 acres and features the magnificent Mughal Gardens. Visitors admire its grand domes, expansive corridors, and historical significance.",
    image: "./new_images/delhi-images/rastrapathi.jpg"
  },
  {
    name: "Jantar Mantar",
    description: "Constructed in 1724 by Maharaja Jai Singh II, Jantar Mantar is an astronomical observatory featuring massive stone instruments used to measure time, predict eclipses, and track celestial bodies. This architectural marvel is a testament to India’s scientific advancements and remains a fascinating site for astronomy enthusiasts.",
    image: "./new_images/delhi-images/jantar-mantar.jpg"
  },
  // {
  //   name: "Lodhi Gardens",
  //   description: "Lodhi Gardens is a serene haven in the bustling city, featuring 15th-century tombs of Sayyid and Lodhi rulers. This 90-acre garden blends history with nature, offering scenic walking trails, lush greenery, and architectural gems like the Bara Gumbad and Shish Gumbad, making it a favorite spot for picnics and relaxation.",
  //   image: "./new_images/delhi-images/lodi-gardens.jpg"
  // },
  {
    name: "National Museum",
    description: "The National Museum in Delhi houses an extensive collection of artifacts from India’s diverse history, spanning over 5,000 years. From ancient sculptures and Mughal paintings to the Indus Valley Civilization relics, the museum provides a deep dive into the country’s rich cultural heritage.",
    image: "./new_images/delhi-images/national-museum-of-india-delhi.webp"
  },
  {
    name: "Raj Ghat",
    description: "Raj Ghat is a simple yet poignant memorial dedicated to Mahatma Gandhi. Situated on the banks of the Yamuna River, it marks the site of his cremation in 1948. The black marble platform, surrounded by lush gardens, exudes tranquility and draws visitors paying homage to the Father of the Nation.",
    image: "./new_images/delhi-images/rajghat.avif"
  }
];

export const delhiFoodPlaces = [
  {
    name: "Amrik Sukhdev",
    description: "A legendary roadside dhaba in Murthal, Haryana, known for its butter-loaded paranthas and lassi. It’s a must-visit for authentic North Indian flavors.",
    image: "./new_images/food-images/amrit-sukhdev.jpeg" 
  },
  {
    name: "Saravana Bhavan",
    description: "A renowned South Indian restaurant chain, Saravana Bhavan is famous for its crispy dosas, flavorful idlis, and delicious filter coffee. A perfect spot for a traditional South Indian breakfast or meal.",
    image: "./new_images/food-images/saravana-bhavan.webp" 
  },
  {
    name: "Leo's Artisan Pizza",
    description: "Located in Gurgaon, Leo's Artisan Pizza is famous for its wood-fired Neapolitan-style pizzas. Their Margherita Pizza and Pepperoni Pizza are the crowd favorites, crafted with fresh ingredients and perfect flavor.",
    image: "./new_images/food-images/leo-pizza.jpg" 
  },
  {
    name: "Bukhara",
    description: "Located in the ITC Maurya, Bukhara is famous for its North Indian cuisine, especially its signature Dal Bukhara and the Tandoori Raan. Known for its rustic ambiance and traditional cooking style.",
    image: "./new_images/food-images/bukhara.webp" 
  },
  {
    name: "Indian Accent",
    description: "Indian Accent in New Delhi offers a modern take on traditional Indian dishes, with innovative creations like Slow-Cooked Lamb Shank and Tandoori Lamb Chops. Known for its fine dining experience and creative menu.",
    image: "./new_images/food-images/indian-accent.jpg" 
  },
  {
    name: "Café Delhi Heights",
    description: "Located in Gurgaon, Café Delhi Heights serves delicious Juicy Lucy Burgers and Pastas with a trendy café ambiance.",
    image: "./new_images/food-images/cafe-delhi.jpg" 
  },
];
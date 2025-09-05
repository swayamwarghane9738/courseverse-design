export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  image: string;
  category: string;
  progress?: number;
  isEnrolled?: boolean;
  videoUrl?: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    description: "Learn full-stack web development from scratch. Build real projects with HTML, CSS, JavaScript, React, and Node.js.",
    duration: "12 weeks",
    students: 15420,
    rating: 4.8,
    price: 89,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "Web Development",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lessons: [
      { id: "1-1", title: "Introduction to Web Development", duration: "15 min", completed: true },
      { id: "1-2", title: "HTML Fundamentals", duration: "45 min", completed: true },
      { id: "1-3", title: "CSS Basics", duration: "60 min", completed: false },
      { id: "1-4", title: "JavaScript Essentials", duration: "90 min", completed: false },
    ]
  },
  {
    id: "2",
    title: "Advanced React Development",
    instructor: "Michael Chen",
    description: "Master advanced React concepts including hooks, context, performance optimization, and testing.",
    duration: "8 weeks",
    students: 8930,
    rating: 4.9,
    price: 129,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=300&fit=crop",
    category: "Frontend",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    lessons: [
      { id: "2-1", title: "Advanced Hooks", duration: "30 min", completed: false },
      { id: "2-2", title: "Context API Deep Dive", duration: "25 min", completed: false },
      { id: "2-3", title: "Performance Optimization", duration: "40 min", completed: false },
    ]
  },
  {
    id: "3",
    title: "Data Science with Python",
    instructor: "Dr. Emily Rodriguez",
    description: "Comprehensive course covering data analysis, visualization, and machine learning with Python.",
    duration: "16 weeks",
    students: 12500,
    rating: 4.7,
    price: 149,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    category: "Data Science",
    isEnrolled: true,
    progress: 65,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    lessons: [
      { id: "3-1", title: "Python Basics", duration: "45 min", completed: true },
      { id: "3-2", title: "NumPy and Pandas", duration: "60 min", completed: true },
      { id: "3-3", title: "Data Visualization", duration: "50 min", completed: true },
      { id: "3-4", title: "Machine Learning Intro", duration: "75 min", completed: false },
    ]
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    instructor: "Alex Turner",
    description: "Learn the fundamentals of user interface and user experience design with practical projects.",
    duration: "10 weeks",
    students: 7200,
    rating: 4.6,
    price: 99,
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
    category: "Design",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    lessons: [
      { id: "4-1", title: "Design Thinking", duration: "20 min", completed: false },
      { id: "4-2", title: "Color Theory", duration: "35 min", completed: false },
      { id: "4-3", title: "Typography Basics", duration: "30 min", completed: false },
    ]
  },
  {
    id: "5",
    title: "Mobile App Development",
    instructor: "Lisa Park",
    description: "Build cross-platform mobile apps using React Native and modern development practices.",
    duration: "14 weeks",
    students: 9800,
    rating: 4.8,
    price: 139,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    category: "Mobile",
    isEnrolled: true,
    progress: 30,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    lessons: [
      { id: "5-1", title: "React Native Setup", duration: "25 min", completed: true },
      { id: "5-2", title: "Navigation Basics", duration: "40 min", completed: false },
      { id: "5-3", title: "State Management", duration: "55 min", completed: false },
    ]
  },
  {
    id: "6",
    title: "Digital Marketing Mastery",
    instructor: "David Wilson",
    description: "Complete guide to digital marketing including SEO, social media, and content marketing strategies.",
    duration: "6 weeks",
    students: 11200,
    rating: 4.5,
    price: 79,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Marketing",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    lessons: [
      { id: "6-1", title: "SEO Fundamentals", duration: "30 min", completed: false },
      { id: "6-2", title: "Social Media Strategy", duration: "45 min", completed: false },
      { id: "6-3", title: "Content Creation", duration: "50 min", completed: false },
    ]
  }
];

export const categories = [
  "All",
  "Web Development",
  "Frontend", 
  "Data Science",
  "Design",
  "Mobile",
  "Marketing"
];
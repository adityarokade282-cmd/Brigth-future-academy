import {
  BookOpen,
  Calculator,
  Atom,
  Code,
  Dna,
  FlaskConical,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

export const ACADEMY = {
  name: 'Bright Future Academy',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappNumber: '919876543210',
  email: 'hello@brightfutureacademy.com',
  address: '12 Knowledge Park Road, Sector 21, New Delhi, India 110075',
  mapQuery: '12 Knowledge Park Road, Sector 21, New Delhi',
  hours: 'Mon - Sat: 7:00 AM - 8:00 PM | Sun: 9:00 AM - 1:00 PM',
};

export const WHATSAPP_URL = `https://wa.me/${ACADEMY.whatsappNumber}?text=${encodeURIComponent(
  'Hi Bright Future Academy, I would like to know more about your classes.',
)}`;

export interface Course {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  description: string;
  levels: string[];
}

export const COURSES: Course[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: Calculator,
    image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'From number sense to calculus, we build strong problem-solving skills with step-by-step practice.',
    levels: ['Class 1-10', 'Class 11-12', 'JEE'],
  },
  {
    id: 'science',
    name: 'Science',
    icon: Microscope,
    image: 'https://images.pexels.com/photos/8471913/pexels-photo-8471913.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Hands-on concepts and experiments that make physics, chemistry and biology easy to understand.',
    levels: ['Class 6-10'],
  },
  {
    id: 'english',
    name: 'English',
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Grammar, comprehension, writing and spoken English to build confident communicators.',
    levels: ['Class 1-10', 'Class 11-12'],
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: Atom,
    image: 'https://images.pexels.com/photos/22690752/pexels-photo-22690752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Mechanics, electricity and modern physics explained through real-world examples and derivations.',
    levels: ['Class 9-10', 'Class 11-12', 'JEE & NEET'],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: FlaskConical,
    image: 'https://images.pexels.com/photos/39191000/pexels-photo-39191000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Organic, inorganic and physical chemistry with lab-style reasoning and reaction practice.',
    levels: ['Class 9-10', 'Class 11-12', 'JEE & NEET'],
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: Dna,
    image: 'https://images.pexels.com/photos/8471890/pexels-photo-8471890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Cell biology, genetics and human physiology with diagrams, mnemonics and revision drills.',
    levels: ['Class 9-10', 'Class 11-12', 'NEET'],
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    icon: Code,
    image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Programming fundamentals, data structures and projects that prepare students for the digital world.',
    levels: ['Class 6-10', 'Class 11-12'],
  },
];

export const SUBJECT_OPTIONS = [
  ...COURSES.map((course) => course.name),
  'Full Syllabus (All Subjects)',
];

export interface ClassGroup {
  title: string;
  range: string;
  points: string[];
}

export const CLASS_GROUPS: ClassGroup[] = [
  {
    title: 'Primary',
    range: 'Class 1 to 5',
    points: ['Foundation in reading, writing and numeracy', 'Activity-based learning', 'Small group attention'],
  },
  {
    title: 'Middle School',
    range: 'Class 6 to 8',
    points: ['Concept clarity in all core subjects', 'Regular unit tests and feedback', 'Homework support'],
  },
  {
    title: 'Secondary',
    range: 'Class 9 to 10',
    points: ['Board exam focused preparation', 'Previous year papers and mock tests', 'Weekly performance reports'],
  },
  {
    title: 'Senior Secondary',
    range: 'Class 11 and 12',
    points: ['Science, Commerce and Humanities streams', 'Board plus entrance exam integration', 'Doubt sessions every week'],
  },
];

export const COMPETITIVE_EXAMS = [
  { name: 'JEE Main & Advanced', detail: 'Physics, Chemistry and Mathematics with timed mock tests.' },
  { name: 'NEET', detail: 'Biology, Physics and Chemistry with NCERT-based question practice.' },
  { name: 'Olympiads & NTSE', detail: 'Advanced reasoning, challenge problems and national-level prep.' },
  { name: 'Foundation Program', detail: 'Early start for Class 7 to 10 students aiming for top entrance exams.' },
];

export interface Batch {
  id: string;
  name: string;
  mode: 'Online' | 'Offline';
  timing: string;
  days: string;
  forLevels: string;
}

export const BATCHES: Batch[] = [
  { id: 'morning-offline', name: 'Morning Batch', mode: 'Offline', timing: '7:00 AM - 9:00 AM', days: 'Mon - Sat', forLevels: 'Class 1-10' },
  { id: 'afternoon-offline', name: 'Afternoon Batch', mode: 'Offline', timing: '2:00 PM - 4:00 PM', days: 'Mon - Sat', forLevels: 'Class 6-10' },
  { id: 'evening-offline', name: 'Evening Batch', mode: 'Offline', timing: '5:30 PM - 7:30 PM', days: 'Mon - Sat', forLevels: 'Class 11-12' },
  { id: 'weekend-offline', name: 'Weekend Intensive', mode: 'Offline', timing: '10:00 AM - 1:00 PM', days: 'Sat - Sun', forLevels: 'Competitive Exams' },
  { id: 'morning-online', name: 'Live Morning Batch', mode: 'Online', timing: '8:00 AM - 9:30 AM', days: 'Mon - Fri', forLevels: 'Class 1-10' },
  { id: 'evening-online', name: 'Live Evening Batch', mode: 'Online', timing: '6:00 PM - 7:30 PM', days: 'Mon - Fri', forLevels: 'Class 9-12' },
  { id: 'competitive-online', name: 'Competitive Online', mode: 'Online', timing: '7:00 PM - 9:00 PM', days: 'Mon - Sat', forLevels: 'JEE, NEET & Olympiads' },
];

export const CLASS_LEVEL_OPTIONS = [
  ...Array.from({ length: 10 }, (_, index) => `Class ${index + 1}`),
  'Class 11',
  'Class 12',
  'Competitive Exams',
];

export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  qualification: string;
  experience: string;
  image: string;
  bio: string;
}

export const TEACHERS: Teacher[] = [
  {
    id: 'ananya-mehta',
    name: 'Dr. Ananya Mehta',
    subjects: ['Mathematics'],
    qualification: 'Ph.D. Mathematics, M.Sc.',
    experience: '14 years',
    image: 'https://images.pexels.com/photos/5905757/pexels-photo-5905757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Known for turning intimidating proofs into simple, memorable steps for students of every level.',
  },
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    subjects: ['Physics'],
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '11 years',
    image: 'https://images.pexels.com/photos/8617725/pexels-photo-8617725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Former research assistant who uses everyday examples to explain forces, waves and circuits.',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    subjects: ['English', 'Computer Science'],
    qualification: 'M.A. English Literature, NET Qualified',
    experience: '9 years',
    image: 'https://images.pexels.com/photos/8423069/pexels-photo-8423069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Builds confident speakers and writers through reading circles, debates and personal feedback.',
  },
  {
    id: 'vikram-desai',
    name: 'Vikram Desai',
    subjects: ['Chemistry', 'Biology'],
    qualification: 'M.Sc. Chemistry, B.Ed.',
    experience: '10 years',
    image: 'https://images.pexels.com/photos/40839986/pexels-photo-40839986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Specialises in NEET-oriented chemistry and biology with structured revision and concept maps.',
  },
  {
    id: 'meera-iyer',
    name: 'Meera Iyer',
    subjects: ['Biology', 'Science'],
    qualification: 'M.Sc. Zoology, M.Ed.',
    experience: '8 years',
    image: 'https://images.pexels.com/photos/6981004/pexels-photo-6981004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Creates a warm, curious classroom where younger students love science and ask big questions.',
  },
  {
    id: 'arjun-kapoor',
    name: 'Arjun Kapoor',
    subjects: ['Computer Science', 'Mathematics'],
    qualification: 'B.Tech CSE, M.Tech',
    experience: '7 years',
    image: 'https://images.pexels.com/photos/6209567/pexels-photo-6209567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Former software engineer teaching coding, logic and project-based learning for future-ready students.',
  },
];

export interface Topper {
  id: string;
  name: string;
  batch: string;
  achievement: string;
  score: string;
  quote: string;
  image: string;
}

export const TOPPERS: Topper[] = [
  {
    id: 'aditi-rao',
    name: 'Aditi Rao',
    batch: 'Class 12, Science',
    achievement: 'State Topper in Physics',
    score: '98.6%',
    quote: 'The weekly tests and patient doubt sessions made every chapter feel manageable.',
    image: 'https://images.pexels.com/photos/14509172/pexels-photo-14509172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'rohan-verma',
    name: 'Rohan Verma',
    batch: 'Class 10',
    achievement: 'School Topper, 10 CGPA',
    score: '99.2%',
    quote: 'My teachers pushed me beyond the textbook, and that made the board exam feel easy.',
    image: 'https://images.pexels.com/photos/8093004/pexels-photo-8093004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sneha-patel',
    name: 'Sneha Patel',
    batch: 'Class 12, Competitive Exams',
    achievement: 'Top 100 All India Rank, NEET',
    score: '685 / 720',
    quote: 'The NEET test series was tough, but it is exactly why I felt ready on exam day.',
    image: 'https://images.pexels.com/photos/29086857/pexels-photo-29086857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Kavita Singh',
    role: 'Parent of Class 8 student',
    quote: 'My son used to dread maths. Within three months he was solving problems on his own and asking for more.',
    image: 'https://images.pexels.com/photos/14180701/pexels-photo-14180701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'testimonial-2',
    name: 'Amit Joshi',
    role: 'Parent of Class 12 student',
    quote: 'The timetable, progress reports and communication are excellent. We always know exactly where our daughter stands.',
    image: 'https://images.pexels.com/photos/6146979/pexels-photo-6146979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'testimonial-3',
    name: 'Neha Gupta',
    role: 'Class 11 student, Evening Batch',
    quote: 'The online classes feel just as personal as the offline ones. The teachers remember every doubt I ask.',
    image: 'https://images.pexels.com/photos/8199567/pexels-photo-8199567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const ACHIEVEMENT_STATS = [
  { value: 5000, suffix: '+', label: 'Students taught since 2010' },
  { value: 96, suffix: '%', label: 'Board exam pass rate' },
  { value: 320, suffix: '+', label: 'Students placed in top colleges' },
  { value: 45, suffix: '', label: 'Expert teachers on our faculty' },
];

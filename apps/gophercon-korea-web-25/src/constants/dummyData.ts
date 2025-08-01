export interface Speaker {
  id: number;
  name: string;
  company: string;
  image: string;
}

export interface Session {
  id: number;
  title: string;
  description: string;
  speakerId: number;
  track: "A" | "B" | "C";
}

export const speakers: Speaker[] = [
  { id: 1, name: "Gopher Kim", company: "Golang Korea", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Go Lee", company: "Go Community", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Go Park", company: "Go Foundation", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Go Choi", company: "Go Inc.", image: "https://via.placeholder.com/150" },
];

export const sessions: Session[] = [
  {
    id: 101,
    title: "The Future of Go",
    description: "Exploring the next generation of Go programming language features.",
    speakerId: 1,
    track: "A",
  },
  {
    id: 102,
    title: "Concurrency in Go",
    description: "A deep dive into goroutines and channels for effective parallel programming.",
    speakerId: 2,
    track: "B",
  },
  {
    id: 103,
    title: "Building Microservices with Go",
    description: "Practical guide to designing and implementing microservices architecture.",
    speakerId: 3,
    track: "A",
  },
  {
    id: 104,
    title: "Go for Data Science",
    description: "How Go can be used for high-performance data processing and analysis.",
    speakerId: 4,
    track: "B",
  },
  {
    id: 201,
    title: "Advanced Go Generics",
    description: "Unlocking the full potential of generics in Go 1.2x.",
    speakerId: 1,
    track: "A",
  },
  {
    id: 202,
    title: "High-Performance Go",
    description: "Tips and tricks for optimizing your Go applications for speed.",
    speakerId: 2,
    track: "B",
  },
];

export const schedule = [
  { time: "10:00 - 10:50", trackA: 101, trackB: 102 },
  { time: "11:00 - 11:50", trackA: 103, trackB: 104 },
  { time: "12:00 - 13:00", trackA: "Lunch", trackB: "Lunch" },
  { time: "13:00 - 13:50", trackA: 201, trackB: 202 },
];

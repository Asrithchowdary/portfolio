export interface Experience {
  company: string;
  role: string;
  dates: string;
  status: "present" | "past";
  link?: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "PearlThoughts",
    role: "Backend Developer Intern",
    dates: "jun 2026 - jul 2026",
    status: "past",
    link: "https://www.pearlthoughts.com",
    bullets: [
      "Worked on Schedula, a doctor appointment scheduling system built with NestJS, TypeScript, PostgreSQL and TypeORM.",
      "Set up the NestJS project, designed the ER diagram and produced flowcharts for the booking, rescheduling and cancellation flows.",
      "Submitted work through GitHub pull requests.",
    ],
  },
];
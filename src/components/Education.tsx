
import { GraduationCap } from "lucide-react";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";

const educations = [
  {
    institution: "Kakinada institute of engineering and technology",
    period: "2021 – 2025",
    degree: "Bachelor's Degree in Computer Science - (Artificial Intelligence and Data Science)",
    score: "CGPA : 7.46"
  },
  {
    institution: "Jagan's Junior College",
    period: "2019 – 2021",
    degree: "Maths, Physics, Chemistry",
    score: "Marks : 917"
  },
  {
    institution: "Narayana E.M High School",
    period: "2018 – 2019",
    degree: "State Board of Education",
    score: "CGPA : 9.0"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="ACADEMIC BACKGROUND" />
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <Card 
              key={`edu-${index}`} 
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-secondary dark:bg-secondary/30">{edu.period}</span>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-2">{edu.degree}</h4>
                  <p className="text-sm opacity-80">{edu.score}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

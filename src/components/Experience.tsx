
import { Briefcase } from "lucide-react";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";

const experiences = [
  {
    company: "Cognifyz Technologies Company",
    period: "Nov 2024 - Jan 2025",
    title: "Data Analyst",
    description: [
      "Using Power BI, SQL, DAX, Power Query, Data Modeling, Data Visualization.",
      "Designed and implemented interactive Power BI dashboards to track KPIs and improve reporting efficiency.",
      "Reduced reporting time and provided actionable insights to support business strategies."
    ]
  },
  {
    company: "All India Council for Technical Education",
    period: "Oct 2024 - Dec 2024",
    title: "Statistics Analyst",
    description: [
      "Performed statistical analysis to identify trends and patterns within various datasets.",
      "Conducted structural assessments of engineering designs, performed load calculations, and analyzed stress-strain behavior using software tools like AutoCAD and ANSYS.",
      "Assisted in the preparation of detailed reports highlighting statistical findings and their implications on business strategies."
    ]
  },
  {
    company: "Y-Hills Company",
    period: "Mar 2023 - Apr 2023",
    title: "Machine Learning Intern",
    description: [
      "Developed predictive models using Python to enhance the accuracy of data-driven decisions.",
      "Worked on the application of machine learning algorithms to improve data processing efficiency.",
      "Delivered a predictive model with accuracy that improved decision-making. Automated data analysis tasks, reducing manual effort."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Work Experience" subtitle="PROFESSIONAL EXPERIENCE" />
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={`exp-${index}`} 
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-secondary dark:bg-secondary/30">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-3">{exp.title}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

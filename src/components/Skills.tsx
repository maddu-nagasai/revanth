
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionHeading from "./ui-elements/SectionHeading";
import Card from "./ui-elements/Card";
import { Award, BarChart3, Book, Code, Database, FileSpreadsheet, GraduationCap, LineChart, PieChart, X } from "lucide-react";

const skills = [
  {
    category: "Data Analysis Tools",
    skills: ["Power BI", "Excel"],
    icon: <BarChart3 className="w-6 h-6 text-primary" />
  },
  {
    category: "Database Management",
    skills: ["MySQL"],
    icon: <Database className="w-6 h-6 text-primary" />
  },
  {
    category: "Programming Languages",
    skills: ["Python"],
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    category: "Data Visualization & Reporting",
    skills: ["Charts", "Dashboards", "Reports"],
    icon: <PieChart className="w-6 h-6 text-primary" />
  },
  {
    category: "Statistical Analysis",
    skills: ["Regression", "Correlation", "Hypothesis Testing"],
    icon: <LineChart className="w-6 h-6 text-primary" />
  },
  {
    category: "Other Skills",
    skills: ["Problem Solving", "Machine Learning Concepts"],
    icon: <FileSpreadsheet className="w-6 h-6 text-primary" />
  }
];

const certificates = [
  {
    id: 1,
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "June 2023",
    skills: ["Python", "Data Science", "Pandas", "NumPy"],
    description: "A comprehensive course covering Python fundamentals for data science applications, including data manipulation, analysis, and visualization.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    icon: <Code className="w-5 h-5 text-primary" />
  },
  {
    id: 2,
    title: "Salesforce Data Analytics",
    issuer: "Salesforce",
    date: "August 2023",
    skills: ["Salesforce", "Data Analytics", "CRM", "Reporting"],
    description: "Advanced analytics techniques within the Salesforce ecosystem, focusing on building custom reports and dashboards for business intelligence.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    icon: <BarChart3 className="w-5 h-5 text-primary" />
  },
  {
    id: 3,
    title: "Machine Learning",
    issuer: "Stanford Online",
    date: "October 2023",
    skills: ["Machine Learning", "Python", "Algorithms", "Neural Networks"],
    description: "In-depth exploration of machine learning algorithms and their applications, including supervised and unsupervised learning techniques.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    icon: <Book className="w-5 h-5 text-primary" />
  },
  {
    id: 4,
    title: "Power BI",
    issuer: "Microsoft",
    date: "January 2024",
    skills: ["Power BI", "Data Visualization", "DAX", "Power Query"],
    description: "Comprehensive course on creating effective data visualizations and interactive dashboards using Microsoft Power BI.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    icon: <BarChart3 className="w-5 h-5 text-primary" />
  },
  {
    id: 5,
    title: "Data Analyst Certification",
    issuer: "DataCamp",
    date: "March 2024",
    skills: ["Data Analysis", "SQL", "Statistics", "Excel"],
    description: "Comprehensive certification covering all aspects of data analysis, from cleaning and processing to visualization and interpretation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MTYxMjc1MzQ&ixlib=rb-4.0.3&q=80&w=800",
    icon: <Award className="w-5 h-5 text-primary" />
  }
];

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null);
  
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Technical Skills" subtitle="SKILLS" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={`skill-${index}`} 
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              glow={true}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.skills.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm bg-secondary dark:bg-secondary/30 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="animate-fade-in-delayed" glow={true} glowColor="secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Python for Data Science</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Salesforce Data Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Machine Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Power BI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Data Analyst Certification</span>
              </li>
            </ul>
          </Card>
          
          <Card className="animate-fade-in-delayed" style={{ animationDelay: '150ms' }} glow={true} glowColor="secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>English</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-6 h-2 rounded-full bg-primary"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Telugu</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-6 h-2 rounded-full bg-primary"
                  ></div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <SectionHeading title="Certificates & Achievements" subtitle="CERTIFICATES" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <Card 
                key={`certificate-${index}`}
                className="cursor-pointer animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
                glow={true}
                glowColor="accent"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    {certificate.icon}
                  </div>
                  <h3 className="font-bold">{certificate.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {certificate.description}
                </p>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Certificate Dialog */}
          <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-xl">{selectedCertificate?.title}</DialogTitle>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <DialogDescription>
                  Issued by {selectedCertificate?.issuer} • {selectedCertificate?.date}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                <img 
                  src={selectedCertificate?.image} 
                  alt={selectedCertificate?.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedCertificate?.description}
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate?.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-secondary dark:bg-secondary/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setSelectedCertificate(null)}>
                  Close
                </Button>
                <Button>View Certificate</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Skills;

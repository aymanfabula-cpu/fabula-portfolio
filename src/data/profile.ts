export interface Language {
  name: string;
  level: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  role: string;
  objective: string;
  tools: string;
  link?: string;
  logo?: string;
}

export const profile = {
  name: "Fabula Ayman",
  title: "Content Creator | Scriptwriter | Creative",
  email: "aymanfaula@gmail.com",
  location: "Cairo, Egypt",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Full Professional Proficiency (C1)" },
    { name: "French", level: "C1 Certified" }
  ],
  linkedin: "https://www.linkedin.com/in/fabula-ayman-478631271/",
  cvPath: "documents/FABULA.CV.pdf",
  profileImage: "images/profile.jpeg",
  about: "Fabula is a creative scriptwriter and content creator who brings ad campaigns from script to screen. Passionate about advertising and brand management, she writes engaging video scripts, films her own footage, and crafts compelling visual content that builds strong brands.",
  skills: [
    { title: "Scriptwriting", description: "Drafting engaging concepts, hooks, and narrative structures that resonate." },
    { title: "Content Production", description: "End-to-end management of creative media projects." },
    { title: "Brand Storytelling", description: "Crafting narratives that resonate with target audiences." },
    { title: "Social Media Content", description: "Engaging visual assets tailored for Instagram and TikTok." },
    { title: "Instagram Visual Identity", description: "Building cohesive and aesthetic feed strategies." },
    { title: "Campaign Concepts", description: "Ideation and execution of 360° marketing initiatives." },
    { title: "Creative Direction", description: "Guiding the visual and emotional tone of a brand." }
  ],
  experience: [
    {
      role: "Freelance Scriptwriter",
      company: "Freelance / Independent",
      period: "Current",
      description: "Defined the goal and creative angle of each script, tailoring messaging across various concepts to reach and resonate with target audiences."
    },
    {
      role: "Digital Content & Brand Management",
      company: "Williams Art",
      period: "Previous",
      description: "Instagram multimedia content management, graphic/photo/video selection, and audience growth."
    },
    {
      role: "Creative Marketing Intern",
      company: "DPM Multimedia Agency",
      period: "Internship",
      description: "Advertising scenarios, creative storytelling, and 360° marketing campaigns."
    }
  ],
  projects: [
    {
      title: "Williams Art",
      category: "Branding & Creative Content",
      role: "Digital Content & Brand Management",
      objective: "Building a strong visual identity and growing audience engagement through curated multimedia content, brand storytelling, and video production.",
      tools: "Instagram, Video Scripts, Creative Direction",
      link: "https://www.instagram.com/williams_artt?rpxt=cWdtM2JheTB2YWN3&utm_source=qrand",
      logo: "images/williams-art-logo.png"
    },
    {
      title: "Freelance Scriptwriting Project",
      category: "Creative Scriptwriting & Campaign Strategy",
      role: "Lead Scriptwriter",
      objective: "Defined the goal and creative angle of each script, tailoring messaging across various concepts to reach and resonate with target audiences.",
      tools: "Scriptwriting, Audience Strategy, Campaign Concepts",
      link: "https://www.canva.com/design/DAHXa1vKDxo/kSIMZ-q1zD9FP48BWNKGfw/edit",
    },
    {
      title: "Alexandria Museums Documentary",
      category: "Cultural Heritage & Documentary",
      role: "Content Creator & Storyteller",
      objective: "Documenting and spotlighting historical treasures (Graeco-Roman Museum and Royal Jewelry Museum) through compelling visual narratives.",
      tools: "On-site Filming, Storytelling, Visual Narrative"
    },
    {
      title: "DPM Multimedia Agency",
      category: "Campaign Storytelling",
      role: "Creative Intern",
      objective: "Developing advertising scenarios and creative guidelines for 360° marketing campaigns.",
      tools: "Storyboarding, Marketing Strategy"
    }
  ]
};

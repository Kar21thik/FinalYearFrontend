import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Workflow", href: "#workflow" },
  { label: "Developers", href: "#developers" },
  { label: "Contact Us", href: "#contact-us" },
];

export const testimonials = [
  {
    user: "Ganesh Nayak",
    role: "Back-End Developer", // Updated to role
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "K.R. Nachiketha",
    role: "Back-End Developer", // Updated to role
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Karthik",
    role: "Front-End Developer", // Updated to role
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Kritarth",
    role: "Back-End Developer", // Updated to role
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  }
];
BotMessageSquare
export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Model Performance",
    description:
      "Achieved an exceptional classification accuracy of 99.70% using the Transformer model, outperforming existing models such as VGG19 and ResNet.",
  },
  {
    icon: <PlugZap />,
    text: "Xception Model Accuracy",
    description:
      "Our Xception model achieved a notable accuracy of 99.51%, enhancing the classification of retinal diseases with robust precision and recall scores.",
  },
  {
    icon: <ShieldHalf />,
    text: "Precision & Recall",
    description:
      "With a precision and recall of 99.70%, our model demonstrates high reliability in classifying retinal diseases such as CNV, DME, and Drusen.",
  },
  {
    icon: <ShieldHalf />,
    text: "Sensitive Disease Classification",
    description:
      "Successfully classified sensitive retinal diseases such as Drusen, Normal, CNV, and DME with high accuracy and sensitivity.",
  },
  {
    icon: <Fingerprint />,
    text: "Comprehensive Metrics",
    description:
      "The model's AUC stands at 1.0, with a Cohen's Kappa of 0.996, showing near-perfect agreement and excellent classification specificity of 99.89%.",
  },
  {
    icon: <GlobeLock />,
    text: "Advanced Diagnostic Precision",
    description:
"The Transformer model achieves near-perfect accuracy with an AUC of 1.0 and a Cohen's Kappa of 0.996. Its 99.70% sensitivity and 99.89% specificity highlight its precision in detecting retinal diseases and minimizing misdiagnosis."  }
  
  
];
export const checklistItems = [
  {
    title: "Month 1: Requirement Analysis",
    description:
      "Conducted an in-depth analysis to gather relevant datasets for retinal disease classification. Defined comprehensive project requirements and set the foundation for model development.",
  },
  {
    title: "Month 2: Model Selection",
    description:
      "Evaluated and selected appropriate deep learning models, including VGG19 and Transformer, for effective retinal disease classification. Focused on optimizing model performance and accuracy.",
  },
  {
    title: "Month 3: Frontend Development",
    description:
      "Developed and designed the frontend interface using React, ensuring seamless integration with the backend API. Implemented user-friendly features and a responsive design for an optimal user experience.",
  },
  {
    title: "Month 4: Testing and Evaluation",
    description:
      "Performed rigorous testing and evaluation of the classification model. Achieved high accuracy metrics, with scores.",
  },
];
export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

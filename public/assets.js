import logo from "./logo.png";
import hero from "./hero.png";
import {
  TrendingUp,
  PenTool,
  Box,
  FileText,
  Camera,
  Image,
  Palette,
  Landmark,
  Layers,
  Home,
  LayoutDashboard,
  Upload,
  File,
} from "lucide-react";

export const img = {
  logo,
  hero,
};

export const footerData = [
  {
    id: 1,
    type: "address",
    label: "Address",
    value: "Bansal Market, Barola, Noida 49, India",
  },
  {
    id: 2,
    type: "phone",
    label: "Phone",
    value: "+91 6393274099",
  },
  {
    id: 3,
    type: "email",
    label: "Email",
    value: "dp2072000@gmail.com.com",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "Expert Teacher",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.",
    icon: "User",
  },
  {
    id: 2,
    title: "Quality Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.",
    icon: "BookOpen",
  },
  {
    id: 3,
    title: "Remote Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.",
    icon: "Monitor",
  },
  {
    id: 4,
    title: "Life Time Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.",
    icon: "Headphones",
  },
];

export const categoriesData = [
  {
    id: 1,
    title: "Digital Marketing",
    icon: <TrendingUp />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <PenTool />,
  },
  {
    id: 3,
    title: "3D Visual Design",
    icon: <Box />,
  },
  {
    id: 4,
    title: "Content Marketing",
    icon: <FileText />,
  },
  {
    id: 5,
    title: "Photography",
    icon: <Camera />,
  },
  {
    id: 6,
    title: "Photo Lifestyle",
    icon: <Image />,
  },
  {
    id: 7,
    title: "Art & Design",
    icon: <Palette />,
  },
  {
    id: 8,
    title: "Finance & Banking",
    icon: <Landmark />,
  },
  {
    id: 9,
    title: "Graphic Design",
    icon: <Layers />,
  },
  {
    id: 10,
    title: "Interior Design",
    icon: <Home />,
  },
];

export const teacherSidebarItems = [
  { label: 'Dashboard', href: '/teacher/dashboard', icon: <LayoutDashboard/> },
  { label: 'Upload Content', href: '/teacher/upload', icon: <Upload/> },
  { label: 'My Content', href: '/teacher/my-content', icon:  <File/> },
];

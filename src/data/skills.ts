import { SkillCategory, SoftwareTool } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "CAD & 3D Design",
    description: "Precision 2D drafting, parametric 3D models, photorealistic rendering & visualization",
    skills: [
      { name: "AutoCAD", level: "Professional", description: "2D drafting, technical elevations, floorplans & sections" },
      { name: "3ds Max", level: "Professional", description: "Architectural modeling, lighting & photorealistic scenes" },
      { name: "KeyShot", level: "Professional", description: "Studio lighting, material textures & product rendering" },
      { name: "3D Modeling", level: "Professional", description: "Complex surface, solid & parametric polygonal modeling" },
      { name: "3D Visualization", level: "Professional", description: "Atmospheric rendering, realistic materials & camera staging" }
    ]
  },
  {
    title: "Interior & Furniture",
    description: "Spatial planning, bespoke joinery, ergonomic design & manufacturing-ready assemblies",
    skills: [
      { name: "Interior Design", level: "Professional", description: "Residential, commercial & hospitality spatial layout concepts" },
      { name: "Furniture Design", level: "Professional", description: "Contemporary, classic & modular custom furniture pieces" },
      { name: "Furniture Assembly", level: "Professional", description: "Exploded views, knock-down hardware & joinery details" },
      { name: "Space Planning", level: "Professional", description: "Ergonomic circulation, zoning & functional layout plans" },
      { name: "Product/Furniture Modeling", level: "Professional", description: "Millimeter-accurate production models & bill of materials" }
    ]
  },
  {
    title: "Graphic & Design",
    description: "Vector precision artwork, technical layout composition & digital asset prep",
    skills: [
      { name: "CorelDRAW", level: "Intermediate", description: "Vector drafting, precision cutting templates & scale layouts" },
      { name: "Graphic Design", level: "Intermediate", description: "Design balance, typography, presentation sheets & mockups" },
      { name: "Layout Design", level: "Advanced", description: "Engineering drawing sheets, title blocks & presentation portfolios" }
    ]
  },
  {
    title: "CNC / CAD-CAM",
    description: "Relief carvings, 2.5D/3D toolpath creation, machine-ready G-code & production drawings",
    skills: [
      { name: "ArtCAM", level: "Professional", description: "3D bas-relief sculpting, vector engraving & texture generation" },
      { name: "CNC Design", level: "Professional", description: "Jali patterns, panel fretwork, 3D wood & stone carving" },
      { name: "Relief Design", level: "Professional", description: "Intricate floral, geometric & religious 3D sculptural reliefs" },
      { name: "Manufacturing Drawings", level: "Professional", description: "Tolerance-checked shop drawings for fabrication" },
      { name: "Toolpath-oriented Design", level: "Working Knowledge", description: "Feed rate consideration, cutter diameter allowances & depth profiling" }
    ]
  }
];

export const softwareTools: SoftwareTool[] = [
  {
    id: "autocad",
    name: "AutoCAD",
    tag: "2D / 3D CAD",
    description: "2D drafting, technical drawings, layouts, dimensions and detailed CAD drawings.",
    level: "Professional",
    iconName: "Layers",
    projectCount: 42
  },
  {
    id: "3dsmax",
    name: "3ds Max",
    tag: "3D & Render",
    description: "3D modeling, interior visualization, furniture modeling and realistic scene creation.",
    level: "Professional",
    iconName: "Box",
    projectCount: 38
  },
  {
    id: "coreldraw",
    name: "CorelDRAW",
    tag: "Vector & CAM",
    description: "Graphic layouts, vector design and design preparation for CNC/laser cutting.",
    level: "Intermediate",
    iconName: "PenTool",
    projectCount: 29
  },
  {
    id: "artcam",
    name: "ArtCAM",
    tag: "CNC / Relief",
    description: "Relief design, CNC-ready artwork and 3D carving design.",
    level: "Professional",
    iconName: "Cpu",
    projectCount: 24
  },
  {
    id: "keyshot",
    name: "KeyShot",
    tag: "Visualization",
    description: "Product visualization and realistic material/render presentation.",
    level: "Professional",
    iconName: "Sparkles",
    projectCount: 31
  }
];

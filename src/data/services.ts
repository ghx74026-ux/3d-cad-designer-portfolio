import { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    id: "autocad-2d",
    title: "AutoCAD 2D Drawing",
    subtitle: "Architectural & Technical Drafting",
    description: "Technical drawings, floor plans, elevations, sections, furniture drawings and detailed manufacturing layouts with exact dimensional precision.",
    deliverables: ["Architectural Floor Plans", "Wall Sections & Elevations", "Furniture Joinery Details", "DWG / DXF / PDF Export"],
    iconName: "FileSpreadsheet"
  },
  {
    id: "3d-modeling",
    title: "3D Modeling",
    subtitle: "Polygon & Parametric Surfaces",
    description: "Professional 3D models for furniture, interiors, consumer products and industrial components designed with high topological accuracy.",
    deliverables: ["High-Poly & Low-Poly 3D Assets", "Textured & UV Unwrapped Models", "STEP / OBJ / FBX / 3DS Formats", "Render-Ready Geometry"],
    iconName: "Box"
  },
  {
    id: "interior-designing",
    title: "Interior Designing",
    subtitle: "Residential & Commercial Concepts",
    description: "Residential, commercial and furniture-focused interior concepts with balanced spatial ergonomics, realistic lighting, and material palettes.",
    deliverables: ["Spatial Layout Planning", "Moodboards & Color Schemes", "Lighting & Ceiling Layouts", "Photorealistic Walkthrough Stills"],
    iconName: "Home"
  },
  {
    id: "furniture-designing",
    title: "Furniture Designing",
    subtitle: "Custom & Ergonomic Concepts",
    description: "Custom furniture concepts, dimensions, 3D models and manufacturing-oriented drawings optimized for production and aesthetics.",
    deliverables: ["Custom Furniture Concepts", "Manufacturing Specs & Cut Lists", "Ergonomic Dimension Analysis", "Material Finish Schedules"],
    iconName: "Armchair"
  },
  {
    id: "assembly-design",
    title: "Furniture Assembly Design",
    subtitle: "Component Joinery & Knock-Down Systems",
    description: "Detailed furniture assembly concepts, component-based designs, exploded views and hardware fitting specifications for seamless assembly.",
    deliverables: ["Exploded 3D Assembly Views", "Knock-Down (KD) Joinery Detailing", "Step-by-Step Assembly Guides", "BOM & Hardware Sourcing Specs"],
    iconName: "Wrench"
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    subtitle: "Photorealistic Studio & Interior Renders",
    description: "Realistic presentation models, studio product renders, architectural stills and material visualizations suitable for catalogs and clients.",
    deliverables: ["4K High-Res Renderings", "Studio Lighting Setups", "PBR Realistic Materials", "360-degree Panorama Views"],
    iconName: "Eye"
  },
  {
    id: "cad-cam-cnc",
    title: "CAD/CAM & CNC Design",
    subtitle: "Relief Carvings & Machining Files",
    description: "Design preparation for CNC and carving-related applications, 3D relief sculptures, jali screens, and toolpath-optimized vectors.",
    deliverables: ["ArtCAM 3D Reliefs", "Jali & Fretwork Vector Cut Files", "Wood/MDF/Stone Carving CAD", "Machining Clean Cut Paths"],
    iconName: "Cpu"
  },
  {
    id: "coreldraw-design",
    title: "CorelDRAW Design",
    subtitle: "Vector Artwork & Production Prep",
    description: "Vector artwork, technical scale layouts, laser engraving files, packaging templates and graphic presentation sheets.",
    deliverables: ["Laser & Vinyl Cutting Vectors", "Technical Scale Layouts", "Branded Presentation Sheets", "CDR / AI / EPS / SVG Exports"],
    iconName: "PenTool"
  }
];

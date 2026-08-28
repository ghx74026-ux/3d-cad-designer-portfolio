import { PortfolioProject } from '../types';
import autocadDraftTableImg from '../assets/images/autocad_draft_table_1786863601235.jpg';
import characterModelImg from '../assets/images/character_3d_model_1786870148844.jpg';
import diningTable3dImg from '../assets/images/dining_table_3d_model_1786870159284.jpg';
import coffeeTable3dImg from '../assets/images/coffee_table_3d_model_1786870171434.jpg';
import humanBustSculptImg from '../assets/images/human_bust_3d_sculpt_1786870184139.jpg';
import chair3dModelImg from '../assets/images/chair_3d_model_1786870195601.jpg';
import interiorLotusArchesImg from '../assets/images/interior_lotus_arches_1786870818114.jpg';
import interiorMustardArchImg from '../assets/images/interior_mustard_arch_1786870832023.jpg';
import interiorStudySuiteImg from '../assets/images/interior_study_suite_1786870847583.jpg';
import interiorChinoiseriePinkImg from '../assets/images/interior_chinoiserie_pink_1786870865999.jpg';
import interiorWaveGoldReliefImg from '../assets/images/interior_wave_gold_relief_1786870881892.jpg';
import interiorSymmetricalSuiteImg from '../assets/images/interior_symmetrical_suite_1786870897043.jpg';
import luxuryCurvedSofaImg from '../assets/images/luxury_curved_sofa_1786871742622.jpg';
import flutedConsoleTableImg from '../assets/images/fluted_console_table_1786871761633.jpg';
import designerFloorLampImg from '../assets/images/designer_floor_lamp_1786871778456.jpg';
import luxurySideTableImg from '../assets/images/luxury_side_table_1786871793549.jpg';
import luxuryBarCabinetImg from '../assets/images/luxury_bar_cabinet_1786871811390.jpg';
import ambedkarReliefImg from '../assets/images/ambedkar_3d_relief_artcam_1786872135098.jpg';
import birdsNatureReliefImg from '../assets/images/birds_nature_relief_artcam_1786872149089.jpg';
import horseDynamicReliefImg from '../assets/images/horse_dynamic_relief_artcam_1786872161845.jpg';
import ornateHeadboardReliefImg from '../assets/images/ornate_headboard_relief_artcam_1786872174005.jpg';
import baroqueFrameReliefImg from '../assets/images/baroque_frame_relief_artcam_1786872186362.jpg';
import cncWaveFeatureWallImg from '../assets/images/cnc_wave_feature_wall_1786872420829.jpg';
import cncSunburstDoorPanelImg from '../assets/images/cnc_sunburst_door_panel_1786872445817.jpg';
import cncLotusCranesPanelImg from '../assets/images/cnc_lotus_cranes_panel_1786872466025.jpg';
import cncJaliVectorPanelImg from '../assets/images/cnc_jali_vector_panel_1786872480372.jpg';
import coreldrawApparelShowcaseImg from '../assets/images/coreldraw_apparel_showcase_1786872713569.jpg';
import queenOfVectorArtworkImg from '../assets/images/queen_of_vector_artwork_1786872732946.jpg';
import luxuryLeafBrandmarkImg from '../assets/images/luxury_leaf_brandmark_1786872758416.jpg';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-01",
    title: "3D Character & Human Anatomy Digital Model",
    category: "3D Modeling",
    software: ["3ds Max", "ZBrush", "KeyShot", "Photoshop"],
    year: "2026",
    description: "High-detail 3D human character modeling with clean subdivision quad topology, multi-layered displacement sculpting, clay viewport shader breakdown, and studio turntable rendering.",
    services: ["3D Human/Character Modeling", "Subdivision Quad Topology", "Digital Sculpting & Clay Shader", "Turntable Studio Lighting"],
    coverImage: characterModelImg,
    images: [
      characterModelImg,
      humanBustSculptImg
    ],
    process: [
      "Initial anatomical proportion blockout and bone landmark positioning.",
      "High-poly multi-resolution skin and organic crease sculpting in ZBrush/3ds Max.",
      "Optimized retopology to ensure clean quad loops and smooth edge flow.",
      "Subsurface scattering (SSS) skin shader creation and 3-point studio lighting rig."
    ],
    specs: {
      "Topology": "100% Clean Quad Topology with Sub-D Support",
      "Sculpt Detail": "Multi-million polygon micro-creases & skin pores",
      "Software Stack": "3ds Max, ZBrush, KeyShot, V-Ray",
      "File Formats": "MAX, OBJ, FBX, ZTL, STL"
    },
    pdf: "/assets/cv.pdf"
  },
  {
    id: "project-02",
    title: "3D Luxury Solid Walnut Dining Table & Chairs",
    category: "Furniture",
    software: ["3ds Max", "V-Ray", "AutoCAD", "KeyShot"],
    year: "2026",
    description: "Complete 3D furniture CAD model and photorealistic CGI visualization of an 8-seater solid walnut dining table featuring structural chamfered trestle legs, dining chairs, and wireframe topology preview.",
    services: ["3D Furniture CAD Modeling", "Polygon Wireframe Topology", "Photorealistic V-Ray Rendering", "Manufacturing Joinery CAD"],
    coverImage: diningTable3dImg,
    images: [
      diningTable3dImg,
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200&auto=format&fit=crop"
    ],
    process: [
      "2D parametric ergonomic layout and leg splay angle calculation in AutoCAD.",
      "High-precision polygonal 3D modeling in 3ds Max with realistic bevels on all edges.",
      "End-grain displacement wood mapping and natural daylight raytracing in V-Ray.",
      "Full 1:1 joinery fabrication drawings and cutlist generation for manufacturing."
    ],
    specs: {
      "Dimensions": "2600mm (L) x 1100mm (W) x 760mm (H)",
      "Timber": "Select American Black Walnut with satin oil finish",
      "Modeling Grid": "Clean Sub-D Quads with non-destructive modifier stack",
      "File Formats": "MAX, OBJ, FBX, 3DS, DWG, DXF"
    }
  },
  {
    id: "project-furniture-sofa",
    title: "Bespoke Curved Modular Bouclé Luxury Sofa",
    category: "Furniture",
    software: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop"],
    year: "2026",
    description: "Sculptural organic curved 4-seater luxury modular sofa in heavy cream bouclé textile, integrated continuous satin brushed brass plinth base, and ergonomic high-resilience foam layers.",
    services: ["Organic Curved CAD Modeling", "Bouclé Fabric Displacement Shader", "Foam Profile Drafting", "Studio Product CGI"],
    coverImage: luxuryCurvedSofaImg,
    images: [
      luxuryCurvedSofaImg
    ],
    process: [
      "Ergonomic seating angle and sweep curvature radius calculated in AutoCAD.",
      "Organic polygonal subdivision modeling with natural fabric seam piping in 3ds Max.",
      "PBR bouclé micro-displacement textile shader and warm studio lighting in V-Ray.",
      "Internal kiln-dried solid beech frame and foam layer engineering drawings."
    ],
    specs: {
      "Dimensions": "3200mm (L) x 1350mm (D) x 780mm (H) | Seat Height 430mm",
      "Upholstery": "High-Durability Heavy Cream Bouclé Wool (Martindale >60k)",
      "Plinth": "Concealed 50mm Recessed Brushed Satin Brass Base",
      "Core Construction": "FSC Solid Beech Frame + Elastic Webbing + HR40 Foam"
    }
  },
  {
    id: "project-03",
    title: "Precision AutoCAD 2D Drafting & 3D Table Joinery",
    category: "Furniture",
    software: ["AutoCAD", "3D CAD", "Drafting"],
    year: "2026",
    description: "Comprehensive AutoCAD technical drafting and 3D visualization package for luxury fluted marble pillar coffee and console tables, featuring orthogonal projections, millimeter dimensioning, screw fittings, and assembly joinery schematics.",
    services: ["2D Orthogonal Drafting", "Technical Dimensioning & Tolerancing", "Screw & Thread Detailing", "3D Assembly CAD Modeling"],
    coverImage: autocadDraftTableImg,
    images: [
      autocadDraftTableImg
    ],
    process: [
      "2D orthogonal multi-view projections (top view, front elevation, sections) drafted in AutoCAD.",
      "Exact geometric dimensioning (Ø90, R1.48, R0.1, 40mm, 75mm, 175mm) and thread pitch detailing.",
      "Design of single-cylinder round table and dual-cylinder console glass mounting plate fixtures.",
      "Synchronized CAD technical drawing layout sheet with photorealistic 3D visualization."
    ],
    specs: {
      "Products": "Round Glass Coffee Table (Ø90cm) & Dual-Pillar Console (175cm)",
      "Drafting Software": "AutoCAD (2D Orthogonal & Manufacturing Sheets)",
      "Base Structure": "Fluted Verde Marble Cylinder Columns & CNC Machined Metal Fittings",
      "Tolerance & Scale": "Millimeters (Metric Precision ±0.1mm, 1:1 Joint Scale)",
      "File Formats": "DWG, DXF, STEP, PDF Plot Sheets"
    }
  },
  {
    id: "project-04",
    title: "3D Fluted Marble & Smoked Glass Coffee Table Set",
    category: "Furniture",
    software: ["3ds Max", "KeyShot", "AutoCAD", "Photoshop"],
    year: "2026",
    description: "3D product rendering and polygonal modeling of luxury nesting coffee tables showing wireframe mesh topology transitioning into photorealistic fluted Nero Marquina marble pedestals and chamfered glass tops.",
    services: ["3D CAD Mesh Modeling", "PBR Marble Shaders & Dispersion", "Exploded Hardware CAD", "Marketing 4K CGI Stills"],
    coverImage: coffeeTable3dImg,
    images: [
      coffeeTable3dImg,
      autocadDraftTableImg
    ],
    process: [
      "Parametric spline generation for marble flute profiles in AutoCAD.",
      "Subdivision 3D mesh modeling with bevel chamfers and quad topology in 3ds Max.",
      "Custom marble PBR textures with subsurface scattering and real glass optical dispersion in KeyShot.",
      "Full hardware joinery detailing for metal disc adhesive mounting."
    ],
    specs: {
      "Dimensions": "Large: Ø900mm x 420mm (H) | Small: Ø600mm x 480mm (H)",
      "Materials": "Nero Marquina Marble, 10mm Toughened Smoked Glass, Brushed Brass",
      "Render Output": "4K High Resolution (3840x2160)",
      "File Formats": "MAX, KSP, FBX, OBJ, DWG"
    }
  },
  {
    id: "project-furniture-console",
    title: "Reeded Natural Oak & Calacatta Marble Fluted Console Table",
    category: "Furniture",
    software: ["AutoCAD", "3ds Max", "Corona", "KeyShot"],
    year: "2026",
    description: "Architectural entryway console table featuring CNC fluted solid white oak curved pillars, honed Calacatta Gold marble slab top, and satin brass trim shadow lines.",
    services: ["Console Millwork CAD", "CNC Fluting Toolpaths", "Marble Anchor Joint Schematics", "Photorealistic Product CGI"],
    coverImage: flutedConsoleTableImg,
    images: [
      flutedConsoleTableImg
    ],
    process: [
      "2D technical plan, elevation, and stone anchoring bracket details in AutoCAD.",
      "Precision 3D modeling of vertical fluted curves with micro-chamfers in 3ds Max.",
      "Raytraced Corona shaders for honed Calacatta marble veining and quarter-sawn oak.",
      "Detailed cutlist and CNC router vector profiles exported for fabrication."
    ],
    specs: {
      "Dimensions": "1600mm (L) x 400mm (W) x 820mm (H)",
      "Top Surface": "25mm Honed Calacatta Gold Natural Marble with eased edge",
      "Base Columns": "Solid European White Oak with CNC 20mm Fluted Reed Profile",
      "Metal Accents": "Brushed Satin Champagne Brass Plinth & Shadow Reveals"
    }
  },
  {
    id: "project-furniture-lamp",
    title: "Sculptural Brass & Frosted Glass Orb Designer Floor Lamp",
    category: "Furniture",
    software: ["3ds Max", "KeyShot", "AutoCAD"],
    year: "2026",
    description: "Modern architectural luminaire featuring a counterbalanced solid brass tubular armature, hand-blown triplex opal glass glowing spheres, and a weighted solid Nero Marquina marble pedestal.",
    services: ["Lighting Product CAD", "Optical Light Transmission Shader", "Internal Wiring Channel Drafting", "Studio Turntable CGI"],
    coverImage: designerFloorLampImg,
    images: [
      designerFloorLampImg
    ],
    process: [
      "Mechanical counterweight balance calculations and wiring raceway drafted in AutoCAD.",
      "High-precision NURBS/polygonal modeling of brass joints and glass globes in 3ds Max.",
      "Physical photometric IES light distribution and sub-surface scattering in KeyShot.",
      "Fabrication shop drawings for brass lathe turning and marble core drilling."
    ],
    specs: {
      "Dimensions": "1750mm (H) x 480mm (Base Ø320mm)",
      "Materials": "Hand-spun Solid Brass, Matte White Opal Glass, Nero Marquina Marble",
      "Lighting Spec": "Integrated 2700K Warm Dimming LED Arrays (CRI 98+)",
      "Weight": "18.5 kg weighted anti-tip base"
    }
  },
  {
    id: "project-furniture-side-table",
    title: "Sculptural Fluted Travertine & Smoked Bronze Side Tables",
    category: "Furniture",
    software: ["3ds Max", "V-Ray", "AutoCAD"],
    year: "2026",
    description: "Pair of architectural cylindrical side / end tables featuring fluted Roman travertine stone monolithic base and contrasting dark brushed oxidized bronze top disc with recessed shadow reveals.",
    services: ["Stone Furniture CAD", "CNC Milling Geometry", "PBR Travertine Texture Mapping", "Studio Lighting Renders"],
    coverImage: luxurySideTableImg,
    images: [
      luxurySideTableImg
    ],
    process: [
      "2D radial dimensioning and CNC stone lathe profile drafted in AutoCAD.",
      "3D modeling of undulating vertical flutes and bronze plate in 3ds Max.",
      "V-Ray physically accurate travertine pore displacement and bronze metallic shaders.",
      "Stone fabrication cut sheets and protective felt base details."
    ],
    specs: {
      "Dimensions": "Tall: Ø420mm x 550mm (H) | Short: Ø500mm x 450mm (H)",
      "Materials": "Natural Unfilled Honed Roman Travertine, Cast Smoked Bronze",
      "Tolerances": "CNC 5-Axis Stone Machining ±0.5mm",
      "File Formats": "MAX, OBJ, STEP, DWG"
    }
  },
  {
    id: "project-06",
    title: "3D Ergonomic Bouclé Armchair & Mesh Topology Study",
    category: "Furniture",
    software: ["3ds Max", "KeyShot", "V-Ray", "AutoCAD"],
    year: "2026",
    description: "3D polygonal furniture modeling and topology study for a modern ergonomic lounge armchair. Features clean subdivision surfaces, realistic fabric displacement, and studio turntable lighting.",
    services: ["3D Furniture CAD", "Polygon Topology Study", "Displacement Shaders", "Studio Turntable Stills"],
    coverImage: chair3dModelImg,
    images: [
      chair3dModelImg,
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop"
    ],
    process: [
      "2D ergonomic human factors study and proportion drafts in AutoCAD.",
      "High-precision subdivision polygonal modeling in 3ds Max with grid viewport checks.",
      "Shader creation, fabric displacement mapping, and realistic lighting in KeyShot.",
      "Exported production-ready 3D files and 2D joinery schematics."
    ],
    specs: {
      "Dimensions": "780mm (W) x 820mm (D) x 760mm (H)",
      "Materials": "FSC American Walnut, High-Density Polyurethane Foam, Bouclé Wool",
      "Modeling Topology": "Clean Quad Topology with Sub-D Smoothing",
      "File Formats": "MAX, OBJ, FBX, STEP, DWG"
    }
  },
  {
    id: "project-furniture-bar-cabinet",
    title: "Reeded Walnut & Illuminated Smoked Glass Bar Cabinet Credenza",
    category: "Furniture",
    software: ["AutoCAD", "3ds Max", "Corona", "KeyShot"],
    year: "2026",
    description: "Luxury modern cocktail bar cabinet featuring fluted dark walnut timber doors, micro-perforated brass mesh inserts, illuminated bronze smoked glass shelving, and precision push-to-open concealed hardware.",
    services: ["Custom Cabinetry CAD", "Concealed LED Wiring Detailing", "Hardware Fitting Specs", "Photorealistic Product Stills"],
    coverImage: luxuryBarCabinetImg,
    images: [
      luxuryBarCabinetImg
    ],
    process: [
      "2D internal bottle height zoning and stemware hanging rack drafted in AutoCAD.",
      "3D solid modeling of reeded timber door panels, brass mesh, and glass shelves in 3ds Max.",
      "Corona Render warm internal 2700K shelf lighting with realistic glass caustics.",
      "Detailed manufacturing shop drawings and Blum soft-close hardware cutouts."
    ],
    specs: {
      "Dimensions": "1200mm (W) x 500mm (D) x 1500mm (H)",
      "Materials": "American Walnut, Antique Brass Mesh, 8mm Smoked Bronze Glass",
      "Lighting": "Concealed 24V LED strip channels with magnetic reed door sensors",
      "Hardware": "Blum Tip-On Blumotion push-to-open hinges & undermount glides"
    }
  },
  {
    id: "project-05",
    title: "3D Digital Human Bust & Facial Sculpting Model",
    category: "3D Modeling",
    software: ["3ds Max", "ZBrush", "V-Ray", "Arnold"],
    year: "2026",
    description: "Detailed 3D facial sculpting and anatomical head modeling. Showcasing wireframe edge loops, clay viewport shader, high-frequency facial wrinkles, and cinematic lighting setup.",
    services: ["3D Facial Modeling", "Edge Loop Optimization", "Digital Clay Sculpting", "Cinematic Studio Renders"],
    coverImage: humanBustSculptImg,
    images: [
      humanBustSculptImg,
      characterModelImg
    ],
    process: [
      "Sculpted primary facial planes and cranial bone structure in ZBrush.",
      "Retopologized with clean animation-ready edge loops around eyes, mouth, and jaw.",
      "Broke down model into clay shader, wireframe overlay, and realistic subsurface render.",
      "Multi-light Arnold/V-Ray studio key, fill, and rim light positioning."
    ],
    specs: {
      "Edge Flow": "Animation-ready deformation loops",
      "Mesh Resolution": "Base mesh 18K polygons, Sub-D Level 4 (4.2M polys)",
      "Render Engine": "Arnold & V-Ray GPU raytracer",
      "File Formats": "MAX, OBJ, FBX, STL, ZTL"
    }
  },
  {
    id: "project-07",
    title: "Luxury Penthouse Living & Spatial Interior",
    category: "Interior",
    software: ["AutoCAD", "3ds Max", "KeyShot"],
    year: "2026",
    description: "Full interior layout design and 3D architectural visualization for a 3,200 sq.ft contemporary penthouse featuring bespoke wall paneling, indirect LED cove lighting, and open circulation.",
    services: ["Interior Concept Design", "2D Space Planning", "Custom Joinery Details", "3D Architectural Stills"],
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop"
    ],
    process: [
      "2D spatial zoning, circulation paths and electrical/lighting plans drafted in AutoCAD.",
      "3D architectural structural modeling including custom fluted wood paneling.",
      "Material assignment: honed Calacatta marble, matte bronze hardware, and smoked glass.",
      "High dynamic range interior lighting and post-production tone balancing."
    ],
    specs: {
      "Area": "3,200 sq.ft (297 sq.m)",
      "Ceiling Height": "3.4m clear height",
      "Lighting Concept": "Layered 2700K warm architectural indirect + accent downlights",
      "Drafting Standard": "ISO/ANSI Architectural Layering Standard"
    }
  },
  {
    id: "project-artcam-ambedkar",
    title: "Dr. B. R. Ambedkar 3D Portrait Relief STL & CNC Wood Carving File",
    category: "ArtCAM",
    software: ["ArtCAM", "Aspire", "ZBrush", "AutoCAD"],
    year: "2026",
    description: "High-precision 3D bas-relief digital sculpture and STL model of Dr. B. R. Ambedkar. Optimized for 3-axis CNC router engraving, wood carving, marble milling, and coin die minting.",
    services: ["3D Portrait Bas-Relief Sculpting", "STL Mesh Generation for CNC", "Z-Depth & Draft Angle Profiling", "CNC Toolpath Milling Simulation"],
    coverImage: ambedkarReliefImg,
    images: [
      ambedkarReliefImg
    ],
    process: [
      "Vector outline and feature contour alignment in ArtCAM from high-resolution portrait reference.",
      "Organic 3D shape creation, smooth facial blend sculpting, and draft angle optimization.",
      "Z-depth modulation calibrated to preserve facial likeness at shallow 12-25mm carving depths.",
      "Exported high-density STL, ArtCAM RLF, and 3D toolpath G-code with 0.15mm stepover."
    ],
    specs: {
      "Model Format": "STL (Watertight Mesh), ArtCAM RLF, OBJ, DXF",
      "Carving Dimensions": "Scalable from 150mm x 100mm to 1200mm x 800mm",
      "Z-Depth Range": "8mm - 35mm adjustable relief height",
      "Tooling Recommendation": "6mm Endmill Roughing + 1.5mm / 2mm Tapered Ball-Nose Finishing"
    }
  },
  {
    id: "project-artcam-birds",
    title: "Wild Birds & Botanical Foliage 3D Relief Wood Carving Model",
    category: "ArtCAM",
    software: ["ArtCAM", "Vectric Aspire", "JDpaint", "CorelDRAW"],
    year: "2026",
    description: "Intricate multi-layered 3D nature relief carving featuring waterfowl, songbirds, lush wild reeds, and floral berry foliage. Designed for luxury solid wood door panels and decorative wall art.",
    services: ["Multi-Layer Relief Modeling", "Feather & Leaf Micro-Texturing", "JDpaint / Aspire Compatibility", "Fine Detail CNC Toolpathing"],
    coverImage: birdsNatureReliefImg,
    images: [
      birdsNatureReliefImg
    ],
    process: [
      "Layered vector layout separating foreground ducks, midground foliage, and background stalks.",
      "Dynamic dome sculpting and feather texture displacement in ArtCAM.",
      "Under-cut avoidance check ensuring clean extraction on standard 3-axis CNC routers.",
      "Toolpath simulation using tapered ball-nose bit to retain delicate leaf veins."
    ],
    specs: {
      "File Formats": "STL, ArtCAM Model (.art / .rlf), Aspire (.crv3d), OBJ",
      "Recommended Substrate": "Teak Wood, Walnut, Rosewood, Mahogany, High-Density MDF",
      "Detail Level": "Micro-relief with 0.05mm geometric surface resolution",
      "CNC Compatibility": "3-Axis & 4-Axis CNC Wood Routers, Laser 3D Engravers"
    }
  },
  {
    id: "project-artcam-horse",
    title: "Dynamic Galloping Stallion 3D Bas-Relief CNC Vector & STL Panel",
    category: "ArtCAM",
    software: ["ArtCAM", "CorelDRAW", "AutoCAD", "CNC G-Code"],
    year: "2026",
    description: "Vibrant high-relief panel capturing a powerful galloping horse with flowing mane and muscle definition. Sculpted for CNC wood engraving, gold leaf gilding, and architectural paneling.",
    services: ["Anatomical Animal Relief Modeling", "Vector Contouring in CorelDRAW", "Z-Level Roughing & Finishing", "Golden Metallic Finish Visualization"],
    coverImage: horseDynamicReliefImg,
    images: [
      horseDynamicReliefImg
    ],
    process: [
      "Vector silhouette and dynamic energy curves drafted and smoothed in CorelDRAW.",
      "Imported into ArtCAM for 3D muscle relief buildup and flowing mane hair sculpting.",
      "Draft angle analysis preventing tool collision on steep transitions.",
      "Generated 3D CNC carving toolpaths with 3D raster finishing strategy."
    ],
    specs: {
      "Panel Size": "600mm x 800mm (Scalable to full wall murals)",
      "Relief Height": "22mm max depth with 6° minimum draft angle",
      "Compatibility": "ArtCAM 2008 / 2018, Aspire, Mach3, Syntec CNC Controllers",
      "Outputs": "STL 3D Mesh, ArtCAM RLF, NC / TAP / G-Code"
    }
  },
  {
    id: "project-artcam-headboard",
    title: "Classical Acanthus & Floral Lattice Carved Bed Headboard 3D Relief",
    category: "ArtCAM",
    software: ["ArtCAM", "3ds Max", "AutoCAD", "Vectric Aspire"],
    year: "2026",
    description: "Masterwork classical baroque bed headboard and footboard 3D relief carving models featuring crowned floral crests, swirling acanthus scrolls, and central lattice diamond grille work.",
    services: ["Classical Furniture Carving CAD", "Bespoke Millwork Reliefs", "Symmetrical Master Patterning", "Full-Scale CNC Shop Files"],
    coverImage: ornateHeadboardReliefImg,
    images: [
      ornateHeadboardReliefImg
    ],
    process: [
      "Precision orthogonal 2D CAD elevation and symmetrical axis alignment in AutoCAD.",
      "ArtCAM 3D shape generation for compound curved acanthus leaves and diamond weave.",
      "Multi-tool toolpathing: flat endmill clearing for lattice cavities + ball-nose carving for scrolls.",
      "Exported master STL relief models and 1:1 CNC milling vector templates."
    ],
    specs: {
      "Headboard Dimensions": "2050mm (L) x 900mm (H) x 45mm Thickness",
      "Footboard Dimensions": "2050mm (L) x 450mm (H) x 35mm Thickness",
      "Carving Style": "Neoclassical Baroque / Victorian Acanthus Filigree",
      "File Formats": "STL, RLF, OBJ, 3DM, DXF Cut Profile"
    }
  },
  {
    id: "project-artcam-baroque-frame",
    title: "Baroque Rococo Ornate Acanthus Gold Mirror & Picture Frame 3D Relief",
    category: "ArtCAM",
    software: ["ArtCAM", "CorelDRAW", "AutoCAD", "Aspire"],
    year: "2026",
    description: "Ornate Rococo rectangular mirror and picture frame featuring interlocking acanthus flourishes, corner cartouches, and continuous inner bead molding for CNC router carving and gilding.",
    services: ["Ornate Frame 3D Relief", "Continuous Vector Joinery", "Corner Symmetrical Mirroring", "CNC Router Production Files"],
    coverImage: baroqueFrameReliefImg,
    images: [
      baroqueFrameReliefImg
    ],
    process: [
      "Quarter-symmetry vector construction and node reduction in CorelDRAW and AutoCAD.",
      "ArtCAM 3D relief extrusion, smooth blending, and sculptural relief detailing.",
      "Inner rebate rabbit-cut CAD toolpath for mirror and backing glass seating.",
      "Pre-tested 3D machining simulation with stepover 0.18mm on high-density wood substrate."
    ],
    specs: {
      "Outer Dimensions": "1200mm (W) x 850mm (H) x 38mm (D)",
      "Inner Glass Opening": "900mm x 550mm with 12mm x 10mm rear rabbit rebate",
      "Relief Depth": "28mm 3D high-relief carving",
      "Outputs": "STL 3D Model, ArtCAM RLF, Aspire CRV3D, DXF Profiles"
    }
  },
  {
    id: "project-cnc-wave-wall",
    title: "Grand Double-Height Parametric CNC Fluted Wave Relief Wall",
    category: "CNC",
    software: ["AutoCAD", "Rhino/Grasshopper", "ArtCAM", "CNC 5-Axis"],
    year: "2026",
    description: "Monumental multi-tier architectural grand lobby feature wall with parametric fluid wave contours, deep-fluted acoustic channels, seamless interlocking panel joints, and integrated warm sconce grazing illumination.",
    services: ["Parametric Surface Modeling", "Large-Format CNC Toolpathing", "Multi-Panel Panelization & Nesting", "Architectural Sconce Integration CAD"],
    coverImage: cncWaveFeatureWallImg,
    images: [
      cncWaveFeatureWallImg
    ],
    process: [
      "Generated mathematical parametric wave spline algorithms with varying Z-depth amplitudes in Grasshopper.",
      "Divided massive 7.5m double-height wall into modular CNC tiles with tongue-and-groove hidden joints.",
      "Calibrated 5-axis ball-nose raster toolpathing with 0.25mm stepover for ultra-smooth surface finish.",
      "Detailed integrated wall sconce electrical conduit channels and structural steel subframe anchor points."
    ],
    specs: {
      "Total Wall Height": "7,500mm (H) x 4,200mm (W)",
      "Panel Substrate": "High-Density Moisture-Resistant MDF / Cast Polymer Stone Composite",
      "Wave Amplitude": "Fluted channel depth 35mm - 90mm dynamic variation",
      "CNC Machining Strategy": "Roughing with 12mm flat mill + Finishing with 6mm tapered ball-nose"
    }
  },
  {
    id: "project-cnc-sunburst-door",
    title: "Half-Sunburst Peacock Feather 3D CNC Wood Carved Door Panel",
    category: "CNC",
    software: ["ArtCAM", "AutoCAD", "CorelDRAW", "Vectric Aspire"],
    year: "2026",
    description: "Luxury solid teak main entrance door panel featuring an intricate radial half-sunburst mandala, peacock feather eye relief motifs, twisted ribbon guilloche scrolls, and micro-textured background.",
    services: ["Radial Symmetry 3D Sculpting", "Deep Relief Wood Carving CAD", "Micro-Stipple Background Toolpathing", "Master Entrance Joinery"],
    coverImage: cncSunburstDoorPanelImg,
    images: [
      cncSunburstDoorPanelImg
    ],
    process: [
      "2D radial coordinate drafting and concentric guideline calibration in AutoCAD.",
      "ArtCAM 3D bas-relief modeling for domed peacock ovals and twisted 3D rope moldings.",
      "Engineered high-frequency stipple texturing toolpath for contrasting shaded backgrounds.",
      "Exported multi-step G-Code program with tool-change scripts for 3-axis CNC router."
    ],
    specs: {
      "Door Dimensions": "2100mm (H) x 950mm (W) x 45mm (Thickness)",
      "Relief Depth": "Max 25mm 3D carved profile",
      "Material": "Seasoned Burma Teak / African Walnut Solid Wood",
      "Output Files": "STL Mesh, RLF, DXF Profile, G-Code (TAP/NC)"
    }
  },
  {
    id: "project-cnc-lotus-cranes",
    title: "Lotus Blooms & Cranes 3D Bas-Relief CNC Wood Carving Panel",
    category: "CNC",
    software: ["ArtCAM", "JDpaint", "AutoCAD", "CorelDRAW"],
    year: "2026",
    description: "Fine Asian-inspired architectural wood relief panel depicting graceful standing cranes amongst blooming lotus blossoms, undulating wide lily pads, water ripples, and an integrated carved outer frame.",
    services: ["Organic Relief Sculpture", "Botanical & Avian CNC Modeling", "Multi-Depth Roughing Calculations", "Artisan Wood Router Toolpaths"],
    coverImage: cncLotusCranesPanelImg,
    images: [
      cncLotusCranesPanelImg
    ],
    process: [
      "Multi-layered vector contour separation of wading birds, lotus petals, and water ripples in CorelDRAW.",
      "High-poly 3D relief sculpting in ArtCAM / JDpaint with anatomical feather and petal curvature.",
      "Optimized tool clearance passes to ensure clean vertical edges without wood grain tear-out.",
      "Created simulation verification rendering for client sign-off prior to CNC milling."
    ],
    specs: {
      "Panel Size": "1800mm (H) x 900mm (W) x 38mm thickness",
      "Carving Style": "Oriental Bas-Relief / High-Relief Botanical Sculpture",
      "Substrate": "Natural White Ash / Teak / Rosewood",
      "File Formats": "STL, OBJ, ArtCAM .art, Aspire .crv3d"
    }
  },
  {
    id: "project-cnc-jali-vector",
    title: "Precision Geometric Rosette & Arabesque CNC Laser Cut Jali Screen",
    category: "CNC",
    software: ["CorelDRAW", "AutoCAD", "ArtCAM"],
    year: "2026",
    description: "Complex architectural decorative perforated Jali screen panel featuring a central Greek key meander ring with nested geometric rosette medallion encased in a dense arabesque damask lattice cut-out.",
    services: ["2D CNC Laser & Plasma CAD", "Closed Vector Node Optimization", "Sheet Kerf Compensation", "DXF/DWG Export for Metal & Wood"],
    coverImage: cncJaliVectorPanelImg,
    images: [
      cncJaliVectorPanelImg
    ],
    process: [
      "Precision drafting of interlocking vector loops and Greek key meander in AutoCAD.",
      "Clean node optimization and closed contour verification in CorelDRAW to eliminate cutter stutter.",
      "Kerf compensation applied for 2mm laser nozzle and 3mm CNC router endmill bits.",
      "Full sheet nesting and lead-in placement for seamless burn-free piercing."
    ],
    specs: {
      "Standard Sheet Size": "2440mm x 1220mm (8ft x 4ft) Scalable",
      "Cutting Media": "Laser Cutting (Mild Steel, Stainless, Brass), CNC Router (MDF, WPC, ACP, Corian)",
      "Minimum Bridge Width": "8.5mm structural margin to prevent panel warping",
      "Export Formats": "DXF (R14/2000), DWG, CDR, AI, SVG, PDF"
    }
  },
  {
    id: "project-coreldraw-apparel",
    title: "Signage & Dynamic Apparel Vector Graphics Suite",
    category: "CorelDRAW",
    software: ["CorelDRAW Graphics Suite", "Adobe Illustrator", "Photoshop"],
    year: "2026",
    description: "High-impact vector artwork suite engineered for commercial signage, direct-to-garment apparel printing, screen printing color separations, and custom skateboard deck graphics.",
    services: ["Vector Apparel Graphics", "Screen Print Spot Color Separation", "Skateboard Deck Wrap Layout", "Large Format Signage Output"],
    coverImage: coreldrawApparelShowcaseImg,
    images: [
      coreldrawApparelShowcaseImg
    ],
    process: [
      "Crafted bezier curve vector character linework and flowing ornate ornamental elements in CorelDRAW.",
      "Engineered clean spot color traps and CMYK + Pantone palette configurations for silk-screen print presses.",
      "Generated scale apparel mockups and skateboard deck curve template wraps for client sign-off.",
      "Exported print-ready color-separated PDF, EPS, and high-res vector master files."
    ],
    specs: {
      "Print Capabilities": "Direct-to-Garment (DTG), Screen Printing (6-Color Spot Separation), Sublimation",
      "Vector Resolution": "Infinite Scalability (100% Vector Bezier Paths)",
      "Color Models": "Pantone Solid Coated, CMYK Process, RGB Digital Display",
      "Output Formats": "CDR (v24), AI, EPS, Print-Ready PDF (PDF/X-1a)"
    }
  },
  {
    id: "project-coreldraw-queen-vector",
    title: "Queen of Vector Multi-Armed Goddess Pop-Art Illustration",
    category: "CorelDRAW",
    software: ["CorelDRAW", "Corel PHOTO-PAINT", "Adobe Illustrator"],
    year: "2026",
    description: "Complex psychedelic pop-art vector artwork portraying a multi-armed digital deity holding graphic design tools and glowing vector anchor keys, backed by an intricate concentric sacred geometry mandala and flame wings.",
    services: ["Intricate Vector Artistry", "Complex Bezier Node Modeling", "Sacred Geometry Mandala CAD", "Hyper-Vibrant Color Shading"],
    coverImage: queenOfVectorArtworkImg,
    images: [
      queenOfVectorArtworkImg
    ],
    process: [
      "Precision drafting of multi-tiered concentric floral mandala geometry with polar symmetry tools.",
      "Custom vector hatching and anatomical shading using multi-stop interactive gradient mesh in CorelDRAW.",
      "Layered optical effects including glowing energy orbs, neon tool beacons, and dynamic fire contour vectors.",
      "Optimized 12,000+ vector nodes into organized layer hierarchies for rapid rendering and scaling."
    ],
    specs: {
      "Node Optimization": "Cleaned closed curves with zero duplicate vertices",
      "Art Style": "Cyber-Spiritual Pop-Art / Vector Maximalism",
      "Palette": "Neon Violet, Electric Turquoise, Sunset Gold, Magenta, and Deep Ultraviolet",
      "Export Formats": "Master CDR, Vector SVG, Encapsulated PostScript (EPS), 300DPI TIFF"
    }
  },
  {
    id: "project-coreldraw-luxury-brandmark",
    title: "Minimalist Geometric Interlocking Leaf Emblem & Brandmark",
    category: "CorelDRAW",
    software: ["CorelDRAW", "AutoCAD", "Illustrator"],
    year: "2026",
    description: "Sophisticated modern luxury brand identity mark featuring an interlocking continuous-line geometric leaf silhouette, designed for high-end organic brands, hot-stamp gold foil embossing, and laser engraving.",
    services: ["Geometric Brandmark Design", "Precision Golden Ratio Vectors", "Foil Stamping & Emboss Templates", "Corporate Identity System"],
    coverImage: luxuryLeafBrandmarkImg,
    images: [
      luxuryLeafBrandmarkImg
    ],
    process: [
      "Geometric construction using golden ratio arcs and optical line-weight balancing in CorelDRAW.",
      "Tested dual-variant executions: Textured embossed metallic gold foil on dark charcoal vs crisp black hairline on white.",
      "Calibrated minimum stroke widths and offset clearances for hot-foil stamping and brass die fabrication.",
      "Compiled comprehensive brand guidelines vector asset pack with multi-format exports."
    ],
    specs: {
      "Construction Geometry": "Golden Ratio circular arc tangent constraints",
      "Production Compatibility": "Hot Foil Stamping, CNC Brass Die Engraving, Screen Printing, Digital Icons",
      "Aspect Ratio": "1:1 Balanced Square Crest / Emblem",
      "File Package": "CDR, DXF (Die Cutting), AI, EPS, SVG, High-Res PNG"
    }
  },
  {
    id: "project-12",
    title: "Botanical Lotus Arch Master Suite & Fluted Paneling",
    category: "Interior",
    software: ["3ds Max", "Corona", "AutoCAD", "Photoshop"],
    year: "2026",
    description: "Serene master bedroom interior visualization featuring sage green arch wall panels with bespoke hand-painted lotus mural artwork, vertical fluted paneling, warm concealed LED cove lighting, and natural wood flooring.",
    services: ["Interior Architectural Visualization", "Bespoke Wall Mural Rendering", "Concealed LED Lighting CAD", "Custom Furniture Detailing"],
    coverImage: interiorLotusArchesImg,
    images: [
      interiorLotusArchesImg
    ],
    process: [
      "2D wall elevation with arched molding coordinates and electrical wiring drafted in AutoCAD.",
      "High-poly 3D modeling of vertical fluted battens, suspended globe pendants, and recessed cove trims in 3ds Max.",
      "Custom Corona physical shaders for textured bouclé bed fabric, matte sage lacquer, and oak flooring.",
      "Corona Sun and 3000K warm interior LED strip light balance with soft shadow falloff."
    ],
    specs: {
      "Room Dimensions": "4.8m x 4.2m (20.1 sq.m)",
      "Wall Finishes": "Sage Green Matte PU, Fluted MDF Battens, Custom Lotus Botanical Mural",
      "Lighting Index": "Warm 3000K Concealed Strip LEDs with CRI 95+ Spotlights",
      "File Formats": "MAX, Corona Scene, DWG, PDF Plot"
    }
  },
  {
    id: "project-13",
    title: "Modern Ochre & Olive Arch Accent Bedroom",
    category: "Interior",
    software: ["3ds Max", "V-Ray", "AutoCAD"],
    year: "2026",
    description: "Contemporary bedroom interior with sculpted curved mustard-yellow upholstered bed, olive-green recessed arch feature with textured wallpaper, fluted timber pilasters, and hanging cylinder bedside luminaires.",
    services: ["3D Spatial Modeling", "Color & Texture Palette Conception", "Upholstery Detail Modeling", "Photorealistic Raytracing"],
    coverImage: interiorMustardArchImg,
    images: [
      interiorMustardArchImg
    ],
    process: [
      "AutoCAD architectural layout plan and curved arch radius calibration.",
      "3D organic modeling of curved upholstered headboard and matching artistic print bench.",
      "V-Ray multi-layer materials including woven linen, sheer window drapes, and warm wood grain.",
      "Daylight simulation through sheer curtains with warm accent pendant fill lighting."
    ],
    specs: {
      "Room Dimensions": "4.5m x 4.0m",
      "Accent Colors": "Warm Ochre Yellow, Olive Drab, Natural Sand Beige",
      "Ceiling Feature": "Recessed Tray Ceiling with Concealed Warm Ambient LEDs",
      "Render Engine": "V-Ray Physical Raytracer"
    }
  },
  {
    id: "project-14",
    title: "Neoclassical Executive Master Suite with Glazed Study",
    category: "Interior",
    software: ["3ds Max", "Corona", "AutoCAD", "KeyShot"],
    year: "2026",
    description: "Transitional luxury master suite featuring a tufted headboard, circular brass illuminated geometric wall sculpture, acoustic fluted timber panels, bay window relaxation bench, and fluted glass sliding partition leading into a private home office.",
    services: ["Architectural Space Planning", "Glazed Partition Detailing", "Custom Joinery & Bay Bench CAD", "High-End CGI Stills"],
    coverImage: interiorStudySuiteImg,
    images: [
      interiorStudySuiteImg
    ],
    process: [
      "Comprehensive 2D plan zoning integrating bedroom, walk-in study, and bay window in AutoCAD.",
      "Subdivision 3D modeling of button-tufted headboard, fluted wood columns, and brass wall fixture.",
      "Complex material shaders with fluted reeded glass refraction and brushed antique brass.",
      "Daylight balancing from bay window combined with ambient chandelier and cove lighting."
    ],
    specs: {
      "Suite Area": "5.6m x 4.8m (26.8 sq.m)",
      "Features": "Acoustic Slatted Wall, Sliding Reeded Glass Partition, Built-in Bay Bench",
      "Ceiling Design": "Multi-tier Coffer Ceiling with Perimeter Cornice & Cove Lighting",
      "File Formats": "MAX, DWG, OBJ, Corona Archive"
    }
  },
  {
    id: "project-15",
    title: "Blush Oriental Chinoiserie Floral Master Suite",
    category: "Interior",
    software: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop"],
    year: "2026",
    description: "Romantic oriental floral chinoiserie master bedroom with detailed cherry blossom and songbird mural wallpaper, crown frieze architectural fluting, custom pink upholstered bed, matching floral bench, and panoramic natural daylighting.",
    services: ["Bespoke Interior Modeling", "Wallpaper Texture Mapping", "Millwork Crown Frieze CAD", "Photorealistic Daylight Rendering"],
    coverImage: interiorChinoiseriePinkImg,
    images: [
      interiorChinoiseriePinkImg
    ],
    process: [
      "2D millwork elevation drawings for upper fluted frieze band and built-in wardrobe in AutoCAD.",
      "High-poly 3D scene assembly in 3ds Max with precise UV mapping for panoramic wallpaper.",
      "PBR material setup for blush velvet upholstery, polished marble flooring, and brushed brass trims.",
      "V-Ray sun and sky system configured for crisp natural morning daylight."
    ],
    specs: {
      "Room Dimensions": "5.0m x 4.2m",
      "Style": "Contemporary Chinoiserie / Oriental Botanical",
      "Key Elements": "Hand-painted Silk Wallpaper, Suspended Oval Vanity Mirror, Fluted Frieze",
      "Render Output": "4K High Resolution CGI Still"
    }
  },
  {
    id: "project-16",
    title: "Contemporary Sculptural Wave 3D Relief & Gold Accent Suite",
    category: "Interior",
    software: ["3ds Max", "ZBrush", "Corona", "AutoCAD"],
    year: "2026",
    description: "High-end luxury master suite featuring a 3D sculptural wave-textured headboard relief wall adorned with hammered gold metallic discs, vertical brass dividers, floating cantilevered nightstand, and low-profile platform bed.",
    services: ["3D Parametric Wave Sculpting", "Architectural Metalwork Details", "Luxury Material Shaders", "Low-Key Atmospheric Lighting"],
    coverImage: interiorWaveGoldReliefImg,
    images: [
      interiorWaveGoldReliefImg
    ],
    process: [
      "Curved spline geometry and vertical brass screen partition drafted in AutoCAD.",
      "Parametric organic wave surface sculpting with Z-depth displacement in 3ds Max/ZBrush.",
      "Corona Render physical raytracing with warm focused spotlights skimming the relief wall.",
      "High-pile shag carpet fur displacement and matte micro-cement wall shaders."
    ],
    specs: {
      "Room Dimensions": "5.2m x 4.6m",
      "Feature Wall": "CNC Sculpted 3D Wave Wall with Brass Inlay & Hammered Gold Discs",
      "Lighting Concept": "Grazing Accent Downlights & Multi-Drop Glass Pendants",
      "File Formats": "MAX, Corona Scene, DWG, STL"
    }
  },
  {
    id: "project-17",
    title: "Symmetrical Classical Fluted Timber & Dual-Door Suite",
    category: "Interior",
    software: ["3ds Max", "V-Ray", "AutoCAD"],
    year: "2026",
    description: "Architectural symmetrical bedroom design with central vertical fluted timber wall panel, dual rich dark wood passage doors, classical arched moldings with vertical brass wall sconces, tufted cream headboard, and marble floor with textured area rug.",
    services: ["Symmetrical Space Planning", "Architectural Moulding Drafting", "Timber Panel Detailing", "Studio Raytraced Stills"],
    coverImage: interiorSymmetricalSuiteImg,
    images: [
      interiorSymmetricalSuiteImg
    ],
    process: [
      "Strict axial symmetry drafting for door openings, panel alignments, and electricals in AutoCAD.",
      "Subdivision 3D modeling of curved arch wall moldings and vertical fluted wood core in 3ds Max.",
      "V-Ray procedural timber shaders for dark walnut doors and warm fluted oak.",
      "Dual vertical linear sconce light distribution with soft ambient ceiling fan illumination."
    ],
    specs: {
      "Room Dimensions": "4.8m x 4.5m",
      "Design Philosophy": "Neoclassical Symmetry with Modern Fluted Wood Inset",
      "Wall Finishes": "Fluted Natural Oak, Classical White Wall Paneling, Smoked Walnut Doors",
      "File Formats": "MAX, V-Ray Scene, DWG, DXF"
    }
  }
];



import { jsPDF } from 'jspdf';

export interface CVData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  skills: string[];
  experience: {
    role: string;
    period: string;
    company: string;
    location: string;
    points: string[];
  }[];
  education: {
    institution: string;
    location: string;
    status: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
}

export const defaultCVData: CVData = {
  name: "IRFAN ALI",
  title: "AutoCAD & 3D Designer | Interior & Furniture Designer",
  location: "Jodhpur, India 342303",
  phone: "+91 8955110742",
  email: "irfan0412ali@gmail.com",
  summary: "AutoCAD Designer specializing in 2D and 3D modeling, project management, and design review. Delivered high-quality designs through effective troubleshooting and adherence to industry standards. Focused on producing accurate computer-aided designs and detailed plans that enhance project outcomes.",
  skills: [
    "AutoCAD design (2D & 3D)",
    "2D and 3D modeling & rendering",
    "CAD & CAM software",
    "Design review & quality check",
    "Design troubleshooting",
    "Technical documentation",
    "Project documentation & drawing sheets",
    "Project management",
    "Spreadsheet & schedule management"
  ],
  experience: [
    {
      role: "AUTOCAD DESIGNER",
      period: "01/2024 - Current",
      company: "Different living",
      location: "Jodhpur, India",
      points: [
        "Created detailed 2D and 3D designs using AutoCAD software for various residential and commercial projects.",
        "Collaborated with project managers to ensure design alignment with client requirements and aesthetic standards.",
        "Reviewed design plans for accuracy and strict compliance with industry standards, tolerances, and codes.",
        "Updated existing drawings to reflect revisions in design specifications, site surveys, and client feedback.",
        "Documented team work hours, BOM schedules, and submitted project execution reports."
      ]
    },
    {
      role: "AUTOCAD DESIGNER",
      period: "01/2023 - 07/2026",
      company: "Different living",
      location: "Jodhpur, India",
      points: [
        "Drafted precision 2D fabrication plans, CNC cut files, and technical orthogonal views.",
        "Prepared millwork, joinery, and furniture manufacturing layouts with exact tolerances."
      ]
    }
  ],
  education: [
    {
      institution: "PG College Osiyan",
      location: "Osian, Jodhpur",
      status: "Current"
    }
  ],
  languages: [
    { language: "Hindi", proficiency: "First Language" },
    { language: "English", proficiency: "Advanced (C1)" }
  ]
};

export function generateAndDownloadCV(data: CVData = defaultCVData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - (margin * 2);

  // Top Accent Bar (Luxury Deep Slate & Gold)
  doc.setFillColor(30, 41, 59); // slate-800
  doc.rect(0, 0, pageWidth, 8, 'F');
  doc.setFillColor(200, 155, 60); // Gold accent line
  doc.rect(0, 8, pageWidth, 1.5, 'F');

  let y = 22;

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(data.name, margin, y);

  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(200, 155, 60); // gold
  doc.text(data.title.toUpperCase(), margin, y);

  // Contact Info Box (Right / Below)
  y += 6;
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactLine = `${data.location}   |   ${data.phone}   |   ${data.email}`;
  doc.text(contactLine, margin, y);

  y += 3;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);

  y += 7;

  // Helper Section Header
  const renderSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(title.toUpperCase(), margin, y);
    
    // Gold subtle underline
    doc.setDrawColor(200, 155, 60);
    doc.setLineWidth(0.6);
    doc.line(margin, y + 1.5, margin + 35, y + 1.5);
    
    // Light gray rest of line
    doc.setDrawColor(241, 245, 249);
    doc.setLineWidth(0.3);
    doc.line(margin + 36, y + 1.5, margin + contentWidth, y + 1.5);

    y += 6;
  };

  // Section 1: Summary
  renderSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(data.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += (summaryLines.length * 4.2) + 4;

  // Section 2: Skills
  renderSectionHeader('Core Competencies & Technical Skills');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);

  const colWidth = contentWidth / 2;
  const halfLength = Math.ceil(data.skills.length / 2);
  const leftSkills = data.skills.slice(0, halfLength);
  const rightSkills = data.skills.slice(halfLength);

  const startSkillsY = y;
  leftSkills.forEach((skill, idx) => {
    doc.setFillColor(200, 155, 60);
    doc.circle(margin + 2, startSkillsY + (idx * 4.8) - 1, 0.8, 'F');
    doc.text(skill, margin + 5, startSkillsY + (idx * 4.8));
  });

  rightSkills.forEach((skill, idx) => {
    doc.setFillColor(200, 155, 60);
    doc.circle(margin + colWidth + 2, startSkillsY + (idx * 4.8) - 1, 0.8, 'F');
    doc.text(skill, margin + colWidth + 5, startSkillsY + (idx * 4.8));
  });

  y = startSkillsY + (Math.max(leftSkills.length, rightSkills.length) * 4.8) + 4;

  // Section 3: Experience
  renderSectionHeader('Professional Experience');
  data.experience.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(200, 155, 60);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, margin + contentWidth - periodWidth, y);

    y += 4;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company} — ${exp.location}`, margin, y);

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    exp.points.forEach((point) => {
      doc.setFillColor(148, 163, 184);
      doc.circle(margin + 2, y - 1, 0.7, 'F');
      const pointLines = doc.splitTextToSize(point, contentWidth - 6);
      doc.text(pointLines, margin + 5, y);
      y += (pointLines.length * 3.8) + 1;
    });

    y += 2.5;
  });

  y += 2;

  // Section 4: Education & Languages (Two Column)
  const dualColStart = y;
  
  // Left: Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.text('EDUCATION & TRAINING', margin, dualColStart);
  doc.setDrawColor(200, 155, 60);
  doc.setLineWidth(0.5);
  doc.line(margin, dualColStart + 1.5, margin + 25, dualColStart + 1.5);

  let eduY = dualColStart + 6;
  data.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.institution, margin, eduY);

    eduY += 3.8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`${edu.location} • ${edu.status}`, margin, eduY);
    eduY += 4;
  });

  // Right: Languages
  const rightColX = margin + colWidth;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.text('LANGUAGES', rightColX, dualColStart);
  doc.setDrawColor(200, 155, 60);
  doc.setLineWidth(0.5);
  doc.line(rightColX, dualColStart + 1.5, rightColX + 25, dualColStart + 1.5);

  let langY = dualColStart + 6;
  data.languages.forEach((lang) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(lang.language, rightColX, langY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`: ${lang.proficiency}`, rightColX + 15, langY);
    langY += 4;
  });

  // Footer
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(margin, pageHeight - 12, margin + contentWidth, pageHeight - 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text(`IRFAN ALI • AutoCAD & 3D Portfolio • Jodhpur, India • ${data.phone}`, margin, pageHeight - 7);
  doc.text('Verified Resume Sheet', margin + contentWidth - 30, pageHeight - 7);

  // Trigger Save
  doc.save('IRFAN_ALI_AutoCAD_Designer_Resume.pdf');
}

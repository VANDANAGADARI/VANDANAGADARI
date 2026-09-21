const portfolioData = {
  profile: {
    name: "Vandana Gadari",
    degree: "M.Tech Geoinformatics",
    institution: "National Institute of Technology Warangal",
    currentStatus: {
      workingOn: "Flood Modelling",
      interestedIn: "SAR · Web Application Development · Flood Modelling",
      exploring: "Role of AI in Geospatial Applications",
      lastUpdated: "August 2026"
    },
    summary: "I am an M.Tech student in Geoinformatics at the National Institute of Technology Warangal, with an academic background in Civil Engineering and a growing focus on geospatial technologies.       My interests lie at the intersection of GIS, Remote Sensing, SAR, WebGIS and flood modelling, where spatial data can be transformed into meaningful information and practical applications. I enjoy working across both the analytical and technological sides of geospatial science, from satellite-data processing and spatial analysis to interactive web-based applications.         I am currently working on flood modelling and exploring how AI can be integrated with geospatial technologies.",
    interests: ["GIS", "Remote Sensing", "SAR", "WebGIS", "Flood Modelling", "AI in Geospatial"]
  },

  education: [
    { level: "M.Tech", title: "M.Tech in Geoinformatics", institution: "National Institute of Technology Warangal", period: "2025–2027", result: "8.10", resultType: "Current CGPA" },
    { level: "B.Tech", title: "B.Tech in Civil Engineering", institution: "Jawaharlal Nehru Technological University, Hyderabad", period: "2019–2023", result: "7.38", resultType: "CGPA" },
    { level: "Intermediate", title: "MPC", institution: "Narayana Junior College", period: "2017-19", result: "98.2%", resultType: "Percentage" },
    { level: "SSC", title: "Secondary School Certificate", institution: "Carmel Convent High School(CCHS), Palkurthy", period: "2017", result: "9.5", resultType: "CGPA" }
  ],

  skills: [
    { category: "GIS & Spatial Analysis", items: ["QGIS", "ArcGIS Pro", "Google Earth Engine","SeaDAS"] },
    { category: "Remote Sensing", items: [ "Satellite Data Processing","SAR"] },
    { category: "Web & Programming", items: ["Python", "JavaScript", "HTML", "CSS"] },
    { category: "Hydrology & Modelling", items: ["HEC-HMS","HEC_RAS", "Flood Modelling"] },
    { category: "BIM & GeoBIM", items: ["BONSAI","REVIT", "GeoBIM", "BIM–GIS Integration"] }
  ],

  projects: [
    {
      title: "WebGIS Campus Navigation & Spatial Management System",
      category: "WebGIS",
      year: "2026",
      status: "Ongoing",
      description: "Interactive WebGIS for NIT Warangal with thematic layers, multiple basemaps, spatial visualization and campus navigation.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenLayers", "GeoJSON", "QGIS"],
      details: "A web-based spatial application for campus information, visualization and navigation. The project is designed to grow into a more complete WebGIS with routing and spatial database integration.",
      github: "https://github.com/VANDANAGADARI",
      live: ""
    },
    {
      title: "Integration of BIM and GIS for Infrastructure Planning",
      category: "GeoBIM",
      year: "2026",
      status: "Minor Project",
      description: "BIM–GIS workflow integrating building information with geospatial environments using open standards and 3D visualization.",
      technologies: ["Revit", "IFC", "QGIS", "ArcGIS Pro", "Bonsai", "BlenderBIM"],
      details: "Explored georeferencing, IFC-based interoperability and integration of BIM models within GIS environments for infrastructure planning.",
    },
    {
      title: "SST V/S Chrolophyll ",
      category: "Ocean Dynamics",
      year: "2026",
      status: "Summer Internship",
      description: "Current work focused on hydrological and flood-modelling workflows using geospatial data.",
      technologies: ["Google Earth Engine"],
      details: "This portfolio record is intentionally expandable. Detailed methodology, model setup, maps and reports can be attached here as the work develops.",
      github: "",
      live: ""
    }
  ],
internships: [
  {
    title: "CodeOrbit Tech",
    type: "Full Stack Development Internship",
    mode: "Online",
    duration: "August 2026 – September 2026",
    status: "Completed",
    description: "Two-month online internship focused on full-stack web development, including frontend and backend development.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Full Stack Development"
    ],
    details: "Worked on full-stack development tasks and web application development as part of the internship program.",
    certificate: "Internship/CodeOrbit/certificate.pdf"
  },

  {
    title: "INCOIS",
    type: "Dissertation / Internship",
    mode: "Hyderabad",
    duration: "27 May 2026 – Present",
    status: "Ongoing",
    description: "Ongoing geospatial research work at the Indian National Centre for Ocean Information Services.",
    technologies: [
      "GIS",
      "Remote Sensing",
      "Satellite Data",
      "Geospatial Analysis"
    ],
    details: "Working on geospatial research and analysis as part of the M.Tech dissertation.",
    certificate: ""
  },

  {
    title: "DRUTHADESIGNS",
    type: "Internship",
    mode: "",
    duration: "DATE",
    status: "Completed",
    description: "Internship experience at DRUTHADESIGNS.",
    technologies: [],
    details: "Internship details and work experience.",
    certificate: "Internship/DRUTHADESIGNS/certificate.pdf"
  },

  {
    title: "L&T",
    type: "Internship",
    mode: "",
    duration: "DATE",
    status: "Completed",
    description: "Internship experience at Larsen & Toubro.",
    technologies: [],
    details: "Internship details and work experience.",
    certificate: "Internship/L&T/certificate.pdf"
  }
],
  maps: [
    { title: "LULC Change Detection", subtitle: "Change in Land Use Land Cover 0f AOI using ML Algorithms in GEE ", image: "assets/images/maps/flood-inundation.jpg", category: "Remote Sensing" },
    { title: "SST-Chl_a Map in SEADAS", subtitle: "MODIS for Derived Ocean Parameters", image: "assets/images/SEADAS_Chl_a_Map.jpeg", category: "Remote Sensing" },
    { title: "NDVI Map", subtitle: "Vegetation index analysis", image: "assets/images/maps/ndvi.jpg", category: "Remote Sensing" }
  ],

  documents: [

    { title: "Larsen & Toubro,Mumbai", type: "Internship", description: "01/06/2022-11/0/2022-Thane Creek Bridge III, Navi Mumbai", file: "assets/documents/L&T.pdf" },
    { title: "Dhrutha Designs,Hyderabad ", type: "Internship",description: "17/05/2022-23/05/2022-Highway Geometric Design", file: "assets/documents/Dhrutha_Designs.pdf" }
  ],

  certifications: [
    {
    
      title: "Harnessing NISAR: Next-Generation Radar Observations for Earth Applications ",
      issuer: "NASA’s Applied Remote Sensing Training (ARSET) Program",
      date: "July 2, 9, & 16, 2026",
      description: "NISAR( NASA-ISRO SAR)",
      file: "assets/documents/ARSET CERTIFICATE - NISAR_533.pdf"
    }
  ],

  contact: {
    email: "gadarivandana328@gmail.com",
    github: "https://github.com/VANDANAGADARI",
    linkedin: "",
    orcid: "https://orcid.org/0009-0003-3500-8424",
    openstreetmap: "https://www.openstreetmap.org/user/VandanaGadari",
    institution: "NIT Warangal",
    location: "Warangal, India"
  },

  quickLinks: [
    { title: "About Me", description: "Background, interests and direction.", section: "about", icon: "▱" },
    { title: "Education", description: "Academic journey and qualifications.", section: "education", icon: "◇" },
    { title: "Projects", description: "Selected geospatial projects and applications.", section: "projects", icon: "▣" },
    { title: "Internship", description: "Current industrial experience and work.", section: "internship", icon: "◈" },
    { title: "Skills", description: "Tools and technologies I work with.", section: "skills", icon: "&lt;/&gt;" },
    { title: "Maps Gallery", description: "Maps and spatial outputs generated through analysis.", section: "maps", icon: "⌖" },
    { title: "Documents", description: "Resume and certifications.", section: "documents", icon: "▤" },
    { title: "Contact", description: "Professional contact and opportunities.", section: "contact", icon: "✉" }
  ]
};

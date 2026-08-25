const experience = [
  { period: "May — Aug 2026", role: "Quality Engineering Intern", company: "MHI Canada Aerospace", copy: "Connected computer engineering with aerospace manufacturing through quality automation, production reporting and root-cause investigations.", wins: ["Built reporting workflows with Power Automate, PowerShell, Excel and Outlook.", "Automated I-TAG processing to improve speed, consistency and traceability.", "Supported 5-Why reviews, aircraft inspections and non-conformance investigations."] },
  { period: "Jan — May 2026", role: "Engineering Student", company: "Fisheries and Oceans Canada", copy: "Supported real-property engineering through technical data validation, CAD documentation and process standardization.", wins: ["Validated infrastructure datasets used for technical decisions.", "Produced and revised AutoCAD site plans and documentation.", "Developed standardized templates and guidance that improved workflow efficiency by approximately 40%."] },
];

const projects = [
  { number: "01", type: "Aerospace automation", title: "Automated Bombardier Non-Conformance Email Reporting System", copy: "Automated a multi-step reporting process that organized aircraft non-conformance data, updated tracking workbooks and prepared formatted Outlook drafts.", tags: ["Power Automate", "PowerShell", "Excel", "HTML"], accent: "blue" },
  { number: "02", type: "Embedded systems", title: "IoT-Based Smart Home Automation System", copy: "Created a connected home-control prototype using a microcontroller, Wi-Fi communication and a relay module to control electrical devices remotely.", tags: ["Arduino UNO", "ESP8266", "C++", "IoT"], accent: "cyan" },
  { number: "03", type: "Mechanical design", title: "3D-Printed Mechanical Device Design", copy: "Designed and prototyped an original Kinder Egg Surprise toy using CAD software, featuring a gear-driven galloping mechanism, meeting 100% of project safety and size constraints with a team of 5.", tags: ["CAD", "3D Printing", "Mechanical Design", "Team of 5"], accent: "violet" },
  { number: "04", type: "Autonomous systems", title: "Autonomous Vehicle Design", copy: "Collaborated on an autonomous vehicle concept, applying structured engineering design, prototyping and team-based problem solving.", tags: ["Prototyping", "Autonomous Systems", "Design", "Teamwork"], accent: "amber" },
];

const skills = [
  { title: "Programming", items: ["Python", "C", "C++", "Java", "JavaScript", "VHDL"] },
  { title: "Automation & Data", items: ["Power Automate", "PowerShell", "SQL", "Power BI", "Excel", "Office Scripts"] },
  { title: "Engineering Tools", items: ["Git & GitHub", "VS Code", "AutoCAD", "Jira", "SharePoint", "Arduino"] },
];

function Arrow() { return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>; }

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Lance Baysa home"><span>LB</span><strong>Lance Baysa</strong></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a></nav>
      <a className="nav-contact" href="mailto:your.email@example.com">Let&apos;s talk <Arrow /></a>
    </header>

    <section className="hero" id="top">
      <div className="grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span /> Computer Engineering Co-op Student Studying at the University of Guelph</p>
        <h1>Greetings, and welcome to <em>my website!</em></h1>
        <p className="hero-lede">My name is Lance Mikolo Baysa, and I am a fourth-year Computer Engineering student at the University of Guelph with two professional engineering co-op terms spanning aerospace quality, automation, data analysis and technical design.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <Arrow /></a><a className="button secondary" href="#contact">Contact me</a></div>
        <div className="hero-proof"><div><strong>2</strong><span>Engineering<br/>co-op terms</span></div><div><strong>5×</strong><span>Dean&apos;s Honours<br/>List</span></div><div><strong>40%</strong><span>Reported workflow<br/>improvement</span></div></div>
      </div>
      <div className="hero-art" aria-label="Neon portrait of Lance Mikolo Baysa">
        <img src="/lance-neon-portrait.png" alt="Neon portrait of Lance Mikolo Baysa" />
      </div>
    </section>

    <section className="section intro" id="about"><div className="section-label">01 / About</div><div><p className="statement">Background and Long-Term Goal</p><div className="intro-columns"><p>I&apos;m pursuing a B.Eng. in Computer Engineering (Co-op) at the University of Guelph. I enjoy working where software, data and physical engineering systems meet.</p><p>My long-term goal is to apply artificial intelligence and data analytics to industrial environments—building intelligent automation, predictive quality tools and better decision-making systems.</p></div></div></section>

    <section className="section dark" id="experience">
      <Heading number="02" label="Experience" title={<>Experience that<br/>ships real results.</>} copy="Two engineering co-op terms gave me hands-on experience solving real problems in aerospace manufacturing and federal infrastructure." />
      <div className="timeline">{experience.map((item,index)=><article className="experience" key={item.company}><div className="marker">0{index+1}</div><div className="experience-meta"><span>{item.period}</span><strong>{item.company}</strong></div><div className="experience-body"><h3>{item.role}</h3><p>{item.copy}</p><ul>{item.wins.map(win=><li key={win}>{win}</li>)}</ul></div></article>)}</div>
    </section>

    <section className="section projects" id="projects">
      <Heading number="03" label="Selected work" title={<>Projects built around<br/>real problems.</>} copy="Each project combines technical thinking with a practical outcome—from workplace automation to embedded systems." />
      <div className="project-grid">{projects.map(project=><article className={`project-card ${project.accent}`} key={project.title}><div className="project-top"><span>{project.number}</span><small>{project.type}</small></div><div className="project-art"><div className="grid-lines"/><strong>{project.number}</strong></div><h3>{project.title}</h3><p>{project.copy}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div>
    </section>

    <section className="section dark" id="skills">
      <Heading number="04" label="Capabilities" title={<>Tools I use to turn<br/>ideas into systems.</>} copy="A broad technical foundation across programming, automation, engineering software and data-driven problem solving." />
      <div className="skill-grid">{skills.map((group,index)=><article key={group.title}><span>0{index+1}</span><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>

    <section className="section education"><div className="education-card"><span className="section-label">05 / Education</span><div className="education-main"><div><p>University of Guelph</p><h2>Bachelor of Engineering<br/><em>Computer Engineering — Co-op</em></h2></div><div className="year">Expected<strong>2027</strong></div></div><div className="coursework"><span>Selected achievements</span><p>Dean&apos;s Honours List · Object-Oriented Programming: 92% · Large-Scale Software Architecture: 90% · Microcomputer Interfacing: 87%</p></div></div></section>

    <section className="contact" id="contact"><p className="eyebrow"><span/> Open to engineering opportunities</p><h2>Let&apos;s build something<br/><em>worth talking about.</em></h2><p>I&apos;m interested in software development, AI, data analytics, embedded systems and engineering automation.</p><div className="contact-links"><a href="mailto:your.email@example.com">Email me <Arrow/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow/></a></div></section>
    <footer><div className="brand"><span>LB</span><strong>Lance Baysa</strong></div><p>Designed &amp; built with purpose.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}

function Heading({number,label,title,copy}:{number:string;label:string;title:React.ReactNode;copy:string}) { return <div className="section-heading"><div><span className="section-label">{number} / {label}</span><h2>{title}</h2></div><p>{copy}</p></div>; }

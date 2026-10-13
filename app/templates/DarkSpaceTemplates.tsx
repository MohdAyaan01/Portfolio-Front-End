'use client';

type Experience = {
    companyName: string;
    designation: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
};
type Education = {
    certificateName: string;
    institute: string;
    startDate: string;
    endDate: string;
    description: string;
};
type PortfolioData = {
    fullName: string;
    tagline: string;
    professionalBio: string;
    skills: {
        Frontend: string[];
        Backend: string[];
        Tools: string[];
        'Cloud/DevOps': string[];
    };
    projects: { title: string; description: string; techStack: string[] }[];
    experience: Experience[];
    education: Education[];
    contactInfo: { email: string; linkedin: string; github: string };
};

export default function DarkSpaceTemplate({ data }: { data: PortfolioData }) {
    const allSkills = [
        ...data.skills.Frontend,
        ...data.skills.Backend,
        ...data.skills.Tools,
        ...data.skills['Cloud/DevOps'],
    ];

    return (
        <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", background: '#060606', color: '#e5e5e5', minHeight: '100vh', position: 'relative' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
                .ds-stars { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.18) 0%, transparent 100%), radial-gradient(1px 1px at 75% 10%, rgba(255,255,255,0.14) 0%, transparent 100%), radial-gradient(1px 1px at 45% 65%, rgba(255,255,255,0.12) 0%, transparent 100%), radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.10) 0%, transparent 100%); background-size: 250px 250px, 400px 400px, 300px 300px, 350px 350px; }
                @keyframes ds-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .ds-ticker-track { display: flex; animation: ds-ticker 25s linear infinite; white-space: nowrap; }
                @keyframes ds-fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
                .ds-hero { animation: ds-fadeUp 0.9s ease both; }
                .ds-card { border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px; background: rgba(255,255,255,0.02); transition: border-color 0.3s, background 0.3s; }
                .ds-card:hover { border-color: rgba(249,115,22,0.35); background: rgba(249,115,22,0.03); }
                .ds-tag { display: inline-block; padding: 4px 12px; border: 1px solid rgba(249,115,22,0.4); border-radius: 9999px; font-size: 10px; font-weight: 700; color: #f97316; background: rgba(249,115,22,0.06); text-transform: uppercase; letter-spacing: 0.06em; }
                .ds-nav-link { color: rgba(255,255,255,0.45); text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.2s; }
                .ds-nav-link:hover { color: #fff; }
                .ds-contact-card { transition: transform 0.25s; }
                .ds-contact-card:hover { transform: translateY(-4px); }
            `}</style>

            <div className="ds-stars" />

            <nav style={{ position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(6,6,6,0.85)', backdropFilter: 'blur(20px)' }}>
                <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white' }}>{data.fullName}</span>
                <div style={{ display: 'flex', gap: 36 }}>
                    {['Experience', 'Projects', 'Education', 'Contact'].map(item => (
                        <a key={item} className="ds-nav-link" href={`#ds-${item.toLowerCase()}`}>{item}</a>
                    ))}
                </div>
            </nav>
            
            <section className="ds-hero" style={{ position: 'relative', zIndex: 1, padding: '110px 60px 80px' }}>
                <div style={{ display: 'inline-block', padding: '5px 14px', border: '1px solid #f97316', borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f97316', marginBottom: 28 }}>
                    {data.tagline}
                </div>
                <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 0.88, letterSpacing: '-0.03em', color: 'white', marginBottom: 44 }}>
                    {data.fullName.split(' ').map((word, i) => <span key={i} style={{ display: 'block' }}>{word}</span>)}
                </h1>
                <p style={{ maxWidth: 500, lineHeight: 1.75, fontSize: 14, color: 'rgba(255,255,255,0.48)', borderLeft: '2px solid #f97316', paddingLeft: 22 }}>
                    {data.professionalBio}
                </p>
            </section>
            <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '13px 0', background: 'rgba(249,115,22,0.025)' }}>
                <div className="ds-ticker-track">
                    {[...allSkills, ...allSkills].map((skill, i) => (
                        <span key={i} style={{ padding: '0 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: i % 3 === 0 ? '#f97316' : 'rgba(255,255,255,0.28)' }}>
                            {skill}&nbsp;&nbsp;<span style={{ color: '#f97316' }}>?</span>
                        </span>
                    ))}
                </div>
            </div>
            <section id="ds-experience" style={{ position: 'relative', zIndex: 1, padding: '100px 60px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f97316', marginBottom: 10 }}>� Experience</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: 'white', marginBottom: 56 }}>EXPERIENCE</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {data.experience.map((exp, i) => (
                        <div key={i} className="ds-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                                <div>
                                    <h3 style={{ fontSize: 20, fontWeight: 700, textTransform: 'uppercase', color: 'white' }}>{exp.companyName}</h3>
                                    <p style={{ color: '#f97316', fontSize: 13, fontWeight: 600, marginTop: 6 }}>{exp.designation}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span className="ds-tag">{exp.role}</span>
                                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 10, fontWeight: 600 }}>{exp.startDate} � {exp.endDate}</p>
                                </div>
                            </div>
                            <p style={{ marginTop: 18, fontSize: 13, lineHeight: 1.85, color: 'rgba(255,255,255,0.42)' }}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="ds-projects" style={{ position: 'relative', zIndex: 1, padding: '0 60px 100px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f97316', marginBottom: 10 }}>� Projects</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: 'white', marginBottom: 56 }}>PROJECTS</h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {data.projects.map((project, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, padding: '44px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div>
                                <h3 style={{ fontSize: 20, fontWeight: 700, textTransform: 'uppercase', color: 'white', marginBottom: 18 }}>{project.title}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {project.techStack.map((tech, j) => <span key={j} className="ds-tag">{tech}</span>)}
                                </div>
                            </div>
                            <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.45)', alignSelf: 'center' }}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="ds-education" style={{ position: 'relative', zIndex: 1, padding: '0 60px 100px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f97316', marginBottom: 10 }}>� Education</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: 'white', marginBottom: 56 }}>EDUCATION</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {data.education.map((edu, i) => (
                        <div key={i} className="ds-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                            <div>
                                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'white' }}>{edu.certificateName}</h3>
                                <p style={{ color: '#f97316', fontSize: 13, fontWeight: 600, marginTop: 6 }}>{edu.institute}</p>
                                {edu.description && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', marginTop: 8, lineHeight: 1.6 }}>{edu.description}</p>}
                            </div>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontWeight: 600, whiteSpace: 'nowrap' }}>{edu.startDate} � {edu.endDate}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section style={{ position: 'relative', zIndex: 1, padding: '0 60px 100px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f97316', marginBottom: 10 }}>� Skills</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: 'white', marginBottom: 56 }}>SKILLS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                    {Object.entries(data.skills).map(([category, items]) => (
                        <div key={category} className="ds-card">
                            <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f97316', fontWeight: 700, marginBottom: 16 }}>{category}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {items.map((skill, i) => (
                                    <span key={i} style={{ padding: '5px 14px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.08)', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.65)', background: 'rgba(255,255,255,0.03)' }}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id="ds-contact" style={{ position: 'relative', zIndex: 1, padding: '0 60px 120px', textAlign: 'center' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f97316', marginBottom: 10 }}>� Contact</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: '#f97316', marginBottom: 12 }}>CONTACT</h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', marginBottom: 52, fontStyle: 'italic' }}>{"Let's build something epic"}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
                    {[
                        { label: 'Email', value: data.contactInfo.email, href: `mailto:${data.contactInfo.email}` },
                        { label: 'GitHub', value: data.contactInfo.github, href: data.contactInfo.github.startsWith('http') ? data.contactInfo.github : `https://github.com/${data.contactInfo.github}` },
                        { label: 'LinkedIn', value: data.contactInfo.linkedin, href: data.contactInfo.linkedin.startsWith('http') ? data.contactInfo.linkedin : `https://linkedin.com/in/${data.contactInfo.linkedin}` },
                    ].map(({ label, value, href }) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <div className="ds-card ds-contact-card" style={{ minWidth: 210, textAlign: 'center', cursor: 'pointer' }}>
                                <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>{label}</p>
                                <p style={{ fontSize: 13, color: 'white', fontWeight: 600, wordBreak: 'break-all' }}>{value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
                BUILT WITH PRO FOLIO X
            </div>
        </div>
    );
}

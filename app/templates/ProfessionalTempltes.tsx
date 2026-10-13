'use client';

import React from 'react';

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

export default function ProfessionalTemplate({ data }: { data: PortfolioData }) {
    const totalSkills = 
        (data.skills?.Frontend?.length || 0) +
        (data.skills?.Backend?.length || 0) +
        (data.skills?.Tools?.length || 0) +
        (data.skills?.['Cloud/DevOps']?.length || 0);

    return (
        <div style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            background: '#090d16',
            color: '#f1f5f9',
            minHeight: '100vh',
            position: 'relative',
            overflowX: 'hidden'
        }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

                .pf-grid-bg {
                    position: fixed;
                    inset: 0;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 48px 48px;
                    pointer-events: none;
                    z-index: 0;
                }

                .pf-glow-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(120px);
                    pointer-events: none;
                    z-index: 0;
                }

                .pf-nav-blur {
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    background: rgba(9, 13, 22, 0.82);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .pf-card {
                    background: rgba(15, 23, 42, 0.65);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    backdrop-filter: blur(8px);
                }

                .pf-card:hover {
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(30, 41, 59, 0.6);
                    transform: translateY(-3px);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(99, 102, 241, 0.15);
                }

                .pf-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 14px;
                    border-radius: 9999px;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    background: rgba(99, 102, 241, 0.1);
                    border: 1px solid rgba(99, 102, 241, 0.25);
                    color: #818cf8;
                }

                .pf-tag {
                    display: inline-block;
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 11px;
                    font-weight: 500;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #94a3b8;
                    transition: all 0.2s;
                }

                .pf-tag:hover {
                    background: rgba(99, 102, 241, 0.15);
                    color: #e0e7ff;
                    border-color: rgba(99, 102, 241, 0.3);
                }

                .pf-timeline-line {
                    position: absolute;
                    left: 20px;
                    top: 24px;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #6366f1 0%, rgba(99, 102, 241, 0.1) 100%);
                }

                .pf-btn-primary {
                    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
                    color: #ffffff;
                    font-weight: 600;
                    padding: 10px 22px;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: all 0.25s;
                    box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .pf-btn-primary:hover {
                    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.55);
                    transform: translateY(-2px);
                }

                .pf-btn-secondary {
                    background: rgba(255, 255, 255, 0.05);
                    color: #e2e8f0;
                    font-weight: 600;
                    padding: 10px 22px;
                    border-radius: 10px;
                    text-decoration: none;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.2s;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .pf-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    border-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>

            <div className="pf-grid-bg" />
            <div className="pf-glow-blob" style={{ top: '-10%', left: '15%', width: 500, height: 500, background: 'rgba(99, 102, 241, 0.12)' }} />
            <div className="pf-glow-blob" style={{ top: '40%', right: '5%', width: 450, height: 450, background: 'rgba(14, 165, 233, 0.08)' }} />

            {/* Navigation Bar */}
            <header className="pf-nav-blur" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '16px 32px' }}>
                <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{
                            width: 36, height: 36, borderRadius: 10,
                            background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 800, color: '#fff', fontSize: 16,
                            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                        }}>
                            {data.fullName?.charAt(0) || 'P'}
                        </div>
                        <div>
                            <span style={{ fontWeight: 700, fontSize: 15, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                                {data.fullName}
                            </span>
                            <span style={{ display: 'block', fontSize: 11, color: '#64748b' }}>
                                Portfolio
                            </span>
                        </div>
                    </div>

                    <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#pf-${item.toLowerCase()}`}
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: '#94a3b8',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <a href={`mailto:${data.contactInfo.email}`} className="pf-btn-primary" style={{ padding: '8px 18px', fontSize: 12 }}>
                        Hire Me
                    </a>
                </div>
            </header>

            <main style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
                {/* Hero Section */}
                <section id="pf-about" style={{ padding: '80px 0 60px' }}>
                    <div style={{ maxWidth: 840 }}>
                        <div className="pf-badge" style={{ marginBottom: 20 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                            Available for Technical Roles & Consulting
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.12,
                            marginBottom: 20,
                            color: '#ffffff'
                        }}>
                            Hi, I'm <span style={{
                                background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>{data.fullName}</span>.
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                            fontWeight: 500,
                            color: '#94a3b8',
                            lineHeight: 1.5,
                            marginBottom: 24
                        }}>
                            {data.tagline}
                        </p>

                        <p style={{
                            fontSize: '1.02rem',
                            color: '#cbd5e1',
                            lineHeight: 1.75,
                            maxWidth: 720,
                            marginBottom: 36
                        }}>
                            {data.professionalBio}
                        </p>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 54 }}>
                            <a href="#pf-projects" className="pf-btn-primary">
                                View Selected Works
                            </a>
                            <a
                                href={data.contactInfo.github?.startsWith('http') ? data.contactInfo.github : `https://github.com/${data.contactInfo.github}`}
                                target="_blank"
                                rel="noreferrer"
                                className="pf-btn-secondary"
                            >
                                GitHub Profile
                            </a>
                            <a
                                href={data.contactInfo.linkedin?.startsWith('http') ? data.contactInfo.linkedin : `https://linkedin.com/in/${data.contactInfo.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="pf-btn-secondary"
                            >
                                LinkedIn
                            </a>
                        </div>

                        {/* Metrics Bar */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                            gap: 16,
                            padding: '24px',
                            borderRadius: 16,
                            background: 'rgba(15, 23, 42, 0.45)',
                            border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                                    {data.projects?.length || 0}+
                                </p>
                                <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0 0', fontWeight: 500 }}>
                                    Production Projects
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                                    {data.experience?.length || 0}
                                </p>
                                <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0 0', fontWeight: 500 }}>
                                    Professional Roles
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                                    {totalSkills}+
                                </p>
                                <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0 0', fontWeight: 500 }}>
                                    Technologies Mastered
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: 800, color: '#38bdf8', margin: 0 }}>
                                    100%
                                </p>
                                <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0 0', fontWeight: 500 }}>
                                    Engineering Quality
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                {data.experience && data.experience.length > 0 && (
                    <section id="pf-experience" style={{ padding: '60px 0' }}>
                        <div style={{ marginBottom: 36 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                                Career Timeline
                            </p>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                                Work Experience
                            </h2>
                        </div>

                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            {data.experience.map((exp, idx) => (
                                <div key={idx} className="pf-card" style={{ padding: 28 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                                        <div>
                                            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                                                {exp.role || exp.designation}
                                            </h3>
                                            <p style={{ fontSize: 14, color: '#818cf8', fontWeight: 600, marginTop: 4 }}>
                                                {exp.companyName} {exp.designation && exp.role ? `• ${exp.designation}` : ''}
                                            </p>
                                        </div>
                                        <div className="pf-tag" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                                            {exp.startDate} – {exp.endDate}
                                        </div>
                                    </div>
                                    <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                <section id="pf-projects" style={{ padding: '60px 0' }}>
                    <div style={{ marginBottom: 36 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                            Featured Works
                        </p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                            Selected Projects
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: 24
                    }}>
                        {data.projects?.map((project, idx) => (
                            <div key={idx} className="pf-card" style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: 8,
                                            background: 'rgba(56, 189, 248, 0.12)',
                                            color: '#38bdf8',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 700, fontSize: 13
                                        }}>
                                            0{idx + 1}
                                        </div>
                                        <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>
                                            Featured
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', marginBottom: 10, lineHeight: 1.3 }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.6, marginBottom: 20 }}>
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                        {project.techStack?.map((tech, i) => (
                                            <span key={i} className="pf-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="pf-skills" style={{ padding: '60px 0' }}>
                    <div style={{ marginBottom: 36 }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                            Technical Arsenal
                        </p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                            Skills & Proficiencies
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 20
                    }}>
                        {Object.entries(data.skills || {}).map(([category, items]) => (
                            <div key={category} className="pf-card" style={{ padding: 24 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1' }} />
                                    <h4 style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', margin: 0, textTransform: 'capitalize' }}>
                                        {category}
                                    </h4>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {items.map((skill, i) => (
                                        <span key={i} className="pf-tag" style={{ fontSize: 12, padding: '5px 12px' }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                {data.education && data.education.length > 0 && (
                    <section id="pf-education" style={{ padding: '60px 0' }}>
                        <div style={{ marginBottom: 36 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                                Academic Background
                            </p>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                                Education & Certifications
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
                            {data.education.map((edu, idx) => (
                                <div key={idx} className="pf-card" style={{ padding: 26 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                                        <div>
                                            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                                                {edu.certificateName}
                                            </h3>
                                            <p style={{ fontSize: 13, color: '#38bdf8', fontWeight: 600, marginTop: 4 }}>
                                                {edu.institute}
                                            </p>
                                        </div>
                                        <span className="pf-tag" style={{ fontSize: 11 }}>
                                            {edu.startDate} – {edu.endDate}
                                        </span>
                                    </div>
                                    {edu.description && (
                                        <p style={{ fontSize: 13.5, color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Contact Section */}
                <section id="pf-contact" style={{ padding: '80px 0 100px' }}>
                    <div className="pf-card" style={{
                        padding: '60px 32px',
                        textAlign: 'center',
                        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)',
                        border: '1px solid rgba(99, 102, 241, 0.25)'
                    }}>
                        <div className="pf-badge" style={{ marginBottom: 16 }}>
                            Initiate Collaboration
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>
                            Ready to build something impactful?
                        </h2>
                        <p style={{ fontSize: 15, color: '#94a3b8', maxWidth: 540, margin: '0 auto 36px' }}>
                            Whether you're looking for an engineer for high-growth tech or custom engineering work, feel free to reach out.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                            <a
                                href={`mailto:${data.contactInfo.email}`}
                                className="pf-btn-primary"
                                style={{ padding: '12px 28px', fontSize: 14 }}
                            >
                                ✉️ Send Email ({data.contactInfo.email})
                            </a>
                            <a
                                href={data.contactInfo.linkedin?.startsWith('http') ? data.contactInfo.linkedin : `https://linkedin.com/in/${data.contactInfo.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="pf-btn-secondary"
                                style={{ padding: '12px 24px', fontSize: 14 }}
                            >
                                LinkedIn Profile
                            </a>
                            <a
                                href={data.contactInfo.github?.startsWith('http') ? data.contactInfo.github : `https://github.com/${data.contactInfo.github}`}
                                target="_blank"
                                rel="noreferrer"
                                className="pf-btn-secondary"
                                style={{ padding: '12px 24px', fontSize: 14 }}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '24px 32px',
                textAlign: 'center',
                fontSize: 12,
                color: '#64748b',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <span>© {new Date().getFullYear()} {data.fullName}. All rights reserved.</span>
                    <span style={{ color: '#475569' }}>Built with ProfolioX</span>
                </div>
            </footer>
        </div>
    );
}

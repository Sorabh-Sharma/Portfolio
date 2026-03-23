"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import cipherCert from "../../../assets/svg/certificate/cipher.png";
import infosysCert from "../../../assets/svg/certificate/Infosys.png";
import nptelCert from "../../../assets/svg/certificate/NPTEL.png";
import oracleCert from "../../../assets/svg/certificate/Oracle.png";
import udemyCert from "../../../assets/svg/certificate/udemy.png";

// ─── Replace these with your real project data ───────────────────────────────
const projects = [
  {
    id: 1,
    title: "Oracle",
    description: "Full-stack project management app with real-time collaboration.",
    color: "#264653",
    
    image: oracleCert,
    github: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7415D936A487F80DBAECF9F5FB353237BDC403AB6894AFD050E36CFC47FFCF83",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Infosys ",
    description: "ML-powered image classifier with 97% accuracy on custom datasets.",
    color: "#2A9D8F",
  
    image: infosysCert,
    github: "https://verify.onwingspan.com/",
    tags: ["Python", "TensorFlow", "Flask"],
  },
  {
    id: 3,
    title: "Cipher Schools",
    description: "Open-source design system with 60+ accessible components.",
    color: "#E9C46A",
    image: cipherCert,
    github: "https://www.cipherschools.com/certificate/preview?id=687e23ba7efd6d5090703cad",
    tags: ["Figma", "React", "Storybook"],
  },
  {
    id: 4,
    title: "NPTEL",
    description: "AWS infrastructure manager with one-click deployment pipelines.",
    color: "#F4A261",
    image: nptelCert,
    github: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S145870222710886458",
    tags: ["AWS", "Terraform", "Docker"],
  },
  {
    id: 5,
    title: "Udemy",
    description: "Network intrusion detection system using anomaly-based analysis.",
    color: "#E76F51",
    image: udemyCert,
    github: "https://www.udemy.com/certificate/UC-43ce4c98-260b-47a9-879d-2bff664fe1e1/",
    tags: ["Python", "Networking", "ML"],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  // Open the first certificate by default
  const [hoveredId, setHoveredId] = useState(projects[0]?.id || null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&display=swap');

        .ps-section {
          background: transparent;
          padding: 0 24px;
          margin: 3rem 0;
        }

        .ps-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #fff;
          text-align: center;
          margin: 0 0 8px;
        }

        .ps-sub {
          text-align: center;
          color: #555;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 48px;
          font-family: 'DM Mono', monospace;
        }

        /* Outer wrapper — make cards bigger */
        .ps-container {
          height: 460px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 1.2em;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.65);
          display: flex;
          flex-direction: row;
        }

        /* Each card — match project card colors */
        .ps-card {
          flex: 1;
          height: 100%;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.18s linear;
          display: flex;
          flex-direction: column;
          background: rgba(13, 18, 36, 0.5); /* translucent dark background */
          border-radius: 0.75rem;
          border: 1px solid rgba(27, 44, 104, 0.3);
        }

        .ps-card:hover,
        .ps-card.open {
          flex: 3;
          box-shadow: rgba(100,100,111,0.35) 0px 7px 29px 0px;
        }

        .ps-card:hover .ps-default,
        .ps-card.open .ps-default {
          opacity: 0;
          pointer-events: none;
        }

        .ps-card:hover .ps-hover,
        .ps-card.open .ps-hover {
          opacity: 1;
        }

        /* ── Default state: solid colour + centered icon ── */
        .ps-default {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.12s linear;
          z-index: 2;
        }

        .ps-icon {
          font-size: 2rem;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
        }

        /* ── Hover state: image (2/3) + info (1/3) ── */
        .ps-hover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.12s linear;
          z-index: 3;
        }

        /* Top 2/3 — project screenshot */
        .ps-image {
          flex: 2;
          width: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          min-height: 0;
          pointer-events: none;
        }

        /* Bottom 1/3 — info panel */
        .ps-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 10px 14px;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(4px);
          min-height: 0;
        }

        .ps-info-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .ps-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          color: #fff;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ps-desc {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          color: rgba(255,255,255,0.6);
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ps-tags {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
        }

        .ps-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75);
          padding: 2px 6px;
          border-radius: 3px;
          white-space: nowrap;
        }

        /* GitHub button */
        .ps-github {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 6px;
          background: #fff;
          color: #0f0f0f;
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.15s;
          letter-spacing: 0.04em;
        }

        .ps-github:hover {
          background: #e0e0e0;
        }

        .ps-github svg {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
        }

        /* Diagonal texture overlay */
        .ps-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.03) 0,
            rgba(255,255,255,0.03) 1px,
            transparent 0,
            transparent 50%
          );
          background-size: 10px 10px;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <section id="certificates" className="ps-section relative z-50 my-12 lg:my-24">
        <div className="sticky top-10">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
              CERTIFICATES
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="pt-24">
          <div className="ps-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`ps-card${hoveredId === project.id ? ' open' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(projects[0]?.id || null)}
              onClick={() => setSelectedImage(project.image)}
            >
              {/* Default: just the icon */}
              <div className="ps-default">
                <span className="ps-icon" style={{display: 'none'}}>{project.icon}</span>
                <span className="ps-cert-label text-white text-lg font-bold px-4 py-2 rounded" style={{ writingMode: 'initial', textAlign: 'center', letterSpacing: '0.1em' }}>
                  {project.title} Certificate
                </span>
              </div>

              {/* Hover: image (2/3) + info (1/3) */}
              <div className="ps-hover">
                {/* Top 2/3 — certificate image */}
                <Image
                  className="ps-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                {/* Bottom 1/3 — info */}
                <div className="ps-info">
                  <div className="ps-info-top">
                    <p className="ps-title">{project.title}</p>
                  </div>
                  <div className="flex justify-end mt-2">
                    <a
                      className="ps-github bg-green-600 hover:bg-green-700 text-white"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{marginRight: '4px'}}>
                        <path d="M12 22c5.522 0 10-4.478 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10zm-1.293-6.707l-3-3 1.414-1.414L11 12.586l4.293-4.293 1.414 1.414-5.707 5.707z"/>
                      </svg>
                      Verification
                    </a>
                  </div>

                  <p className="ps-desc">{project.description}</p>

                  <div className="ps-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="ps-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative w-full max-w-7xl max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Full Screen Certificate" 
                className="max-w-full max-h-[95vh] object-contain rounded-xl"
              />
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black rounded-full p-2 text-xl font-bold z-10"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              {/* Verification button in fullscreen */}
              {(() => {
                const cert = projects.find(p => p.image === selectedImage);
                if (!cert) return null;
                return (
                  <a
                    className="absolute bottom-4 right-4 ps-github bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center z-10"
                    href={cert.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{marginRight: '4px'}}>
                      <path d="M12 22c5.522 0 10-4.478 10-10S17.522 2 12 2 2 6.478 2 12s4.478 10 10 10zm-1.293-6.707l-3-3 1.414-1.414L11 12.586l4.293-4.293 1.414 1.414-5.707 5.707z"/>
                    </svg>
                    Verification
                  </a>
                );
              })()}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
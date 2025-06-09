import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Modal, Box, IconButton } from '@mui/material';
import { gsap } from "gsap";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Project.css';
import robie from '../assets/Robbie-lens.png';
import GreenLeaf from '../assets/GreenLeaf-LandScaping.png';
import Eclat from '../assets/Eclat-du-gout.png';
import banana from '../assets/banana-design.png';
import Johndoe from '../assets/Portfolio-John-Doe.png';
import LMJ from '../assets/La-maison-jungle.png';
import AzertyType from '../assets/AzertyType.png';
import banana1 from '../assets/banana1.png';
import banana2 from '../assets/banana2.png';
import banana3 from '../assets/banana3.png';
import banana4 from '../assets/banana4.png';
import banana5 from '../assets/banana5.png';
import azerty1 from '../assets/Azerty1.png';
import eclat1 from '../assets/eclat1.png';
import eclat2 from '../assets/eclat2.png';
import eclat3 from '../assets/eclat3.png';
import eclat4 from '../assets/eclat4.png';
import eclat5 from '../assets/eclat5.png';
import JohnDoe1 from '../assets/JohnDoe1.png';
import JohnDoe2 from '../assets/JohnDoe2.png';
import JohnDoe3 from '../assets/JohnDoe3.png';
import JohnDoe4 from '../assets/JohnDoe4.png';
import robie1 from '../assets/Robie1.png';
import robie2 from '../assets/Robie2.png';
import robie3 from '../assets/Robie3.png';
import robie4 from '../assets/Robie4.png';
import robie5 from '../assets/Robie5.png';
import green1 from '../assets/green1.png';
import green2 from '../assets/green2.png';
import green3 from '../assets/green3.png';
import green4 from '../assets/green4.png';
import green5 from '../assets/green5.png';
import green6 from '../assets/green6.png';
import lmj1 from '../assets/lmj1.png';
import lmj2 from '../assets/lmj2.png';
import lmj3 from '../assets/lmj3.png';

const Project = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const projectRefs = useRef([]);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    const handleCarouselPrev = () => {
        if (!selectedProject) return;
        setCarouselIndex((prev) =>
            prev === 0 ? selectedProject.moreImages.length - 1 : prev - 1
        );
    };
    const handleCarouselNext = () => {
        if (!selectedProject) return;
        setCarouselIndex((prev) =>
            prev === selectedProject.moreImages.length - 1 ? 0 : prev + 1
        );
    };

    // Ajout des techs et date à chaque projet
    const projects = [
        {
            title: "Robbie Lens",
            description: "Création d'un site vitrine pour un photographe professionnel...",
            descriptionDetail: "Projet réalisé dans le cadre de ma formation OpenClassrooms. Intégration d’un site vitrine pour une photographe freelance à partir d’une maquette fournie.",
            image: robie,
            moreImages: [robie1, robie2, robie3, robie4, robie5],
            techs: ["HTML", "CSS"],
            date: "2024",
            github: "https://github.com/AhmedBelaiboud24/Robie-Lens_photographie"
        },
        {
            title: "GreenLeaf Landscaping",
            description: "Conception et développement d'un site WordPress pour une entreprise de paysagisme...",
            descriptionDetail: "Ce site a été conçu pour une entreprise de paysagisme, mettant en avant ses services, ses réalisations et permettant aux clients de demander des devis en ligne.",
            image: GreenLeaf,
            moreImages: [green1, green2, green3, green4, green5, green6],
            techs: ["WordPress",  "Elementor", "CSS"],
            date: "2024",
            github: null
        },
        {
            title: "Restaurant L'Éclat du Goût",
            description: "Un site web pour un restaurant...",
            descriptionDetail: "Ce projet a été réalisé pour un restaurant, mettant en avant son menu, ses services et permettant aux clients de réserver une table en ligne.",
            image: Eclat,
            moreImages: [eclat1, eclat2, eclat3, eclat4, eclat5],
            techs: ["HTML", "CSS", "JavaScript"],
            date: "2023",
            github: "https://github.com/AhmedBelaiboud24/Restaurant-L-clat-du-Go-t"
        },
        {
            title: "Banana Design",
            description: "Design et développement d'un portfolio pour une agence de design...", 
            descriptionDetail: "Ce projet a été réalisé pour une agence de design, mettant en avant ses projets et ses compétences à travers un design moderne et interactif.",
            image: banana,
            moreImages: [banana1, banana2, banana3, banana4, banana5],
            techs: ["WordPress",  "Elementor", "CSS"],
            date: "2024",
            github: null
        },
        {
            title: "Portfolio John Doe",
            description: "Création d'un portfolio pour un développeur...",
            descriptionDetail: "Projet réalisé dans le cadre de ma formation OpenClassrooms. Conception d’un portfolio personnel moderne, responsive et animé.",
            image: Johndoe,
            moreImages: [JohnDoe1, JohnDoe2, JohnDoe3, JohnDoe4],
            techs: ["HTML", "Bootstrap"],
            date: "2023",
            github: "https://github.com/AhmedBelaiboud24/Portfolio-John-Doe"
        },
        {
            title: "La Maison Jungle",
            description: "Un projet React pour gérer des plantes...",
            descriptionDetail: "Projet réalisé dans le cadre de ma formation OpenClassrooms. Création d’une application web de gestion de plantes avec filtres dynamiques et panier interactif.",
            image: LMJ,
            moreImages: [lmj1, lmj2, lmj3],
            techs: ["React", "CSS"],
            date: "2022",
            github: "https://github.com/AhmedBelaiboud24/La-Maison-Jungle"
        },
        {
            title: "AzertyType",
            description: "Un projet JavaScript pour pratiquer la frappe...",
            descriptionDetail: "Projet réalisé dans le cadre de ma formation OpenClassrooms. Développement d’une application d’entraînement à la frappe clavier avec JavaScript.",
            image: AzertyType,
            moreImages: [azerty1],
            techs: ["JavaScript", "HTML", "CSS"],
            date: "2021",
            github: "https://github.com/AhmedBelaiboud24/Azerty-type"
        }
    ];

    useEffect(() => {
        gsap.fromTo(
            projectRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );
    }, []);

    useEffect(() => {
        setCarouselIndex(0);
    }, [selectedProject]);

    return (
        <div className="conteneur-projets" style={{ background: 'transparent' }}>
            <h2 id="projets" className="text-center mb-5" style={{ color: '#fff', fontWeight: 700, fontSize: 32 }}>Mes Projets</h2>
            <div className="Project-container" id="projets" style={{ background: 'transparent' }}>
                <div className="d-flex flex-column gap-5">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="row align-items-center justify-content-center g-0 flex-nowrap" style={{ background: 'transparent', minHeight: 220, marginBottom: 32 }}>
                                {isEven ? (
                                    <>
                                        {/* Infos à gauche */}
                                        <div className="col-12 col-md-5 d-flex flex-column align-items-md-end align-items-center text-md-end text-center pe-md-5" style={{ padding: 0, minHeight: 260, justifyContent: 'center' }}>
                                            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 28, marginBottom: 12 }}>{project.title}</h3>
                                            <p style={{ color: '#b0b0b0', fontSize: 18, maxWidth: 380, marginBottom: 18 }}>{project.description}</p>
                                            <div className="d-flex gap-3 mt-2 justify-content-md-end justify-content-center">
                                                <Button variant="contained" onClick={() => handleOpen(project)} sx={{ fontWeight: 600, borderRadius: 3, fontSize: 16 }}>Voir les détails</Button>
                                                {project.github && (
                                                    <Button variant="outlined" color="info" href={project.github} target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 600, borderRadius: 3, fontSize: 16 }}>GitHub</Button>
                                                )}
                                            </div>
                                        </div>
                                        {/* Image à droite */}
                                        <div className="col-12 col-md-5 offset-md-1 d-flex justify-content-md-start justify-content-center mt-4 mt-md-0" style={{ padding: 0, minHeight: 260 }}>
                                            <img src={project.image} alt={project.title} style={{ maxWidth: 420, width: '100%', height: 260, borderRadius: 15, boxShadow: '0 4px 24px #0008', objectFit: 'cover', background: 'transparent' }} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Image à gauche */}
                                        <div className="col-12 col-md-5 d-flex justify-content-md-end justify-content-center mt-4 mt-md-0 order-md-1 order-2" style={{ padding: 0, minHeight: 260 }}>
                                            <img src={project.image} alt={project.title} style={{ maxWidth: 420, width: '100%', height: 260, borderRadius: 15, boxShadow: '0 4px 24px #0008', objectFit: 'cover', background: 'transparent' }} />
                                        </div>
                                        {/* Infos à droite */}
                                        <div className="col-12 col-md-5 offset-md-1 d-flex flex-column align-items-md-start align-items-center text-md-start text-center order-md-2 order-1 ps-md-5" style={{ padding: 0, minHeight: 260, justifyContent: 'center' }}>
                                            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 28, marginBottom: 12 }}>{project.title}</h3>
                                            <p style={{ color: '#b0b0b0', fontSize: 18, maxWidth: 380, marginBottom: 18 }}>{project.description}</p>
                                            <div className="d-flex gap-3 mt-2 justify-content-md-start justify-content-center">
                                                <Button variant="contained" onClick={() => handleOpen(project)} sx={{ fontWeight: 600, borderRadius: 3, fontSize: 16 }}>Voir les détails</Button>
                                                {project.github && (
                                                    <Button variant="outlined" color="info" href={project.github} target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 600, borderRadius: 3, fontSize: 16 }}>GitHub</Button>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Modal détails projet (inchangé) */}
                {selectedProject && (
                    <Modal open={open} onClose={handleClose}>
                        <Box className="modal-box" sx={{
                            maxWidth: 1100,
                            width: '98vw',
                            maxHeight: '95vh',
                            overflowY: 'auto',
                            p: 3,
                            borderRadius: 3,
                            bgcolor: '#1e1e1e',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            {/* Carrousel d'images */}
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                                <IconButton onClick={handleCarouselPrev} sx={{ color: '#fff', fontSize: 32 }} aria-label="précédent">
                                    <ArrowBackIosNewIcon fontSize="large" />
                                </IconButton>
                                <img
                                    src={selectedProject.moreImages[carouselIndex]}
                                    alt={`${selectedProject.title} ${carouselIndex}`}
                                    style={{ maxHeight: 500, maxWidth: '95%', borderRadius: 12, objectFit: 'cover', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}
                                />
                                <IconButton onClick={handleCarouselNext} sx={{ color: '#fff', fontSize: 32 }} aria-label="suivant">
                                    <ArrowForwardIosIcon fontSize="large" />
                                </IconButton>
                            </div>
                            {/* Nom du projet */}
                            <Typography variant="h4" component="h2" className="modal-title" sx={{ mb: 2, textAlign: 'center' }}>
                                {selectedProject.title}
                            </Typography>
                            {/* Description */}
                            <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
                                {selectedProject.descriptionDetail}
                            </Typography>
                            {/* Techs utilisées */}
                            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>Technologies utilisées :</Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2, justifyContent: 'center' }}>
                                {selectedProject.techs && selectedProject.techs.map((tech, idx) => (
                                    <Box key={idx} sx={{ bgcolor: '#333', px: 2, py: 0.5, borderRadius: 2, fontSize: 16 }}>{tech}</Box>
                                ))}
                            </Box>
                            {/* Date de réalisation */}
                            <Typography variant="subtitle2" sx={{ mb: 2, color: '#b0b0b0' }}>Date de réalisation : {selectedProject.date}</Typography>
                            <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>Fermer</Button>
                        </Box>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Project;
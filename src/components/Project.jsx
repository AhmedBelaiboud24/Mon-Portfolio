import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    const [selectedProject, setSelectedProject] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setCarouselIndex(0);
    };

    const handleCloseModal = () => {
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

    const projects = [
        {
            title: "Robbie Lens",
            description: "Site vitrine pour photographe professionnel avec galerie interactive et présentation des services.",
            descriptionDetail: "Projet réalisé dans le cadre de ma formation OpenClassrooms. Intégration d'un site vitrine pour une photographe freelance à partir d'une maquette fournie. Focus sur l'expérience utilisateur et la mise en valeur du portfolio photographique.",
            image: robie,
            moreImages: [robie1, robie2, robie3, robie4, robie5],
            techs: ["HTML5", "CSS3", "Responsive Design"],
            category: "web",
            date: "2023",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/Robie-Lens_photographie",
            demo: "#",
            gradient: "var(--primary-gradient)"
        },
        {
            title: "GreenLeaf Landscaping",
            description: "Site WordPress pour entreprise de paysagisme avec système de devis en ligne.",
            descriptionDetail: "Ce site a été conçu pour une entreprise de paysagisme, mettant en avant ses services, ses réalisations et permettant aux clients de demander des devis en ligne. Intégration d'un CMS personnalisé pour la gestion du contenu.",
            image: GreenLeaf,
            moreImages: [green1, green2, green3, green4, green5, green6],
            techs: ["WordPress", "PHP", "MySQL", "CSS3"],
            category: "wordpress",
            date: "2023",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/GreenLeaf-LandScaping",
            demo: "#",
            gradient: "var(--secondary-gradient)"
        },
        {
            title: "Éclat du Goût",
            description: "E-commerce pour pâtisserie artisanale avec système de commande et paiement sécurisé.",
            descriptionDetail: "Développement d'un site e-commerce complet pour une pâtisserie, incluant catalogue produits, panier d'achat et système de paiement sécurisé. Interface admin pour la gestion des commandes et du stock.",
            image: Eclat,
            moreImages: [eclat1, eclat2, eclat3, eclat4, eclat5],
            techs: ["HTML", "CSS", "JavaScript"],
            category: "web",
            date: "2024",
            status: "En cours",
            github: "https://github.com/AhmedBelaiboud24/Eclat-du-gout",
            demo: "#",
            gradient: "var(--accent-gradient)"
        },
        {
            title: "Banana Design",
            description: "Portfolio créatif pour studio de design avec animations fluides et interface moderne.",
            descriptionDetail: "Création d'un portfolio moderne et interactif pour un studio de design, mettant en valeur leurs créations avec des animations fluides et une navigation intuitive. Optimisé pour tous les appareils.",
            image: banana,
            moreImages: [banana1, banana2, banana3, banana4, banana5],
            techs: ["WordPress", "PHP", "MySQL", "CSS3"],
            category: "wordpress",
            date: "2023",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/banana-design",
            demo: "#",
            gradient: "var(--primary-gradient)"
        },
        {
            title: "Portfolio John Doe",
            description: "Site portfolio personnel responsive avec présentation des compétences et projets.",
            descriptionDetail: "Développement d'un portfolio personnel moderne et responsive, optimisé pour présenter les compétences et projets d'un développeur. Design épuré et navigation fluide.",
            image: Johndoe,
            moreImages: [JohnDoe1, JohnDoe2, JohnDoe3, JohnDoe4],
            techs: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
            category: "web",
            date: "2024",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/Portfolio-John-Doe",
            demo: "#",
            gradient: "var(--secondary-gradient)"
        },
        {
            title: "La Maison Jungle",
            description: "E-commerce spécialisé dans les plantes d'intérieur avec guides d'entretien.",
            descriptionDetail: "Plateforme e-commerce dédiée à la vente de plantes d'intérieur, avec guides d'entretien et conseils personnalisés. Système de filtrage avancé et recommandations personnalisées.",
            image: LMJ,
            moreImages: [lmj1, lmj2, lmj3],
            techs: ["React.js", "CSS3", "JavaScript"],
            category: "react",
            date: "2024",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/La-maison-jungle",
            demo: "#",
            gradient: "var(--accent-gradient)"
        },
        {
            title: "AzertyType",
            description: "Application de test de vitesse de frappe avec statistiques et défis quotidiens.",
            descriptionDetail: "Application interactive pour améliorer la vitesse et la précision de frappe, avec statistiques détaillées et défis quotidiens. Interface gamifiée pour encourager la progression.",
            image: AzertyType,
            moreImages: [azerty1],
            techs: ["JavaScript", "HTML5", "CSS3"],
            category: "web",
            date: "2024",
            status: "Terminé",
            github: "https://github.com/AhmedBelaiboud24/AzertyType",
            demo: "#",
            gradient: "var(--primary-gradient)"
        }
    ];

    const categories = [
        { id: 'all', name: 'Tous les projets', icon: 'bi-grid' },
        { id: 'web', name: 'Sites Web', icon: 'bi-code-slash' },
        { id: 'react', name: 'React.js', icon: 'bi-layers' },
        { id: 'wordpress', name: 'WordPress', icon: 'bi-wordpress' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    useEffect(() => {
        setCarouselIndex(0);
    }, [selectedProject]);

    return (
        <div className="container-fluid py-5" id="projets" style={{ background: 'transparent' }}>
            {/* Titre principal */}
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-4 fw-bold text-white mb-3">
                    <i className="bi bi-code-slash me-3" style={{ color: 'var(--primary-color)' }}></i>
                    Mes Projets
                </h2>
                <p className="lead text-light opacity-75">Découvrez mes réalisations et projets récents</p>
            </div>

            {/* Filtres de catégories */}
            <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`btn btn-outline-light rounded-pill px-4 py-2 fw-semibold ${
                                    activeFilter === category.id ? 'active' : ''
                                }`}
                                onClick={() => setActiveFilter(category.id)}
                                style={{
                                    background: activeFilter === category.id 
                                        ? 'var(--primary-gradient)' 
                                        : 'rgba(255,255,255,0.1)',
                                    border: activeFilter === category.id 
                                        ? 'none' 
                                        : '1px solid rgba(255,255,255,0.2)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className={`${category.icon} me-2`}></i>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grille des projets */}
            <div className="row g-4">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div 
                            className="card h-100 border-0 shadow-lg project-card"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => handleProjectClick(project)}
                        >
                            {/* Image du projet */}
                            <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="card-img-top w-100 h-100"
                                    style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                />
                                <div 
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                    style={{
                                        background: 'rgba(0,0,0,0.7)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    }}
                                >
                                    <i className="bi bi-eye text-white" style={{ fontSize: '2rem' }}></i>
                                </div>
                                {/* Badge de statut */}
                                <div className="position-absolute top-3 end-3">
                                    <span 
                                        className={`badge rounded-pill px-3 py-2 fw-semibold ${
                                            project.status === 'Terminé' ? 'bg-success' : 'bg-warning text-dark'
                                        }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Contenu de la carte */}
                            <div className="card-body d-flex flex-column p-4">
                                <h5 className="card-title text-white fw-bold mb-3">{project.title}</h5>
                                <p className="card-text text-light opacity-75 mb-3 flex-grow-1">
                                    {project.description}
                                </p>
                                
                                {/* Technologies */}
                                <div className="mb-3">
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.techs.slice(0, 3).map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="badge rounded-pill px-3 py-2 fw-normal"
                                                style={{
                                                    background: 'rgba(255,255,255,0.1)',
                                                    color: 'var(--primary-color)',
                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techs.length > 3 && (
                                            <span className="badge rounded-pill px-3 py-2 fw-normal text-light"
                                                  style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                +{project.techs.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="d-flex gap-2 mt-auto">
                                    <button 
                                        className="btn btn-primary flex-grow-1 fw-semibold"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProjectClick(project);
                                        }}
                                        style={{ background: 'var(--primary-gradient)', border: 'none' }}
                                    >
                                        <i className="bi bi-eye me-2"></i>
                                        Voir détails
                                    </button>
                                    {project.github && (
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-light"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{ backdropFilter: 'blur(10px)' }}
                                        >
                                            <i className="bi bi-github"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal détails projet */}
            {selectedProject && (
                <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                        <div 
                            className="modal-content border-0"
                            style={{
                                background: 'rgba(30,30,30,0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div className="modal-header border-0 pb-0">
                                <h4 className="modal-title text-white fw-bold">{selectedProject.title}</h4>
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white" 
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {/* Carrousel d'images */}
                                <div className="position-relative mb-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button 
                                            className="btn btn-outline-light me-3"
                                            onClick={handleCarouselPrev}
                                            style={{ backdropFilter: 'blur(10px)' }}
                                        >
                                            <i className="bi bi-chevron-left"></i>
                                        </button>
                                        <img
                                            src={selectedProject.moreImages[carouselIndex]}
                                            alt={`${selectedProject.title} ${carouselIndex}`}
                                            className="img-fluid rounded shadow-lg"
                                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                        <button 
                                            className="btn btn-outline-light ms-3"
                                            onClick={handleCarouselNext}
                                            style={{ backdropFilter: 'blur(10px)' }}
                                        >
                                            <i className="bi bi-chevron-right"></i>
                                        </button>
                                    </div>
                                    {/* Indicateurs */}
                                    <div className="d-flex justify-content-center mt-3 gap-2">
                                        {selectedProject.moreImages.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`btn btn-sm rounded-circle ${
                                                    idx === carouselIndex ? 'btn-primary' : 'btn-outline-light'
                                                }`}
                                                style={{ width: '12px', height: '12px', padding: 0 }}
                                                onClick={() => setCarouselIndex(idx)}
                                            ></button>
                                        ))}
                                    </div>
                                </div>

                                {/* Description détaillée */}
                                <div className="mb-4">
                                    <h5 className="text-white mb-3">Description du projet</h5>
                                    <p className="text-light opacity-75 lh-lg">{selectedProject.descriptionDetail}</p>
                                </div>

                                {/* Technologies utilisées */}
                                <div className="mb-4">
                                    <h5 className="text-white mb-3">Technologies utilisées</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {selectedProject.techs.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="badge rounded-pill px-3 py-2 fw-semibold"
                                                style={{
                                                    background: 'var(--primary-gradient)',
                                                    color: 'white'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Informations du projet */}
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div 
                                            className="p-3 rounded"
                                            style={{ background: 'rgba(255,255,255,0.05)' }}
                                        >
                                            <h6 className="text-white mb-2">
                                                <i className="bi bi-calendar3 me-2" style={{ color: 'var(--primary-color)' }}></i>
                                                Date de réalisation
                                            </h6>
                                            <p className="text-light opacity-75 mb-0">{selectedProject.date}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div 
                                            className="p-3 rounded"
                                            style={{ background: 'rgba(255,255,255,0.05)' }}
                                        >
                                            <h6 className="text-white mb-2">
                                                <i className="bi bi-check-circle me-2" style={{ color: 'var(--primary-color)' }}></i>
                                                Statut
                                            </h6>
                                            <span 
                                                className={`badge px-3 py-2 fw-semibold ${
                                                    selectedProject.status === 'Terminé' ? 'bg-success' : 'bg-warning text-dark'
                                                }`}
                                            >
                                                {selectedProject.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-0 pt-0">
                                {selectedProject.github && (
                                    <a 
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-light me-2"
                                        style={{ backdropFilter: 'blur(10px)' }}
                                    >
                                        <i className="bi bi-github me-2"></i>
                                        Voir sur GitHub
                                    </a>
                                )}
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={handleCloseModal}
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS inline pour les animations */}
            <style>{`
                .project-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                }
                
                .project-card:hover img {
                    transform: scale(1.05);
                }
                
                .project-card:hover .position-absolute {
                    opacity: 1 !important;
                }
                
                .btn:hover {
                    transform: translateY(-2px);
                }
                
                .modal.show {
                    animation: fadeIn 0.3s ease;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Project;
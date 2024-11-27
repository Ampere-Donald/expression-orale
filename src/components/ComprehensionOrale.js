import React from "react";
import "./comprehensionOrale.css";

const ComprehensionOrale = () => {
  return (
    <div className="comprehension-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Compréhension Orale - TCF Canada</h1>
        <p>
          Développez vos compétences en compréhension orale et soyez prêt à
          réussir votre examen TCF Canada. Découvrez les astuces et détails
          essentiels pour exceller !
        </p>
        <button className="hero-button">Commencez votre préparation</button>
      </section>

      {/* Info Sections */}
      <section className="info-section">
        <div className="card"> 
          <h2>Introduction</h2>
          <p>
            Cette section évalue votre capacité à comprendre le français parlé
            dans des contextes variés comme des conversations, annonces ou
            discussions.
          </p>
        </div>
        <div className="card">
          <h2>Structure</h2>
          <ul>
            <li>Durée : 30 minutes</li>
            <li>Nombre de questions : Entre 29 et 35</li>
            <li>Types d’audios : Dialogues, annonces, extraits</li>
          </ul>
        </div>
        <div className="card">
          <h2>Conseils</h2>
          <p>
            Entraînez-vous régulièrement avec des ressources audio authentiques
            et habituez-vous à différents accents francophones.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Ce que disent nos candidats</h2>
        <div className="testimonial">
          <p>
            "Grâce à ces ressources, j'ai réussi ma section de compréhension
            orale avec un excellent score. Les conseils étaient précis et
            efficaces !" - Marie L.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Les exercices interactifs et les astuces partagées m'ont beaucoup
            aidé. Je recommande vivement ce site à tous les candidats." - Jean
            M.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Foire Aux Questions (FAQ)</h2>
        <div className="faq-item">
          <h3>Comment se préparer à la compréhension orale ?</h3>
          <p>
            Écoutez régulièrement des podcasts, regardez des vidéos en français
            et pratiquez avec des exemples d'examens.
          </p>
        </div>
        <div className="faq-item">
          <h3>Quels types d'accents dois-je connaître ?</h3>
          <p>
            Familiarisez-vous avec des accents variés, comme ceux du Québec,
            de la France et d'autres pays francophones.
          </p>
        </div>
        <div className="faq-item">
          <h3>Les questions sont-elles basées sur des dialogues réels ?</h3>
          <p>
            Oui, les extraits audio sont souvent tirés de situations courantes
            et d'interactions réelles.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <h2>Ressources Utiles</h2>
        <ul>
          <li>
            <a href="#">Exemples d'audios TCF Canada</a>
          </li>
          <li>
            <a href="#">Conseils pour améliorer votre écoute</a>
          </li>
          <li>
            <a href="#">Simulations d'examen</a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contactez-Nous</h2>
        <p>
          Vous avez des questions ? Besoin de plus d'informations ? Contactez
          notre équipe via :
        </p>
        <p>Email : <a href="mailto:contact@tcfcanada.com">contact@tcfcanada.com</a></p>
        <p>Téléphone : +1 800-123-456</p>
      </section>
    </div>
  );
};

export default ComprehensionOrale;

import PageLayout from '../components/PageLayout';
import { certifications } from '../data/certifications';
import './Certifications.css';

const Certifications = () => {
  return (
    <PageLayout>
      <div className="page-content certs-page">
        <header className="page-header">
          <h1>Certifications</h1>
          <p className="page-subtitle">Credentials & completed programs</p>
        </header>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="cert-card">
              <div className="cert-image">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} />
                ) : (
                  <div className="cert-image-placeholder">
                    <span>📜</span>
                    <p>Add certificate image</p>
                  </div>
                )}
              </div>
              <div className="cert-info">
                <h2>{cert.title}</h2>
                <p>{cert.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Certifications;

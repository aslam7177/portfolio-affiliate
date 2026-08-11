import PageLayout from '../components/PageLayout';
import { site } from '../data/site';
import './Home.css';

const Home = () => {
  return (
    <PageLayout navVariant="hero" className="home-layout">
      <div className="home-hero">
        <div className="home-content">
          <p className="home-kicker">Explore My Universe</p>
          <p className="home-role">{site.title}</p>
          <p className="home-tagline">{site.tagline}</p>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

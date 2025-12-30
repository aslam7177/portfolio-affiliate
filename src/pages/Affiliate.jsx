import './Affiliate.css';

const Affiliate = () => {
  const products = [
    {
      id: 1,
      name: 'Web Hosting Service',
      description: 'Reliable and fast web hosting with 99.9% uptime guarantee. Perfect for developers and businesses.',
      price: '$9.99/month',
      category: 'Hosting',
      image: '🌐',
      link: '#',
      featured: true,
    },
    {
      id: 2,
      name: 'Code Editor',
      description: 'The best code editor I use daily. Lightweight, fast, and packed with features.',
      price: 'Free',
      category: 'Tools',
      image: '💻',
      link: '#',
      featured: false,
    },
    {
      id: 3,
      name: 'Design Tool',
      description: 'Professional design tool for creating stunning UI/UX designs and prototypes.',
      price: '$12.99/month',
      category: 'Design',
      image: '🎨',
      link: '#',
      featured: true,
    },
    {
      id: 4,
      name: 'Cloud Storage',
      description: 'Secure cloud storage solution with seamless sync across all your devices.',
      price: '$5.99/month',
      category: 'Storage',
      image: '☁️',
      link: '#',
      featured: false,
    },
    {
      id: 5,
      name: 'API Service',
      description: 'Powerful API platform that makes backend development faster and easier.',
      price: '$19.99/month',
      category: 'Development',
      image: '⚡',
      link: '#',
      featured: true,
    },
    {
      id: 6,
      name: 'Learning Platform',
      description: 'Comprehensive online courses for web development, programming, and more.',
      price: '$29.99/month',
      category: 'Education',
      image: '📚',
      link: '#',
      featured: false,
    },
  ];

  return (
    <div className="affiliate">
      <section className="affiliate-hero">
        <div className="container">
          <h1>Recommended Products</h1>
          <p className="subtitle">
            Tools and services I personally use and recommend
          </p>
          <p className="disclaimer">
            * These are products I've personally used and found valuable. 
            Some links may be affiliate links, which means I may earn a commission 
            if you make a purchase at no additional cost to you.
          </p>
        </div>
      </section>

      <section className="affiliate-content">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`product-card ${product.featured ? 'featured' : ''}`}
              >
                {product.featured && (
                  <div className="featured-badge">Recommended</div>
                )}
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <a 
                      href={product.link} 
                      className="product-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;



const bandcampUrl = 'https://housematesband.bandcamp.com/'
const instagramUrl = 'https://instagram.com/housematesband'
const spotifyUrl = 'https://open.spotify.com/artist/64JQlmkAPwR6IRgsEQ42Tb'
const youtubeUrl = 'https://youtube.com/@housematesband'
const pressKitUrl = 'https://new.express.adobe.com/webpage/jI1tmCDu3FqiE'

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <div className="logo">Housemates</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#press-kit">Press Kit</a>
            <a href={bandcampUrl} target="_blank" rel="noopener noreferrer">Merch</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">post-grunge • alt-rock</p>
            <h1>HOUSEMATES</h1>
            <p className="lead">
              Forming in 2023 HOUSEMATES exploded onto the Galway DIY scene with a raw, unapologetic sound that cuts the listener to the bone. The post-grunge powerhouse packs attitude & grit while simultaneously leaving a lasting impression. Having caught the attention of longtime alt-rockers Fangclub, the band opened up for them in the Róisín Dubh in April 2025. Combining trashy guitars, driving bass & attacking drums they blend melodic intensity with raw aggression, creating a unique fusion of chaos and control. The group come into their own in the live realm. With a stage show known for it's seismic energy & early 90s undertones, HOUSEMATES turn even the smallest of venues into rocking fun houses every time.
            </p>
            <div className="cta-group">
              <a className="button primary" href="#music">
                Listen Now
              </a>
              <a className="button ghost" href="#press-kit">
                View Press Kit
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Latest Release</p>
              <h2>“Cutting Teeth?”</h2>
              <p className="card-copy">
                Streaming everywhere.
              </p>
              <a className="button secondary" href="#press-kit">
                View Press Kit
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2>Meet HOUSEMATES</h2>
          </div>
          <div className="two-col">
            <p>
              About HOUSEMATES
            </p>
       
          </div>
        </section>

        <section className="section music" id="music">
          <div className="section-header">
            <p className="eyebrow">Music</p>
            <h2>Listen & Explore</h2>
          </div>
          <div className="music-grid">
            {[
              {
                title: 'Boys Who Like Neitzche',
                year: '2026',
                desc: 'desc.',
              },
              {
                title: 'Drama Queens',
                year: '2026',
                desc: 'desc.',
              },

            ].map((release) => (
              <article className="music-card" key={release.title}>
                <div>
                  <p className="tag">{release.year}</p>
                  <h3>{release.title}</h3>
                  <p>{release.desc}</p>
                </div>
                <button className="text-button" type="button">
                  Add to playlist
                </button>
              </article>
            ))}
          </div>
          <div className="music-cta">
            <a className="button primary" href={bandcampUrl}>
              Stream on Bandcamp
            </a>
            <a className="button ghost" href="#press-kit">
              Download Press Assets
            </a>
          </div>
        </section>

        <section className="section press" id="press-kit">
          <div className="section-header">
            <p className="eyebrow">Press Kit</p>
            <h2>Full Press Kit</h2>
          </div>
          <div className="press-embed">
            <iframe
              title="Housemates Press Kit"
              src={pressKitUrl}
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>© 2026 HOUSEMATES. All rights reserved.</p>
          <div className="social-links">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram">
              IG
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" title="Spotify">
              Spotify
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" title="YouTube">
              YT
            </a>
            <a href={bandcampUrl} target="_blank" rel="noopener noreferrer" title="Bandcamp">
              Bandcamp
            </a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#home">Back to top</a>
          <a href="#press-kit">Press Kit</a>
        </div>
      </footer>
    </div>
  )
}
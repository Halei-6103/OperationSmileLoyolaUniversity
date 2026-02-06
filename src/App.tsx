import { useState, useCallback } from 'react';

const GOFUNDME_URL = 'https://www.gofundme.com/f/help-share-a-smile-today?attribution_id=sl:cb8bd359-76e3-48c5-8b04-b0c092d965b2&lang=en_US&ts=1769825312&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link';
const INSTAGRAM_URL = 'https://instagram.com/lucoperationsmile';
const INSTAGRAM_HANDLE = '@lucoperationsmile';
const EMAIL = 'lucoperationsmile@gmail.com';

const InstagramIcon = () => (
  <svg className="shrink-0 w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="shrink-0 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

function App() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleDonate = useCallback(() => {
    window.open(GOFUNDME_URL, '_blank', 'noopener,noreferrer');
    showToast('Opening GoFundMe…');
  }, [showToast]);

  return (
    <>
      <a href="#main" className="skip-link sr-only rounded-lg bg-loyola-maroon px-4 py-2 text-white font-medium focus:bg-loyola-maroon focus:text-white">
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 py-3 bg-white border-b border-gray-200"
        role="banner"
      >
        <img
          src={`${import.meta.env.BASE_URL}Loyola.svg`}
          alt="Loyola University Chicago"
          className="h-10 w-auto max-w-[120px] object-contain"
        />
        <img
          src={`${import.meta.env.BASE_URL}operationSmile.svg`}
          alt="Operation Smile"
          className="h-10 w-auto max-w-[120px] object-contain"
        />
      </header>

      <main id="main" role="main" className="min-h-screen">
        {/* Hero */}
        <section
          className="px-4 pt-8 pb-10 bg-white"
          aria-labelledby="hero-title"
        >
          <h1
            id="hero-title"
            className="font-heading text-h1-mobile text-loyola-maroon max-w-xl mx-auto text-center"
          >
            Loyola University Chicago Operation Smile
          </h1>
          <p className="mt-3 text-body-mobile text-gray-700 max-w-xl mx-auto text-center">
            Supporting life-changing surgical care for children and adults with cleft conditions worldwide.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <button
              type="button"
              onClick={handleDonate}
              className="w-full min-h-[48px] px-6 py-3 rounded-[10px] bg-loyola-maroon text-white font-heading font-semibold text-lg transition opacity-90 hover:opacity-100 active:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-loyola-maroon"
              aria-label="Donate on GoFundMe (opens in new tab)"
            >
              Donate on GoFundMe
            </button>
            <div className="flex flex-col gap-2">
              <div className="min-h-[44px] flex items-center gap-2 text-loyola-maroon font-medium">
                <InstagramIcon />
                <span><strong>Instagram:</strong>{' '}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-loyola-gold decoration-2 underline-offset-2 hover:decoration-loyola-maroon"
                    aria-label="Follow us on Instagram: lucoperationsmile (opens in new tab)"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </span>
              </div>
              <div className="min-h-[44px] flex items-center gap-2 text-loyola-maroon font-medium">
                <EmailIcon />
                <span><strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="underline decoration-loyola-gold decoration-2 underline-offset-2 hover:decoration-loyola-maroon"
                    aria-label={`Email us: ${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Info */}
        <section
          className="px-4 py-10 bg-section-alt"
          aria-labelledby="info-heading"
        >
          <h2 id="info-heading" className="sr-only">
            Our mission
          </h2>
          <div className="max-w-xl mx-auto space-y-8">
            <article>
              <h2 className="font-heading text-h2-mobile text-loyola-maroon border-b-2 border-loyola-gold pb-1 inline-block">
                About Operation Smile
              </h2>
              <p className="mt-3 text-body-mobile text-gray-800">
                Operation Smile is an international nonprofit organization founded in 1982 with a mission to provide safe, high-quality, and life-changing surgical care to children and adults born with cleft lip, cleft palate, and other facial differences. Through partnerships with medical volunteers and healthcare professionals around the world, Operation Smile delivers free surgical treatment while also supporting education, training, and long-term care in underserved communities.
              </p>
            </article>
            <article>
              <h2 className="font-heading text-h2-mobile text-loyola-maroon border-b-2 border-loyola-gold pb-1 inline-block">
                About LUCOS
              </h2>
              <p className="mt-3 text-body-mobile text-gray-800">
                Loyola University Chicago Operation Smile (LUCOS) is a student-led organization dedicated to supporting this global mission. Our members work to raise awareness about cleft conditions, advocate for accessible surgical care, and fundraise to help provide surgeries and medical resources for patients in need.
              </p>
              <p className="mt-3 text-body-mobile text-gray-800">
                By supporting LUC Operation Smile, you are helping transform lives by giving children the opportunity to eat, speak, and smile with confidence.
              </p>
            </article>
          </div>
        </section>

        {/* Impact */}
        <section
          className="px-4 py-10 bg-loyola-maroon text-white"
          aria-labelledby="impact-heading"
        >
          <p
            id="impact-heading"
            className="font-heading text-impact text-center max-w-xl mx-auto"
          >
            No donation is too small. Every $240 raised is another life transformed through surgical care.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleDonate}
              className="w-full max-w-sm min-h-[48px] px-6 py-3 rounded-[10px] bg-white text-loyola-maroon font-heading font-semibold text-lg transition opacity-90 hover:opacity-100 active:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-loyola-maroon"
              aria-label="Donate on GoFundMe (opens in new tab)"
            >
              Donate on GoFundMe
            </button>
          </div>
        </section>

        {/* Gallery */}
        <section
          className="px-4 py-10 bg-white"
          aria-labelledby="gallery-heading"
        >
          <h2 id="gallery-heading" className="font-heading text-h2-mobile text-loyola-maroon mb-6">
            Events
          </h2>
          <div className="max-w-xl mx-auto space-y-4">
            <figure className="overflow-hidden rounded-[10px] border border-gray-200 bg-section-alt">
              <img
                src={`${import.meta.env.BASE_URL}images/image1.jpg`}
                alt="LUCOS event photo 1"
                className="w-full aspect-[4/3] object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-[10px] border border-gray-200 bg-section-alt">
              <img
                src={`${import.meta.env.BASE_URL}images/image2.png`}
                alt="LUCOS event photo 2"
                className="w-full aspect-[4/3] object-cover"
              />
            </figure>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="px-4 py-8 bg-section-alt border-t border-gray-200"
          role="contentinfo"
        >
          <div className="max-w-xl mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="min-h-[44px] flex items-center gap-2 text-loyola-maroon font-medium">
                <InstagramIcon />
                <span><strong>Instagram:</strong>{' '}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-loyola-gold decoration-2 underline-offset-2"
                    aria-label="Follow us on Instagram: lucoperationsmile (opens in new tab)"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </span>
              </div>
              <div className="min-h-[44px] flex items-center gap-2 text-loyola-maroon font-medium">
                <EmailIcon />
                <span><strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="underline decoration-loyola-gold decoration-2 underline-offset-2"
                    aria-label={`Email: ${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                </span>
              </div>
            </div>
            <p className="text-body-mobile text-gray-600">
              Loyola University Chicago
            </p>
          </div>
        </footer>
      </main>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-4 right-4 max-w-sm mx-auto py-3 px-4 rounded-[10px] bg-loyola-maroon text-white text-center font-medium shadow-lg z-50 toast-enter"
        >
          {toast}
        </div>
      )}
    </>
  );
}

export default App;

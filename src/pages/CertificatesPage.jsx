import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { client, urlFor } from '../lib/sanity';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchCertificates = async () => {
      try {
        const query = `*[_type == "certificate"] | order(order asc, date desc)`;
        const data = await client.fetch(query);
        setCertificates(data);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-surface border-t-text-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AnimatedPage className="min-h-screen py-12 relative z-10 w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24"
      >
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-text-primary tracking-tighter uppercase mb-6">
          CERTIFICATES.
        </h1>
        <p className="text-xl text-text-secondary font-sans max-w-2xl">
          Professional certifications and credentials earned through continuous learning and skill development.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {certificates.length === 0 ? (
          <div className="col-span-full text-text-secondary font-display p-8 box-structured rounded-lg">
            No certificates found. Open your Sanity Studio (npm run dev in portfolio-studio) to add some!
          </div>
        ) : (
          certificates.map((certificate) => (
            <motion.div 
              key={certificate._id} 
              variants={item}
              className="group flex flex-col h-full overflow-hidden rounded-lg box-structured p-2"
            >
              {/* Certificate File */}
              <div className="w-full aspect-square overflow-hidden rounded bg-surface-hover mb-4">
                <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-bg-base/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  {certificate.file && (
                    certificate.file.asset._ref.includes('pdf') ? (
                      // PDF Preview - Show icon with link
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-16 h-16 bg-surface border border-border rounded mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-text-secondary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xs font-display font-bold text-text-secondary tracking-widest uppercase">
                          PDF CERTIFICATE
                        </p>
                        <a
                          href={certificate.file.asset.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 px-3 py-1 bg-surface border border-border hover:bg-surface-hover rounded text-xs font-bold font-display tracking-widest text-text-primary transition-colors duration-300"
                        >
                          VIEW PDF
                        </a>
                      </div>
                    ) : (
                      // Image Preview
                      <img
                        src={urlFor(certificate.file).url()}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight mb-1 line-clamp-2 group-hover:text-text-secondary transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                <p className="text-sm font-sans text-text-secondary mb-2">
                  {certificate.issuer}
                </p>

                {certificate.date && (
                  <p className="text-xs font-display text-text-secondary/70 tracking-widest mb-3">
                    {new Date(certificate.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                )}

                {certificate.description && (
                  <p className="text-sm font-sans text-text-secondary mb-4 flex-grow line-clamp-3">
                    {certificate.description}
                  </p>
                )}

                {certificate.credentialUrl && (
                  <a 
                    href={certificate.credentialUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 w-fit mt-auto px-3 py-2 bg-surface border border-border hover:bg-surface-hover rounded text-xs font-bold font-display tracking-widest text-text-primary transition-colors duration-300 group/link"
                  >
                    VERIFY
                    <ExternalLink size={14} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                )}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </AnimatedPage>
  );
}

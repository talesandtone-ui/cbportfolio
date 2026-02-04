const ClientLogos = () => {
  // Client logos (placed in public/images/clients/)
  const clients = [
    { name: 'TechStartup Co.', file: 'techstartup-co.svg' },
    { name: 'Creator Studio', file: 'creator-studio.svg' },
    { name: 'E-commerce Brand', file: 'ecommerce-brand.svg' },
    { name: 'Restaurant Chain', file: 'restaurant-chain.svg' },
    { name: 'SaaS Startup', file: 'saas-startup.svg' },
    { name: 'Production House', file: 'production-house.svg' },
    { name: 'Local Business', file: 'local-business.svg' },
    { name: 'Digital Agency', file: 'digital-agency.svg' },
  ]

  return (
    <section className="py-16 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="scroll-reveal-stagger flex items-center justify-center"
            >
              <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full h-24 flex items-center justify-center border border-dark-200 dark:border-dark-700">
                <img
                  src={`/images/clients/${client.file}`}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <p className="text-sm text-dark-500 dark:text-dark-400">
            <strong>Note:</strong> Client logos are stored in <code className="bg-dark-100 dark:bg-dark-900 px-2 py-1 rounded">public/images/clients/</code> — replace files with your official logos as needed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos


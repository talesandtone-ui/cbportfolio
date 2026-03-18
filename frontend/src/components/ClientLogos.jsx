const ClientLogos = () => {
  const clients = [
    { name: 'Omkar Enterprise', file: 'techstartup-co.svg' },
    { name: 'Priya Creates', file: 'creator-studio.svg' },
    { name: 'Urban Store', file: 'ecommerce-brand.svg' },
    { name: 'Spice Hub', file: 'restaurant-chain.svg' },
    { name: 'QuickFlow App', file: 'saas-startup.svg' },
    { name: 'Vision Media', file: 'production-house.svg' },
    { name: 'Local Business', file: 'local-business.svg' },
    { name: 'Digital Agency', file: 'digital-agency.svg' },
  ]

  return (
    <section className="py-16 bg-dark-900 border-y border-primary-700/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="scroll-reveal-stagger flex items-center justify-center"
            >
              <div className="bg-dark-950 rounded-lg p-6 w-full h-24 flex items-center justify-center border border-dark-700/50 hover:border-primary-500/30 transition-colors">
                <img
                  src={`/images/clients/${client.file}`}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain opacity-40 hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 scroll-reveal">
          <p className="text-sm text-dark-500">
            <strong className="text-dark-400">Note:</strong> Client logos are stored in <code className="bg-dark-800 px-2 py-1 rounded text-primary-400/70">public/images/clients/</code> — replace files with your official logos as needed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

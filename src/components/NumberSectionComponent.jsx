
const NumberSectionComponent = () => {
  const stats = [
    { number: '200+', description: 'Satisfied Clients' },
    { number: '97%', description: 'On-Time Project Delivery' },
    { number: '34+', description: 'Industries Served Globally' },
    { number: '100+', description: 'Dedicated Content Creators' },
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our numbers speak for themselves
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 flex flex-col items-center justify-center text-center"
            >
              <p className="text-5xl font-semibold text-gray-500 mb-4 drop-shadow-sm">
                {stat.number}
              </p>
              <p className="text-lg text-gray-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NumberSectionComponent;

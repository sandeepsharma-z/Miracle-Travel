export function FeaturesSection() {
  const features = [
    {
      title: "Private Minibus",
      description: "Comfortable, air-conditioned vehicles perfect for small groups",
      bgColor: "bg-purple-100",
      icon: "🚐"
    },
    {
      title: "Expert Drivers",
      description: "Local guides who know every hidden gem in Georgia",
      bgColor: "bg-yellow-100",
      icon: "👨‍🏫"
    },
    {
      title: "Custom Itineraries",
      description: "Tailored journeys designed exactly for your interests",
      bgColor: "bg-orange-100",
      icon: "📍"
    },
    {
      title: "24/7 Support",
      description: "Always available to assist with any travel needs",
      bgColor: "bg-green-100",
      icon: "📞"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-16 items-center md:items-start">
          {/* Left - Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=750&fit=crop&q=85"
                alt="Georgia Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <div className="eyebrow text-sunset mb-4">WHY CHOOSE US</div>
            <h2 className="text-3xl md:text-5xl font-display leading-tight text-balance mb-6">
              Travel Georgia<br/>
              <span className="text-primary">Your Way.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-1 md:mb-12 leading-relaxed">
              Since our journey began, we've inspired countless travelers to explore breathtaking destinations, creating unforgettable memories.
            </p>

            {/* Features - Desktop Only, Below Description */}
            <div className="hidden md:block space-y-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`${feature.bgColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg font-display font-medium text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-foreground/75">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features - Mobile Only, Below Everything */}
        <div className="md:hidden mt-12">
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.bgColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-display font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/75">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronRight, Flag, MapPin, MessageSquare, Users } from "lucide-react";

// Navigation component
const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm border-b border-black/6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7e82dd3fb9765a29c4a1201a3b986cde6068e52c?width=224" 
            alt="Romeo Travel" 
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#" className="text-gray-900 hover:text-romeo-orange px-3 py-2 text-sm font-medium font-nunito">Home</a>
            <a href="#features" className="text-gray-700 hover:text-romeo-orange px-3 py-2 text-sm font-medium font-nunito">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-romeo-orange px-3 py-2 text-sm font-medium font-nunito">Reviews</a>
            <a href="#faq" className="text-gray-700 hover:text-romeo-orange px-3 py-2 text-sm font-medium font-nunito">FAQ</a>
          </div>
        </div>
        <div className="md:hidden">
          <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h18M3 16h18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// Hero section
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
           style={{backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ae850bd0b861b56bb5725dbc93d2e78dc3ba327d?width=2500')"}}>
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium text-white font-poppins mb-8 leading-tight">
        Your tour guide's name is Romeo
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-white font-nunito mb-8 max-w-4xl mx-auto leading-relaxed text-shadow-lg">
        A voice-guided tour app that leads you through the streets and tells you the story of each place in real time. 
        Ask questions, walk around, and choose between Explorer Mode and Guided Routes.
      </p>
      <button className="bg-[#FF6201] text-white px-8 py-3 rounded-full font-nunito font-semibold text-sm border border-white/20 hover:bg-[#e55601] transition-colors">
        Download on iOS
      </button>
    </div>
  </section>
);

// Tag component
const Tag = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="inline-flex items-center gap-1 px-2 py-2 bg-black/2 border border-black/10 rounded-md">
    <Icon className="w-3.5 h-3.5 text-black/70" />
    <span className="text-xs text-black/70 font-nunito">{text}</span>
  </div>
);

// Feature section
const FeatureSection = ({ 
  tag, 
  title, 
  description, 
  images, 
  reverse = false 
}: { 
  tag: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}) => (
  <section className="py-16 lg:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Tag icon={Flag} text={tag} />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black font-nunito mt-4 mb-4">
          {title}
        </h2>
        <p className="text-base lg:text-lg text-black/60 font-nunito font-semibold max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt="" 
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover"
          />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-[#FF6201] text-white px-8 py-3 rounded-full font-nunito font-semibold text-sm border border-white/20 hover:bg-[#e55601] transition-colors">
          Download
        </button>
      </div>
    </div>
  </section>
);

// Feature cards
const FeatureCard = ({ 
  title, 
  description, 
  image, 
  large = false 
}: { 
  title: string;
  description: string;
  image: string;
  large?: boolean;
}) => (
  <div className={`bg-black/2 border border-black/10 rounded-3xl p-8 ${large ? 'col-span-2' : ''}`}>
    <div className="mb-6">
      <h3 className="text-xl font-bold text-black font-nunito mb-1">{title}</h3>
      <p className="text-sm text-black/50 font-nunito">{description}</p>
    </div>
    <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

// Testimonial card
const TestimonialCard = ({ 
  name, 
  location, 
  comment, 
  avatar 
}: { 
  name: string;
  location: string;
  comment: string;
  avatar: string;
}) => (
  <div className="bg-white border border-black/10 rounded-3xl p-4">
    <div className="flex items-center gap-3 mb-4">
      <img src={avatar} alt={name} className="w-8 h-8 rounded-full border border-black/10" />
      <div>
        <div className="text-sm font-nunito text-black/80">{name}</div>
        <div className="text-xs font-nunito text-black/30">{location}</div>
      </div>
    </div>
    <p className="text-sm lg:text-base font-nunito text-black leading-relaxed">{comment}</p>
  </div>
);

// FAQ item
const FAQItem = ({ question }: { question: string }) => (
  <div className="border border-black/10 rounded-lg py-3 px-4 flex items-center justify-between">
    <span className="text-sm lg:text-base font-nunito text-black">{question}</span>
    <ChevronRight className="w-5 h-5 text-black" />
  </div>
);

// Newsletter section
const Newsletter = () => (
  <section className="py-16 lg:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gradient-to-b from-black/0 to-black/10 rounded-3xl border border-black/10 overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/82e6b240c091094dec74ff269ce0992e82379823?width=2352" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 py-24 lg:py-32 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-nunito text-white mb-4">
            Don't miss out!
          </h2>
          <p className="text-sm font-nunito text-white mb-8">
            Join the waitlist and get early access
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="fancyemail@domain.com"
              className="flex-1 px-4 py-2 rounded-lg border border-black/10 text-sm font-nunito text-black/50"
            />
            <button className="bg-gradient-to-b from-white/0 to-white/60 bg-[#FF6201] text-black px-6 py-2 rounded-full font-nunito text-sm hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-black/6 py-16 lg:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-12">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7e82dd3fb9765a29c4a1201a3b986cde6068e52c?width=224" 
          alt="Romeo Travel" 
          className="h-8 w-auto"
        />
      </div>
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-base font-nunito text-black mb-1">
          Stay tuned — we'll notify you when we launch.
        </h3>
        <p className="text-sm font-nunito text-black/40 mb-6">
          Join the waitinglist
        </p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="fancyemail@domain.com"
            className="flex-1 px-4 py-2 rounded-lg bg-black/10 text-sm font-nunito text-black/40 placeholder-black/40"
          />
          <button className="bg-gradient-to-b from-white/0 to-white/60 bg-[#FF6201] text-black px-6 py-2 rounded-full font-nunito text-sm hover:opacity-90 transition-opacity">
            Join
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-nunito">
      <Navigation />
      
      <Hero />
      
      {/* Explore Mode Section */}
      <FeatureSection 
        tag="Type of use"
        title="Explore Mode"
        description="Pasea sin mapas. Romeo detecta tu ubicación y te cuenta lo que nadie te explicó de cada calle. Así de fácil."
        images={[
          "https://api.builder.io/api/v1/image/assets/TEMP/cae8784647701c33b2c076a508834c837ec4a52d?width=800",
          "https://api.builder.io/api/v1/image/assets/TEMP/f8558eb4847026d35e970f7819db2f7244f1ca49?width=800"
        ]}
      />
      
      {/* Routes Mode Section */}
      <FeatureSection 
        tag="Type of use"
        title="Routes Mode"
        description="Elige la ruta que mejor se adapte a ti. Solo escucha y sigue la voz de Romeo."
        images={[
          "https://api.builder.io/api/v1/image/assets/TEMP/62f1ebd2397967e4555dbb8d634ef4ce316a142a?width=800",
          "https://api.builder.io/api/v1/image/assets/TEMP/0a70ad55086d4dc607cb7f9622fa225b8ecc8be4?width=800"
        ]}
      />
      
      {/* Phone mockup */}
      <div className="py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/911cf30fc9519edabbfb82763f0c90015aec45de?width=1568" 
            alt="Romeo app mockup" 
            className="w-full max-w-3xl mx-auto rounded-3xl"
          />
        </div>
      </div>
      
      {/* Features Section */}
      <section id="features" className="py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Tag icon={MapPin} text="Plans" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black font-nunito mt-4 mb-4">
              Discover local plans
            </h2>
            <p className="text-base lg:text-lg text-black/50 font-nunito max-w-2xl mx-auto">
              Find the best things to do around you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FeatureCard 
              title="Live shows"
              description="Access the most local shows and events through the app."
              image="https://api.builder.io/api/v1/image/assets/TEMP/012518f7f3dd6881820eded5a36c8e61cf89dda8?width=1588"
              large
            />
            <FeatureCard 
              title="Bars and Restaurants"
              description="Find the best bars and restaurants for your trip."
              image="https://api.builder.io/api/v1/image/assets/TEMP/c1e89377b2107fa47b1027648408c6e4f2053ab9?width=820"
            />
            <FeatureCard 
              title="Museums"
              description="Reserve your spot at the top museums."
              image="https://api.builder.io/api/v1/image/assets/TEMP/bce857fe17256a61575f02da780b43476b745542?width=724"
            />
            <FeatureCard 
              title="Local Gems"
              description="Go beyond the tourist trail and discover authentic local treasures."
              image="https://api.builder.io/api/v1/image/assets/TEMP/357064d24fdb48f0ff6699c5efcfdc8b0c2ddb0f?width=1588"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Tag icon={Users} text="Testimonials" />
            <h2 className="text-2xl sm:text-3xl font-nunito text-black/50 mt-4">
              What people say about the app
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="space-y-3">
              <TestimonialCard 
                name="Lucas Moretti"
                location="Florence, Italy"
                comment="During a walk in London, the app pointed out the spot where executions used to take place at Tower Hill — including the beheading of Anne Boleyn in 1536. I never imagined I'd be learning such dark but fascinating history just by strolling around."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/aab4eb2e353122f0934039318e0386d7ebb963d5?width=66"
              />
              <TestimonialCard 
                name="Olivia Carter"
                location="Boston, USA"
                comment="Everything flowed naturally as I walked around. The restaurant and museum recommendations were spot-on."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/4f28d3d9bb488a35acb65847bddba5f76515b012?width=66"
              />
            </div>
            <div className="space-y-3">
              <TestimonialCard 
                name="María Fernández"
                location="Seville, Spain"
                comment="Tried the beta and it felt like having a personal guide in my pocket. Can't wait for the full release!"
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/ca62cc5f117a9551a38f413cd8eae610247cd2cf?width=66"
              />
              <TestimonialCard 
                name="Sofia Almeida"
                location="Lisbon, Portugal"
                comment="I joined the beta expecting a nice little travel helper, but this went way beyond. I was really impressed by how smooth navigation was in the Explore mode and the way recommendations feel so personal. Honestly, I don't think I'll travel without it anymore."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/a6fe0d29765cd7456dd5f642a5d0f45c2e52cf22?width=66"
              />
            </div>
            <div className="space-y-3">
              <TestimonialCard 
                name="Mateo Rivas"
                location="Buenos Aires, Argentina"
                comment="What a pleasure. The information was clear and always relevant, and the list of events felt perfectly curated for my interests. I especially enjoyed how seamlessly it integrated with my walks — I could explore freely without ever feeling lost."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/7d661d965139646fa7d450dd129b9c13a6d7a658?width=66"
              />
              <TestimonialCard 
                name="Daniel Thompson"
                location="Vancouver, Canada"
                comment="Using the beta was a pleasure. Clear info, great events, and a team that truly listens to its users."
                avatar="https://api.builder.io/api/v1/image/assets/TEMP/c8dcd6a6913511db2d64ebf80b3fcfb9f68bdd84?width=66"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/2 border border-black/10 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Tag icon={MessageSquare} text="FAQ" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black font-nunito mt-4 mb-6">
                  Frequently asked questions
                </h2>
                <p className="text-base text-black/50 font-nunito mb-6">
                  Can't find what you're looking for?<br />
                  Email us to: romeo@romeotravel.com
                </p>
                <button className="bg-[#FF6201] text-white px-6 py-2 rounded-full font-nunito font-semibold text-sm border border-white/20 hover:bg-[#e55601] transition-colors">
                  Contact us
                </button>
              </div>
              <div className="space-y-2">
                <FAQItem question="How does the Explore mode work?" />
                <FAQItem question="Is there a free trial available?" />
                <FAQItem question="Is it only for tourists?" />
                <FAQItem question="Can I book tickets through the app?" />
                <FAQItem question="Which cities are available?" />
                <FAQItem question="Do I need internet to use it?" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      
      <Footer />
    </div>
  );
}

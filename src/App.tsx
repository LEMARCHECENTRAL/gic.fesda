import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Wheat, Heart, Mail, MapPin, Calendar, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-green-600' : 'text-white'
              }`}>
                GIC FESDA
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Accueil', id: 'accueil' },
                { name: 'Activités', id: 'activites' },
                { name: 'À propos', id: 'apropos' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-green-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mb-4 py-4">
              {[
                { name: 'Accueil', id: 'accueil' },
                { name: 'Activités', id: 'activites' },
                { name: 'À propos', id: 'apropos' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            GIC FESDA
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            "Femme Solidaire pour le progrès économique et social"
          </p>
          <button
            onClick={() => scrollToSection('activites')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir nos activités
          </button>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activites" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Activités</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Le GIC FESDA excelle dans trois secteurs d'activité stratégiques, alliant expertise technique, savoir-faire traditionnel et innovation pour un développement économique durable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sous-traitance électrique */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Sous-traitance Électrique</h3>
                </div>
               <div className="space-y-4">
                 <p className="text-gray-600 leading-relaxed">
                   <strong className="text-blue-600">Services spécialisés :</strong> Élagage sélectif, abattage contrôlé, débroussaillage et entretien préventif autour des infrastructures électriques. Maintenance des couloirs de lignes haute et basse tension.
                 </p>
                 <div className="bg-blue-50 p-4 rounded-lg">
                   <h4 className="font-semibold text-gray-800 mb-2">Notre Expertise</h4>
                   <ul className="text-sm text-gray-600 space-y-1">
                     <li>• Équipe certifiée aux normes de sécurité électrique</li>
                     <li>• Formation continue en techniques d'élagage professionnel</li>
                     <li>• Équipements de protection individuelle conformes</li>
                     <li>• Respect strict des protocoles de sécurité ENEO</li>
                   </ul>
                 </div>
                 <p className="text-sm text-gray-500 italic">
                   "La sécurité avant tout : notre rigueur et notre professionnalisme garantissent la continuité du service électrique."
                 </p>
               </div>
              </div>
            </div>

            {/* Agriculture */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                 backgroundImage: 'url(https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Wheat className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Agriculture</h3>
                </div>
               <div className="space-y-4">
                 <p className="text-gray-600 leading-relaxed">
                   <strong className="text-green-600">Cultures diversifiées :</strong> Manioc, maïs, arachide, palmiers à huile, mil et sorgho. Production vivrière et commerciale adaptée au climat soudano-sahélien.
                 </p>
                 <div className="bg-green-50 p-4 rounded-lg">
                   <h4 className="font-semibold text-gray-800 mb-2">Approche Durable</h4>
                   <ul className="text-sm text-gray-600 space-y-1">
                     <li>• Techniques agroécologiques respectueuses de l'environnement</li>
                     <li>• Rotation des cultures pour préserver la fertilité des sols</li>
                     <li>• Utilisation d'engrais organiques et de compost</li>
                     <li>• Gestion optimisée de l'eau et des ressources naturelles</li>
                   </ul>
                 </div>
                 <p className="text-sm text-gray-500 italic">
                   "Allier tradition et modernité pour une agriculture productive et respectueuse de notre terre."
                 </p>
               </div>
              </div>
            </div>

            {/* Élevage */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                 backgroundImage: 'url(https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)',
                }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="text-amber-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Élevage</h3>
                </div>
               <div className="space-y-4">
                 <p className="text-gray-600 leading-relaxed">
                   <strong className="text-amber-600">Élevage diversifié :</strong> Volailles (poulets, pintades), bovins (zébus, taurins), porcs et caprins. Combinaison harmonieuse entre méthodes traditionnelles et techniques modernes.
                 </p>
                 <div className="bg-amber-50 p-4 rounded-lg">
                   <h4 className="font-semibold text-gray-800 mb-2">Qualité & Bien-être</h4>
                   <ul className="text-sm text-gray-600 space-y-1">
                     <li>• Suivi vétérinaire régulier et vaccination préventive</li>
                     <li>• Alimentation équilibrée avec produits locaux</li>
                     <li>• Infrastructures adaptées au climat tropical</li>
                     <li>• Respect des normes de bien-être animal</li>
                   </ul>
                 </div>
                 <p className="text-sm text-gray-500 italic">
                   "Des animaux en bonne santé pour des produits de qualité : notre engagement envers l'excellence."
                 </p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">À Propos du GIC FESDA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un groupe dynamique engagé pour le développement économique et social de la communauté
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Notre Présidente</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">BH</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Madame BAZAMA HAMADA Damaris</h4>
                    <p className="text-green-600 font-medium">Présidente du GIC FESDA</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Leader visionnaire et femme engagée, Madame BAZAMA HAMADA Damaris guide le GIC FESDA 
                  avec détermination vers l'excellence et le progrès. Son leadership inspire et mobilise 
                  nos 25 membres actifs autour de projets concrets pour le développement local.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Notre Siège Social</h4>
                  <p className="text-gray-600">Djamboutou, Garoua, Cameroun</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Année de Création</h4>
                  <p className="text-gray-600">Fondé en 2010</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Notre Équipe</h4>
                  <p className="text-gray-600">25 membres actifs et engagés</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Notre Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  Le GIC FESDA œuvre pour l'autonomisation économique des femmes et le développement durable 
                  de notre communauté. À travers nos activités diversifiées, nous créons des opportunités 
                  d'emploi, transmettons nos savoir-faire et contribuons au progrès social de notre région.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
            <div className="flex items-center justify-center mb-8">
              <Mail className="text-green-400 mr-3" size={24} />
              <a 
                href="mailto:gic.fesda@gmail.com" 
                className="text-xl hover:text-green-400 transition-colors"
              >
                gic.fesda@gmail.com
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-lg font-semibold">GIC FESDA</p>
                  <p className="text-gray-400">Djamboutou, Garoua, Cameroun</p>
                </div>
                <div className="text-gray-400">
                  <p>&copy; 2025 GIC FESDA. Tous droits réservés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
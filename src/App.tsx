import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const LogoCoverGreen = () => (
  <div className="logo-covergreen">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" stroke="#111" strokeWidth="4" fill="#fff"/>
      <circle cx="32" cy="32" r="18" fill="#00D300"/>
      <rect x="28" y="38" width="8" height="16" rx="4" fill="#111"/>
    </svg>
  </div>
);

const telegramFeatures = [
  {
    icon: '🤖',
    label: 'Interface animée',
    explanation: "Une interface moderne et animée pour une expérience utilisateur engageante et agréable."
  },
  {
    icon: '🔄',
    label: 'Google Tools',
    explanation: "Connexion et automatisation avec Google Sheets, Drive, Calendar, etc. pour booster la productivité."
  },
  {
    icon: '⚡',
    label: 'Automatisation',
    explanation: "Des tâches répétitives gérées automatiquement pour gagner du temps au quotidien."
  },
  {
    icon: '🎨',
    label: 'Design moderne',
    explanation: "Un look épuré, inspiré des tendances tech et green, pour valoriser l'image de marque."
  },
  {
    icon: '🔔',
    label: 'Alertes smart',
    explanation: "Des notifications intelligentes et personnalisées pour ne rien rater d'important."
  },
];

const n8nProjects = [
  {
    icon: '🎬',
    title: 'AI Video Factory',
    desc: "Publie automatiquement des vidéos sur TikTok, Instagram, YouTube, Facebook et LinkedIn à partir d'idées dans Google Sheets."
  },
  {
    icon: '📧',
    title: 'Assistant email intelligent',
    desc: "Tri, réponse automatique et classement des mails Gmail."
  },
  {
    icon: '🔎',
    title: 'Scraping réseaux sociaux',
    desc: "Veille automatique de profils Instagram ou LinkedIn, stockage dans Google Sheets."
  },
  {
    icon: '📰',
    title: 'Newsletter personnalisée',
    desc: "Génération et envoi automatique de newsletters avec OpenAI et Gmail."
  },
  {
    icon: '🔄',
    title: 'Sync bases de données',
    desc: "Synchronisation entre Airtable, Notion et Google Sheets."
  },
  {
    icon: '🔔',
    title: 'Alertes Slack/Discord',
    desc: "Notifications sur nouveaux leads ou événements importants."
  },
  {
    icon: '📅',
    title: "Gestion d'événements",
    desc: "Inscriptions Typeform → Airtable → Trello + email de confirmation."
  },
  {
    icon: '🤖',
    title: 'Chatbots IA',
    desc: "Création de chatbots pour sites web ou Telegram."
  },
  {
    icon: '💾',
    title: 'Backup GitHub',
    desc: "Sauvegarde automatique de workflows vers GitHub."
  },
  {
    icon: '📊',
    title: 'Conversion de fichiers',
    desc: "Convertit des fichiers (ex : JSON → Excel) et les envoie par email."
  },
];

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Header & Logo */}
      <header className="pt-10 pb-4 flex flex-col items-center">
        <LogoCoverGreen />
        <h1 className="text-4xl font-bold mb-2 text-covergreen">Anas Elmanssouri</h1>
        <p className="text-lg text-gray-700 mb-2">Candidat Alternance – Chargé(e) de Marketing & UX design (F/H) chez Cover Green</p>
        <p className="text-base text-gray-500">L'innovation digitale au service de l'aménagement extérieur clé en main</p>
      </header>

      {/* Projets */}
      <section className="max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-2xl font-semibold text-covergreen mb-6">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a
            href="https://www.craftmind.ai/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-white border border-covergreen/30 shadow p-6 flex flex-col items-start hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-covergreen mb-2">CraftMind AI</h3>
            <p className="text-gray-700">
              Plateforme d'agents IA avancés pour l'automatisation et l'optimisation des processus métier.<br />
              <span className="block mt-2 text-black font-medium">J'ai contribué à la création du site et participé aux projets d'automatisation.</span>
            </p>
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl bg-white border border-covergreen/30 shadow p-6 flex flex-col items-start hover:shadow-lg transition cursor-pointer group"
            onClick={() => {
              const modal = document.getElementById('telegram-modal');
              if (modal) modal.classList.remove('hidden');
            }}
          >
            <h3 className="text-xl font-bold text-covergreen mb-2">Telegram Trigger Bot</h3>
            <p className="text-gray-700">Assistant personnel automatisé : envoie-lui un message, il s'occupe du reste !</p>
          </motion.div>
        </div>
      </section>

      {/* Petits projets */}
      <section className="max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-2xl font-semibold text-covergreen mb-6">Petits projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {n8nProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white border border-covergreen/30 shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer min-h-[160px]"
            >
              <span className="text-3xl mb-2">{proj.icon}</span>
              <h4 className="font-bold text-covergreen text-center mb-1 text-lg">{proj.title}</h4>
              <p className="text-gray-700 text-sm text-center">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Telegram Bot */}
      <div id="telegram-modal" className="fixed inset-0 bg-black bg-opacity-40 hidden flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-2xl max-w-2xl w-full mx-4 relative shadow-lg border border-covergreen/30"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <button
            onClick={() => {
              const modal = document.getElementById('telegram-modal');
              if (modal) modal.classList.add('hidden');
            }}
            className="absolute top-4 right-4 text-covergreen hover:text-covergreen-dark text-2xl font-bold"
            aria-label="Fermer"
          >
            ✕
          </button>
          {/* Animation visuelle du bot */}
          <div className="flex flex-col items-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-covergreen/20 flex items-center justify-center shadow-lg mb-2"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#00D300" stroke="#0A1E13" strokeWidth="4"/>
                <rect x="25" y="38" width="10" height="12" rx="5" fill="#0A1E13"/>
                <ellipse cx="30" cy="28" rx="10" ry="8" fill="#fff"/>
                <ellipse cx="27" cy="28" rx="2" ry="3" fill="#0A1E13"/>
                <ellipse cx="33" cy="28" rx="2" ry="3" fill="#0A1E13"/>
                <rect x="27" y="33" width="6" height="2" rx="1" fill="#0A1E13"/>
              </svg>
            </motion.div>
            <span className="text-covergreen font-bold text-lg">Telegram Trigger Bot</span>
          </div>
          <div className="space-y-4 text-gray-800 text-lg text-center">
            <p>
              Un bot Telegram <span className="font-semibold text-covergreen">assistant personnel</span> : tu lui envoies un message, il automatise ta vie !
              <br />
              Il exécute des automatisations sur demande, gère tes rappels, tes tâches, tes routines, et connecte tes outils préférés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 my-4">
              {telegramFeatures.map((feature, idx) => (
                <FeatureCard
                  key={feature.label}
                  feature={feature}
                  idx={idx}
                  selectedFeature={selectedFeature}
                  setSelectedFeature={setSelectedFeature}
                />
              ))}
            </div>
            {/* Explication dynamique sous le carré sélectionné */}
            {selectedFeature !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-2 px-4 py-3 rounded-xl bg-covergreen/10 text-covergreen font-medium shadow text-base max-w-md mx-auto"
              >
                {telegramFeatures[selectedFeature].explanation}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-covergreen/10 flex flex-col items-center">
        <LogoCoverGreen />
        <a
          href="https://www.linkedin.com/in/anas-el-manssouri-268a35295/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-covergreen font-semibold text-lg hover:underline"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>
        <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()} Anas Elmanssouri — Portfolio de candidature Alternance Marketing & UX design Cover Green</p>
      </footer>
    </div>
  );
};

// Nouveau composant pour les carrés interactifs
function FeatureCard({ feature, idx, selectedFeature, setSelectedFeature }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedFeature(idx)}
      className={`bg-covergreen/10 rounded-xl px-4 py-2 flex flex-col items-center shadow focus:outline-none focus:ring-2 focus:ring-covergreen transition ${selectedFeature === idx ? 'ring-2 ring-covergreen' : ''}`}
      aria-pressed={selectedFeature === idx}
    >
      <span className="text-2xl">{feature.icon}</span>
      <span className="text-sm mt-1">{feature.label}</span>
    </motion.button>
  );
}

export default App; 
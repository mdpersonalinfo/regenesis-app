import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            🌟 REGENESIS
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Il tuo percorso fitness personalizzato
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/login"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition-colors"
            >
              Accedi
            </Link>
            <Link 
              href="/register"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition-colors"
            >
              Registrati
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Obiettivi Personalizzati</h3>
            <p className="text-gray-600">Piani su misura per i tuoi obiettivi specifici</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Tracking Completo</h3>
            <p className="text-gray-600">Monitora progressi, allenamenti e alimentazione</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-bold mb-2">Supporto Professionale</h3>
            <p className="text-gray-600">Seguito costante da professionisti qualificati</p>
          </div>
        </div>
      </div>
    </div>
  )
}
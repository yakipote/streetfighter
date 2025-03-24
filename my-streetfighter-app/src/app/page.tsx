import { characters } from '@/data/characters';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-[#050505] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5)' }}>
            STREET FIGHTER 6
          </h1>
          <p className="text-[#00ffff] text-xl max-w-2xl mx-auto font-mono">
            SELECT YOUR FIGHTER IN THE CYBER REALM
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <li key={character.id} className="group">
              <Link href={`/characters/${character.id}`} className="block">
                <div className="bg-[#0a0a0a] border border-[#333] hover:border-[#00ffff] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={character.imagePath}
                      alt={character.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-4 right-4 bg-[#ff00ff] text-black px-3 py-1 text-xs font-bold rounded">
                      FIGHTER
                    </div>
                    <h2 className="text-2xl font-bold text-[#00ffff] mb-2 group-hover:text-[#ff00ff] transition-colors">
                      {character.name}
                    </h2>
                    <div className="flex items-center text-[#666] text-sm">
                      <span className="mr-2">●</span>
                      <span>{character.profile.nationality}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#222] flex justify-between items-center">
                      <span className="text-[#00ff00] text-xs font-mono">ID: {character.id.toUpperCase()}</span>
                      <span className="text-[#ff00ff] text-xs">VIEW PROFILE →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { characters } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CharacterPage({ params }: { params: { id: string } }) {
  // Using await to make sure params is properly resolved
  const id = await Promise.resolve(params.id);
  const character = characters.find((character) => character.id === id);
  
  if (!character) {
    notFound();
  }
  
  return (
    <div className="bg-gradient-to-b from-black to-[#050505] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#00ffff] hover:text-[#ff00ff] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Characters
          </Link>
        </div>
        
        <div className="relative mb-12 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-lg blur opacity-25"></div>
                <div className="relative bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden">
                  <Image 
                    src={character.imagePath}
                    alt={character.name}
                    width={500}
                    height={700}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4"></div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-5xl font-extrabold mb-6 text-[#00ffff]" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.7)' }}>
                {character.name}
              </h1>
              
              <div className="bg-[#0a0a0a] border border-[#333] rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#ff00ff]" style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.5)' }}>
                  PROFILE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#00ffff] mr-3"></div>
                    <span className="text-[#666] mr-2">Height:</span>
                    <span className="text-[#00ffff] font-mono">{character.profile.height}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#ff00ff] mr-3"></div>
                    <span className="text-[#666] mr-2">Weight:</span>
                    <span className="text-[#00ffff] font-mono">{character.profile.weight}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#00ff00] mr-3"></div>
                    <span className="text-[#666] mr-2">Nationality:</span>
                    <span className="text-[#00ffff] font-mono">{character.profile.nationality}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0a0a0a] border border-[#333] rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#ff00ff]" style={{ textShadow: '0 0 5px rgba(255, 0, 255, 0.5)' }}>
                  SPECIAL MOVES
                </h2>
                <ul className="space-y-4">
                  {character.profile.specialMoves.map((move, index) => (
                    <li key={move} className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#111] border border-[#333] rounded-md mr-4">
                        <span className="text-[#00ff00] font-mono">{index + 1}</span>
                      </div>
                      <div className="bg-[#111] border-l-2 border-[#00ffff] px-4 py-2 w-full rounded-r-md">
                        <span className="text-[#00ffff] font-bold">{move}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-[#0a0a0a] border border-[#333] rounded-lg px-6 py-3 text-[#00ffff]">
            <span className="text-[#666] mr-2">Character ID:</span>
            <span className="font-mono text-[#00ff00]">{character.id.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

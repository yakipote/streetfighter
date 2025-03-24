import { characters } from "@/data/characters";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

interface CharacterProps {
  character: (typeof characters)[0];
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = characters.find((character) => character.id === params.id);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Image 
            src={character.imagePath}
            alt={character.name}
            width={300}
            height={400}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="w-full md:w-2/3 border p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <p>Height: {character.profile.height}</p>
          <p>Weight: {character.profile.weight}</p>
          <p>Nationality: {character.profile.nationality}</p>
          <h2 className="text-2xl font-semibold mt-4">Special Moves</h2>
          <ul>
            {character.profile.specialMoves.map((move) => (
              <li key={move}>{move}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

import { characters } from "@/data/characters";
import { GetStaticPaths, GetStaticProps } from "next";

interface CharacterProps {
  character: (typeof characters)[0];
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = characters.find((character) => character.id === params.id);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
      <div className="border p-4 rounded-lg shadow-md">
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
    </main>
  );
}

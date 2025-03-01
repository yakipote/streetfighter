import { characters } from '@/data/characters';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Street Fighter 6 Characters</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <li key={character.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/characters/${character.id}`}>
              <h2 className="text-2xl font-semibold">{character.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

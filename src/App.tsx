import { useState } from 'react';
import './App.css';
import ErrorBoundary from './components/Error';
import ErrorController from './components/ErrorController';
import Pokemons from './components/Pokemons';
import Search from './components/Search';
import { Pokemon } from './types';
import { fetchPokemons } from './utils/pokemons';

const App = () => {
    const [isLoading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const getPokemons = (query: string) => {
        setLoading(true);
        fetchPokemons(query).then(setPokemons);
    };

    return (
        <ErrorBoundary>
            <main>
                <ErrorController />
                <Search onClick={getPokemons} />
                {isLoading ? (
                    <div className="loading" />
                ) : (
                    <Pokemons pokemons={pokemons} />
                )}
            </main>
        </ErrorBoundary>
    );
};
export default App;

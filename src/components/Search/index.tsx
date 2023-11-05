import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

interface Props {
    onClick: (input: string) => void;
}

const Search = ({ onClick }: Props) => {
    const [query, setQuery] = useState('');

    const handleClick = () => {
        onClick(query);
        saveToHistory();
    };

    const saveToHistory = () => localStorage.setItem('history', query);

    return (
        <section className="search">
            <Input onChange={setQuery} value={query || ''} />
            <Button onClick={handleClick} />
        </section>
    );
};

export default Search;

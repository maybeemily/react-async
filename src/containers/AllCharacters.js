import Characters from '../components/Characters';
import { withFetch } from '../components/withFetch';
import { getCharacters } from '../services/RickMortyApi';

export default withFetch(getCharacters, [], 'characters')(Characters);

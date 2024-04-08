import { hydrateRoot } from 'react-dom/client';
//import GoalsPage from './GoalsPage';
import BodyContent from './components/BodyContent.js';

hydrateRoot(document.getElementById('root'), <BodyContent />);

import './styles.css';
import { processSearch } from './controller/appController';
import { searchInputManager } from './view/searchInputManager';

searchInputManager.initialize();
processSearch('india');

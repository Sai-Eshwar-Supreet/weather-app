import { processSearch } from '../controller/appController';

const form = document.querySelector('#search-form');

const searchInputManager = (function () {
  function handleSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get('location');

    if (!query) return;
    processSearch(query);
  }

  function initialize() {
    form.addEventListener('submit', handleSearch);
  }

  return { initialize };
})();

export { searchInputManager };

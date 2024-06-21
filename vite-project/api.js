const BASE_URL = 'https://podcast-api.netlify.app';

const genreMap = {
  1: 'Personal Growth',
  2: 'Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family',
};

function getGenreTitle(genreId) {
  return genreMap[genreId] || 'Unknown';
}

async function fetchPodcasts() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error; // Re-throw to allow component handling
  }
}

async function fetchGenre(genreId) {
  try {
    const url = `${BASE_URL}/genre/${genreId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching genre:', error);
    throw error; // Re-throw to allow component handling
  }
}

async function fetchShow(showId) {
  try {
    const url = `${BASE_URL}/id/${showId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching show:', error);
    throw error; // Re-throw to allow component handling
  }
}

export default {
  fetchPodcasts,
  fetchGenre,
  fetchShow,
  getGenreTitle,
};
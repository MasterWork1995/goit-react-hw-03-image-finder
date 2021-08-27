const KEY = "22352906-4517ac7acc857600c513123ad";

const fetchImage = (query, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    return response.json();
  });
};

const pixabayAPI = {
  fetchImage,
};

export default pixabayAPI;

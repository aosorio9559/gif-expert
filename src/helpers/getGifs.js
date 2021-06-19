export async function getGifs(category) {
  category = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=m9eE327ieWeSq4mGSlPvS9u8LcIB6zBI&q=${category}&limit=10`;

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
}

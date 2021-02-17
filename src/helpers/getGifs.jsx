
export const getGifs = async(categoria) => {

  const API = 'FB2bo3pXIvjKkcx3fY7AKyBuZY6ukPxj'
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=${API}`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  
  const gifs = data.map (img => {
    return{
      id: img.id,
      title: img.title,
      size: img.images.downsized_medium.url
    }
  })

  return gifs;

}
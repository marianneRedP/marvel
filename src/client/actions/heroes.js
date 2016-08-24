import crypto from 'crypto';
import 'whatwg-fetch';

export const HEROES_FETCHED = 'HEROES_FETCHED';
export const HERO_FETCHED = 'HERO_FETCHED';

export const heroesFetched = (heroes) => ({
  type: HEROES_FETCHED,
  heroes: _.keyBy(heroes, o => o.id),
});

export const heroFetched = (result) => ({
  type: HERO_FETCHED,
  hero: result,
});

const requestJSON = (url) => {
  const options = {method: 'GET'};
  options.headers = { 'Content-Type': 'application/json' };
  
  return fetch(url, options).then(response => response.json()).catch(console.warn);
};

const getUrlInfos = () => {
  const ts = Date.now();
  const publicKey = '2a1fa8e58afe69d776a0ec7ed409c791';
  const privateKey = '0bdbfdab2e33ec304f4cb7825243178cadbdf43e';
  const hash = ts + privateKey + publicKey;
  const urlHashed = crypto.createHash('md5').update(hash).digest('hex');

  const urlInfos = `?ts=${ ts }&apikey=${ publicKey }&hash=${ urlHashed }`;
  return urlInfos;
};

export const fetchHeroes = ()  => {
  return (dispatch) => {
    const urlInfos = getUrlInfos();
    const url = `http://gateway.marvel.com:80/v1/public/characters${ urlInfos }`;

    requestJSON(url)
    .then(heroes => dispatch(heroesFetched(heroes.data.results)));
  };
};

export const fetchHero = (id)  => {
  return (dispatch) => {
   const urlInfos = getUrlInfos();
   const url = `http://gateway.marvel.com:80/v1/public/characters/${ id }${ urlInfos }`;
    
    requestJSON(url)
    .then(hero => dispatch(heroFetched(hero.data.results)));
  };
};

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
  const publicKey = '298bab46381a6daaaee19aa5c8cafea5';
  const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
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

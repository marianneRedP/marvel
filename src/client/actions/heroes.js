import crypto from 'crypto';

export const HERO_FETCHED = 'HERO_FETCHED';
export const HERO_ID_FETCHED = 'HERO_ID_FETCHED';

export const heroFetched = (heroes) => ({
  type: HERO_FETCHED,
  heroes: _.keyBy(heroes, o => o.id),
});

export const heroIdFetched = (result) => ({
  type: HERO_ID_FETCHED,
  hero: result,
});

export const fetchHeroes = ()  => {
  return (dispatch) => {
    const ts = Date.now();
    const publicKey = '298bab46381a6daaaee19aa5c8cafea5';
    const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    const hash = ts + privateKey + publicKey;
    const urlHashed = crypto.createHash('md5').update(hash).digest('hex');

    const url = `http://gateway.marvel.com:80/v1/public/characters?ts=${ ts }&apikey=${ publicKey }&hash=${ urlHashed }`;
  
    const options = {method: 'GET'};
    options.headers = { 'Content-Type': 'application/json' };
    
    fetch(url, options)
    .then(response => response.json())
    .then(heroes => dispatch(heroFetched(heroes.data.results)));
  };
};

export const fetchHeroesID = (id)  => {
  return (dispatch) => {
    const ts = Date.now();
    const publicKey = '298bab46381a6daaaee19aa5c8cafea5';
    const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
    const hash = ts + privateKey + publicKey;
    const urlHashed = crypto.createHash('md5').update(hash).digest('hex');

    const url = `http://gateway.marvel.com:80/v1/public/characters/${ id }?ts=${ ts }&apikey=${ publicKey }&hash=${ urlHashed }`;
  
    const options = {method: 'GET'};
    options.headers = { 'Content-Type': 'application/json' };
    
    fetch(url, options)
    .then(response => response.json())
    .then(heroes => dispatch(heroIdFetched(heroes.data.results)));
  };
};

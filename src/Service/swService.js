export default class SwService {
    constructor() {
        this._apiBase = ('https://swapi.dev/api/');
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status:${res.status}`);
        }

        return await res.json();
    }

    getAllPlanets = async (page) => {
        const planets = await this.getResource(`planets/?page=${page}`);
        const res = planets.results.map(this._transformPlanet);
        return Promise.all(res).then(item => item);
    }

    getAllPages = async () => {
        let i = 1;
        while (true) {
            const link = await this.getResource(`planets/?page=${i}`);
            if (link.next === null) break; 
            i++;
        }    
        
        return i;
    }

    getCharacter = async (id) => {
        const pers = await this.getResource(`people/${id}/`);
        return this._transformChar(pers)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getResidents = async (id) => {
        console.log(id);
        const planet = await (await fetch(`${this._apiBase}planets/${id}`)).json();
        const res = planet.residents.map(async (item) => {
            const link = await (await fetch(item)).json();
            
            const res = this._transformChar(link);
            
            return res;
        });
        
        return Promise.all(res).then(item => item);
    } 

    getImage = async (name) => {
        const img = await fetch(`../img/${name}`);
        return img;
    }    

    _getId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _isData = (item) => {
        if (item  === 'unknown') {
            return 'no info :(';
            
        } else {
            return item;
        }
    }

    _transformPlanet = async (planet) => {
        
        return {
            id: this._getId(planet),
            name: this._isData(planet.name),
            climate: this._isData(planet.climate),
            population: this._isData(planet.population),
            diameter: this._isData(planet.diameter),
            orbital_period: this._isData(planet.orbital_period),
            gravity: this._isData(planet.gravity),
            url: planet.url
        }
    }

    _transformChar = (char) => {
        return {
            id: this._getId(char),
            name: char.name,
            birth_year: char.birth_year,
            gender: char.gender,
            hair_color: char.hair_color,
            eye_color: char.eye_color,
            height: char.height,
            mass: char.mass,
            skin_color: char.skin_color
        }
    }
}
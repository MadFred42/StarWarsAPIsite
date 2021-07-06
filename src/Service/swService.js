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
        return await this._transformChar(pers)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(planet).then(item => {return item});
    }

    _getResidents = (planet) => {
        const pla = planet.map(async (item) => {
            const label = await (await fetch(item)).json();
            console.log(await label.name);
            return await label.name;
        });
        
        return Promise.all(pla).then(async (item) => await item);
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
        const res = await this._getResidents(planet.residents).then(item => {return <span>{item.join(', ')}</span>})
        
        console.log(res);
        const res1 = {
            id: this._getId(planet),
            name: this._isData(planet.name),
            climate: this._isData(planet.climate),
            population: this._isData(planet.population),
            diameter: this._isData(planet.diameter),
            orbital_period: this._isData(planet.orbital_period),
            gravity: this._isData(planet.gravity),
            residents: res
        }

        return await res1;
    }

    _transformChar = (char) => {
        return {
            id: this._getId(char),
            name: char.name,
            birth_year: char.birth_year,
            gender: char.gender,
            height: char.height,
            skin_color: char.skin_color
        }
    }
}
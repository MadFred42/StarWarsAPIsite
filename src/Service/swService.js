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

    getAllPlanets = async () => {
        let i = 1;
        const newArr = [];
        while (true) { 
            const planets = await this.getResource(`planets/?page=${i}`);
            newArr.push(planets.results);
            if (planets.next === null) break;
            i++;
        }
        const res = newArr.flat().map(this._transformPlanet); 
        return Promise.all(res).then(item => item);
    }

    getResidents = async (arr) => {
        const residents = arr.map(async (item) => {
            const res = await (await fetch(item)).json();
            return this._transformResident(res);
        })
        
        return Promise.all(residents).then(item => item);
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
            terrain: this._isData(planet.terrain),
            gravity: this._isData(planet.gravity),
            url: planet.url,
            residents: planet.residents
        }
    }

    _transformResident = (char) => {
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
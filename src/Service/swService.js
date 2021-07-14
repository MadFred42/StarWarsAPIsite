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

    // _getResidents = async (url) => {
    //     const planet = await (await fetch(url)).json()
    //     const res = planet.residents.map((item) => {
    //         return (
    //             <span>{item}</span>
    //         )
    //     });
    //     console.log(res);
    //     return res;
    // } 

    _getResidents = async (url) => {
        const planet = await (await fetch(url)).json();
        const res = planet.residents.map(async (item) => {
            const link = await (await fetch(item)).json();
            console.log(link);
            const res = this._transformChar(link);

            return res.name;
        });

        Promise.all(res).then(item => console.log(item));
        
        return Promise.all(res).then(item => item);
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
        // const res = await this._getResidents(planet.residents).then(item => {return item.join(', ')});
        
        const res1 = {
            id: this._getId(planet),
            name: this._isData(planet.name),
            climate: this._isData(planet.climate),
            population: this._isData(planet.population),
            diameter: this._isData(planet.diameter),
            orbital_period: this._isData(planet.orbital_period),
            gravity: this._isData(planet.gravity),
            url: planet.url
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
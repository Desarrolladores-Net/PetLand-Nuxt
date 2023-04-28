import Provinces from './provinces.json'

export const getMunicipality = (province) => {

    let result = []

    Provinces.Provincias.forEach(item => {
        if(item.nombre === province)
        {
            item.municipios.forEach(muni => {
                result.push({name: muni})
            })
        }
    })

    return result;
}

export const getProvinces = () => {
    return  [{name: 'Pinar del Río'}, {name:'Artemisa'}, {name:'La Habana'}, {name:'Mayabeque'}, {name:'Matanzas'}, {name:'Villa Clara'}, {name:'Cienfuegos'}, {name:'Sancti Spíritus'}, {name:'Ciego de Ávila'}, {name:'Camagüey'}, {name:'Las Tunas'}, {name:'Holguín'}, {name:'Granma'}, {name: 'Santiago de Cuba'}, {name:'Guantánamo'},{name: 'Isla de la juventud'}]
} 
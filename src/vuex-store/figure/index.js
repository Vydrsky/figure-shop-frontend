import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default{
    namespaced: true,
    state(){
        return{
            figures: [
                {
                    id: '34785623875340dgs-sdfasfasdf',
                    name: 'Pantera',
                    material: 'stal nierdzewna',
                    description: 'pantera wykonana ze stali nierdzewnej',
                    height: 100,
                    width: 200,
                    filePath: '/img/pantera.jpg'
                },
                {
                    id: '245712fghfgh40dgs-sdfasfasdf',
                    name: 'Kropla',
                    material: 'aluminium',
                    description: 'amelinowa kropla wody',
                    height: 50,
                    width: 150,
                    filePath: '/img/kropla.jpg'
                },
                {
                    id: '245712fghfgh40dgs-sdfasfasdf',
                    name: 'Kropla',
                    material: 'aluminium',
                    description: 'amelinowa kropla wody',
                    height: 50,
                    width: 150,
                    filePath: '/img/logo.jpg'
                },
                {
                    id: '245712fghfgh40dgs-sdfasfasdf',
                    name: 'Kropla',
                    material: 'aluminium',
                    description: 'amelinowa kropla wody',
                    height: 50,
                    width: 150,
                    filePath: '/img/company.png'
                },
                {
                    id: '245712fghfgh40dgs-sdfasfasdf',
                    name: 'Kropla',
                    material: 'aluminium',
                    description: 'amelinowa kropla wody',
                    height: 50,
                    width: 150,
                    filePath: '/img/bird.jpg'
                },
            ],
        }
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
}
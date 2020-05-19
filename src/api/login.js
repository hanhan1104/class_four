import service from '../utils/request'

export function login(params){
    return service({
        url:'systemport/login',
        method:'get',
        params
    })
}
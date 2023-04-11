export function SET_INFO(key, value) {
    localStorage.setItem(key, value)
}

export function SET_OBJECT_INFO(key, value) {
 
    localStorage.setItem(key, JSON.stringify(value))
}

export function REMOVE_INFO(key) {

    localStorage.removeItem(key)
}

export function GET_INFO(key) {
    const token = localStorage.getItem(key);
    return token
}

export function GET_OBJECT_INFO(key) {

    return JSON.parse(localStorage.getItem(key));
}
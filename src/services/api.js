export function url(path){
    if(!path.indexOf('/') == 0){
        path = `/${path}`;
    }

    return `http://localhost:3333${path}`;
}

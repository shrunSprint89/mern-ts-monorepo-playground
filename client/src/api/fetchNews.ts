
export const getNewsPosts = () => {
    return fetch('https://dummyjson.com/posts?limit=20&skip=0').then(res => res.json());
}
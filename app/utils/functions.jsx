export const fetchPosts = (url) => {
    return fetch(url)
        .then(res => res.json())
}
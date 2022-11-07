import { fetchPosts } from "../../utils/functions"
import { LikeButton } from "../LikeButton"

export default async function ListOfPosts () {
    const posts = await fetchPosts('https://jsonplaceholder.typicode.com/posts')

    return posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton/>
        </article>
    ))
}
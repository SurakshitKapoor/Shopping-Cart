import Card from "./Card";

function Products ({posts}) {
    console.log("Posts in Products are : ", posts);
    return (
        <div>
            {/* Products Component */}
            {/* {posts[2].title};
            <br></br>
            {posts[2]['title']}; */}
            {
                posts.map((post) => (<Card key={post.id} post={post}  />))
            }
        </div>
    )
}

export default Products;

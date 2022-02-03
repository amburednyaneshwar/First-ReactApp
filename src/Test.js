import axios from "axios";
import React from "react";
import Data from './components/Data/Data.json'
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Test() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/100`).then((response) => {
      setPost(response.data);
	  console.log(response.data)
    });
  }, []);

  function createPost() {

    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
		console.log(response.data)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}



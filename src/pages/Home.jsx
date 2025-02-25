import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { getDocs } from "firebase/firestore";
import { usePostsContext } from "../context/CreatePostProv";
import Post from "./Post";
import Loader from "./Loader";

function Home() {
  const { posts, setPosts, collectionDb, isLoading, setIsLoading } =
    usePostsContext();

  useEffect(() => {
    if (posts.length === 0) {
      async function getPosts() {
        setIsLoading(true);
        try {
          const data = await getDocs(collectionDb);
          setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (e) {
          console.log(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      getPosts();
    }
  }, [collectionDb, posts.length, setPosts, setIsLoading]);

  return (
    <div>
      <Navigation />
      <div className="container mx-auto pb-30">
        <h1 className="mt-20 font-bold text-center text-3xl text-[#364153]">
          Today&apos;s Posts
        </h1>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="flex flex-col space-y-5 md:space-y-0 mt-6 px-7 md:flex-row flex-wrap md:gap-5">
            {posts.length > 0 ? (
              posts.map((post) => <Post post={post} key={post.id} />)
            ) : (
              <p>No posts available</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;

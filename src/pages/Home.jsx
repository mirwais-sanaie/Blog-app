import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { getDocs } from "firebase/firestore";
import { usePostsContext } from "../context/CreatePostProv";
import Post from "./Post";
import Loader from "./Loader";
import Notification from "../components/Notification";
import { useAuthContext } from "../context/FireAuthContext";

function Home() {
  const { posts, setPosts, collectionDb, isLoading, setIsLoading } =
    usePostsContext();
  const { showNotification, setShowNotification } = useAuthContext();

  useEffect(() => {
    if (posts.length === 0) {
      async function getPosts() {
        setIsLoading(true);
        try {
          const data = await getDocs(collectionDb);
          const postsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setPosts(postsData);
        } catch (e) {
          console.log(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      getPosts();
    }
  }, [collectionDb, setPosts, setIsLoading, posts.length]);

  return (
    <div className="relative">
      <Navigation />
      <div className="absolute">
        {showNotification && (
          <Notification onClose={() => setShowNotification(false)} />
        )}
      </div>
      <div className="container mx-auto pb-30">
        <h1 className="mt-25 font-WorkSans font-semibold text-center text-4xl text-[#364153]">
          Blog App
        </h1>
        <p className="text-stone-500 text-center md:max-w-3xl font-roboto px-2 sm:text-sm md:text-base my-4 mx-auto">
          Explore and share your thoughts with our blog app! Create, edit, and
          engage with posts, featuring user profiles and image uploads for a
          personalized experience.
        </p>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
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

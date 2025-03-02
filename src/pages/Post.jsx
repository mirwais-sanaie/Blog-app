/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth } from "../config/firebase";
import { usePostsContext } from "../context/CreatePostProv";
import { useAuthContext } from "../context/FireAuthContext";
import TrashButton from "../components/TrashButton";
import EditButton from "../components/EditButton";
import EditInputs from "../components/EditInputs";

function Post({ post }) {
  const { deletePost, updatePost } = usePostsContext();
  const { isAuth } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(post.title);
  const [updateContent, setUpdateContent] = useState(post.content);

  async function handleDelete(id) {
    setIsLoading(true);
    await deletePost(id);
    setIsLoading(false);
  }

  function handleIsEdit() {
    setIsEditing(true);
  }

  async function saveEdit() {
    setIsLoadingEdit(true);
    await updatePost(post.id, updateTitle, updateContent);
    setIsLoadingEdit(false);
    setIsEditing(false);
  }

  return (
    <li className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-100 hover:ring hover:ring-offset-2 hover:ring-stone-400">
      <div className="relative">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[200px] object-cover"
          />
        )}
        {isAuth && post.author.id === auth?.currentUser?.uid && (
          <div className="absolute top-2 right-2 flex flex-col">
            <TrashButton
              isLoading={isLoading}
              post={post}
              handleDelete={handleDelete}
            />
            <EditButton
              isEditing={isEditing}
              saveEdit={saveEdit}
              handleIsEdit={handleIsEdit}
            />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="flex items-center space-x-1 mb-3">
          <img
            width={"20px"}
            height={"20px"}
            className="rounded-full"
            src={post.author.profImg}
            alt=""
          />
          <span>{post.author.name}</span>
        </p>
        {isEditing ? (
          <>
            <EditInputs
              updateTitle={updateTitle}
              setUpdateTitle={setUpdateTitle}
              updateContent={updateContent}
              setUpdateContent={setUpdateContent}
              isEditing={isEditing}
              saveEdit={saveEdit}
              handleIsEdit={handleIsEdit}
              isLoadingEdit={isLoadingEdit}
            />

            {/*  */}
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{post.content}</p>
          </>
        )}
      </div>
    </li>
  );
}

export default Post;

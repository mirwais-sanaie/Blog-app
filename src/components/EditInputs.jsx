/* eslint-disable react/prop-types */
function EditInputs({
  updateTitle,
  setUpdateTitle,
  updateContent,
  setUpdateContent,
  isEditing,
  saveEdit,
  handleIsEdit,
  isLoadingEdit,
}) {
  return (
    <>
      <input
        type="text"
        value={updateTitle}
        onChange={(e) => setUpdateTitle(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 mb-3"
      />
      <textarea
        value={updateContent}
        onChange={(e) => setUpdateContent(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        rows="4"
      />

      <button
        onClick={isEditing ? saveEdit : handleIsEdit}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <span
          className={`animate-spin ${
            isLoadingEdit ? "inline-block" : "hidden"
          } size-4 border-[3px] border-current border-t-transparent text-white rounded-full`}
          role="status"
          aria-label="loading"
        ></span>
        Save Changes
      </button>
    </>
  );
}

export default EditInputs;

/* eslint-disable react/prop-types */
function EditButton({ isEditing, handleIsEdit, saveEdit }) {
  return (
    <button
      onClick={isEditing ? saveEdit : handleIsEdit}
      className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-blue-100 transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-blue-500 edit-icon ${
          isEditing ? "hidden" : ""
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-green-500 ${
          isEditing ? "" : "hidden"
        } tick-icon`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default EditButton;

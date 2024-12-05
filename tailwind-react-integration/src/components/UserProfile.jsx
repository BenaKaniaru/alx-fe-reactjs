export default function UserProfile() {
  return (
    <div className="bg-gray-100 p-6 sm:p-4 md:p-8 md:max-w-sm sm:max-w-xs mx-auto my-10 md:my-20 rounded-lg shadow-lg">
      <img
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4">
        John Doe
      </h1>
      <p className="sm:text-sm md:text-base text-gray-600 ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}
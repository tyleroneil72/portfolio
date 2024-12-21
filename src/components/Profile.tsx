const Profile = () => {
  return (
    <div className='bg-indigo-500 h-full rounded-lg flex flex-col items-center justify-center p-6 shadow-md'>
      <div className='w-24 h-24 rounded-full bg-gray-700 mb-4'></div>
      <h1 className='text-lg font-bold'>Tyler O'Neil</h1>
      <p>Software Developer</p>
      <p>Toronto</p>
      <button className='mt-4 px-4 py-2 bg-gray-900 rounded hover:bg-gray-800'>
        View Resume
      </button>
    </div>
  );
};

export default Profile;

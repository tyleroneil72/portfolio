const ResumeButton = () => {
  return (
    <a
      href='/Tyler-Oneil-Resume.pdf'
      target='_blank'
      rel='noreferrer'
      className='group relative overflow-visible px-6 py-2 font-medium text-white'
    >
      <span className='absolute inset-0 h-full w-full translate-x-0 -skew-x-12 transform bg-indigo-500 transition-all duration-300 ease-out group-hover:skew-x-12 group-hover:bg-indigo-700'></span>
      <span className='absolute inset-0 h-full w-full skew-x-12 transform bg-indigo-700 transition-all duration-300 ease-out group-hover:-skew-x-12 group-hover:bg-indigo-500'></span>
      <span className='relative'>View Resume</span>
    </a>
  );
};

export default ResumeButton;

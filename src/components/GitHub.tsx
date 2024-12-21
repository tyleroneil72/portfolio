import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  const calendarTheme = {
    light: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
    dark: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
  };

  return (
    <div className='bg-gray-800 rounded-lg p-4 shadow-md w-full flex items-center justify-center'>
      <GitHubCalendar
        username='tyleroneil72'
        fontSize={12}
        blockSize={10}
        blockMargin={2}
        blockRadius={0}
        theme={calendarTheme}
      />
    </div>
  );
};

export default GitHub;

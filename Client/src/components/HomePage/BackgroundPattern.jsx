
const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45"></div>
      <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/20 rotate-12"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-blue-400/20 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white/20 rotate-12"></div>
    </div>
  );
};

export default BackgroundPattern;
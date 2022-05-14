const Logo = () => {
  return (
    <div
      className="bg-white h-12 w-12 
      rounded-full flex flex-col 
      justify-center items-center"
    >
      <div
        className="h-3 w-3 rounded-full 
        bg-gradient-to-r from-red-100 to-red-800 mb-0.5"
      />
      <div className="flex">
        <div
          className="h-3 w-3 rounded-full bg-gradient-to-t 
        from-green-100 to-green-800 mr-0.5"
        />
        <div
          className="h-3 w-3 rounded-full bg-gradient-to-tl 
        from-white via-purple-800 to-white"
        />
        <div
          className="h-3 w-3 rounded-full bg-gradient-to-b 
        from-blue-100 to-blue-800 ml-0.5"
        />
      </div>
      <div
        className="h-3 w-3 rounded-full bg-gradient-to-l 
      from-yellow-100 to-yellow-800 mt-0.5"
      />
    </div>
  );
};

export default Logo;

// components/HoverImage.js

const HoverImage = () => {
  return (
    <div className="relative group w-[500px] h-[600px] overflow-hidden cursor-pointer">
      {/* Text that shows before hovering */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 text-white text-xl transition-opacity duration-300 group-hover:opacity-0">
        See Me
      </div>
      
      {/* Image that reveals on hover */}
     
    </div>
  );
};

export default HoverImage;
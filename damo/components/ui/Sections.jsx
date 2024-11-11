// components/Sections.js

const sections = [
  { id: 1, title: "Section 1", bgColor: "bg-red-500" },
  { id: 2, title: "Section 2", bgColor: "bg-green-500" },
  { id: 3, title: "Section 3", bgColor: "bg-blue-500" },
  { id: 4, title: "Section 4", bgColor: "bg-yellow-500" },
];

const Sections = () => {
  return (
    <div>
        <section
          className={` h-screen flex items-center`}
        >
          
        </section>
        <section
          className={` h-screen flex items-center`}
        >
         
        </section>
        <section
          className={` h-screen flex items-center`}
        >
          <h1 className="text-white text-4xl"></h1>
        </section>
        <section
          className={` h-screen flex items-center`}
        >
          <h1 className="text-white text-4xl"></h1>
        </section>
         <section
          className={` h-screen flex items-center`}
        >
          <h1 className="text-white text-4xl"></h1>
        </section>
    </div>
  );
};

export default Sections;
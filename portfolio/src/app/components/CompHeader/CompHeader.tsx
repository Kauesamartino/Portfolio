import CompDarkMode from "../CompDarkMode/CompDarkMode";
import CompMenu from "../CompMenu/CompMenu";

const CompHeader = () => {
  return (
    <header className="bg-black fixed w-full overflow-hidden">
      <div className="flex py-8 mx-12">
        <CompMenu />
        <CompDarkMode />
      </div>
    </header>
  );
};

export default CompHeader; 
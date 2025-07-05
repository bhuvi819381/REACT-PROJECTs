import ThemeChanger from "./ThemeChanger";

const Header = () => {
  return (
    <header className="mx-auto flex w-[540px] items-center justify-between pt-[4rem]">
      
        <h1 className="text-Very-Light-Gray text-[2.5rem] font-bold tracking-[0.41em]">
          TODO
        </h1>
        <ThemeChanger />
     
    </header>
  );
};
export default Header;

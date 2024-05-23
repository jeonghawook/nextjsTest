import BottomBar from "@/app/ui/bottom-bar";

// @ts-ignore
const Layout = ({children}) =>{
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-auto">
        {children}
      </div>
      <footer className="bg-blue-300 text-white p-4 text-center flex-none">
        <BottomBar />
      </footer>
    </div>
  );
}


export default Layout
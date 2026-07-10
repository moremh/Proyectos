import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <main className="flex-grow-1 p-4 bg-light">
          {children}
        </main>

      </div>
    </>
  );
}

export default Layout;
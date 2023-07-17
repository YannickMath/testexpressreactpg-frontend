
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen">
     <Header/>
      <main>
        {children} 
      </main>
   <Footer/>
    </div>
  );
}

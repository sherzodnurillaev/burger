import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/Sidebar";
import Menu from "../../components/Menu";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = params; 
  const translate = await getDictionary(lang); 

  const res = await fetch('http://localhost:3000/api/categories', {cache: "no-cache"})

  
  const {data} = await res.json()

  console.log(data);
  

  return (
    <html lang={params}>
      <body className="bg-[#FFAB08]">
        <Header translate={translate} />

            <Menu translate={translate}  data={data} lang={lang} />

        <div className="flex">
          <SideBar lang={lang} />
          {children}
        </div>
        <Footer translate={translate}/>
      </body>
    </html>
  );
}

import "./globals.css";
import Bar from "../../../components/AdminBar";

export default async function Layout({ children }) {

  return (
    <html lang={"ru"}>
      <body className="bg-[#FFAB08] flex">
            <Bar />
            {children}
      </body>
    </html>
  );
}

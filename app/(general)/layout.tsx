
import { NavBar } from "@/components"


export default function GeneralLayout({
    children
} : { children : React.ReactNode; 
}){
    return (
        <>
          <NavBar/>
            <main className="flex flex-col items p-24">
            {children}
            </main>

            </> 
    );
}
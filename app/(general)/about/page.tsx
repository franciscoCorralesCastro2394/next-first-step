import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'SEO Tittle',
    description : 'SEA Tittle',
    keywords : ['Hola','Info','...']
};

export default function AboutPage() {

    return (
        <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>   
        <span className="text-7xl">About Page</span>
        </main>
    )
} 
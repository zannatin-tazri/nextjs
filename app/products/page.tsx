"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";


const navLinks=[
        {name : "Product1", href:"/products/1"},
        {name : "Product2", href:"/products/2"},
        {name : "Product3", href:"/products/3"},
        {name : "Product4", href:"/products/4"}
    ]

export default function ProductList({
    children,
}: {
    children:React.ReactNode;
}){ 
    const pathname=usePathname();
        return (
    <div>
        {navLinks.map((link)=>{
            return (
           
            <Link href={link.href} key={(link.name)}>
             {link.name}
            </Link>
            );
        })}
        {children}
    </div>
    )
}
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="fixed flex inset-x-0 z-20 w-full backdrop-blur-lg py-2 px-4 bg-primary/50 items-center justify-center border-b border-neutral-800">
            <nav className="container max-w-7xl flex items-center justify-between min-h-10">
                <a href="/" className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-neutral-400 transition-colors duration-300 hover:text-amber-300">Victor Buarque</p> {/* TODO: Add logo */}
                </a>
                <Menu className="w-6 h-6 lg:hidden cursor-pointer transition-colors duration-300 hover:text-amber-300" onClick={toggleMenu} />
                {isOpen ? (
                    <div className="relative flex flex-col">
                    <div className="absolute top-10 right-0 w-full h-full bg-primary/50 backdrop-blur-lg border-b border-neutral-800">
                        <a href="#home" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Home</a>
                        <a href="#about" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">About</a>
                        <a href="#services" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Services</a>
                        <a href="#projects" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Projects</a>
                        <a href="#contact" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Contact</a>
                    </div>
                    </div>
                ) : (
                    <div className="hidden lg:flex items-center justify-center gap-4">
                        <a href="#home" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Home</a>
                        <a href="#about" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">About</a>
                        <a href="#services" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Services</a>
                        <a href="#projects" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Projects</a>
                        <a href="#contact" className="text-sm font-medium transition-colors duration-300 hover:text-amber-300">Contact</a>
                    </div>
                )} 
            </nav>
        </div>
    )
}

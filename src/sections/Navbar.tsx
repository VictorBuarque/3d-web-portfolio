import { Menu } from 'lucide-react'
// Centralizando os imports do Sheet
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full border-b border-neutral-800 bg-black/50 backdrop-blur-lg c-space">
      <nav className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-2 min-h-[60px]">
        <a href="/" className="flex items-center gap-2">
          <p className="text-2xl font-bold text-primary transition-colors duration-300 hover:text-secondary">
            Victor Buarque
          </p>
        </a>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-secondary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-950 border-neutral-800">
              <SheetHeader className="text-left">
                <SheetTitle className="text-primary">Menu</SheetTitle>
                <SheetDescription className="text-secondary">Navegação do Portfólio</SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4 px-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="text-lg font-medium text-primary hover:text-secondary transition-colors"
                  >
                    <p className="text-primary hover:text-secondary transition-colors">{link.label}</p>
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              <p className="text-primary hover:text-secondary transition-colors">{link.label}</p>
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Menu,
  Briefcase,
  Users,
  FileText,
  PencilLine,
  Phone,
  Bot,
  ArrowRight,
  Wrench,
  X,
  Code,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Data for menus
const workItems = [
  { title: "Client Work", href: "/portfolio/client-work", description: "Explore our successful collaborations and impactful solutions." },
  { title: "Research & Development", href: "/portfolio/research", description: "Our experiments where we explore new technologies." },
  { title: "Design Philosophy", href: "/portfolio/design", description: "A deep dive into our design principles and methodologies." },
  { title: "Partnerships", href: "/portfolio/partnerships", description: "Learn about our trusted partners and synergistic relationships." },
];
const serviceItems = [
  { title: "Web Development", href: "/services/web-development", description: "High-performance, secure, and scalable web solutions." },
  { title: "UI/UX Design", href: "/services/ux-ui-design", description: "Human-centered design that is intuitive and accessible." },
  { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Engaging native and cross-platform mobile applications." },
  { title: "E-commerce Solutions", href: "/services/e-commerce-solutions", description: "Robust e-commerce platforms for a seamless shopping experience." },
  { title: "AI & ML Solutions", href: "/services/ai-ml-solutions", description: "Unlock data-driven insights and automate processes." },
  { title: "Cloud & DevOps", href: "/services/cloud-devops", description: "Streamlining development with modern cloud infrastructure." },
];
const aiItems = [
  { title: "Documentation", href: "/ai/docs", description: "Explore comprehensive guides and API references for our tools." },
  { title: "Pricing", href: "/ai/pricing", description: "Find the perfect plan that fits your needs and budget." },
  { title: "Resources", href: "/ai/resources", description: "Access tutorials, case studies, and helpful resources." },
  { title: "Tool Dashboard", href: "/admin", description: "Go directly to the AI dashboard to start creating." },
];
const mobileNavLinks = [
  { href: "/portfolio", label: "Work", icon: Briefcase },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/process", label: "Process", icon: FileText },
  { href: "https://saas.codelitsstudio.com/", label: "SaaS Hub", icon: Code },
  { href: "/ai", label: "AI Tools", icon: Bot },
  { href: "/blog", label: "Blog", icon: PencilLine },
  { href: "/studio", label: "Studio", icon: Users },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const header = headerRef.current;
    let isActive = false;
    const showHeader = () => {
      if (!header) return;
      gsap.to(header, { y: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", backdropFilter: "blur(6px)", ease: "power2.out", duration: 0.5 });
      isActive = true;
    };
    const hideHeader = () => {
      if (!header) return;
      gsap.to(header, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", backdropFilter: "blur(0px)", ease: "power2.out", duration: 0.5 });
      isActive = false;
    };
    const handleScroll = () => {
      if (window.scrollY > 20 && !isActive) showHeader();
      else if (window.scrollY <= 20 && isActive) hideHeader();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to start loader immediately on click
  const startLoader = () => {
    const loader = loaderRef.current;
    if (!loader) return;
    gsap.killTweensOf(loader);
    gsap.set(loader, { width: 0, autoAlpha: 1 });
    gsap.to(loader, { width: "80%", duration: 0.6, ease: "power1.out" });
  };

  // Finish loader when pathname changes (i.e. content loaded)
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;
    gsap.killTweensOf(loader);
    gsap.to(loader, {
      width: "100%",
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(loader, { autoAlpha: 0, duration: 0.3, delay: 0.1, onComplete: () => gsap.set(loader, { width: 0 }) });
      },
    });
  }, [pathname]);

  // Hide header on admin routes
  if (pathname?.startsWith("/admin")) return null;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full p-2 md:p-4 relative">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" onClick={startLoader} className="flex items-center gap-2">
          <Image src="/logos/logo.png" alt="Logo" width={80} height={80} className="h-20 w-20 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex gap-4">
          <NavigationMenuList className="flex gap-4 items-center text-sm font-medium">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/portfolio" onClick={startLoader}>Work</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 gap-3 grid-cols-2">
                  {workItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} onClick={startLoader}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/services" onClick={startLoader}>Services</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 gap-3 grid-cols-2">
                  {serviceItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} onClick={startLoader}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/process" onClick={startLoader}>Process</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="https://saas.codelitsstudio.com/" target="_blank" rel="noopener noreferrer" className="saas-hub-shimmer" onClick={startLoader}>
                SaaS Hub
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/ai" onClick={startLoader}>AI Tools</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 gap-3 grid-cols-2">
                  {aiItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} onClick={startLoader}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" onClick={startLoader}>Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/studio" onClick={startLoader}>Studio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/contact" onClick={startLoader}>
              Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 backdrop-blur-md bg-black/30">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={() => { setIsOpen(false); startLoader(); }}>
                  <Image src="/logos/logo.png" alt="Logo" width={80} height={80} className="h-24 w-24 object-contain" />
                </Link>
                <SheetClose asChild>
                  <button aria-label="Close"><X className="h-5 w-5" /></button>
                </SheetClose>
              </div>
              <nav className="grid gap-4 text-white text-sm">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setIsOpen(false); startLoader(); }}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Loader bar */}
      <div ref={loaderRef} className="absolute bottom-0 left-0 h-[4px] bg-primary origin-left" style={{ width: 0, opacity: 0 }} />
    </header>
  );
}

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: React.ReactNode; href: string; onClick?: () => void }
>(({ className, title, children, href, onClick, ...props }, ref) => {
  const isInternal = href.startsWith("/");
  const content = (
    <>
      <div className="text-sm font-medium">{title}</div>
      <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
    </>
  );

  if (isInternal) {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link href={href} onClick={onClick} ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
            {content}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <a href={href} onClick={onClick} ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          {content}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
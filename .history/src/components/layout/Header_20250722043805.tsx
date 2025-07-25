"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // for new Next.js 13 app dir routing events
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

// -- your menu data here (workItems, serviceItems, aiItems, mobileNavLinks)...

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname?.startsWith("/admin")) return null;

  const headerRef = useRef<HTMLElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Header scroll animation (your existing logic)
  useEffect(() => {
    const header = headerRef.current;
    let isActive = false;

    const showHeader = () => {
      if (!header) return;
      gsap.to(header, {
        y: 10,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(6px)",
        ease: "power2.out",
        duration: 0.5,
        delay: 0.1,
      });
      isActive = true;
    };

    const hideHeader = () => {
      if (!header) return;
      gsap.to(header, {
        y: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
        ease: "power2.out",
        duration: 0.5,
        delay: 0.1,
      });
      isActive = false;
    };

    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 20 && !isActive) showHeader();
      else if (y <= 20 && isActive) hideHeader();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real loader logic using router events
  useEffect(() => {
    if (!loaderRef.current) return;
    const loader = loaderRef.current;
    let animation: gsap.core.Tween | null = null;

    const startLoader = () => {
      gsap.killTweensOf(loader);
      gsap.set(loader, { width: 0, height: 4, autoAlpha: 1 });

      // Animate width gradually to ~80% while loading
      animation = gsap.to(loader, {
        width: "80%",
        duration: 10, // slow duration to simulate load progress
        ease: "power1.out",
      });
    };

    const finishLoader = () => {
      if (animation) {
        animation.kill(); // stop current animation
      }
      // Complete to 100% quickly, then fade out and shrink height
      gsap.to(loader, {
        width: "100%",
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(loader, {
            autoAlpha: 0,
            height: 0,
            duration: 0.4,
            ease: "power1.inOut",
          });
        },
      });
    };

    router.events.on("routeChangeStart", startLoader);
    router.events.on("routeChangeComplete", finishLoader);
    router.events.on("routeChangeError", finishLoader);

    return () => {
      router.events.off("routeChangeStart", startLoader);
      router.events.off("routeChangeComplete", finishLoader);
      router.events.off("routeChangeError", finishLoader);
    };
  }, [router.events]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full p-2 md:p-4 relative"
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="CodeLits Studio Logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex gap-4">
          <NavigationMenuList className="flex gap-4 text-sm font-medium items-center">
            {/* Dropdown: Work */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/portfolio" className="nav-click-anim" onClick={runLoaderAnimation}>
                  Work
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
                  {workItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={runLoaderAnimation}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Dropdown: Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/services" className="nav-click-anim" onClick={runLoaderAnimation}>
                  Services
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
                  {serviceItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={runLoaderAnimation}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Single Link: Process */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/process" className="nav-click-anim" onClick={runLoaderAnimation}>
                  Process
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* SaaS Hub Highlight */}
            <NavigationMenuItem>
              <a
                href="https://saas.codelitsstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="saas-hub-shimmer nav-click-anim"
                onClick={runLoaderAnimation}
              >
                SaaS Hub
              </a>
            </NavigationMenuItem>

            {/* Dropdown: AI Tools */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/ai" className="nav-click-anim" onClick={runLoaderAnimation}>
                  AI Tools
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] p-4 grid-cols-2 gap-3">
                  {aiItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={runLoaderAnimation}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Single Link: Blog */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="nav-click-anim" onClick={runLoaderAnimation}>
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Single Link: Studio */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/studio" className="nav-click-anim" onClick={runLoaderAnimation}>
                  Studio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/contact" onClick={runLoaderAnimation}>
              Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle navigation menu"
                className="text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              showCloseButton={false}
              side="right"
              className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-md p-6 z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => {
                    setIsOpen(false);
                    runLoaderAnimation();
                  }}
                >
                  <img
                    src="/logos/logo.png"
                    alt="CodeLits Studio Logo"
                    className="h-24 w-24 md:h-36 md:w-36 object-contain"
                  />
                </Link>
                <SheetClose asChild>
                  <button aria-label="Close">
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>

              <nav className="grid grid-cols-1 gap-4 text-sm text-white">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      runLoaderAnimation();
                    }}
                    className="nav-click-anim flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-all"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-6 text-white/60 text-center text-xs select-none">
                © 2025 CodeLits Studio Pvt. Ltd.
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* The PRIMARY colored loader line at the bottom */}
<div
  ref={loaderRef}
  className="absolute bottom-0 left-0 w-full h-0 bg-primary origin-top transition-[height,opacity]"
  style={{ willChange: "height, opacity" }}
/>


    </header>
  );
}

// ListItem Component - updated for new Link behavior (no nested <a>)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: React.ReactNode; href: string; onClick?: () => void }
>(({ className, title, children, href, onClick, ...props }, ref) => {
  const isInternal = href && href.startsWith("/");

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
          <Link
            href={href}
            onClick={onClick}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
            ref={ref}
          >
            {content}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          onClick={onClick}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {content}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

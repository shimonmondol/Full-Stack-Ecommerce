import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { userLoginInfo } from "../../slices/userslice";

const Navbar = ({
  logo = {
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Baraz",
  },

  menu = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
  ],

  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  },
}) => {
  const data = useSelector((state) => state.authSlice.value?.data);
  const [logoutmodal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogoutModal = () => {
    setLogoutModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userdata");
    dispatch(userLoginInfo(null));
  };

  return (
    <section
      className="py-4 fixed w-full z-50
   bg-white dark:bg-black shadow-lg"
    >
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <Link className="text-2xl font-semibold tracking-tighter">
                {logo.title}
              </Link>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 mt-[6px]">
              <ModeToggle />
            </div>
            <div>
              {data ? (
                <div className="flex items-center">
                  {logoutmodal ? (
                    <button
                      onClick={handleLogout}
                      className="cursor-pointer block text-white px-3 py-2 bg-red-500 rounded-md mt-1"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLogoutModal}
                      className="mt-1 bg-green-500 text-white rounded-md cursor-pointer px-3 py-2"
                    >
                      <h1>{data.name}</h1>
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex gap-2 mt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link to={auth.login.url}>{auth.login.title}</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to={auth.signup.url}>{auth.signup.title}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div>
              <ModeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a
                        href={logo.url}
                        className="text-xl flex items-center gap-2"
                      >
                        Baraz
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    <div className="flex">
                      <div className="mr-3 mt-[6px]">
                        <ModeToggle />
                      </div>
                      <div>
                        {data ? (
                          <div className="flex items-center">
                            {logoutmodal ? (
                              <button
                                onClick={handleLogout}
                                className="cursor-pointer block text-white px-3 py-2 bg-red-500 rounded-md mt-1"
                              >
                                Logout
                              </button>
                            ) : (
                              <button
                                onClick={handleLogoutModal}
                                className="mt-1 bg-green-500 text-white rounded-md cursor-pointer px-3 py-2"
                              >
                                <h1>{data.name}</h1>
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="flex gap-2 mt-2">
                            <Button asChild variant="outline" size="sm">
                              <Link to={auth.login.url}>
                                {auth.login.title}
                              </Link>
                            </Button>
                            <Button asChild size="sm">
                              <Link to={auth.signup.url}>
                                {auth.signup.title}
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar;

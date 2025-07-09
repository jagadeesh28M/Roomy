"use client";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "../ui/sidebar";
import {
  Home,
  ShoppingCart,
  Users,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Plus,
  ChevronDown,
  Truck,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  { label: "Dashboard", icon: Home, href: "/vendor/dashboard" },
  { label: "Orders", icon: ShoppingCart, href: "/vendor/orders" },
  {
    label: "Products",
    icon: Truck,
    href: "/vendor/products",
    hasChevron: true,
    dropdown: [
      { label: "All Products", href: "/vendor/all-products" },
      { label: "Add Product", href: "/vendor/add-product" },
    ],
  },
  { label: "Customers", icon: Users, href: "/vendor/customers" },
  { label: "Chats", icon: MessageSquare, href: "/vendor/chats" },
];

const profileLinks = [
  { label: "Profile", icon: User, href: "/vendor/profile" },
  { label: "Settings", icon: Settings, href: "/vendor/settings" },
  { label: "Logout", icon: LogOut, href: "/vendor/logout" },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (href) => pathname.startsWith(href);

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <SidebarProvider className="h-screen hidden lg:block">
      <Sidebar>
        <SidebarContent className="bg-[#1A1C23] text-sm text-muted-foreground px-3 py-2 flex flex-col">
          <div className="flex flex-col space-y-3 flex-1">
            <SidebarGroup>
              <SidebarGroupLabel className="text-lg font-bold text-gray-200">
                E-Commerce
              </SidebarGroupLabel>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                {sidebarLinks.map(
                  ({ label, icon: Icon, href, hasChevron, dropdown }) =>
                    !hasChevron ? (
                      <Link href={href} key={label}>
                        <div
                          className={`flex items-center font-semibold gap-3 px-2 py-2 rounded cursor-pointer 
                            ${
                              isActive(href)
                                ? "bg-[#9333EA] text-white"
                                : "text-[#9e9e9e]"
                            } 
                            hover:bg-[#2A2D3A] hover:text-white transition-colors`}
                        >
                          <Icon size={18} strokeWidth={2.5} />
                          {label}
                        </div>
                      </Link>
                    ) : (
                      <div key={label}>
                        <div
                          className={`flex items-center gap-2 px-2 py-2 rounded cursor-pointer 
                            ${
                              isActive(href)
                                ? "bg-[#9333EA] text-white"
                                : "text-[#9e9e9e]"
                            } 
                            hover:bg-[#2A2D3A] hover:text-white transition-colors`}
                          onClick={() => handleDropdown(label)}
                        >
                          <Icon size={18} strokeWidth={2.5} />
                          {label}
                          <ChevronDown
                            size={16}
                            strokeWidth={2.5}
                            className={`ml-auto transition-transform ${
                              openDropdown === label ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {openDropdown === label && (
                          <div className="ml-6 mt-1 space-y-3">
                            {dropdown.map((item) => (
                              <Link href={item.href} key={item.label}>
                                <div
                                  className={`flex items-center gap-2 px-2 py-2 rounded cursor-pointer 
                                    ${
                                      isActive(item.href)
                                        ? "bg-[#9333EA] text-white"
                                        : "text-[#9e9e9e]"
                                    } 
                                    hover:bg-[#2A2D3A] hover:text-white transition-colors`}
                                >
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                )}
              </SidebarGroupContent>
            </SidebarGroup>

            <hr className="border-muted/30" />

            <SidebarGroup>
              <SidebarGroupContent>
                {profileLinks.map(({ label, icon: Icon, href }) => (
                  <Link href={href} key={label}>
                    <div
                      className={`flex items-center gap-2 px-2 py-2 rounded cursor-pointer 
                        ${
                          isActive(href)
                            ? "bg-[#9333EA] text-white"
                            : "text-[#9e9e9e]"
                        } 
                        hover:bg-[#2A2D3A] hover:text-white transition-colors`}
                    >
                      <Icon size={18} strokeWidth={2.5} />
                      {label}
                    </div>
                  </Link>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>

            <div>
              <Button className="w-full bg-[#9333EA] hover:bg-[#7E22CE] text-white flex items-center justify-center">
                Generate Report
                <Plus size={16} className="ml-2" strokeWidth={2.5} />
              </Button>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

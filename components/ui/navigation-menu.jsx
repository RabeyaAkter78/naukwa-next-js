import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navigationmenu() {
  const components = [
    {
      title: "Home",
    },
    {
      title: "Home",
    },
    {
      title: "Home",
    },
    {
      title: "Home",
    },
  ];

  return (
    <div className="bg-slate-300 absolute w-full">
      <div className="container mt-10 mb-10">
        <div>
          {components.map((component, index) => (
            <div key={index}>
              <h2>{component.title}</h2>
              <a href={component.href}>{component.href}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

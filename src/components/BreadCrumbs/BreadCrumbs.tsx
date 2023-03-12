import * as React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const  Breadcrumbs = ({ items }: BreadcrumbsProps)=> {
  const { pathname } = useLocation();

  // Create a new array of breadcrumb items based on the current path
  const currentPathItems = pathname.split("/").filter((item) => item);
  const breadcrumbs: BreadcrumbItem[] = currentPathItems.map((item, index) => {
    const to = `/${currentPathItems.slice(0, index + 1).join("/")}`;
    return {
      label: item,
      to,
    };
  });

  // Combine the current breadcrumbs with the provided items
  const allItems = [...items, ...breadcrumbs];

  return (
    <nav aria-label="breadcrumb">
      <ol>
        {allItems.map((item, index) => (
          <li
            key={item.to}
            className={`breadcrumb-item ${
              index === allItems.length - 1 ? "active" : ""
            }`}
          >
            {index === allItems.length - 1 ? (
              item.label
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
      <Outlet />
    </nav>
  );
}


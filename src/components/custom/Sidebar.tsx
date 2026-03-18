import { NavLink } from 'react-router'
import { Headset, BarChart3, AlertCircle, List } from "lucide-react";
import { cn } from '@/lib/utils';

const links = [
  { to: "/", label: "Statistics", icon: BarChart3 },
  { to: "/open", label: "Open Tickets", icon: AlertCircle },
  { to: "/tickets", label: "All Tickets", icon: List },
];

export const Sidebar = () => {
  return (
    <aside className="w-56 shrink-0 border-r border-sidebar-border bg-sidebar-background flex flex-col">
      <div className="p-5 flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Headset className="h-4 w-4 text-primary" />
        </div>
        <span className="font-semibold text-sm text-foreground">
          Support
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-0.5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

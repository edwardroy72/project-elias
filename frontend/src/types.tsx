import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface NavigationSettings {
  drawerWidth: number;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export interface AppbarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

export interface DrawerProps {
  drawerWidth: number;
  open: boolean;
}

export interface SidebarProps {
  setDarkMode: (isDarkMode: boolean) => void;
}

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Gamepad2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Next-themes only works on client so avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const getThemeIcon = () => {
    if (currentTheme === "dark") return <Sun size={18} />;
    if (currentTheme === "light") return <Moon size={18} />;
    if (currentTheme === "bgmi") return <Gamepad2 size={18} />;
    return <Sun size={18} />;
  };

  const getThemeLabel = () => {
    if (currentTheme === "bgmi") return "BGMI";
    if (currentTheme === "dark") return "Dark";
    if (currentTheme === "light") return "Light";
    return "System";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {getThemeIcon()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("bgmi")}>
          <Gamepad2 className="mr-2 h-4 w-4" />
          <span>BGMI</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;

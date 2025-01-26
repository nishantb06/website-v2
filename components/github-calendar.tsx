"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubCal() {
  const { theme } = useTheme();

  const colorScheme = theme === "dark" ? "dark" : "light";

  // Define custom theme colors with black
  const customTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#000000'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#000000'],
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-2">
      <div className="scale-75 transform origin-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username="nishantb06"
          showWeekdayLabels={false}
          fontSize={16}
          theme={customTheme}
        />
      </div>
    </div>
  );
}

"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubCal() {
  const { theme } = useTheme();

  const colorScheme = theme === "dark" ? "dark" : "light";

  // Define custom theme colors with black
  const customTheme = {
    // light: ['#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b'],
    // dark: ['#27272a', '#3f3f46', '#52525b', '#71717a', '#a1a1aa'],
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-2">
      <div className="scale-75 transform origin-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username="nishantb06"
          showWeekdayLabels={false}
          fontSize={16}
          // theme={customTheme}
        />
      </div>
    </div>
  );
}

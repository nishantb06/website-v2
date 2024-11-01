"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubCal() {
  const { theme } = useTheme();

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="h-full w-full flex items-center justify-center p-2">
      <div className="scale-75 transform origin-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username="nishantb06"
          showWeekdayLabels={false}
          fontSize={16}
        />
      </div>
    </div>
  );
}

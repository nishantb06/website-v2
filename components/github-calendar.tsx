"use client";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubCal() {
  const { theme } = useTheme();

  const colorScheme = theme === "light" ? "dark" : "light";

  return (
    <div className="">
      {/* <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        GitHub Contributions
      </h3> */}
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username="nishantb06"
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
}

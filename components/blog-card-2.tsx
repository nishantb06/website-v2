"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

interface BlogCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  href?: string;
  coverImage?: string;
}

export const BlogCard = ({ title, subtitle, tags, href = "#", coverImage }: BlogCardProps) => {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:-translate-y-1",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "cursor-pointer mb-4"
      )}
    >
      <a href={href}>
        <CardHeader className="flex flex-row gap-4">
          {coverImage && (
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img 
                src={coverImage} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex-grow">
            <CardTitle className="text-xl font-semibold line-clamp-1 transition-colors group-hover:text-primary">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2 mt-2 text-sm text-muted-foreground">
              {subtitle}
            </CardDescription>
          </div>
          <ArrowRightIcon 
            className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="transition-colors hover:bg-primary/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </a>
    </Card>
  );
};


"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface BlogCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  coverImage?: string;
}
export const BlogCard = ({ title, subtitle, tags, coverImage }: BlogCardProps) => {
  return (
    <Card className="flex flex-col border-none shadow-md mb-4">
      <CardHeader>
        {coverImage && (
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img 
                src={coverImage} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


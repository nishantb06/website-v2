"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  slug: string;
  coverImage?: string;
}
export const BlogCard = ({ title, subtitle, tags, coverImage, slug }: BlogCardProps) => {
  return (
    <Card className="flex flex-col border-none shadow-md mb-4 hover:-translate-y-1 group">
      <CardHeader className="relative">
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
        <Link href={`/blog/${slug}`}>
          <ArrowRightIcon className="w-5 h-5 absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 cursor-pointer" />
        </Link>
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


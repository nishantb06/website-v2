import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Button } from "./ui/button";

interface ToggleGroupDemoProps {
  onToggleChange: (value: string) => void;
}

export function ToggleGroupDemo({ onToggleChange }: ToggleGroupDemoProps) {
  return (
    <TooltipProvider>
      <ToggleGroup 
        type="single" 
        variant="outline"
        onValueChange={onToggleChange}
        defaultValue="blogs"
      >
        <Tooltip>
            <TooltipTrigger>
                <ToggleGroupItem value="blogs" aria-label="Toggle blogs">
                    Blogs
                </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
                <Button variant="ghost" size="sm">Long form content</Button>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger>
                <ToggleGroupItem value="articles" aria-label="Toggle articles">
                    Articles
                </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
                <Button variant="ghost" size="sm">Short form content</Button>
            </TooltipContent>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  )
}

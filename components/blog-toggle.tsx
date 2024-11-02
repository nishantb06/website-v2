import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"

export function ToggleGroupDemo() {
  return (
    <TooltipProvider>
      <ToggleGroup type="single" variant="outline">
        <Tooltip>
            <TooltipTrigger>
                <ToggleGroupItem value="blogs" aria-label="Toggle blogs">
                    Blogs
                </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
                <p>Long form content</p>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger>
                <ToggleGroupItem value="articles" aria-label="Toggle articles">
                    Articles
                </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
                <p>Short form content</p>
            </TooltipContent>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  )
}

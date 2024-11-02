import {
  Calendar,
  Smile,
  Shapes,
  BookOpen,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { CollapsibleContent, CollapsibleTrigger, Collapsible } from "@radix-ui/react-collapsible"
import { useState } from "react"

interface CommandDemoProps {
  onSearchChange: (value: string) => void;
}

export function CommandDemo({ onSearchChange }: CommandDemoProps) {
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchChange(inputValue)
    }
  }

  const handleItemSelect = (value: string) => {
    setInputValue(value)
    onSearchChange(value)
  }

  return (
    <Collapsible>
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CollapsibleTrigger>
            <CommandInput 
              placeholder="Coming Soon..." 
              value={inputValue}
              onValueChange={setInputValue}
              onKeyDown={handleKeyDown}
            />
        </CollapsibleTrigger>
        <CollapsibleContent>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Blogs">
                <CommandItem
                    onSelect={() => handleItemSelect("Jetson Nano")}
                    className="cursor-pointer"
                >
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Jetson Nano</span>
                </CommandItem>
                <CommandItem
                    onSelect={() => handleItemSelect("LLama")}
                    className="cursor-pointer"
                >
                    <Smile className="mr-2 h-4 w-4" />
                    <span>LLama</span>
                </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Articles">
                <CommandItem
                    onSelect={() => handleItemSelect("Classes")}
                    className="cursor-pointer"
                >
                    <Shapes className="mr-2 h-4 w-4" />
                    <span>Classes</span>
                </CommandItem>
                <CommandItem
                    onSelect={() => handleItemSelect("Git tips")}
                    className="cursor-pointer"
                >
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Git tips</span>
                </CommandItem>
                </CommandGroup>
            </CommandList>
        </CollapsibleContent>
        </Command>
    </Collapsible>
  )
}
//
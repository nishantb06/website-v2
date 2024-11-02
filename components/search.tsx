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
                <CommandItem>
                    <Calendar />
                    <span>Jetson Nano</span>
                </CommandItem>
                <CommandItem>
                    <Smile />
                    <span>LLama</span>
                </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Articles">
                <CommandItem>
                    <Shapes />
                    <span>Classes</span>
                </CommandItem>
                <CommandItem>
                    <BookOpen />
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
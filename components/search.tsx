import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
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

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
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
    </Command>
  )
}
//
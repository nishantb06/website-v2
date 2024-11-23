import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs"

interface TabsDemoProps {
  onToggleChange?: (value: string) => void;
}

export function TabsDemo({ onToggleChange }: TabsDemoProps) {
  return (
    <Tabs 
      defaultValue="blogs" 
      className="w-full"
      onValueChange={onToggleChange}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="articles">Articles</TabsTrigger>
      </TabsList>
      <TabsContent value="blogs">
        {/* Content will be managed by parent component */}
      </TabsContent>
      <TabsContent value="articles">
        {/* Content will be managed by parent component */}
      </TabsContent>
    </Tabs>
  )
}

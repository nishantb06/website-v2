import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="blogs" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="articles">Articles</TabsTrigger>
      </TabsList>
      <TabsContent value="blogs"> 
        {/* whatever you want to show here under blogs should be here */}
        <p>Blogs</p>
      </TabsContent>
      <TabsContent value="articles">
        <p>Articles</p>
      </TabsContent>
    </Tabs>
  )
}

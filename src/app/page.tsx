"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Post } from "@/types/post.types"
import { PostPreview } from "@/components/custom/PostPreview/PostPreview"
import { DataLoading } from "@/components/custom/DataLoading/DataLoading"

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [avaiblePosts, setAvaiblePosts] = useState(10)
  const { isLoading, isSuccess } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const result = await response.json()
      setPosts(result)
      return result
    }

  })

  if (isLoading) {
    return <DataLoading />

  }
  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Посты</h1>
        <div className="grid gap-6">
          {posts.map((post, index) => {
            if (index + 1 <= avaiblePosts) {
              return (
                <PostPreview key={post.id} post={post} />
              )
            }

          })}
          {posts.length > 10 && posts.length > avaiblePosts &&
            <Button onClick={() => setAvaiblePosts(prev => prev + 10)}>
              Показать еще
            </Button>
          }
        </div>
      </div>
    )
  }

}

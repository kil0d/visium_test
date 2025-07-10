"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, User } from "lucide-react"
import { notFound } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { Post } from "@/types/post.types"
import { PostContent } from "@/components/custom/PostContent/PostContent"
import { DataLoading } from "@/components/custom/DataLoading/DataLoading"



interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { data, isLoading, isSuccess } = useQuery<Post>({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const result = await response.json()
      return result
    }

  })

  if (isLoading) {
    return <DataLoading />
  }
  if (data && isSuccess) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Назад
            </Link>
          </Button>
        </div>
        <PostContent post={data} />
      </div>
    )
  }

}

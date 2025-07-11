"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Post } from "@/types/post.types"
import { User } from "lucide-react"

export const PostContent = ({ post }: { post: Post }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl mb-4">
                    #{post?.id}. {post?.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>Автор: {post.userId}</span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="prose prose-gray max-w-none">
                    {post?.body}
                </div>
            </CardContent>
        </Card>
    )
}
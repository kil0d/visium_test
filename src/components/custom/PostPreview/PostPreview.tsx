"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Post } from "@/types/post.types";
import Link from "next/link";


export const PostPreview = ({ post }: { post: Post }) => {
    const truncate = (text: string, max = 150) => {
        const cleaned = text.replace(/\s+/g, ' ').trim();
        return cleaned.length > max ? cleaned.slice(0, max) + "..." : cleaned;
    };
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                            #{post.id}. {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                            {truncate(post.body)}
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-end">
                    <Button asChild>
                        <Link href={`/post/${post.id}`}>Просмотр</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
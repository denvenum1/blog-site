import { formatDate } from "@/app/lib/utils";
import { Post } from "@/sanity/types";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import Link from "next/link";

export type PostType = Post;

export default function PostCard({ post }: { post: PostType }) {
    const { _createdAt, _id, title, description, image, category } = post;
    return (
        <li className="blog-card">
            <Link href={`/blogs/${_id}`}>
                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">{formatDate(_createdAt)}</p>
                        <small className="text-default-500">{category}</small>
                        <h4 className="font-bold text-large">{title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 gap-2">
                        <img src={image} alt="placeholder" className="object-cover rounded-xl h-96" />
                        <p className="font-medium text-large ">{description}</p>
                    </CardBody>
                    <Button color="primary" variant="flat" className="text-black">
                        Meer Details
                    </Button>
                </Card>
            </Link>
        </li>
    );
}

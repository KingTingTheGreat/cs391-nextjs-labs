import FullPost from "@/components/FullPost";
import getPostById from "@/lib/getPostById";
import { redirect } from "next/navigation";

export default async function FullPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  try {
    const post = await getPostById(id);
    if (post === null) {
      return redirect("/");
    }
    return <FullPost post={post} />;
  } catch (err) {
    console.error(err);
    return redirect("/");
  }
}

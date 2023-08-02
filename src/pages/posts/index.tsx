import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";

import { useLocale } from "@/hooks";
import { http } from "@/http/http";

interface IProps {
  posts: any[];
}

const Page: NextPage<IProps> = (props) => {
  const { t } = useLocale();

  return (
    <div className="flex w-full flex-col gap-5 px-10 py-10">
      <h1 className="text-3xl">{t("title")}</h1>
      <div className="flex flex-col gap-3">
        {props.posts.map((post, index) => (
          <div key={index} className="border px-5 py-3">
            {post.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<IProps>> {
  try {
    const { data: posts } = await http.get("/posts");
    return {
      props: { posts },
      revalidate: false
    };
  } catch (error) {
    return {
      props: { posts: [] },
      revalidate: false
    };
  }
}

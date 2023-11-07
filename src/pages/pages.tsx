import { Page } from "@prisma/client";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const Home: NextPage = ({
  pages,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>These are the posts</h1>
      {pages.map((page: Page) => {
        /* Code to render the page */
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const selectedDomain = await prisma?.domain.findUnique({
    where: {
      domain: ctx.req.headers.host,
    },
  });

  if (!selectedDomain) {
    return {
      props: {
        error: "The domain was not registered in the app",
      },
    };
  }

  const pages = await prisma?.page.findMany({
    where: {
      domainId: selectedDomain.domain,
    },
  });

  return {
    props: {
      pages,
    },
  };
};

export default Home;

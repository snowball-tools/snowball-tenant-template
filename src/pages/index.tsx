import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const Home: NextPage = ({
  host,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>Hello from {host}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.req.headers.host);
  return {
    props: {
      host: ctx.req.headers.host,
    },
  };
};

export default Home;

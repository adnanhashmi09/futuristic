// react/next imports
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const Meta = ({ title, description }: Props): JSX.Element => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="design,transform,accelerate,ui,ux,technology,solutions,business"
      />

      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;

/** This file is auto-generated by Plasmic; please do not edit! */
import { useRouter } from "next/router";
import PlasmicLoader from "@plasmicapp/loader";

const componentsByPath = {
  
    "landing": {name: "Homepage", projectId: "4XDKe2Y2CSQJqugRctvMof" },
  
};

export default function PlasmicLoaderPage() {
  const router = useRouter();
  let { plasmicLoaderPage } = router.query;
  if (Array.isArray(plasmicLoaderPage)) {
    plasmicLoaderPage = plasmicLoaderPage.join('/');
  }
  const {name, projectId} = componentsByPath[plasmicLoaderPage];

  return <PlasmicLoader component={name} projectId={projectId} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      
        { params: { plasmicLoaderPage: ["landing",] } },
      
    ],
    fallback: false,
  };
}

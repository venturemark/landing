import dynamic from "next/dynamic";
import PlasmicLoader from "@plasmicapp/loader";

export default function Home() {
  const Referlist = dynamic(
    () =>
      import("referlist").then((referlist) =>
        referlist.initialize({ domain: "venturemark" })
      ),
    { ssr: false }
  );

  return (
    <>
      <Referlist />
      <PlasmicLoader
        component="Landing"
        componentProps={{
          title: "Landing",
          joinButton: {
            type: "button",
            id: "referlistbutton",
          },
          emailAddress: {
            id: "referlistemail",
            name: "emailAddress",
          },
          joinButton2: {
            type: "button",
            id: "referlistbutton",
          },
          emailAddress2: {
            id: "referlistemail",
            color: "dark",
            name: "emailAddress2",
          },
        }}
      />
    </>
  );
}

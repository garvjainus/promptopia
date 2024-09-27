import { Suspense } from "react";
import dynamic from "next/dynamic";

const UpdatePrompt = dynamic(() => import("@components/UpdatePrompt"), {
  suspense: true,
});

const Page = () => {
  return (
    <Suspense>
      <UpdatePrompt />
    </Suspense>
  );
};

export default Page;
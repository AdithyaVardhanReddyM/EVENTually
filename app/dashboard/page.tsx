import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div>Woohoo, You are Signed In!!</div>
      <UserButton />
    </div>
  );
};

export default page;

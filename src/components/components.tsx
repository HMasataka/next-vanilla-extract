import React from "react";

import { container } from "@/components/components.css";

type ComponentsProps = {};

const Components: React.FC<ComponentsProps> = ({}) => {
  return <img className={container} src="https://placekitten.com/1920/1080" alt="" />;
};

export default Components;

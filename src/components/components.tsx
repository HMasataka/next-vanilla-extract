import React from "react";

import { componentStyle } from "@/components/components.css";

type ComponentsProps = {};

const Components: React.FC<ComponentsProps> = ({}) => {
  return <img className={componentStyle.container} src="https://placekitten.com/1920/1080" alt="" />;
};

export default Components;

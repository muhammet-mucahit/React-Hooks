import React from "react";
import useResources from "./resources";

const ResourceList = (props) => {
  const { resource } = props;
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((res) => (
        <li key={res.id}>{res.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

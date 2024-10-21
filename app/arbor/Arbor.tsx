"use client";

import clsx from "clsx";
import { NodeApi, NodeRendererProps, Tree } from "react-arborist";

export function Arbor() {
  const tree = [
    {
      id: "3",
      name: "WOW101",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        {
          id: "c3",
          name: "Test",
          children: [
            { id: "d1", name: "Alice" },
            { id: "d2", name: "Bob" },
            { id: "d3", name: "Charlie" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="font-bold">Arborist</h2>
      <div>
        <Tree initialData={tree} openByDefault>
          {Node}
        </Tree>
      </div>
    </div>
  );
}

const INDENT_STEP = 15;
function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
  const Icon = node.isInternal ? "!" : "?";
  const indentSize = Number.parseFloat("45");

  return (
    <div
      ref={dragHandle}
      style={style}
      className={clsx(node.state)}
      onClick={() => node.isInternal && node.toggle()}
    >
      <div>
        {new Array(indentSize / INDENT_STEP).fill(0).map((_, index) => {
          return <div key={index}></div>;
        })}
      </div>
      <FolderArrow node={node} />
      <span>{node.data.name}</span>
    </div>
  );
}

function FolderArrow({ node }: { node: NodeApi<any> }) {
  return (
    <span>
      {node.isInternal ? (node.isOpen ? "v" : ">") : null}{" "}
      <input type="checkbox" onClick={(e) => e.stopPropagation()} />{" "}
    </span>
  );
}

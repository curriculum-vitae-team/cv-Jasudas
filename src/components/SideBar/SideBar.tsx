import React, { useState } from "react";

export function SideBar(): ReturnType<React.FC> {
  const [links] = useState([
    { icon: "Icon", text: "Link" },
    { icon: "Icon", text: "Link" },
    { icon: "Icon", text: "Link" },
  ]);
  const [hidePanel, setHidePanel] = useState(false);
  return (
    <aside className="flex max-w-xs flex-col bg-white">
      {true &&
        links.map((link) => (
          <div className="flex gap-3">
            <p>{link.icon}</p>
            {hidePanel && <p>{link.text}</p>}
          </div>
        ))}
      <div>
        <button
          type="button"
          onClick={() => {
            setHidePanel(!hidePanel);
          }}
        >
          Hide panel
        </button>
      </div>
    </aside>
  );
}

import React, { useState } from "react";

export const SideBar = () => {
  const [links, setLinks] = useState([
    { icon: "Icon", text: "Link" },
    { icon: "Icon", text: "Link" },
    { icon: "Icon", text: "Link" },
  ]);
const [hidePanel, setHidePanel] = useState(false)
  return (
    <aside className="bg-white flex flex-col max-w-xs">
      {links &&
        links.map((link) => (
          <div className="flex gap-3">
            <p>{link.icon}</p>
            {hidePanel&&<p>{link.text}</p>}
          </div>
        ))}
        <div><button onClick={()=>setHidePanel(!hidePanel)}>Hide panel</button></div>
    </aside>
  );
};

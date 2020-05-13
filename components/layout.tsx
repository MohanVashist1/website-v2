import React from "react";

interface LayoutProps {
  id: string;
  className?: string;
  height?: string;
}

const Layout: React.FC<LayoutProps> = ({ id, children, height }) => {
  return (
    <div id={id} style={{ minHeight: height || "75vh" }}>
      <div className="h-75 d-flex justify-content-center align-items-center container">
        <div className="w-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

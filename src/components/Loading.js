import React from "react";
import "../style/loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      {[...Array(3)].map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="avatar shimmer" />
          <div className="lines">
            <div className="line shimmer" />
            <div className="line short shimmer" />
          </div>
        </div>
      ))}
    </div>
  );
}

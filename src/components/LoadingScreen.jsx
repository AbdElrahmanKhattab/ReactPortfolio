import React, { useEffect } from "react";

function LoadingScreen() {
  useEffect(() => {
    // Hide loading after mount
    const timer = setTimeout(() => {
      const loading = document.querySelector(".loadingscrean");
      if (loading) loading.style.display = "none";
    }, 700); // You can adjust the timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loadingscrean">
      <div className="push-pop">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default LoadingScreen;
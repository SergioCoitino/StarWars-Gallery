import React, { useState } from 'react';

function DonationThanks() {
  const [visible, setVisible] = useState(
    () => new URLSearchParams(window.location.search).get('donation') === 'thanks'
  );

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('donation');
    window.history.replaceState(null, '', url.pathname + url.search);
  };

  return (
    <div className="container mt-3">
      <div className="alert alert-success alert-dismissible text-center mb-0" role="status">
        <strong>Thank you for your donation!</strong> Your support helps keep this project and the free image API online.
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
      </div>
    </div>
  );
}

export default DonationThanks;

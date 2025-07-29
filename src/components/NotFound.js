import React from 'react';
import '../style/ContentUnavailable.css';

export default function ContentUnavailable() {
  return (
    <div className="fb-container">
      <div className="fb-header">
        <h1 className="fb-logo">facebook</h1>
        <div className="fb-login-box">
          <input type="text" placeholder="Email or phone" />
          <input type="password" placeholder="Password" />
          <button className="fb-login-btn">Log In</button>
          <a href="#" className="fb-forgot">Forgot Account?</a>
        </div>
      </div>

      <div className="fb-content">
        <div className="fb-icon" />
        <svg viewBox="0 0 112 112" width="112" height="112" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"><defs><clipPath id="a"><path fill="none" d="M100.31 101.1H39.45V12.8h40.78l20.08 21.03v67.27z"></path></clipPath></defs><path d="M38.54 39.69h1.82a11.78 11.78 0 0 1 11.78 11.78v13.6H26.77v-13.6a11.78 11.78 0 0 1 11.77-11.78z" stroke-miterlimit="10" stroke-width="9.48" stroke="#a4a7ab" fill="none"></path><g clip-path="url(#a)"><path fill="#90c3ff" d="M100.31 101.1H39.45V12.8h40.78l20.08 21.03v67.27z"></path><path d="M80.28 10.59h23.26v23.26H87.32a7 7 0 0 1-7-7V10.59h-.04z" fill="#1876f2"></path><path d="M38.54 39.69h1.82a11.78 11.78 0 0 1 11.78 11.78v13.6H26.77v-13.6a11.78 11.78 0 0 1 11.77-11.78z" stroke="#fff" stroke-miterlimit="10" stroke-width="9.48" fill="none"></path></g><rect x="10.54" y="58.29" width="57.83" height="42.76" rx="4.41" fill="#64676b"></rect><circle cx="39.45" cy="75.25" r="6.3"></circle><path d="M36.62 73.73h5.67v12.48a2.63 2.63 0 0 1-2.63 2.63h-.41a2.63 2.63 0 0 1-2.63-2.63V73.73z"></path></svg>
        <h2>This content isn't available right now</h2>
        <p>
          When this happens, it's usually because the owner only shared it with a small group of people,
          changed who can see it or it's been deleted.
        </p>
        <button className="fb-primary">Go to Feed</button>
        <div className="fb-links">
          <a href="#">Go back</a> · <a href="#">Visit Help Center</a>
        </div>
      </div>
    </div>
  );
}

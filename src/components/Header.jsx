import React from 'react';

function Header(props) {
  return (
    <div className="header m-3">
      <div className="container-fluid d-grid gap-3 d-flex justify-content-center">
        <h1 className="w-50 align-items-center">
          Приложение для учета задач
        </h1>
      </div>
    </div>

  );
}

export default Header;

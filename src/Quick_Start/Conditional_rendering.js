import React from 'react'

export default function ConditionalRendering() {
    let content;
    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginPanel />;
    }
    return (
      // If you prefer more compact code, you can use the conditinal ? operator. Unlike if, it works inside JSX:
      // <div>{ isLoggedIn ? (<AdminPanel />) : (<LoginPanel />) }</div>
  
      // When you don't need the else branch, you can also use a shorter logical && syntax:
      // <div>{isLoggedIn && <AdminPanel />}</div>
    <div>
      <h3>ConditionalRendering</h3>
      <h1>{content}</h1>
    </div>
  );
}

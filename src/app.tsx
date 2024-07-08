import React from 'react';
import ReactDOM from 'react-dom/client';

// React는 컴포넌트를 작성할 때 대문자를 먼저쓰는 특징이 있다. 
// 자바스크립트지만 소괄호를 쓰는 특징이 있다.
const App : React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />)
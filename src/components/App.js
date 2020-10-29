import React from 'react';

import ClassTodo from './class/ClassTodo';

const App = () => {
  React.useEffect(() => document.title = 'React TODO', []);

  return (
    <div>
      <ClassTodo />
    </div>
  );
};

export default App;
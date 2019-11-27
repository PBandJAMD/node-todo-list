(() => {
  window.onload = () => {
    console.log('Js up and running!');

    const getTodos = async () => {
      try {
        const res = await fetch('http://localhost:9000/api/todos');
        const json = await res.json();
        console.log(json.data);

        for (let i = 0; i < json.data.length; i++) {
          const mainDiv = document.getElementById('all-todos');
          const mainUl = document.createElement('ul');
          const subject = document.createElement('li');
          const content = document.createElement('li');
          const btn = document.createElement('button');
          const hbr = document.createElement('hr');
          subject.innerHTML = json.data[i].subject;
          content.innerHTML = json.data[i].content;
          btn.innerHTML = 'Show details';
          mainUl.append(subject);
          mainUl.append(content);
          mainDiv.append(mainUl);
          mainDiv.append(btn);
          mainDiv.append(hbr);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const getTodo = async id => {
      try {
        const res = await fetch(`http://localhost:9000/api/todos/${id}`);
        const json = await res.json();
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    const createTodo = async () => {
      try {
        const res = await fetch('http://localhost:9000/api/todos', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const json = await res.json();
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    const updataTodo = async id => {
      try {
        const res = await fetch(`http://localhost:9000/api/todos${id}`, {
          method: 'update',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const json = await res.json();
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    const deleteTodo = async id => {
      try {
        const res = await fetch(`http://localhost:9000/api/todos${id}`, {
          method: 'delete',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const json = await res.json();
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    getTodos();
    // getTodo();
    // createTodo();
    // updataTodo();
    // deleteTodo();
  };
})();

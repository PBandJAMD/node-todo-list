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
          const link = document.createElement('a');
          const hbr = document.createElement('hr');
          subject.innerHTML = json.data[i].subject;
          content.innerHTML = json.data[i].content;
          link.textContent = 'Show details';
          // @ts-ignore
          link.href = `http://localhost:9000/todos/show/${json.data[i].id}`;
          mainUl.append(subject);
          mainUl.append(content);
          mainDiv.append(mainUl);
          mainDiv.append(link);
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
        for (let i = 0; i < json.data.length; i++) {
          const mainDiv = document.getElementById('show-todo');
          const mainUl = document.createElement('ul');
          const subject = document.createElement('li');
          const content = document.createElement('li');
          const hbr = document.createElement('hr');
          subject.innerHTML = json.data[i].subject;
          content.innerHTML = json.data[i].content;
          mainUl.append(subject);
          mainUl.append(content);
          mainDiv.append(mainUl);
          mainDiv.append(hbr);
        }
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    const createTodo = async () => {
      try {
        const mainDiv = document.getElementById('create-todo');
        const mainForm = document.createElement('form');
        const mainLabel = document.createElement('label');
        const mainInput = document.createElement('input');
        const mainLabel2 = document.createElement('label');
        const mainInput2 = document.createElement('input');
        const btn = document.createElement('button');
        const bk = document.createElement('br');
        mainLabel.innerHTML = 'Subject';
        mainInput.type = 'text';
        mainLabel2.innerHTML = 'Content';
        mainInput2.type = 'text';
        btn.textContent = 'add todo';
        mainForm.append(mainLabel);
        mainForm.append(mainInput);
        mainForm.append(bk);
        mainForm.append(mainLabel2);
        mainForm.append(mainInput2);
        mainForm.append(btn);
        mainDiv.append(mainForm);

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

    const updateTodo = async id => {
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
    getTodo(6);
    createTodo();
    // updateTodo();
    // deleteTodo();
  };
})();

(() => {
  window.onload = () => {
    console.log('Js up and running!');

    const getTodo = async () => {
      try {
        const res = await fetch('http://localhost:9000/api/todos');
        const json = await res.json();
        console.log(json.data);

        for (let i = 0; i < json.data.length; i++) {
          const mainDiv = document.getElementById('all-todos');
          const mainUl = document.createElement('ul');
          const subject = document.createElement('li');
          const content = document.createElement('li');
          const hbr = document.createElement('hr');
          subject.innerHTML = json.data[i].subject;
          content.innerHTML = json.data[i].content;
          mainUl.append(subject);
          mainUl.append(content);
          mainDiv.append(mainUl);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getTodo();
  };
})();

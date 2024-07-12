import { useEffect, useState } from "react";

function Todo() {

    const [title, setTitle] = useState([]);

  const apiLink = `https://jsonplaceholder.typicode.com/todos`;

  useEffect(() => {
    fetch(apiLink)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data);
      });
  }, []);

  return (
    <div>
        {title.map((t, i) => (
          <div key={i} className="p-5 px-4 flex items-center justify-start">
            <h2 className="px-3 text-left text-slate-600 font-medium text-lg">{t.id}</h2>
            <p className="px-3 text-left text-slate-600 font-medium text-lg">{t.title}</p>
          </div>
        ))}
    </div>
  )
}

export default Todo
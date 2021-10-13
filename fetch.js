const todosContainer = document.querySelector(".todos")
const button = document.querySelector ("button")

const renderItems = () => {
fetch ("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 10; i++) {
          const element = data[i];
          let p = `<p class="element">
                     <span> ${element.name} </span> <span>${element.address.city}</span> <span>${element.phone}</span>
                  </p>`;
        
            todosContainer.innerHTML += p;
        }
      
      })
}

button.addEventListener("click", renderItems)
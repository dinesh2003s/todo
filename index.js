let array = [
    {
        name: "fuck",
        date: "22-03-2032"
    },
    {
        name: "fuck you",
        date: "22-03-2832"
    }

];


display();
function add() {
    let name = document.querySelector(".names").value;
    let date = document.querySelector(".date").value;
    array.push(
        { name, date }
    );

    display();

}

function display() {
    let todolist = "";
    let display = document.querySelector(".display");

    for (let i = 0; i < array.length; i++) {
        let object = array[i];
        let { name, date } = object;

        let html = `<p>${name}</p>
        <p>${date}</p>
        <button class="delete"onclick="array.splice(${i},1);display()">delete</button>`
        ;
        todolist += html;
    }
    display.innerHTML = todolist;
   
}




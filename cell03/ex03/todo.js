const setCookie = (cname, cvalue) => {
    document.cookie = `${cname}=${cvalue};path=/`;
}

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const appendlist = () => {
    let cookie = getCookie("todolist")
    const create =  prompt("Enter your TODO")

    if (!create || create.trim() === '') {
        return
    }

    if (cookie === '') {
        setCookie('todolist', create)
    }

    else if (cookie !== '') {
        cookie += `,${create}`
        setCookie('todolist', cookie)
    }

    listCookie()
}

const listCookie = () => {
    let todolist = getCookie("todolist").split(',');
    const container = document.getElementById('ft_list')

    if (todolist == '') {
        return
    }

    container.innerHTML = ''
    
    todolist.reverse().forEach(todo => {
        const todotab = document.createElement('li')
        todotab.innerText = todo
        todotab.onclick = () => {
            const act_confirm = confirm(`Are you sure to delete "${todo}"?`)

            if (act_confirm) {
                todolist.splice(todolist.indexOf(todo), 1)
                todotab.remove()
                setCookie('todolist', todolist.reverse().join(','))
            }
        }
        container.appendChild(todotab)
    })
}
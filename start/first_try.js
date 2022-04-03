let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function() {
        function say() {  // do `say = () => ` - and say will take call context from parrent
            console.log(this); // now we have window object, because `say` fnc lost call context
        }
    say();
    }
};

obj.sayNumber();

// arrow fnc examle
let names = ["Ivan", "Roman", "Ann", "Alexey"];
let shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames)

// map example
let answers = ["IvAn", "AnnA", "HelLo"]
answers = answers.map((item) => item.toLowerCase());
console.log(answers);

// default values for fnc args
function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`)
}
fetchData("something")

// unlimited number of arguments for a function
function max (...numbers) {
    console.log(numbers)
}
max(3, 4, 5, 6, 7);

// unpacking objs
const arr1 = [1, 2, 4, 65, 23],
      arr2 = [234, 1, 53, 24];

const res = Math.max(...arr1, ...arr2); // (1, 2, 4, 65, 23, 234, 1, 53, 24)
console.log(res)



// objects combining
avatar = 'Photo';
const user = {
    name: "default",
    pass: "qwerty",
    rights: "user"
};

const admin = {
    name: "admin",
    pass: "root"
};

const res1 = Object.assign(user, admin); // es6 (add `avatar` here lul)
const res2 = {...user, ...admin, avatar};
console.log(res1);
console.log(res2);

//
const x = 25, y = 10;
const coord = {
    x, // x: x,
    y // y: y
};

const coords2 = {
    x,
    y,
    calcSq: function() {
        console.log(this.x * this.y);
    }
};
coords2.calcSq();

const coords = {x, y,
    calcSq() {
        console.log(this.x * this.y);
    }
};
coords.calcSq()
console.log(coords);

//destruct
const user1 = {
    name: "default",
    pass: "qwerty",
    rights: "user"
};
const {name, pass, rights} = user1
console.log(name, pass)

const user2 = {
    name: {
        first: "Sam",
        second: "Smith"
    },
    pass: "qwerty",
    rights: "user"
}
const {name: {first, second}, pass, rights} = user2
            // const {name, pass, rights} = user2
console.log(first, pass)

// default values
function connect({
    host = "localgost",
    port = 3000,
    user = "default"
} = {}) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}
connect({
    host: "127.0.0.1",
    user: "default"
})

//destruct arrays
const numbersss = [3, 5, 6, 6];
const [a, b, c] = numbersss;
const [,,d] = numbersss;
console.log(a, b, c);
console.log(d);
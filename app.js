function getData() {
    //get data
    var age = document.getElementById("age").value;
    console.log(age);

    var condition;
    //if statement
    if (age < 0) 
        condition = 1;
    else if (age == 0) 
        condition = 2;
    else if (age == 1)
        condition = 3;
    else if (age > 1 && age <= 5) 
        condition = 4;
    else if (age > 5 && age < 13) 
        condition = 5;
    else if (age >= 13 && age < 18) 
        condition = 6;
    else if (age >= 18 && age < 20) 
        condition = 7;
    else if (age >= 20 && age < 30) 
        condition = 8;
    else if (age >= 30 && age < 60) 
        condition = 9;
    else if (age >= 60 && age < 122) 
        condition = 10;
    else if (age>=122)
        condition = 11;
    

    //switch case
    switch (condition) {
        case 1:
            document.getElementById("result").innerHTML = ("You're just a sperm. 😛");
            break;
        case 2:
            document.getElementById("result").innerHTML = ("You're a zygote. 😂");
            break;
        case 3:
            document.getElementById("result").innerHTML = ("You're an infant. Welcome to the shitty planet called 'Earth'. 😆");
            break;
        case 4:
            document.getElementById("result").innerHTML = ("You're a toddler. It's surprising that you're using a computer. 😲");
            break;
        case 5:
            document.getElementById("result").innerHTML = ("You're just a kid, go play football. ⚽");
            break;
        case 6:
            document.getElementById("result").innerHTML = ("You're a teenager. By now, probably you're starting to get attracted towards opposite sex. 😁");
            break;
        case 7:
            document.getElementById("result").innerHTML = ("You're an adult now buddy. Now you can watch porn and have safe sex, that is if you have not done those yet. 😉");
            break;
        case 8:
            document.getElementById("result").innerHTML = ("You're a youth now. Go follow your passion. 👌");
            break;
        case 9:
            document.getElementById("result").innerHTML = ("You're a grown up citizen and probably a parent. Secure your and your family's future. 👍");
            break;
        case 10:
            document.getElementById("result").innerHTML = ("You're an oldie and probably retired. Hope you had a good life and collected good memories. ☺️");
            break;
        case 11:
            document.getElementById("result").innerHTML = ("You're a new world record. Congrats. 👏 ");
            break;
    }

}
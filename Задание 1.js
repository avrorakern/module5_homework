let inputValue = +prompt('Введите значение: ');
if (typeof inputValue == 'number' && inputValue != NaN) {
    if (inputValue % 2 == 0) {
        alert('Число четное!');
    } else {
        alert('Число нечетное!');
    }
} else {
    alert('Упс, кажется, вы ошиблись!');
}
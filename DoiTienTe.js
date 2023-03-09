function Convert() {
    let money = getElemantById(money).value;
    let from = getElemantById(from).value;
    let to = getElemantById(to).value;
    if (from === to){
        alert(money + from);
    }

}

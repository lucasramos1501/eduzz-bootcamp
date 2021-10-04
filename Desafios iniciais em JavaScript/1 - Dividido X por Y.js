let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        if(X == 0){
           console.log("0.0");
        }else{
          let divisao = parseFloat(X / Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
          console.log(divisao);
        }
    }
}
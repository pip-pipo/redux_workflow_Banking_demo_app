export const deposite =(amount)=>{
    return {type:"DEPOSITE",amount:parseInt(amount)};
}
export const withdraw =(amount)=>{
    return {type:"WITHDRAW",amount:parseInt(amount)};
}
export const collectinterst =()=>{
    return {type:"COLLECTINTERST"};
}
export const deleteamount =()=>{
    return {type:"DELETEACCOUNT"};
}

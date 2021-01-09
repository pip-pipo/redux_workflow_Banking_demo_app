const initialState = 0

export const BankingReuducers = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSITE":
            // logic for deposite
            return state + action.amount;
        case "WITHDRAW":
            // logic for withdeaw
            return state - action.amount;
        case "COLLECTINTERST":
            // collectintest
            return state * 1.03;
        case "DELETEACCOUNT":
            // deleteaccount
            return 0;
        default:
            return state;
    };

};






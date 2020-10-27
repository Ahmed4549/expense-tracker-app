const TransactionReducer = (state , action)=>{
    switch(action.type){
        case "ADD": {
            return [...state, action.payload]
        }
        case "DELETE": {
            
        }
        default:{
            return state;
        }
    }
}
export default TransactionReducer; 
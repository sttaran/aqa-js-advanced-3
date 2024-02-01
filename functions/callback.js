

// function hof (cb){
//     console.log("High Order Function")
//     cb()
// }
//
//
// const sayHello = () => console.log("Hello from Callback")
// const sayGoodBye = () => console.log("GoodBye from Callback")
//
// hof(sayGoodBye)
//

//
// function processPayment(onSuccessCb, onFailureCb){
//     try{
//         if(Date.now() % 2 === 0){
//             throw new Error("Error payment")
//         }
//
//         onSuccessCb()
//     }catch (e){
//         onFailureCb(e)
//     }
// }
//
// function onPaymentSuccess(){
//     console.log("Payment has been processed")
// }
//
// function onPaymentError(error){
//     console.log(`Payment Error has happened: ${error.message}`)
// }
//
// processPayment(onPaymentSuccess, onPaymentError)

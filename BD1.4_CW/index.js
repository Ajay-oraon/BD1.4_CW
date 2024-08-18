let express = require("express");
let app = express();
const port = 3000;

function getWelcomeMessage() {
  return `Welcome to our services`;
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});
function getGreetingMessage(name) {
  return `Hello ${name}!`;
}
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function sum(a, b) {
  return a + b;
}
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(sum(num1, num2).toString());
});

function getSubscriptionStatus(name,isSubscribed){
  if(isSubscribed){
    return `${name} is subscribed`;
  }else{
    return `${name} is not subscribed`;
  }
}

function getDiscountedPrice(price,discount){
  return price-(price*(discount/100))
}
app.get("/discounted-price",(req,res)=>{
  let price = parseFloat(req.query.price);
 let discount = parseFloat(req.query.discount);
  
  res.send(getDiscountedPrice(price,discount).toString());
})

app.get("/subscription-status",(req,res)=>{
  let username=req.query.username;
  let isSubscribed=req.query.isSubscribed;
  res.send(getSubscriptionStatus(username,isSubscribed))
  
})

function getPersonalizedGreeting(name,age,gender){
  return `Hello, ${name}! You are a ${age} year old ${gender}.`
}

app.get("/personalized-greeting",(req,res)=>{
  let name=req.query.name;
  let age=parseFloat(req.query.age)
  let gender=req.query.gender;
  res.send(getPersonalizedGreeting(name,age,gender));
})

function getFinalPrice(price,discount,tax){
  let discountedPrice=price-(price*(discount/100));
  return discountedPrice +(discountedPrice*(tax/100))
}
app.get("/final-price",(req,res)=>{
  let price=parseFloat(req.query.price);
  let discount=parseFloat(req.query.discount);
  let tax=parseFloat(req.query.tax);
  res.send(getFinalPrice(price,discount,tax).toString());
})

function getTotalExerciseTime(running,cyclying,swimming){
  return running+cyclying+swimming;
}
app.get("/total-exercise-time",(req,res)=>{
  let running =parseFloat(req.query.running);
  let cycling =parseFloat(req.query.cycling);
  let swimming =parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running,cycling,swimming).toString())
})

app.listen(port, () => {
  console.log("server is running on port", port);
});

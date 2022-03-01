drop=()=>{
  var a = document.getElementsByClassName('drop');
  var b = document.getElementById('btn');
  if(a[0].style.height != '135px'){
    a[0].style.height = '135px';
    a[0].style.transition = '300ms';
    b.style.transform = 'rotate(90deg)';
    b.style.transition = '300ms';
  }
  else{
    a[0].style.height = 0;
    a[0].style.transition = '300ms';
    b.style.transform = 'rotate(0deg)';
  }
};
date=()=>{
  var data = document.getElementById('date2');
  var a1 = new Date();
  var date = a1.getDate();
  if(date < 10){
    date = "0"+date;
  }
  var Months = a1.getMonth() + 1;
  if(Months < 10){
    Months = "0"+Months;
  }
  var Year = a1.getYear() - 100;
  var Years = 2000 + Year;
  console.log(a1.getDate());
  time = "Date:"+ date +"/"+ Months +"/"+ Years;
  data.innerText = time;
};
date();
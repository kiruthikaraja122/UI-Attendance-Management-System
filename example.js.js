    //callback example code 

   /* const f1 =(val,callback)=>{
        return callback (val+20)
    }
    const callback=(val)=>{
        return val+20;
    }
    console.log(f1(1,callback))*/
 
    //promise  example code 

    /*const p1 =val=>new Promise((resolve,reject) => {
        setTimeout(()=>{
resolve(val+10)
        },1000);
    
    })
    p1(1).then(x=>x+20).then(console.log)*/
    
  /*  const x = ()=>{
        return new Promise((res,rej) => {
            setTimeout(()=>res('from x resolved'),3000);
        });
    };
    
    const y = ()=>{
        return new Promise((res,rej) => {
            setTimeout(()=>res('from y resolved'),3000);
        });
    };

    const z= ()=>{
        return new Promise((res,rej) => {
            setTimeout(()=>rej('from y resolved'),1000);
        });
    };


Promise.allSettled([x(),y(),z()])
.then(result =>console.log(result))
.catch(error => console.log('error'))
    
Promise.all([x(),y(),z()])
.then(result =>console.log(result))
.catch(error => console.log('error'))


Promise.race([x(),y(),z()])
.then(result =>console.log(result))
.catch(error => console.log('error'))*/
    

  //asyn /await   code 
let testing = ()=>{
    let pro = new Promise((res,rej)=>{
        let number = 1 + 3;
        if(number ==4) {
            res("success");
        }else{
            rej("failed");
        }
    });
        return pro;
    }


 async function test(){
     try{
    let response = await testing();

    console.log(response);
     }
     catch(err){
        console.log(err);
     }
 }
test()

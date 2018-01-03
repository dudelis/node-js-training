console.log('Starting app');

setTimeout(() => {
    console.log('Job done');
}, 2000);

setTimeout(()=>{
    console.log('Second set timeout');
}, 0)

console.log('Finishing app');
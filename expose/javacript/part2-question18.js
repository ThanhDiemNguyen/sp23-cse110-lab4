function print_time() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
    setInterval(print_time, 1000);
}
print_time();

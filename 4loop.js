const bottle = {
    color: 'yellow',
    hold : 'water',
    price: 50,
    isCleaned: true
};

for(const prop in bottle){
    console.log(`${prop}: ${bottle[prop]}`);
}
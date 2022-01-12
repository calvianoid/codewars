function noSpace(x) {
    // const newX = x.split('')
    // const result = newX.map(el => {
    //   switch(el){
    //     case ' ' : return '';
    //     default: return el;
    //   }
    // })
    // return result.join('');

    return x.replace(/\s/g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); //'8j8mBliB8gimjB8B8jlB

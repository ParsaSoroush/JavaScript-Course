// Number()
let a = Number(true);
let b = Number(false);
let c = Number("10");  
let d = Number("  10");  
let e = Number("10  ");  
let f = Number(" 10  ");  
let g = Number("10.33");  
let h = Number("10,33");  
let i = Number("10 33");  
let j = Number("John");
let k = Number(Date('2025-5-10'));

// parseInt()
let m = parseInt("10");
let n = parseInt("10.33");
let o = parseInt("10,33");
let p = parseInt("10 33");
let q = parseInt("John");
let r = parseInt(Date('2025-5-10'));

// parseFloat()
let s = parseFloat("10");
let t = parseFloat("10.33");
let u = parseFloat("10,33");
let v = parseFloat("10 33");

// Number()
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);

// parseInt()
console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
console.log(r);

// parseFloat()
console.log(s);
console.log(t);
console.log(u);
console.log(v);
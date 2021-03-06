function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  const list = document.querySelector('div#grand-node')
  let current = list
  let next = []
  while (current.children.length) {
  //  if (current.children==[]) {
    //  return current
  //  }
    //else{
      current=current.children[0]
      //for (let i = 0, l = current.children.length; i < l; i++) {
        //next.push(current.children[i])
      //}
  //  }
  }
  return current
}

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li')
  for(let i=0;i<list.length;i++){
    list[i].innerHTML=parseInt(list[i].innerHTML,10)+n
  }
  return list
}

// function find(array, criteriaFn) {
//   // initialize two variables, `current`, and `next`
//   // `current` keeps track of the element that we're
//   // currently on, just like we did when unpacking the
//   // array above; `next` is itself an array that keeps
//   // track of the elements (which might be arrays!) that
//   // we haven't looked at yet
//   let current = array
//   let next = []
//
//   // hey, a `while` loop! this loop will only
//   // trigger if `current` is truthy — so when
//   // we exhaust `next` and, below, attempt to
//   // `shift()` `undefined` (when `next` is empty)
//   // onto `current`, we'll exit the loop
//   while (current) {
//     // if `current` satisfies the `criteriaFn`, then
//     // return it — recall that `return` will exit the
//     // entire function!
//     if (criteriaFn(current)) {
//       return current
//     }
//
//     // if `current` is an array, we want to push all of
//     // its elements (which might be arrays) onto `next`
//     if (Array.isArray(current)) {
//       for (let i = 0, l = current.length; i < l; i++) {
//         next.push(current[i])
//       }
//     }
//
//     // after pushing any children (if there
//     // are any) of `current` onto `next`, we want to take
//     // the first element of `next` and make it the
//     // new `current` for the next pass of the `while`
//     // loop
//     current = next.shift()
//   }
//
//   // if we haven't
//   return null
// }

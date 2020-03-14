// test
const Exist = (value, type, emptyObject) => {
  // empty TRUE/FALSE = should object have empty or some value inside
  // console.log("!!!", value, type, typeof value, emptyObject);

  if (
    value === undefined ||
    value === "" ||
    value === null ||
    value === NaN ||
    value === false ||
    typeof value !== type
  ) {
    return false;
  }

  // Object or Array
  if (typeof value === "object") {
    // Array
    if (value.length !== undefined) {
      // Array:[] Type:Object EmptyObject:undefined
      // if(value.length === 0 && emptyObject === undefined ){
      //     return true
      // }

      // Array:[] Type:Object EmptyObject:true
      // if(value.length === 0 && emptyObject === true){
      //     return true
      // }
      // Array:[] Type:Object EmptyObject:false
      if (value.length === 0 && emptyObject === false) {
        return false;
      }

      // Array:[1,2,3] Type:Object EmptyObject:undefined
      // if(value.length > 0 && emptyObject === undefined ){
      //     return true
      // }

      // Array:[1,2,3] Type:Object EmptyObject:true
      if (value.length > 0 && emptyObject === true) {
        return false;
      }

      // Array:[1,2,3] Type:Object EmptyObject:false
      // if(value.length > 0 && emptyObject === false){
      //     return true
      // }
    }

    // Object {}
    if (value.length === undefined) {
      // Object:{} Type:Object EmptyObject:undefined
      // if( emptyObject === undefined ){
      //     return true
      // }

      // Object:{} Type:Object EmptyObject:true
      // if( emptyObject === true ){
      //     return true
      // }

      // Object:{} Type:Object EmptyObject:false
      //   if (emptyObject === false) {
      //     return false;
      //   }

      // Object:{a:11} Type:Object EmptyObject:undefined
      // if( emptyObject === undefined ){
      //     for (var key in value) {
      //         if (value.hasOwnProperty(key)) {
      //             return true;
      //         }
      //     }
      // }

      // Object:{a:11} Type:Object EmptyObject:true
      if (emptyObject === true) {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            return false;
          }
        }
      }

      // Object:{a:11} Type:Object EmptyObject:false
      // if( emptyObject === false ){
      //     for (var key in value) {
      //         if (value.hasOwnProperty(key)) {
      //             return true;
      //         }
      //     }
      // }
    }
  }

  return true;
};

// TESTING EXIST

// TRUE
// console.log("name string => true", exist("name", "string"));
// console.log("1 number => true", exist(1, "number"));
// console.log("{a:11} object => true", exist({ a: 11 }, "object"));
// console.log("{a:11} object false => true", exist({ a: 11 }, "object", false));
// console.log("[] object true  => true", exist([], "object", true));
// console.log("[1] object  => true", exist([1], "object"));
// console.log("[1] object  => true", exist([1], "object", false));

// FALSE
// console.log("{a:11} object true  => false", exist({ a: 11 }, "object", true));
// console.log("[] object false  => false", exist([], "object", false));
// console.log("[1] object true  => false", exist([1], "object", true));

export default Exist;

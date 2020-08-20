//replaceWith
describe("replaceWith",function(){
    it("is a string replacement",  function(){
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz")
    });
    it('is case sensitive', function(){
        expect(replaceWith("Foo", "F", "B")).toEqual("Boo")
    });
})

//expand
describe("expand",function(){
    it("if second argument is 1",function(){
        expect(expand(["foo", "test"],1)).toEqual(["foo","test"])
    });
})

//acceptNumbersOnly
describe("acceptNumbersOnly",function(){
    it("true if all arguments are numbers",function()
    {
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true)
    });
    it("false if NaN is passed",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false)
    });
    it("false if string is passed",function(){
        expect(acceptNumbersOnly(1,"foo")).toEqual(false)
    });
    })
  
//MergeObjects
describe("mergeObjects",function(){
    it("returns two merged objects",function(){
        var obj1= {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }   
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        })
   
    })
})

//MergeArray
describe("mergeArrays",function(){
    it("sorted combined arrays",function(){
        expect(mergeArrays([ 2 , 1 ],[ 3 , 4 ])).toEqual([1,2,3,4])
    });
})
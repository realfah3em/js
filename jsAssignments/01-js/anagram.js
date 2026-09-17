function isAnagram(str1, str2){
    console.log("Your Anagrams Are: ", str1, str2);

    if(str1.split('').sort().toString() === str2.split('').sort().toString()){
        console.log(str1 +  str2 + " Are Anagrams");
    }else {
        console.log("They Are Not Anagrams");
    }
}

isAnagram("earth", "heart");

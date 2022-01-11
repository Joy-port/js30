const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const bornIn15 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600 );
  //console.table(bornIn15);

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const invName = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
  //console.log(invName);
  
  // Array.prototype.sort() 不會產生新陣列
  // 3. Sort the inventors by birthdate, oldest to youngest
  //inventors.sort((a,b) => a.year - b.year);  //如果>0 => true + / < 0 ＝>false 反過來 b - a 
  const sort = inventors.sort((a,b) => {
      if(a.year > b.year){
      return 1 ; //true
  }else{
    return -1 ;
  }
  });
  //console.table(sort);
  
  // Array.prototype.reduce()  不會產生新陣列
  // 4. How many years did all the inventors live all together?
  const total = inventors.reduce(function(age, item){
    const year = item.passed - item.year;
    return age + year ;
  }, 0);   
  //console.log(total);

  // 5. Sort the inventors by years lived
  const livedSort = inventors.sort((a, b) => {
    const aLife = a.passed - a.year ;
    const bLife = b.passed - b.year ;
    return aLife - bLife ;   //活最少到最久
  });
  //console.table(livedSort);
  
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
  // let de = links
  //          .map((link) => link.textContent)
  //          .filter((text) => text.includes('de'));
  // console.table(de);

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const lastNameSort = people.sort((lastOne,nextOne) => {
     const [aLast, aFirst] = lastOne.split(', ');
     const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1  ;
  });
    
  //console.table(lastNameSort);

  // 8. Reduce Exercise 統計
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
  const ts = data.reduce(function(total, item){
    if(! total[item]){
      total[item] = 0;
    };
      total[item] ++ ;
      return total ;
  },{});

    //console.log(ts);
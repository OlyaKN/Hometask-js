class Person {
  constructor (name) {
    this.name = name;
    this.bestFriend = [];
  }
  haveYouBestFriend (person) {
    for (var i = 0; i < this.bestFriend.length; i++) {
      if (this.bestFriend[i] == person) {
        return true;
      }
    }
        return false;
  }
  setBestFriend (person) {
    if (this === person) return;
    if (person && !this.haveYouBestFriend(person)) {
      this.bestFriend.push(person);
      person.setBestFriend(this);
    }
  }

  whoIsMyBestFriend () {
    if (this.bestFriend == false) {
    console.log(this.name + " no friends")
  } else {
    var info = this.name + " ";
    this.bestFriend.forEach(function (item) {
      info +=(item.name + " ")
    });
    console.log(info);
  }
  }
}

var sergey = new Person('Sergey');
sergey.whoIsMyBestFriend();
var vasya = new Person('Vasya');
var petya = new Person('Petya');
sergey.setBestFriend(vasya);
sergey.setBestFriend(petya);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();
petya.whoIsMyBestFriend();

class Client {
  constructor (msg) {
    this.msg = msg;
  }

  sayHello () {
    console.log(this.msg + "abc");
  }
}

var client = new Client("msg asdf ");
client.sayHello();
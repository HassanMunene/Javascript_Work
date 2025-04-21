class User {
    private password: String;

    constructor(password: string) {
        this.password = password;
    }

    private getUserInfo() {
        return this.password;
    }

    public userInfo () {
        const info = this.getUserInfo();
    }
}

const user1 = new User("munene");

console.log(user1.userInfo());

export class Login {

    userId!: string;
    userPassword!: string;
    userType!: string;

    setUserId($userId: string) {
        this.userId = $userId;
    }
    setPassword($pass: string) {
        this.userPassword = $pass;
    }
    setUserType($type: string) {
        this.userType = $type;
    }
}
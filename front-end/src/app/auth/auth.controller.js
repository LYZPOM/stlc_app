export class AuthController {

    constructor($auth,toastr) {
        'ngInject';

        this.$auth = $auth;
        this.toastr = toastr;
    }

    register() {
        var vm = this;
        this.$auth.signup(this.user).success(function(response) {
              vm.$auth.setToken(response);
              vm.toastr.success('Register Successfully !!!');
          }).error(function(response) {
             vm.toastr.error("Register Failed ！" + response.message);
        });
    }

    login() {
        var vm = this;
        this.$auth.login(this.login.user).then(function (token) {
            vm.$auth.setToken(token);
        });
    }
}

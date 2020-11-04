<template>
<div>
    <h2>Register</h2>
    <div class="row">
    <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
            <h4>Register</h4>
        </div>
        <div class="card-body">
            <form action="">
            <div class="form-group">
                <label for="username">Username</label>
            <input id="username" type="text"
            placeholder="Username"
            name="username"
            v-model="username"
            class="form-control">


            </div>
             <div class="form-group">
                <label for="name">Full Name</label>
            <input id="name" type="text"
            placeholder="Full Name"
            name="name"
            v-model="name"
            class="form-control">


            </div>
                <div class="form-group">
                <label for="email">Email Adress</label>
            <input id="email" type="text"
            placeholder="Email Addresss"
            name="email"
            v-model="email"
            class="form-control">


            </div>
                 <div class="form-group">
                <label for="password">Password</label>
            <input id="password" type="text"
            placeholder="Password"
            name="password"
            v-model="password"
            class="form-control">


            </div>
                 <div class="form-group">
                <label for="email">Confirm Password</label>
            <input id="confirm_password" type="text"
            placeholder="Confirm Password"
            name="confirm_password"
            v-model="confirm_password"
            class="form-control">


            </div>
            <button class="btn btn-primary">Register</button>
&nbsp;&nbsp;&nbsp;&nbsp;
<router-link to="/login" class="card-link">Already have an account??</router-link>




            </form>
        </div>
    </div>
    </div>
</div>


</template>

<script>
export default {
    data(){
        return{
            username: '',
            name:'',
            password: '',
            confirm_password: '',
            email: ''

        };

    }
    
}
</script>
<style scoped>
.card {
    width: 60%;
    border-radius: 0;
}
.btn {
    border-radius: 0;

}
.form-control {
    border-radius: 0;
}
</style>
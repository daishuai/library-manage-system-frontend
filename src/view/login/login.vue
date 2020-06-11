<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <LoginForm @on-success-valid="handleSubmit"></LoginForm>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/login-form/login-form'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit ({ username, password }) {
      console.log('username:' + username + ',password:' + password);
      this.axios.post('', {'username': username, 'password': password}).then(res => {
        console.log(res.data);
      })
    }
  }
}
</script>

<style lang="less">
  @import './login.less';
</style>

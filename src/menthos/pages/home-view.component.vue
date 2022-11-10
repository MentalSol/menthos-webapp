<template>
  <div class="buttons">
    <div class="button">
      <RouterLink to="/sign-in">
        <pv-button label="SignIn" style="background-color: #9acb3c" />

      </RouterLink>
    </div>
    <div class="button">
      <RouterLink to="/sign-up">
        <pv-button label="SignUp" style="background-color: #9acb3c" />
      </RouterLink>
    </div>
  </div>
</template>

<script>

export default {
  name: "home-view.component"

}
</script>

<style >
.buttons{
  width: 70vw;
  display:flex;
  justify-content:end
}
.button{
  height:80px;
  width: 120px;
  margin: 1.2rem 4rem 3rem 4rem;
  color: black;
  display: block;
  text-align: center;
  font-size: x-large;
}
</style>
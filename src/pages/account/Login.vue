<script setup lang="ts">
  import type { FormInstance } from 'element-plus'
  import router from '@/router'

  const formRef = ref<FormInstance>()
  const loginInput = reactive({
    userid: '',
    pwd: '',
  })

  const signUp = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    router.replace('home')
  }

  const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>

<template>
  <div>login</div>
  <el-form ref="formRef" :model="loginInput" label-position="top" size="large">
    <el-form-item label="Account ID">
      <el-input v-model="loginInput.userid"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="loginInput.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="reset(formRef)">Reset</el-button>
      <el-button @click="signUp(formRef)" type="primary">Sign In</el-button>
    </el-form-item>
  </el-form>
</template>

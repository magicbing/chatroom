<template>
  <div class="chatroom">
    <h1>{{ msg }}</h1>
  
    <Row>
      <Col span="12">
      <Card style="width:320px">
        <div style="text-align:center">
          <img src="https://sfault-avatar.b0.upaiyun.com/119/055/1190556508-5923c3e3428ee_big64">
          <h3>头像</h3>
        </div>
      </Card>
  
      <Form :model="formItem" :label-width="80">
        <Form-item label="文本域">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
          <Button type="primary">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>上传图片</p>
          </div>
        </Upload>
      </Form>
      </Col>
      <!-- 左边栏 -->
  
      <Col span="12">
      <div>
        <div>
          <img src="https://sfault-avatar.b0.upaiyun.com/119/055/1190556508-5923c3e3428ee_big64">
          <span>消息1</span>
        </div>
        <img src="https://sfault-avatar.b0.upaiyun.com/119/055/1190556508-5923c3e3428ee_big64">
        <span>消息2</span>
        <div>
  
        </div>
      </div>
      </Col>
      <!-- 右边栏 -->
    </Row>
  
  </div>
</template>

<script>
import Message from '@/components/Message'

export default {
  name: 'chatroom',
  data() {
    return {
      msg: 'Welcome to this chatroom',
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '留言写在这'
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

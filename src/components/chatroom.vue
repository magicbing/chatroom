<template>
  <div class="chatroom">
    <h1>{{ msg }}</h1>
  
    <Row>
      <Col span="12">
      <Card style="width:320px">
        <div style="text-align:center">
          <img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png">
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
      </Form>
      </Col>
      <!-- 左边栏 -->
  
      <Col span="12">
  
      </Col>
      <!-- 右边栏 -->
    </Row>
  
  </div>
</template>

<script>
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

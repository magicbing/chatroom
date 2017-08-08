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
        <Form-item label="name">
          <Input v-model="formItem.name" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item label="msg">
          <Input v-model="formItem.message" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
          <button v-on:click="sendmsg" type="button" class="ivu-btn ivu-btn-ghost">提交</button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
        <Form-item>
          <input v-on:change="onchange" type="file">
        </Form-item>
        <Upload multiple type="drag" action="sendmsg()">
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
        <div v-for="(item, index) in msgList" v-bind:key="index">
          <Col span="12">
          <div>
            <img v-bind:src="item.avatar">
            <div>{{ item.name }}</div>
          </div>
          </Col>
          <Col span="12">
          <div>
            <div v-if="item.img">
              <img v-bind:src="item.img" style="width:200px;">
            </div>
            <div v-else>{{ item.message }}</div>
          </div>
          </Col>
        </div>
      </div>
      </Col>
      <!-- 右边栏 -->
    </Row>
  
  </div>
</template>

<script>
import Message from '@/components/Message'
//import ws from '../ws.js'

// var ws = new WebSocket('ws://localhost:8081')
// ws.onmessage = function (msg) {
//   if (msg.data == "linkok") {
//     console.log(msg.data)
//     return
//   }
//   console.log(JSON.parse(msg.data).name + JSON.parse(msg.data).message)
//   callback()
//   //console.log( JSON.stringify(msg.data) )
//   //console.log( msg )
//   // ws.onclose = function (evt) { console.log('WebSocketClosed!'); };
// }
var ws = new WebSocket('ws://localhost:8081')
export default {
  name: 'chatroom',
  data() {
    return {
      msg: {
        "avatar": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4073834851,1760808847&fm=26&gp=0.jpg",
        "name": "名字1",
        "message": "消息1",
        "permission": "1"
      },
      msgList: [
        {
          "avatar": "https://sfault-avatar.b0.upaiyun.com/119/055/1190556508-5923c3e3428ee_big64",
          "name": "名字1",
          "message": "消息1",
          "img": "",
          "permission": "1"
        },
      ],
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        name: 'name1',
        message: '留言写在这',
        img: ''
      }

    }
  },
  methods: {
    socket() {
      var that = this
      ws.onmessage = function (msg) {
        if (msg.data == "linkok") {
          console.log(msg.data)
          return
        } else if (JSON.parse(msg.data).img) {

        }

        that.callback(msg)

        // ws.onclose = function (evt) { console.log('WebSocketClosed!'); };
      }
    },
    send() {

    },
    callback(msg) {
      console.log('msg: ' + JSON.parse(msg.data).name + JSON.parse(msg.data).avatar)
      //console.log(JSON.parse(msg.data).name + JSON.parse(msg.data).message)
      //console.log( JSON.stringify(msg.data) )
      //console.log( msg )
      var getMsg = {
        "avatar": JSON.parse(msg.data).avatar,
        "name": JSON.parse(msg.data).name,
        "message": JSON.parse(msg.data).message,
        "img": JSON.parse(msg.data).img,
        "permission": JSON.parse(msg.data).permission
      }
      console.log(this.msgList.push(getMsg))
    },
    sendmsg() {
      let msg = {
        "avatar": "https://sfault-avatar.b0.upaiyun.com/119/055/1190556508-5923c3e3428ee_big64",
        "name": this.formItem.name,
        "message": this.formItem.message,
        "img": this.formItem.img,
        "permission ": "1"
      }
      ws.send(JSON.stringify(msg))
    },
    onchange(evt) {
      console.log('onchange.')
      var that = this
      var files = evt.target.files;
      //console.log('files is:' + files);

      for (var i = 0, f; f = files[i]; i++) {

        //if (!f.type.match('image.*')) {
        //    continue;
        //}

        var reader = new FileReader();

        reader.onload = (function (theFile) {

          return function (e) {

            console.log(e.target)
            console.log(that.formItem.img)
            console.log('uncompress base64' + e.target.result.slice(0, 50));

            that.formItem.img = e.target.result
            that.sendmsg()
            that.formItem.img = ''
          };

        })(f);
        reader.readAsDataURL(f);
      }
    }
  },
  beforeMount: function () {
    this.socket()
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

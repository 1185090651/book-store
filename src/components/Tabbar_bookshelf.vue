<template>
  <div class="tabbar_bookshelf">
    <van-popup v-model="show" class="popup">
        <div class="parent_title">
            <span class="title">书籍分组</span>
        </div>
        <span class="new_group" @click="btn_new_group">+ 新建分组</span>
        <ul class="content">
            <li ><van-icon name="credit-pay" class="icon"/>漫画</li>
            <li><van-icon name="credit-pay" class="icon"/>node</li>
        </ul>
        <div class="parent_cancel" @click="cancel">
            <span class="cancel">取消</span>
        </div> 
    </van-popup>
    <van-popup v-model="new_show" class="popup">
        <div class="parent_title">
            <span class="title">新建分组</span>
        </div>
        <van-cell-group class="new_content">
            <span class="new_con_title">分组名</span>
            <van-field v-model="new_group_name"/>
        </van-cell-group>
        <div class="new_parent_cancel">
            <span class="cancel" @click="cancel">取消</span>
            <span :class="{active: !new_group_name}" @click="new_confirm">确定</span>
        </div> 
    </van-popup>
    <van-tabbar>
        <van-tabbar-item icon="closed-eye">私密阅读</van-tabbar-item>
        <van-tabbar-item icon="down">开启离线</van-tabbar-item>
        <van-tabbar-item icon="peer-pay" is-link @click="showPopup">分组到...</van-tabbar-item>
        <van-tabbar-item icon="failure">移除书架</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data() {
    return {
      show: false,
      new_show: false,
      new_group_name:'',
    }
  },
  methods: {
    showPopup() {
        this.show = true;
    },
    cancel(){
        this.show = false;
        this.new_show = false;
        this.new_group_name = ''
    },
    btn_new_group(){
        this.new_show = true;
    },
    new_confirm(){
        if(this.new_group_name){
            this.new_show = false;
            this.show = false;
            this.new_group_name = ''
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.tabbar_bookshelf{
    width: 100%;
    height: 100%;
    .popup{
        border-radius: 20px;
    }
    .parent_title{
        text-align: center;
        .title{
        margin:30px auto;
        display: inline-block;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        }
    }
    .new_group{
        font-size: 16px;
        padding-left: 20px;
        color: #09f;
    }
    .content{
        width: 240px;
        height: 120px;
        border-radius: 10px;
        padding-left: 20px;
        // padding-top:40px;
        li{
            padding-top: 20px;
            font-size: 14px;
            .icon{
                padding-right: 10px;
                vertical-align: middle;
            }
        }
    }
    .parent_cancel{
        text-align: center;
        background-color: #09f;
        height: 50px;
        line-height: 50px;
        font-size: 17px;
        color: #fff;
    }
    .new_parent_cancel{
        background-color: #09f;
        height: 50px;
        line-height: 50px;
        font-size: 17px;
        color: #fff;
        display: flex;
        justify-content: space-around;
    }
    .new_content{
        width: 240px;
        height: 80px;
        border-radius: 10px;
        padding-left: 20px;
        .new_con_title{
            font-size: 10px;
            padding-left: 16px;
        }
    }
    .active{
        color: #ccc;
    }
}
</style>
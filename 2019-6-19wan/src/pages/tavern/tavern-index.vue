<template>
  <div>
    <header>
      <Head></Head>
    </header>
    <section>
      <div class="container">
        <div class="tavern-head">
          <!-- 左边列表 -->
          <div class="tavern-head-left">
            <el-tabs v-model="activeName">
              <el-tab-pane label="国内酒店" name="first">
                <el-form ref="form" :model="form" label-width="70px">
                  <el-form-item label="目的地" placeholder="三亚">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="入住时间">
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="待定" v-model="form.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-form-item label="退房时间">
                      <el-col :span="10">
                        <el-date-picker type="date" placeholder="待定" v-model="form.date2"
                                        style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="酒店级别">
                    <el-select v-model="form.region" placeholder="不限">
                      <el-option label="不限" value="shanghai"></el-option>
                      <el-option label="五星级/豪华" value="beijing"></el-option>
                      <el-option label="四星级/高档" value="beijing"></el-option>
                      <el-option label="三星级/舒适" value="beijing"></el-option>
                      <el-option label="二星级以下/经济" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.resource" placeholder="海岛"></el-input>
                    </el-col>
                  </el-form-item>
                  <div class="tavern-left-link">
                    <a href="#">温泉、</a>
                    <a href="#">亲子、</a>
                    <a href="#">自由行、</a>
                    <a href="#">名声古迹、</a>
                    <a href="#">都市购物</a>
                  </div>
                  <el-form-item class="tavern-left-button">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="海外酒店" name="second">
                <el-form ref="form" :model="form" label-width="70px">
                  <el-form-item label="目的地" placeholder="三亚">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="入住时间">
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="待定" v-model="form.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-form-item label="退房时间">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="待定" v-model="form.date2"
                                        style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="每间人数">
                    <el-select v-model="form.region" placeholder="2成人">
                      <el-option label="3成人" value="shanghai"></el-option>
                      <el-option label="4成人" value="beijing"></el-option>
                      <el-option label="5成人" value="beijing"></el-option>
                      <el-option label="6成人" value="beijing"></el-option>
                      <el-option label="7成人" value="beijing"></el-option>
                      <el-option label="8成人" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.resource" placeholder="海岛"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item class="tavern-left-button tavern-second-btn">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="酒店团购" name="third">
                <div class="tavern-third-p">
                  <p>热门城市:
                    <a href="#">上海</a>&nbsp;<a href="#">广州</a>&nbsp;<a href="#">深圳</a>&nbsp;<a href="#">北京</a>&nbsp;
                    <a href="#">成都</a>&nbsp;<a href="#">杭州</a>&nbsp;<a href="#">苏州</a>&nbsp;<a href="#">青岛</a>
                  </p>
                  <p>
                    热门团购:
                    <a href="#">度假公寓</a>&nbsp;<a href="#">别墅轰趴</a>&nbsp;<a href="#">住店游玩</a>&nbsp;<a href="#">情侣房</a>&nbsp;<a
                    href="#">火车票</a>&nbsp;
                  </p>
                </div>
                <el-form ref="form" :model="form" label-width="70px" class="tavern-third-box">
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.name" placeholder="(选填)商圈/景区/酒店品牌/酒店名称"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="目的地" placeholder="">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item class="tavern-left-button">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 右边轮播图 -->
          <div class="tavern-head-right">
            <router-link to="/hotelDetail">
              <el-carousel height="4.2rem">
                <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
              </el-carousel>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 主体内容 -->
      <Tavern1></Tavern1>
    </section>
    <!-- 侧边导航 -->
    <!--<aside class="tavern-index-side">-->
      <!--<ul>-->
        <!--<li>i旅行</li>-->
        <!--<li>海外酒店</li>-->
        <!--<li>热门城市酒店</li>-->
        <!--<li>当季热门目的地</li>-->
        <!--<li>特色酒店推荐</li>-->
      <!--</ul>-->
    <!--</aside>-->
    <!-- 底部 -->
    <footer>
      <Foot1></Foot1>
      <Foot3></Foot3>
    </footer>

  </div>

</template>

<script>

  import Head from '@/components/header/head'
  import Tavern1 from '@/components/tavern/tavern1'
  import Foot1 from '@/components/footer/foot-1'
  import Foot3 from '@/components/footer/foot-3'

  export default {
    components: {
      Head,
      Tavern1,
      Foot1,
      Foot3
    },
    data() {
      return {
        activeName: 'second',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }

  }
</script>

<style scoped>
  .tavern-head {
    width: 100%;
    height: 4.2rem;
    margin: 0.3rem 0.2rem 0.2rem 0.2rem;
    display: flex;
  }

  .tavern-head-left {
    height: 4.2rem;
    width: 31.8%;
    border: 0.02rem solid #1ab2db;
    box-sizing: border-box;
    padding: 0 0.1rem;
    overflow: hidden;
  }

  .el-tabs >>> .el-tabs__item {
    font-size: 0.24rem;
    padding: 0 0.1rem;
    color: #999;
  }

  .el-tabs >>> .el-tabs__active-bar {
    height: 0.03rem;
    background-color: #1AB2DB;
  }

  .el-tabs >>> .el-tabs__active-bar:nth-of-type(1) {
    margin-left: 0.1rem;
  }

  .el-tabs >>> .el-tabs__item:hover {
    color: #1AB2DB;
  }

  .el-tabs >>> .el-tabs__item.is-top:nth-child(2) {
    padding-left: 0.25rem;
  }

  .el-tabs >>> .el-tabs__nav-wrap::after {
    height: 0.03rem;
    background-color: #CCCCCC;
    text-align: center;
    width: 92%;
    position: absolute;
    left: 0.15rem;
  }

  .el-form {
    margin-left: 0.1rem;
  }

  .tavern-left-link {
    margin-left: 0.5rem;
    color: #1AB2DB;
  }

  .tavern-left-link a:hover, .tavern-third-p a:hover {
    color: #ffac0e;
  }

  .tavern-left-button {
    margin-top: 0.2rem;
  }

  .tavern-second-btn {
    margin-top: 0.3rem;
  }

  .tavern-third-p {
    border-bottom: 0.01rem dashed #ccc;
    padding-bottom: 0.2rem;
  }

  .tavern-third-p p {
    margin: 0.15rem 0 0 0.1rem;
  }

  .tavern-third-box {
    padding-top: 0.2rem;
  }

  /* 右边轮播图 */
  .tavern-head-right {
    width: 67%;
    height: 4.2rem;
    margin-left: auto;
    position: relative;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/tavern/banner/1.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/tavern/banner/2.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/tavern/banner/3.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 3.2rem;
    top: -0.1rem;
  }

  .el-carousel >>> .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }

  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }
.tavern-index-side ul{

}
</style>

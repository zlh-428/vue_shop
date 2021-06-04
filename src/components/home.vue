<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/hello.jpg" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="logout" type="info">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单模板 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="icons[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="changeActive('/' + subItem.path)"
            >
              <!-- 二级菜单模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边主区块 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 菜单数据
      menulist: [],
      // 小图标
      icons: {
        125: 'iconfont icon-user-group-fill',
        103: 'iconfont icon-database-set',
        101: 'iconfont icon-service',
        102: 'iconfont icon-order',
        145: 'iconfont icon-monitoring',
      },
      isCollapse: false,
      // 当前活跃高亮的二级菜单
      activePath: '',
    }
  },
  // 界面被创建时触发的函数
  created() {
    // 创建之前获取菜单数据
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem("activePath")
  },
  methods: {
    // 退出按钮
    logout() {
      // 清除sessionStorage中的token
      window.sessionStorage.clear()
      // 跳转到login界面
      this.$router.push('/login')
    },
    // 获取所有菜单的数据
    async getMenuList() {
      // 获取data
      const { data: res } = await this.$http.get('menus')
      // 判断获取是否成功
      if (res.meta.status !== 200)
        return this.$message.error('获取菜单数据失败')
      this.menulist = res.data
    },
    // 点击切换侧边的收缩
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 点击菜单高亮
    changeActive(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    },
  },
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}

// 头部样式
.el-header {
  background: #373d41;
  // padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 25px;
    span {
      margin-left: 15px;
    }
  }
  img {
    height: 60px;
    border-radius: 50%;
  }
}

// 侧边样式
.el-aside {
  background: #333744;
  // 去除边框线
  .el-menu {
    border-right: none;
  }
}

// 右边主样式
.el-main {
  background: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

// 折叠按钮样式
.toggle-button {
  background-color: #4a5064;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  font-size: 10px;
  cursor: pointer;
}
</style>
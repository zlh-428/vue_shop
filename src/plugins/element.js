import Vue from 'vue'
// import { Button } from 'element-ui'
// import { Form, FormItem} from 'element-ui'
// import { Input } from 'element-ui'
// // 引入消息弹框
// import { Message } from "element-ui"

import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Menu,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  TableColumn,
  Table,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag
} from "element-ui"

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
// 需要全局注册
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

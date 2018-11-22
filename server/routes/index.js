import Router from 'koa-router'
import { base_API } from "../config"
//引入我们的登录注册控制器
import UserController from '../Controller/UserController'
//引入文章相关的控制器
import ArticleController from '../Controller/ArticleController'
//引入验证token合法性的方法
import checkToken from '../utils/checkToken'
//引入标签相关的控制器
import TagController from '../Controller/TagController'
//引入阅读相关的控制器
import BooksController from '../Controller/BooksController'
//引入关于我的相关的控制器
import BriefsController from '../Controller/BriefsController'

const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器!!!!!'
})
//所有的路由都写在这里就可以了
//前端所有的请求发过来的时候都是http://localhost:3000/api/.....
router.prefix(`${base_API}`)

//登录
router.post('/login',UserController.login)
//退出
//只要是登录后才能看到的内容都需要验证一下token的合法性.
router.get('/logout',checkToken,UserController.logout)
//获取所有的文章
router.get('/articles',checkToken,ArticleController.getArticles)
//添加一篇新的文章
router.post('/articles/add',checkToken,ArticleController.addArticle)
//查询一下最新发布的那片文章的详细信息
router.get('/articles/:id',checkToken,ArticleController.getOneArticle)
//更新一篇新的文章
router.post('/articles/update/:id',checkToken,ArticleController.updateArticle)
//删除一篇文章
router.delete('/articles/:id',checkToken,ArticleController.deleteArticle)
//发布文章
router.put('/articles/publish/:id',checkToken,ArticleController.publishArticle)

//标签
router.put('/:id',checkToken,TagController.updateTag)

//获取所有的阅读文章信息
router.get('/books',BooksController.getBookList)
//添加书籍
router.post('/books/add', checkToken, BooksController.addBook)
//编辑书籍
router.put('/books/edit/:id', checkToken, BooksController.editBook)
//删除书籍
router.delete('/books/delete/:id',checkToken, BooksController.deleteBook)

//获取关于我的
router.get('/briefs',BriefsController.getBrief)
//更改关于我的内容
router.put('/briefs/:id',checkToken,BriefsController.updateBrief)
export default router
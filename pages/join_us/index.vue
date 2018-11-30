<template>
	<div>
   <div><img src="/about_img/join.png" class="w100"></div>
   <div class="container ptb3">
     <div class="font28 black">加入我们</div>
     <!-- <table class="container tc font20">
       <thead>
         <tr class="bgGrey">
           <th>职位类型</th>
           <th>工作地点</th>
           <th>发布时间</th>
           <th>有效日期</th>
           <th>查看详情</th>
         </tr>
       </thead>
       <tbody class="tdColor">
         <tr @click="show(0)">
           <td>销售/客服/技术支持</td>
           <td>深圳 龙岗区</td>
           <td>2018-11-09</td>
           <td>2018-12-09</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr @click="show(1)">
           <td>Java</td>
           <td>深圳 龙岗区</td>
           <td>2018-11-09</td>
           <td>2018-12-09</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr class="show" @click="show(2)">
           <td>PHP</td>
           <td>深圳 龙岗区</td>
           <td>2018-11-09</td>
           <td>2018-12-09</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
       </tbody>
     </table> -->
     <div class="header_span container font20">
       <span>职位类型</span>
       <span>工作地点</span>
       <span>发布时间</span>
       <span>有效日期</span>
       <span>查看详情</span>
     </div>
     <ul class="conter_ul container">
       <li @click="show(0)">
          <div class="join_head font18">
           <span>销售/客服/技术支持</span>
           <span>深圳 龙岗区</span>
           <span>2018-11-09</span>
           <span>2018-12-09</span>
           <span><img src="/about_img/down.png"></span>
         </div>
         <!-- 岗位职责 -->
         <div class="join_box">
           <p>岗位职责:</p>
           <ol>
             <li>销售，商务渠道，区域销售，软件销售，销售顾问，市场拓展1.通过电话和网络的形式开发客户，面谈为主；</li>
             <li>全面掌握市场的变化和竞争对手情况，了解客源市场流量，注意市场结构的变化；</li>
             <li>根据客户需求制定解决方案，为客户提供一站式网络营销推广服务；</li>
             <li>执行公司的各项销售政策，达成销售业绩；</li>
           </ol>
           <!-- 任职要求 -->
           <p>任职要求:</p>
           <ol>
             <li>高中及以上学历；</li>
             <li>有互联网行业销售经验者优先考虑；</li>
             <li>熟练使用MS Office办公软件；4.优秀的言语理解、沟通表达、说服力；</li>
             <li>性格活泼、能主动解决客户提出的异议，做好危机处理工作；;</li>
             <li>条件优秀的应届毕业生也可以考虑。</li>
           </ol>
           <!-- 晋升空间 -->
           <p>晋升空间:</p>
           <ol>
             <li>销售路线：初级销售-高级销售-销售经理</li>
             <li>销售总监管理路线：销售经理-销售总监，可选择带团队</li>
           </ol>
           <!-- 联系方式 -->
           <p>联系方式:</p>
           <dl>
             <dd>联 系 人：<em>陈小姐</em></dd>
             <dd>招聘专线：<em>18922841928</em></dd>
             <dd>简历邮箱：<em>xingyi_sz@sina.com</em></dd>
             <dd>公司地址：<em>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</em></dd>
           </dl>
         </div>
       </li>
       <li @click="show(1)">
         <div class="join_head font18">
           <span>Java</span>
           <span>深圳 龙岗区</span>
           <span>2018-11-09</span>
           <span>2018-12-09</span>
           <span><img src="/about_img/down.png"></span>
         </div>
          <!-- Java职位详情 -->
         <div class="join_box">
           <!-- 岗位职责 -->
           <p>岗位职责:</p>
           <ol>
             <li>负责游戏运营网站和后台管理系统的开发</li>
             <li>对团队成员进行有效的指导，增强团队技术能力  职位要求</li>
           </ol>
           <!-- 任职要求 -->
           <p>任职要求:</p>
           <ol>
             <li>计算机相关专业优先。</li>
             <li>精通PHP或者Java等后台语言，3年以上开发经验，有1年以上项目管理经验</li>
             <li>丰富的web应用系统设计经验，有大型网站系统架构经验者优先；</li>
             <li>优秀的数据库设计和优化能力，至少精通一种数据库应用，mysql优先;</li>
             <li>深入理解数据结构及算法，熟练掌握面向对象设计的基本原则和常用的设计模式并有丰富的使用经验；</li>
             <li>优秀的学习能力，分析和解决问题的能力和强烈的进取心；</li>
             <li>诚恳、踏实，对技术和工作充满热情；</li>
             <li>具备良好的沟通能力和团队合作精神。</li>
           </ol>
           <!-- 联系方式 -->
           <p>联系方式:</p>
           <dl>
             <dd>联 系 人：<em>陈小姐</em></dd>
             <dd>招聘专线：<em>18922841928</em></dd>
             <dd>简历邮箱：<em>xingyi_sz@sina.com</em></dd>
             <dd>公司地址：<em>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</em></dd>
           </dl>
         </div>
       </li>
       <li @click="show(2)">
         <div class="join_head font18">
           <span>PHP</span>
           <span>深圳 龙岗区</span>
           <span>2018-11-09</span>
           <span>2018-12-09</span>
           <span><img src="/about_img/down.png"></span>
         </div>
         <!-- PHP职位详情 -->
         <div class="join_box">
           <!-- 岗位职责 -->
           <p>岗位职责:</p>
           <ol>
             <li>负责游戏运营网站和后台管理系统的开发</li>
             <li>对团队成员进行有效的指导，增强团队技术能力  职位要求</li>
           </ol>
           <!-- 任职要求 -->
           <p>任职要求:</p>
           <ol>
             <li>计算机相关专业优先。</li>
             <li>精通PHP或者Java等后台语言，3年以上开发经验，有1年以上项目管理经验</li>
             <li>丰富的web应用系统设计经验，有大型网站系统架构经验者优先；</li>
             <li>优秀的数据库设计和优化能力，至少精通一种数据库应用，mysql优先;</li>
             <li>深入理解数据结构及算法，熟练掌握面向对象设计的基本原则和常用的设计模式并有丰富的使用经验；</li>
             <li>优秀的学习能力，分析和解决问题的能力和强烈的进取心；</li>
             <li>诚恳、踏实，对技术和工作充满热情；</li>
             <li>具备良好的沟通能力和团队合作精神。</li>
           </ol>
           <!-- 联系方式 -->
           <p>联系方式:</p>
           <dl>
             <dd>联 系 人：<em>陈小姐</em></dd>
             <dd>招聘专线：<em>18922841928</em></dd>
             <dd>简历邮箱：<em>xingyi_sz@sina.com</em></dd>
             <dd>公司地址：<em>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</em></dd>
           </dl>
         </div>
       </li>
     </ul>
   </div> 
  </div>
</template>

<script>
export default {
  name: 'join',
  head(){
    return{
      title:'加入我们'
    }
  },
  data () {
    return {

    }
  },
  methods:{
      show(index){
        if($('.join_box').eq(index).is(":visible")){
            $('.join_box').eq(index).hide()
            $('.join_head').eq(index).find('img').attr('src','/about_img/down.png')
            $('.join_head').eq(index).removeClass('bgGrey')
        }else{
            $('.join_box').eq(index).show()
            $('.join_head').eq(index).find('img').attr('src','/about_img/up.png')
            $('.join_head').eq(index).addClass('bgGrey')
        }
        $('.conter_ul>li').eq(index).siblings().children(".join_box").hide();
        $('.conter_ul>li').eq(index).siblings().find('img').attr('src','/about_img/down.png')
        $('.conter_ul>li').eq(index).siblings().children(".join_head").removeClass('bgGrey')
      }
  }   
}
</script>

<style scoped>
.join_head>span,.header_span>span{
  display: inline-block;
  width: 178px;
  line-height: 70px;
  text-align: left;
  margin-left: 57px;
}
.conter_ul img{
  margin-left: 35px;
}
.header_span{
  background-color: #F3F3F5;
  color: #252525;
}
.join_head:hover{
  background-color: #F3F3F5;
}
.font18{
  color: #5e5e5e;
}
li{
  border-top: 1px solid white;
}
ol li{
  border-top: none;
}
.font28{
  margin-bottom: 36px;
}
.bgGrey{
  background-color: #F3F3F5
}
/*工作详情*/
.join_box{
  font-size: 14px;
  color: #747474;
  margin-left: 72px;
  display: none;
  background-color: white;
  padding-bottom: 10px;
}
ol>li{
  margin-left: 14px;
  margin-bottom:8px;
}
p{
  margin: 10px 0 12px 0 
}
</style>
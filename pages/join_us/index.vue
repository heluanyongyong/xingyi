<template>
	<div>
   <div><img src="/about_img/join.png" class="w100"></div>
   <div class="container ptb3">
     <h1>加入我们</h1>
     <table class="container tc font20">
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
         <tr>
           <td>销售/客服/技术支持</td>
           <td>深圳 龙岗区</td>
           <td>2018-11-09</td>
           <td>2018-12-09</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr>
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
     </table>
     <div class="conter_box">
         <!-- 销售/客服/技术支持职位详情 -->
         <div class="join_box">
           <!-- 岗位职责 -->
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
             <dd>联 系 人：<span>陈小姐</span></dd>
             <dd>招聘专线：<span>18922841928</span></dd>
             <dd>简历邮箱：<span>xingyi_sz@sina.com</span></dd>
             <dd>公司地址：<span>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</span></dd>
           </dl>
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
             <dd>联 系 人：<span>陈小姐</span></dd>
             <dd>招聘专线：<span>18922841928</span></dd>
             <dd>简历邮箱：<span>xingyi_sz@sina.com</span></dd>
             <dd>公司地址：<span>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</span></dd>
           </dl>
         </div>
         <!-- PHP职位详情 -->
         <div class="join_box">
           <!-- <ul class="clearfix">
             <li>职位类别：<span>PHP</span></li>
             <li>最低学历：<span>本科</span></li>
             <li>职位月薪：<span>12000-15000元/月</span></li>
             <li>&nbsp;</li>
           </ul>
           <ul class="clearfix">
             <li>工作经验：<span>不限</span></li>
             <li>工作性质：<span>全职</span></li>
             <li>工作地点：<span>深圳</span></li>
             <li>招聘人数：<span>1人</span></li>
           </ul> -->
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
             <dd>联 系 人：<span>陈小姐</span></dd>
             <dd>招聘专线：<span>18922841928</span></dd>
             <dd>简历邮箱：<span>xingyi_sz@sina.com</span></dd>
             <dd>公司地址：<span>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</span></dd>
           </dl>
         </div>
     </div>
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
        if($('.conter_box div').eq(index).is(":visible")){
            $('.conter_box div').eq(index).hide();
            $('tbody tr').eq(index).find('img').attr('src','/about_img/down.png')
            $('tbody tr').eq(index).removeClass('bgGrey')
        }else{
            $('.conter_box div').eq(index).show()
            $('tbody tr').eq(index).find('img').attr('src','/about_img/up.png')
            $('tbody tr').eq(index).addClass('bgGrey')
        }
      }
  }   
}
</script>

<style scoped>
.conter_box div{
  display: none;
}
td{
  cursor:pointer;
}
.w100{
  width: 100%
}
h1{
  margin-bottom: 36px;
}
.bgGrey{
  background-color: #F3F3F5
}
th,td{
  padding: 24px 0;
  border-bottom: 1px solid white;
}
.tdColor{
  color:  #686868;
}
tbody tr:hover{
  background-color: #F3F3F5;
}
/*工作详情*/
.join_box{
  font-size: 14px;
  color: #747474;
  margin-left: 72px;
}
ul li{
  width: 260px;
  text-align: left;
  margin-top: 27px;
  float: left;
}
ol>li{
  margin-left: 14px;
  margin-bottom:8px;
}
p{
  margin: 27px 0 12px 0 
}
dd{
  margin-bottom: 5px;
}
</style>
用户名：唐平安 
密码：111111
残疾证编号43290119691024455242

3 手机端与服务端接口
3.1 用户登录
3.1.1 用户登录
接口说明	残联个人用户登录
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/personalLogin.do
请求类型	post
请求参数	参数名	类型	参数说明
	user_name	String	用户名
	user_password	String	密码

请求JSON	{}

返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	personal_id	String	用户ID
	{
     "result":"0",
     "msg":"请求成功",
     "data":[{}],
}

3.1.2 用户注册

接口说明	残联个人用户注册
接口方向	手机客户端 -> 服务器系统
接口地址	/mobile_interfaces/mobile_info/personalRegist.do
请求类型	post
请求参数	参数名	类型	参数说明
	user_name	String	手机号码
	user_password	String	密码
	disability_code	String	残疾证编号


请求JSON	{}

返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	{
     "result":"0",
     "msg":"请求成功"
}

3.1.3 忘记密码
接口说明	残联个人忘记密码
接口方向	手机客户端 -> 服务器系统
接口地址	/mobile_interfaces/mobile_info/personalForgetPassWord.do
请求类型	post
请求参数	参数名	类型	参数说明
	user_name	String	手机号码
	disability_code	String	残疾证编号
	user_password	String	新密码

请求JSON	{}

返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	{
     "result":"1",
     "msg":"请求成功"
}


3.2 信息维护
3.2.1 编辑个人简历信息
 
点击简历，可以编辑个人简历信息

接口说明	残联个人用户编辑自己简历信息时调用
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/editPersoanlResume.do
请求类型	post
请求参数
	参数名	类型	参数说明
	resume_id	Int	简历id
	cn_name	String	姓名
	sex	string	性别
	birthday	string	出生日期
	xl	string	学历（0:高中/中专，1:大专，2:本科,3:研究生,4:博士）
	gznf	Int	工作年限
	cardno	string	残疾证编号
	mobile	string	联系电话
	qzzt	Int	求职状态（1: 目前正在找工作，2: 观望有好机会会考虑，3: 我目前不想换工作）
	jzd	string	居住地
	email	string	电子邮件
	weixin	string	微信
	qq	string	QQ
	sfz	string	身份证
	jtdz	string	家庭地址
	gzdd	string	工作地点(选择,湖南省的所有市州)
	qzzw	string	求职职位
	qwxz	string	期望薪资(薪资范围的最小值)
	qwxz1	string	期望薪资(薪资范围的最大值)
	gzlx		工作类型(1:实习生,2: 兼职,3:全职,4:全/兼职)
	jyjl	string	教育经历
	gzjl	string	工作经历
	zwpj	String	自我介绍
	jntcms	string	技能特长

请求JSON	{}

返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	{
     "result":"0",
     "msg":"请求成功",
     "data":[{}],
}

3.2.2 修改个人简历信息
接口说明	残联个人用户修改自己简历信息时调用
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getPersoanResumeInfoById.do
请求类型	post
请求参数	参数名	类型	参数说明
	personal_id	Int	个人id

请求JSON	{}

返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	personal _name	String	个人姓名
	Sex	string	性别
	birthday	string	出生日期
	education	string	学历
	work_years	Int	工作年限
	disability_code	string	残疾证编号
	phone	string	联系电话
	job_search_status	Int	求职状态（1:待业，2:已入职，3:待定）
	education_experience	string	教育经历
	work_experience	string	工作经历
	self_introduction	String	自我介绍
	返回格式：
{
    "msg": "请求成功",
    "data": {
           
     },
    "result": 0
}

3.2.3 搜索岗位信息
根据不同的工作类型获取相应的岗位要求信息
 
登录成功后界面
 
接口说明	个人用户搜索岗位信息时调用此接口
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCompanyByParam.do
请求类型	post
请求参数	参数名	类型	参数说明
	work_type	string	工作类型（1:全职，2:兼职，3:实习）
	addr_area	string	地区
	industry	string	行业
	post_name	string	岗位名称
	salary_type	string	薪资
	hot_recommend	string	热门岗位推荐（1：是，0否）

请求JSON	{
}


返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	company_id	Int	公司id
	company_name	String	公司名称
	post_name	String	岗位名称
	post_id	int	岗位ID
	salary_area	String	岗位薪资范围
	addr_area	String	公司区域
	post_type	String	岗位类型（1:全职，2:兼职，3:实习）
	education_area	String	学历要求
	{
     "result":"0",
     "msg":"请求成功",
     "data":[{}],
}

3.2.4 获取公司信息
 

接口说明	获取指定公司信息
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCompanyInfoById.do
请求类型	get
请求参数	参数名	类型	参数说明
	company_id	Int	公司id
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。其于失败
	msg	String	对应状态消息
	data	String	返回列表json串
	company_id	Int	公司id
	company_name	String	公司名称
	post_name	String	岗位名称
	salary_area	String	岗位薪资范围
	addr_area	String	公司区域
	address	String	公司地址
	post_type	String	岗位类型（1:全职，2:兼职，3:实习）
	education_area	String	学历要求
	post_introduction	String	职位介绍
	post_demand	String	职位要求
	company_introduction	String	公司介绍
	collection_status	String	收藏状态（0：未被收藏，1已收藏）
	返回格式：
{
    "msg": "请求成功",
    "data": {
           
     },
    "result": 1
}
	
3.2.5 投递简历
 
接口说明	用户投递简历
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/sendResume.do
请求类型	Get
请求参数	参数名	类型	参数说明
	personal_id	Int	用户id
	company_id	Int	公司id
	post_id	Int	发布岗位信息Id
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。其于失败
	msg	String	对应状态消息
	data	String	返回列表json串
	返回格式：
{
    "msg": "请求成功",
    "data": {
           
     },
    "result": 0
}
3.2.6 简历状态通知
 
接口说明	获取用户投递简历状态信息
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getResumeStatus.do
请求类型	Get
请求参数	参数名	类型	参数说明
	personal_id	Int	用户id
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。其于失败
	msg	String	对应状态消息
	data	String	返回列表json串
	psot_id	int	公司发布的岗位信息ID
	Status	String	用户简历状态（1：被查看，2：企业接收，3被邀请）
	company_id	int	公司ID
	返回格式：
{
    "msg": "请求成功",
    "data": {
           
     },
    "result": 0
}
	
3.2.7 简历数据，可以查看相应的投递岗位信息
 

接口说明	获取指定公司信息
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCompanyInfo.do
请求类型	get
请求参数	参数名	类型	参数说明
	company_id	Int	公司id
	post_id	Int	发布的岗位信息
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。1无提货单信息   其于失败
	msg	String	对应状态消息
	data	String	返回产品列表json串
	company_id	Int	公司id
	company_name	String	公司名称
	post_name	String	岗位名称
	salary_area	String	岗位薪资范围
	addr_area	String	公司区域
	address	String	公司地址
	post_type	String	岗位类型（1:全职，2:兼职，3:实习）
	education_area	String	学历要求
	post_introduction	String	职位介绍
	post_demand	String	职位要求
	company_introduction	String	公司介绍
	返回格式：
{
    "msg": "请求成功",
    "data": {
     },
    "result": 0
}
3.2.8 我投递的简历查询


接口说明	获取我投递的简历信息
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getPersonSendResumeInfo.do
请求类型	get
请求参数	参数名	类型	参数说明
	personal_id	int	个人ID
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。  其于失败
	msg	String	对应状态消息
	data	String	返回列表json串
	company_id	Int	公司id
	company_name	String	公司名称
	post_name	String	岗位名称
	salary_area	String	岗位薪资范围
	addr_area	String	公司区域
	address	String	公司地址
	post_type	String	岗位类型（1:全职，2:兼职，3:实习）
	education_area	String	学历要求
	post_introduction	String	职位介绍
	post_demand	String	职位要求
	company_introduction	String	公司介绍
	返回格式：
{
    "msg": "请求成功",
    "data": { 
     },
    "result": 0
}
	


3.2.9 企业邀请通知

接口说明	获取企业邀请通知
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCompanyInviteInfo.do
请求类型	get
请求参数	参数名	类型	参数说明
	company_id	Int	公司id
	post_id	Int	发布的岗位信息
	personal_id	int	个人ID
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。1无提货单信息   其于失败
	msg	String	对应状态消息
	data	String	返回列表json串
	psot_id	int	公司发布的岗位信息ID
	status	String	用户简历状态（1：被查看，2：企业接收，3被邀请）
	company_id	int	公司ID
	返回格式：
{
    "msg": "请求成功",
    "data": { 
     },
    "result": 0
}
	
3.2.10 推送通知
接口说明	用户查看最新消息（投递简历被企业接收和企业邀请信息）
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCompanyInviteInfo.do
请求类型	get
请求参数	参数名	类型	参数说明
	company_id	Int	公司id
	post_id	Int	发布的岗位信息
	personal_id	int	个人ID
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。1无提货单信息   其于失败
	msg	String	对应状态消息
	data	String	返回产品列表json串
	psot_id	int	公司发布的岗位信息ID
	status	String	用户简历状态（1：被查看，2：企业接收，3被邀请）
	company_id	int	公司ID
	返回格式：
{
    "msg": "请求成功",
    "data": { 
     },
    "result": 0
}
	
3.2.11 收藏

接口说明	用户收藏职位信息
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/collectionPost.do
请求类型	get
请求参数	参数名	类型	参数说明
	company_id	Int	公司id
	post_id	Int	发布的岗位信息
	personal_id	int	个人ID
返回结果
JSON格式	属性名	类型	属性说明
	result	Int	状态标示：1成功。1无提货单信息   其于失败
	msg	String	对应状态消息
	data	String	返回产品列表json串
	返回格式：
{
    "msg": "请求成功",
    "data": { 
     },
    "result": 0
}
3.2.12 收藏列表展示
接口说明	个人用户收藏职位信息接口
接口方向	手机客户端 -> 服务器系统
接口地址	http://222.240.214.122:18000/mobile_interfaces/mobile_info/getCollectionInfo.do
请求类型	post
请求参数	参数名	类型	参数说明
	personal_id	Int	个人id

请求JSON	{
}


返回结果
JSON格式	
	属性名	类型	属性说明
	result	String	状态标示：1成功。其于失败
	msg	String	状态对应的消息
	data	Object[]	返回前台json数组,暂无取值数据，当前取空null 
	company_id	Int	公司id
	company_name	String	公司名称
	post_name	String	岗位名称
	post_id	int	岗位ID
	salary_area	String	岗位薪资范围
	addr_area	String	公司区域
	post_type	String	岗位类型（1:全职，2:兼职，3:实习）
	education_area	String	学历要求
	{
     "result":"0",
     "msg":"请求成功",
     "data":[{}],
}

清空收藏接口
字典字段说明：
行业industry
值	名称
1	其他行业
2	农、林、渔、牧业
3	非盈利机构、政府
4	社会服务
5	保险业
6	科研及综合艺术
7	文化教育培训
8	批发和零售
9	交通运输仓储
10	环保、卫生
11	化工、石油、能源
12	法律
13	娱乐、体育
14	制造业
15	印刷、包装
16	新闻影视出版
17	广告业
18	酒店、餐饮
19	旅游
20	建筑、房产
21	生物及保健制药
22	咨询服务
23	耐用消费品（服装、纺织、家电）
24	快速消费品（食品、饮料、化妆品）
25	贸易
26	金融/基金，银行业
27	生产制造/电力电气，电子技术
28	互联网及通讯技术，计算机软/硬件
岗位post
值	名称
1	零售类
2	酒店餐饮
3	金融投资
4	生物医药
5	生产制造
6	服装、纺织
7	房产、建筑、城建
8	互联网及计算机软/硬件
9	综合类职能

区域addr_area
值	名称
1	长沙
2	株洲
3	益阳
4	常德
5	衡阳
6	湘潭
7	岳阳
8	郴州
9	邵阳
10	怀化
11	永州
12	娄底
13	湘西
14	张家界
薪资范围salary_area
值	名称
1	1000以下
2	1000-2000（含）
3	2000-4000（含）
4	4000-6000（含）
5	6000-8000（含）
6	8000-10000（含）
7	10000以上


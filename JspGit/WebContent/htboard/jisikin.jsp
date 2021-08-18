<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html lang="ko">
<head>
<meta name="referrer" contents="always">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="지식나눔과 기부로 함께 성장하는 지식iN을 만나보세요.">
<meta name="viewport" content="width=1024">

<meta name="msapplication-config" content="none">

<link rel="stylesheet" type="text/css"
	href="css/common.css">
<link rel="stylesheet" type="text/css"
	href="https://ssl.pstatic.net/static.kin/static/pc/20210728150801/css/min/components.css">




<link rel="stylesheet" type="text/css"
	href="https://ssl.pstatic.net/static.kin/static/pc/20210728150801/css/min/other.css">

<link rel="stylesheet" type="text/css"
	href="css/main.css">

<link rel="stylesheet" type="text/css"
	href="https://ssl.pstatic.net/static.kin/static/pc/20210728150801/css/min/c3p.datalab.theme.css">


<script>
	var pcDomain = "kin.naver.com";
	var pcDomainWithProtocol = "https://kin.naver.com";
	var pcKinServiceProtocol = "https";

	var mobileDomain = "m.kin.naver.com";
	var mobileDomainWithProtocol = "https://m.kin.naver.com";
	var mobileKinServiceProtocol = "https";

	var uploadDomain = "upload.kin.naver.com";
	var uploadDomainWithProtocol = "https://upload.kin.naver.com";
	var uploadKinServiceProtocol = "https";
</script>


<script type="text/javascript"
	src="js/kin.js"></script>





<meta http-equiv="Content-Type" content="text/html; charset=utf-8">


<meta name="robots" content="index,nofollow">




<meta property="og:title" content="이웃동물">


<meta property="og:url" content="https://kin.naver.com/index.naver">



<meta property="og:image"
	content="https://ssl.pstatic.net/static/kin/common/kin_thumbnail_new_w1000.png">

<meta property="og:description" content="지식나눔과 기부로 함께 성장하는 지식iN을 만나보세요.">
<meta property="og:article:author" content="이웃동물">
<meta property="og:article:author:url" content="https://kin.naver.com">

<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2.2">
<title>이웃동물</title>

<%-- <script type="text/javascript">
	if (typeof window.nhn == "undefined")
		window.nhn = {};
	if (typeof window.naver == "undefined")
		window.naver = {};
	nhn.isLogin = false;
	nhn.isJunior = ("N" == "Y");
	nhn.isKinUser = false;
	nhn.isPortableDevice = false;
	nhn.jsDir = 'https://ssl.pstatic.net/static.kin/static/pc/20210728150801/js/min';
	document.domain = "naver.com";

	var g_ssc = ("kin.home" == "") ? "kin.temp" : "kin.home";
	var ccsrv = "cc.naver.com";

	var kinRos = {
		bIsNoticeDisplay : ("false" == "" || "false" == "false") ? false : true,
		bIsActionNoticeDisplay : ("false" == "" || "false" == "false") ? false
				: true

	};
</script>--%>

<style id="gnb_style" type="text/css">
@charset "UTF-8";
/* NTS UIT Development Office YJH 140717 */
a.gnb_my, .gnb_icon, #gnb .gnb_my_interface, .gnb_my_li .gnb_my_content .gnb_membership,
	#gnb .gnb_my_membership, #gnb .gnb_ico_num .gnb_ico_new, #gnb .gnb_ico_num .gnb_ico_new .gnb_count,
	.gnb_lst .ico_arrow, a.gnb_my .filter_mask, .gnb_my_lyr, .gnb_my_li .gnb_my_content .gnb_mask,
	.gnb_my_li .gnb_my_content .gnb_change, .gnb_my_li .gnb_my_content .gnb_edit_lst li,
	.gnb_my_li .gnb_my_content .gnb_pay_check em, #gnb .gnb_my_li .gnb_my_community a.gnb_pay span,
	.gnb_notice_li .gnb_notice_lyr, .gnb_notice_li .svc_list .gnb_ico_mail,
	.gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i,
	.gnb_notice_li .gnb_error .gnb_ico_error, .gnb_ly_alert .gnb_btn_close i,
	.gnb_first_visit, .gnb_search_box, .gnb_search_box .gnb_del_txt,
	.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new, .gnb_svc_more .svc_btnwrp button
	{
	background:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v14.png)
		no-repeat -999px -999px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_v15.png?v=2006)
		no-repeat -999px -999px;
	/* background: url(../img/sp_gnb_v15.png) no-repeat -999px -999px; */
}

.gnb_favorite_area, .gnb_search_area, .gnb_banner, .gnb_linkwrp {
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr2_v2.png)
		no-repeat -999px -999px
}

#gnb .gnb_my_li .gnb_my_community a, .gnb_notice_li .gnb_notice_all, a.gnb_service_all,
	.gnb_svc_more .svc_btns {
	display: block;
	height: 38px;
	border-top: 1px solid #ebebeb;
	background-color: #f8f8f8;
	text-align: center;
	font-weight: bold;
	text-decoration: none;
	letter-spacing: -1px;
	line-height: 38px
}

#gnb .gnb_my_li .gnb_my_community a:visited, .gnb_notice_li .gnb_notice_all:visited,
	a.gnb_service_all:visited, .gnb_svc_more .svc_btns:visited {
	color: #444
}

.gnb_login_li, .gnb_my_li, .gnb_notice_li, .mail_li, .gnb_service_li {
	float: left;
	margin-right: 2px;
	overflow: visible
}

.gnb_login_li a, .gnb_my_li a, .gnb_notice_li a, .mail_li a,
	.gnb_service_li a {
	position: relative;
	z-index: 100
}

a.gnb_my, .gnb_icon {
	position: relative
}

#gnb {
	position: relative;
	z-index: 2147483646;
	font-family: '나눔고딕', NanumGothic, '돋움', Dotum, 'Apple SD Gothic Neo',
		Helvetica, Sans-serif !important;
	color: #444;
	font-size: 12px;
	letter-spacing: 0 !important;
	line-height: normal !important;
	text-align: left !important
}

#gnb div, #gnb p, #gnb span, #gnb em, #gnb strong, #gnb h1, #gnb h2,
	#gnb h3, #gnb h4, #gnb h5, #gnb h6, #gnb ul, #gnb ol, #gnb li, #gnb dl,
	#gnb dt, #gnb dd, #gnb table, #gnb th, #gnb td, #gnb form, #gnb fieldset,
	#gnb legend, #gnb input, #gnb textarea, #gnb button, #gnb label {
	font-family: '나눔고딕', NanumGothic, '돋움', Dotum, 'Apple SD Gothic Neo',
		Helvetica, Sans-serif !important
}

#gnb a, #gnb label, #gnb button {
	cursor: pointer
}

#gnb a, #gnb a:visited, #gnb a:active, #gnb a:focus {
	color: #444
}

#gnb a:hover {
	color: #444;
	text-decoration: underline
}

#gnb input::-ms-clear {
	display: none
}

#gnb em {
	font-style: normal
}

#gnb ul {
	list-style: none
}

#gnb .blind {
	display: block;
	overflow: hidden;
	position: absolute;
	top: -1000em;
	left: 0;
	width: 1px;
	height: 1px;
	margin: 0;
	padding: 0;
	font-size: 0;
	line-height: 0
}

#gnb .gnb_my_membership {
	padding: 0;
	display: block;
	width: 64px;
	height: 16px;
	background-position: -296px -359px;
	margin: 0;
}

#gnb .gnb_my_interface {
	padding: 5px;
	position: absolute;
	top: 12px;
	right: 8px;
	display: block;
	width: 17px;
	height: 16px;
	background-position: -90px 5px
}

#gnb .gnb_my_interface:hover {
	background-position: -90px -20px
}

#gnb .gnb_pad_lyr {
	position: absolute
}

#gnb .gnb_ico_num {
	display: block;
	position: absolute;
	top: 1px;
	width: 40px;
	text-align: center
}

#gnb .gnb_ico_num .gnb_ico_new {
	height: 15px;
	display: inline-block;
	background-position: -331px 0;
	zoom: 1
}

#gnb .gnb_ico_num .gnb_ico_new .gnb_count {
	position: relative;
	top: 0;
	right: -5px;
	height: 15px;
	margin: 0;
	padding: 0 4px 0 1px;
	display: inline-block;
	*display: inline;
	vertical-align: top;
	background-position: 100% 0;
	text-indent: -2px;
	font-family: tahoma !important;
	font-weight: bold;
	color: #fff;
	zoom: 1
}

#gnb .gnb_ico_num .gnb_ico_new .plus {
	margin: 1px -1px 0 2px;
	font-size: 8px;
	display: inline-block;
	color: #fff;
	vertical-align: top
}

:root #gnb .gnb_pad_lyr {
	opacity: 1 !important;
	background: #fff
}

.gnb_lst {
	margin: 0;
	padding: 0;
	zoom: 1
}

.gnb_lst:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_lst ul {
	margin: 0;
	padding: 0
}

.gnb_lst .ico_arrow {
	display: none;
	position: absolute;
	left: 50%;
	top: 27px;
	width: 10px;
	height: 8px;
	margin-left: -5px;
	background-position: -175px -10px
}

.gnb_lyr_opened .gnb_my_lyr, .gnb_lyr_opened .gnb_service_lyr,
	.gnb_lyr_opened .gnb_notice_lyr, .gnb_lyr_opened .ico_arrow {
	display: block !important
}

.gnb_login_li {
	height: 23px;
	padding: 5px 7px 0 0
}

.gnb_btn_login, .gnb_bg, .gnb_bdr {
	display: inline-block;
	width: 46px;
	height: 20px;
	font-size: 12px
}

.gnb_btn_login {
	position: relative
}

.gnb_bg {
	background-color: #fff;
	opacity: 0.05;
	filter: alpha(opacity = 5);
}

.gnb_bdr {
	position: absolute;
	top: -1px;
	left: -1px;
	width: 46px;
	height: 20px;
	border: 1px solid #000;
	opacity: 0.12;
	filter: alpha(opacity = 12);
}

.gnb_txt {
	position: absolute;
	top: 0;
	left: 0;
	width: 45px;
	height: 20px;
	padding-left: 1px;
	line-height: 21px;
	color: #666;
	text-align: center
}

.gnb_btn_login:hover {
	text-decoration: none !important
}

.gnb_account .gnb_btn_login {
	width: 54px;
	margin: -1px 0 0 8px;
	vertical-align: top
}

.gnb_account a.gnb_btn_login .gnb_txt {
	padding-left: 0;
}

.gnb_account .gnb_bdr {
	width: 52px
}

.gnb_account .gnb_txt {
	width: 53px
}

.gnb_my_li {
	margin-right: 7px
}

.gnb_my_namebox {
	padding: 2px 9px 0 0;
	background-repeat: no-repeat;
	background-position: 100% 50%;
	zoom: 1
}

.gnb_my_namebox:after {
	display: block;
	clear: both;
	content: ''
}

a.gnb_my {
	float: left;
	display: block;
	font-size: 12px;
	vertical-align: middle
}

a.gnb_my .filter_mask {
	position: absolute;
	top: -1px;
	left: -1px;
	z-index: 1;
	width: 28px;
	height: 28px;
	background-position: -260px -60px;
}

a.gnb_my img {
	vertical-align: top;
	border-radius: 16px
}

a.gnb_my .gnb_name {
	margin-right: -1px;
	padding-left: 5px;
	display: inline-block;
	height: 28px;
	line-height: 28px;
	vertical-align: top;
	font-size: 11px;
	color: #444
}

a.gnb_my:visited {
	color: #444
}

a.gnb_my:hover, a.gnb_my:active, a.gnb_my:visited, a.gnb_my:focus {
	text-decoration: none !important
}

a.gnb_my:hover .gnb_name {
	text-decoration: underline
}

a.gnb_my .ico_arrow {
	top: 25px;
	margin-left: 8px
}

.gnb_my_namebox a.gnb_emp {
	float: left;
	display: inline-block;
	height: 28px;
	margin-left: 3px;
	line-height: 28px;
	font-size: 11px;
	color: #777 !important
}

.gnb_my_lyr {
	display: none;
	position: absolute;
	top: 26px;
	right: -8px;
	padding: 9px 5px 4px 4px;
	width: 316px;
	height: 155px;
	background-position: -2px -1310px;
	z-index: 10
}

.gnb_my_lyr.gnb_groupid {
	height: 144px;
	background-position: -2px -1500px
}

.gnb_my_lyr.gnb_groupid .gnb_my_content {
	height: 80px
}

.gnb_my_lyr.gnb_groupid.gnb_longid1 {
	height: 144px; /*background-position:-2px -1664px*/
}

.gnb_my_lyr.gnb_groupid.gnb_longid2 {
	height: 144px;
	background-position: -2px -1828px
}

.gnb_my_lyr.gnb_longid1 { /*width:318px;*/
	/*background-position:-2px -1118px;*/
	
}

.gnb_my_lyr.gnb_longid2 {
	width: 348px;
	background-position: -2px -926px
}

.gnb_my_li .gnb_my_content {
	zoom: 1;
	height: 91px;
	padding: 15px 0 10px 15px
}

.gnb_my_li .gnb_my_content:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_my_li .gnb_my_content .gnb_img_area {
	float: left;
	position: relative;
	display: block;
	width: 80px;
	margin: 1px 0 0 1px;
}

.gnb_my_li .gnb_my_content .gnb_img_area img {
	vertical-align: top
}

.gnb_my_li .gnb_my_content .gnb_mask {
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 80px;
	height: 80px;
	background-position: -70px -60px
}

.gnb_my_li .gnb_my_content .gnb_change {
	position: absolute;
	bottom: -2px;
	left: -2px;
	display: block;
	width: 28px;
	height: 28px;
	background-position: -140px 0px
}

.gnb_my_li .gnb_my_content .gnb_change:hover {
	background-position: -140px -30px
}

.gnb_my_li .gnb_my_content .gnb_txt_area {
	float: left;
	width: 210px;
	margin: 0 0 0 10px
}

.gnb_longid1 .gnb_my_content .gnb_txt_area { /* width:210px; */
	
}

.gnb_longid2 .gnb_my_content .gnb_txt_area {
	width: 235px
}

.gnb_my_li .gnb_my_content .gnb_account {
	margin-bottom: 3px 0 1px;
	font-size: 0
}

.gnb_my_li .gnb_my_content .gnb_name {
	color: #666;
	font-size: 14px
}

.gnb_my_li .gnb_my_content .gnb_name a {
	display: inline-block;
	vertical-align: top;
	font-weight: bold;
	color: #222 !important
}

.gnb_my_li .gnb_my_content a.gnb_mail_address {
	margin-left: 1px;
	font-family: tahoma;
	color: #666 !important;
	font-size: 12px
}

.gnb_my_li .gnb_my_content .gnb_edit_lst {
	zoom: 1;
	margin-top: 7px !important
}

.gnb_my_li .gnb_my_content .gnb_edit_lst:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_my_li .gnb_my_content .gnb_edit_lst li {
	float: left;
	padding-left: 6px;
	margin-left: 5px;
	background-position: -290px -25px
}

.gnb_my_li .gnb_my_content .gnb_edit_lst li.gnb_info {
	padding-left: 0;
	margin-left: 0;
	background: none
}

.gnb_my_li .gnb_my_content .gnb_edit_lst a {
	color: #666 !important;
	letter-spacing: -1px
}

.gnb_my_li .gnb_my_content .gnb_membership {
	display: inline-block;
	margin-right: 5px;
	margin-left: 1px;
	padding-right: 8px;
	background-position: -287px -403px;
}

.gnb_my_li .gnb_my_content .gnb_pay_check {
	height: 16px;
	margin: 7px -4px 0 0 !important
}

@media screen and (min-width: 0\0) {
	.gnb_my_li .gnb_my_content .gnb_pay_check {
		margin-top: 17px
	}
}

.gnb_my_li .gnb_my_content .gnb_pay_check em {
	display: inline-block;
	width: 16px;
	height: 16px;
	background-position: -300px -309px;
	margin: 0 4px 0 0;
	overflow: hidden;
	font-size: 0;
	line-height: 0;
	vertical-align: top
}

.gnb_my_li .gnb_my_content .gnb_pay_check a {
	font-size: 14px;
	letter-spacing: -1px;
	line-height: 16px;
	vertical-align: top
}

.gnb_my_li .gnb_my_content .gnb_pay_check span {
	font-weight: bold;
}

.gnb_my_li .gnb_my_content .gnb_pay_check strong {
	font-family: tahoma;
	letter-spacing: 0;
	vertical-align: top;
}

.gnb_my_li .gnb_my_content .gnb_pay_check a, .gnb_my_li .gnb_my_content .gnb_pay_check span,
	.gnb_my_li .gnb_my_content .gnb_pay_check strong {
	font-size: 12px;
	color: #222 !important
}

#gnb .gnb_my_li .gnb_my_community {
	clear: both;
	zoom: 1
}

#gnb .gnb_my_li .gnb_my_community:after {
	display: block;
	clear: both;
	content: ''
}

#gnb .gnb_my_li .gnb_my_community a {
	float: left;
	width: 106px;
	margin-right: 0;
	border-right: 1px solid #ebebeb
}

#gnb .gnb_my_li .gnb_my_community a.gnb_pay {
	width: 102px;
	border-right: 0;
	line-height: 0
}

#gnb .gnb_my_li .gnb_my_community a.gnb_pay span {
	display: inline-block;
	width: 41px;
	height: 16px;
	background-position: -300px -334px;
	margin: 11px auto 0;
	font-size: 0;
	line-height: 0
}

#gnb .gnb_my_li .gnb_my_community a:active, #gnb .gnb_my_li .gnb_my_community a:focus,
	#gnb .gnb_my_li .gnb_my_community a:visited {
	text-decoration: none !important
}

#gnb .gnb_my_li .gnb_my_community a:hover {
	text-decoration: underline !important
}

#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a { /*width:105px;*/
	
}

#gnb .gnb_my_lyr.gnb_longid1 .gnb_my_community a.gnb_pay {
	/* width:106px;*/
	
}

#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a {
	width: 115px
}

#gnb .gnb_my_lyr.gnb_longid2 .gnb_my_community a.gnb_pay {
	width: 116px
}

#gnb.gnb_one .gnb_my_community a, #gnb.gnb_one_small .gnb_my_community a
	{
	margin-right: 0 !important;
}

.gnb_notice_li a.gnb_notice {
	display: block;
	width: 15px;
	height: 17px;
	padding: 7px 9px 4px;
	text-decoration: none !important
}

.gnb_notice_li a.gnb_notice .gnb_ico_num {
	left: 1px;
	top: 0
}

.gnb_notice_li a.gnb_notice .gnb_icon {
	display: block;
	width: 15px;
	height: 17px;
	background-position: -3px -60px
}

.gnb_notice_li a.gnb_notice:hover .gnb_icon {
	background-position: -38px -60px;
	text-decoration: none !important
}

.gnb_notice_li .gnb_notice_lyr {
	display: none;
	position: absolute;
	top: 26px;
	right: -7px;
	width: 297px;
	height: 330px;
	padding: 9px 4px 4px;
	background-position: -2px -584px;
	z-index: 10;
	overflow: hidden
}

.gnb_notice_li .svc_scroll {
	height: 291px;
	overflow: scroll;
	overflow-x: hidden;
	position: relative;
	zoom: 1
}

.gnb_notice_li .svc_panel {
	width: 100%;
	height: 330px;
	overflow: hidden
}

.gnb_notice_li .svc_head {
	position: relative;
	height: 36px;
	padding-left: 15px;
	line-height: 20px;
	border-bottom: 1px solid #eaeaea;
	zoom: 1
}

.gnb_notice_li .svc_head .gnb_tit {
	color: #6b6d70;
	margin-right: 1px;
	line-height: 36px
}

.gnb_notice_li .svc_head .task_right {
	position: absolute;
	right: 8px;
	top: 8px;
	font-size: 0
}

.gnb_notice_li .svc_head .task_right button {
	height: 20px;
	padding: 0 6px;
	margin-left: 4px;
	border: 1px solid #ddd;
	color: #888;
	background-color: #fff;
	font-family: '나눔고딕', NanumGothic;
	font-size: 12px;
	letter-spacing: -1px;
	line-height: 18px;
	*line-height: 16px;
	overflow: visible
}

.gnb_notice_li .svc_list .gnb_btn_remove i, .gnb_notice_li .svc_list .gnb_btn_remove span,
	.gnb_notice_li .svc_noti .gnb_ico_mail, .gnb_notice_li .svc_blank .svc_msg_box,
	.gnb_notice_li .svc_blank .gnb_v_guide {
	display: inline-block;
	*display: inline;
	*zoom: 1
}

.gnb_notice_li .svc_list {
	margin-top: -1px
}

.gnb_notice_li .svc_list li {
	position: relative;
	padding: 7px 34px 7px 15px;
	border-top: 1px solid #eaeaea;
	line-height: 18px
}

.gnb_notice_li .svc_list .gnb_new {
	background: #ffffd8
}

.gnb_notice_li .svc_list .gnb_unread .gnb_subject {
	color: #444
}

.gnb_notice_li .svc_list .gnb_unread .d_cnt {
	color: #ff630e
}

.gnb_notice_li .svc_list .gnb_unread a:hover .gnb_subject,
	.gnb_notice_li .svc_list .gnb_unread .gnb_unread a:hover .d_cnt {
	color: #390
}

.gnb_notice_li .svc_list .gnb_unread .svc_name {
	color: #444
}

.gnb_notice_li .svc_list a.gnb_list_cover {
	text-decoration: none !important;
	display: block;
	position: relative;
	zoom: 1
}

.gnb_notice_li .svc_list a:hover .gnb_subject {
	text-decoration: underline
}

.gnb_notice_li .svc_list .gnb_subject {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
	color: #adadad
}

.gnb_notice_li .svc_list .d_cnt {
	font-family: tahoma;
	font-size: 10px
}

.gnb_notice_li .svc_list .gnb_info {
	color: #adadad
}

.gnb_notice_li .svc_list .svc_name {
	margin-right: 3px;
	color: #adadad
}

.gnb_notice_li .svc_list .cchr {
	margin-right: 3px
}

.gnb_notice_li .svc_list .dona {
	position: absolute;
	top: 8px;
	right: 34px;
	text-decoration: underline
}

.gnb_notice_li .svc_list .dona a {
	color: #adadad
}

.gnb_notice_li .svc_list .dona a:hover {
	color: #390
}

.gnb_notice_li .svc_list .gnb_ico_mail {
	width: 14px;
	height: 15px;
	font-size: 0;
	line-height: 0;
	color: #fff;
	vertical-align: top
}

.gnb_notice_li .svc_list .gnb_ico_mail.gnb_yes {
	background-position: -245px -17px
}

.gnb_notice_li .svc_list .gnb_ico_mail.gnb_no {
	background-position: -245px 4px
}

.gnb_notice_li .svc_list .gnb_btn_remove {
	position: absolute;
	right: 4px;
	top: 50%;
	z-index: 100;
	margin-top: -13px;
	padding: 10px;
	line-height: 6px;
	font-size: 0;
	background: none !important;
	border: 0 !important
}

.gnb_notice_li .svc_list .gnb_btn_remove span, .gnb_notice_li .svc_list .gnb_btn_remove i
	{
	display: block !important;
	width: 7px;
	height: 7px;
	font-size: 0;
	line-height: 0;
	color: transparent;
	white-space: nowrap;
	overflow: hidden;
	vertical-align: top;
	background-position: -175px 0
}

.gnb_notice_li .svc_blank {
	position: absolute;
	top: 104px;
	left: 0;
	width: 100%;
	white-space: nowrap;
	height: 100px;
	font-size: 0;
	text-align: center
}

.gnb_notice_li .svc_blank .svc_msg_box {
	white-space: normal;
	font-size: 12px;
	width: 100%
}

.gnb_notice_li .svc_blank .gnb_tit {
	display: block;
	color: #2f3743;
	font-size: 14px;
	margin: 0 0 15px
}

.gnb_notice_li .svc_blank .gnb_tit strong {
	font-weight: normal;
	color: #390
}

.gnb_notice_li .svc_blank .gnb_desc {
	line-height: 19px;
	color: #2f3743;
	margin-bottom: 7px
}

.gnb_notice_li .svc_blank .gnb_desc a, .gnb_notice_li .svc_blank .gnb_link
	{
	color: #390;
	text-decoration: underline
}

.gnb_notice_li .svc_blank .gnb_v_guide {
	vertical-align: middle;
	height: 100%;
	width: 0
}

.gnb_notice_li .svc_blank .gnb_link_wrap {
	text-align: center
}

.gnb_notice_li .svc_blank .gnb_link_wrap .gnb_link {
	display: block;
	width: 40px;
	margin: 0 auto !important;
	text-align: center
}

.gnb_notice_li .svc_loading {
	background: url(https://ssl.pstatic.net/static/www/2014/loading.gif)
		no-repeat #fff center center;
	position: absolute;
	top: 33px;
	left: 0;
	width: 100%;
	height: 245px
}

.gnb_notice_li .gnb_error {
	position: absolute;
	top: 81px;
	left: 2px;
	width: 100%;
	color: #444;
	text-align: center
}

.gnb_notice_li .gnb_error .gnb_ico_error {
	display: inline-block;
	width: 57px;
	height: 57px;
	background-position: -280px -190px
}

.gnb_notice_li .gnb_error .gnb_tit {
	font-size: 14px;
	margin: 15px 0 11px
}

.gnb_notice_li .gnb_error .gnb_desc {
	margin-bottom: 13px;
	line-height: 18px
}

.gnb_notice_li .gnb_error .gnb_link {
	text-decoration: underline
}

.gnb_ly_alert {
	position: absolute;
	top: 110px;
	left: 13px;
	background-color: #fff;
	border: 1px solid #b7b9bc;
	width: 260px;
	padding: 34px 0 20px;
	zoom: 1;
	z-index: 100
}

.gnb_ly_alert .gnb_msg {
	text-align: center;
	line-height: 17px;
	margin-bottom: 14px;
	color: #2f3743
}

.gnb_.ly_alert .gnb_btn_close {
	position: absolute;
	right: 2px;
	top: 0;
	*overflow: visible
}

.gnb_ly_alert .gnb_btns {
	text-align: center
}

.gnb_ly_alert .gnb_btns button {
	height: 27px;
	line-height: 27px;
	*line-height: 22px;
	font-weight: bold;
	font-size: 12px;
	padding: 0 8px;
	color: #2f3743;
	border: 1px solid #ddd;
	background-color: white
}

.gnb_ly_alert .gnb_btns button:first-child {
	margin-right: 4px
}

.gnb_ly_alert .gnb_btn_close {
	position: absolute;
	right: 2px;
	top: 0;
	width: 35px;
	border: 0;
	background: none;
	cursor: pointer;
	border-radius: 0;
	padding: 10px
}

.gnb_ly_alert .gnb_btn_close i {
	display: block;
	width: 15px;
	height: 15px;
	font: 0/0 a;
	color: transparent;
	white-space: nowrap;
	overflow: hidden;
	vertical-align: top;
	background-position: -240px -60px
}

.mail_li a.gnb_mail {
	display: block;
	width: 20px;
	height: 15px;
	padding: 7px 9px 6px;
	text-decoration: none !important
}

.mail_li a.gnb_mail .gnb_icon {
	display: block;
	width: 20px;
	height: 15px;
	background-position: 0px -95px
}

.mail_li a.gnb_mail:hover .gnb_icon {
	background-position: -35px -95px;
	text-decoration: none !important
}

.mail_li .gnb_ico_num {
	left: 6px;
	top: 0
}

.gnb_service_li {
	margin-right: 0
}

.gnb_service_li a.gnb_service {
	display: block;
	width: 16px;
	height: 16px;
	padding: 7px 9px 5px
}

.gnb_service_li a.gnb_service .gnb_icon {
	display: block;
	width: 16px;
	height: 16px;
	background-position: -2px -130px
}

.gnb_service_li a.gnb_service:hover .gnb_icon {
	background-position: -37px -130px;
	text-decoration: none !important
}

.gnb_service_li .gnb_service_lyr {
	display: none;
	position: absolute;
	top: 27px;
	right: -7px;
	z-index: 10
}

.gnb_favorite_search {
	width: 301px;
	letter-spacing: -1px
}

.gnb_response .gnb_favorite_search {
	display: none
}

.gnb_favorite_area {
	height: 93px;
	padding: 8px 4px 0;
	background-position: 0 0
}

.gnb_favorite_lstwrp {
	position: relative;
	padding: 22px 1px 15px 15px;
	border-bottom: 1px solid #ebebeb
}

.gnb_favorite_lstwrp .gnb_my_interface {
	top: 3px !important;
	right: 3px !important
}

.gnb_first_visit {
	position: absolute;
	top: 0;
	left: 0;
	width: 293px;
	height: 92px;
	background-position: 0 -310px;
	z-index: 200
}

.gnb_first_visit .gnb_close {
	position: absolute;
	top: 0;
	right: 0;
	display: block;
	width: 32px;
	height: 32px
}

.gnb_favorite_lst {
	zoom: 1
}

.gnb_favorite_lst:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_favorite_lst li {
	float: left;
	width: 65px;
	text-align: center;
	white-space: nowrap
}

.gnb_favorite_lst a {
	display: inline-block;
	text-align: center;
	font-weight: bold
}

.gnb_favorite_lst .gnb_add a {
	display: block;
	test-align: center;
}

.gnb_favorite_lst .gnb_add a span.ic_add {
	display: block;
	width: 36px;
	height: 36px;
	margin: 0 auto 4px;
	background-image:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);
	background-position: 0px 0px;
	background-repeat: no-repeat;
	width: 36px;
	height: 36px;
	vertical-align: top;
}

.gnb_favorite_lst .gnb_add a:hover span.ic_add {
	background-image:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);
	background-position: -42px 0px;
	background-repeat: no-repeat;
	width: 36px;
	height: 36px;
	vertical-align: top;
}

.gnb_favorite_lst img {
	display: block;
	margin: 0 auto 4px;
	vertical-align: top
}

.gnb_search_area {
	position: relative;
	z-index: 200;
	padding: 18px 4px 17px;
	background-position: -301px 0;
	background-repeat: repeat-y
}

.gnb_search_box {
	position: relative;
	z-index: 101;
	margin: 0 12px 16px 0;
	padding-left: 10px;
	display: block;
	width: 270px;
	height: 35px;
	background-position: 10px -190px
}

.gnb_search_box.over {
	background-position: 10px -230px
}

.gnb_search_box.fcs {
	background-position: 10px -270px
}

.gnb_search_box.fcs input {
	width: 200px;
	font-size: 16px;
	font-weight: bold;
	color: #444;
	outline: 0
}

.gnb_search_box input {
	float: left;
	display: block;
	width: 210px;
	height: 22px;
	margin-top: 6px;
	padding-left: 10px;
	font-family: '나눔고딕', NamumGothic;
	letter-spacing: -1px;
	color: #adadad;
	font-size: 13px;
	border: 0;
	line-height: 22px;
	background: transparent
}

.gnb_search_box .gnb_del_txt {
	position: absolute;
	top: 8px;
	right: 32px;
	display: block;
	width: 17px;
	height: 17px;
	background-position: -190px 0px
}

.gnb_search_box .gnb_del_txt:hover {
	background-position: -190px -20px
}

.gnb_search_box .gnb_pop_input {
	position: absolute;
	top: 34px;
	left: 10px;
	width: 268px;
	height: 170px;
	*height: 172px;
	border: 1px solid #cbc5c5;
	border-top: 0;
	background: #fff;
	overflow-x: hidden;
	overflow-y: scroll;
	z-index: 110
}

.gnb_search_box .gnb_pop_lst {
	padding: 4px 0 2px
}

.gnb_search_box .gnb_pop_lst a {
	display: block;
	padding: 6px 0 6px 10px;
	font-weight: bold
}

.gnb_search_box .gnb_pop_lst .on {
	background-color: #f5f5f5
}

.gnb_search_lstwrp {
	zoom: 1;
	height: 118px;
	padding-left: 12px
}

.gnb_search_lstwrp:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_search_lstwrp .gnb_search_lst {
	float: left;
	width: 69px;
	border-left: 1px solid #eaeaea
}

.gnb_search_lstwrp .gnb_search_lst.gnb_first {
	width: 64px;
	border: 0
}

.gnb_search_lstwrp li {
	padding: 12px 0 0 8px
}

.gnb_search_lstwrp li.gnb_first {
	font-weight: bold;
	padding-top: 0
}

.gnb_search_lstwrp li a {
	display: inline-block;
	vertical-align: top
}

.gnb_banner {
	height: 47px;
	margin: 0;
	padding: 0 18px;
	background-position: -301px 0;
	background-repeat: repeat-y
}

.gnb_banner .gnb_service_event {
	display: inline-block;
	border-top: 1px solid #ebebeb
}

.gnb_linkwrp {
	padding: 0 4px 4px;
	background-position: -602px 0
}

a.gnb_service_all:hover, a.gnb_service_all:visited, a.gnb_service_all:active,
	a.gnb_service_all:focus {
	text-decoration: none
}

.gnb_svc_more {
	display: none;
	position: absolute;
	top: 4px;
	right: 303px;
	width: 589px;
	overflow: hidden;
	zoom: 1;
	z-index: 1000
}

.gnb_svc_more:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_response .gnb_svc_more {
	right: 2px
}

.gnb_bg_top {
	height: 6px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png)
		no-repeat
}

.gnb_bg_btm {
	position: relative;
	height: 6px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png)
		no-repeat -1282px 0
}

.gnb_svc_more .gnb_svc_hd {
	position: relative;
	padding: 0 18px 2px 23px;
	letter-spacing: -1px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png)
		repeat-y -641px 0
}

.gnb_svc_more .gnb_svc_hd .gnb_svc_tit {
	display: block;
	padding: 12px 0 13px;
	border-bottom: 1px solid #ebebeb;
	font-size: 14px;
	color: #222
}

.gnb_svc_more .gnb_svc_hd .link {
	position: absolute;
	top: 14px;
	right: 19px;
	font-size: 12px;
	color: #444
}

.gnb_svc_more .gnb_svc_hd .link a {
	color: #444 !important;
	line-height: 16px !important
}

.gnb_svc_more .gnb_svc_lstwrp {
	position: relative;
	height: 283px;
	overflow: hidden;
	padding: 15px 15px 0 20px;
	letter-spacing: -1px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png)
		repeat-y -641px 0;
	zoom: 1
}

.gnb_svc_more .gnb_svc_lstwrp:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_svc_more .gnb_svc_lstwrp li {
	height: 15px;
	margin-bottom: 5px;
	color: #6b6d70;
	white-space: nowrap;
	line-height: 15px
}

.gnb_svc_more .gnb_svc_lstwrp li.gnb_event label {
	color: #444;
	font-weight: bold
}

.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic_gnb_new {
	display: inline-block;
	width: 11px;
	height: 11px;
	background-position: -215px 0px;
	margin: 2px 0 0 4px;
	font-size: 0;
	line-height: 0;
	vertical-align: top
}

@media screen and (min-width: 0\0) {
	.gnb_svc_more .gnb_svc_lstwrp li.gnb_event em.ic {
		margin-top: 3px
	}
}

.gnb_svc_more .gnb_svc_lstwrp .gnb_input_check {
	width: 13px;
	height: 13px;
	margin: 2px 3px 0 3px;
	padding: 0;
	vertical-align: top;
	-webkit-appearance: checkbox;
}

.gnb_svc_more .gnb_svc_lstwrp label {
	vertical-align: 0px
}

.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled strong {
	color: #a8acb0
}

.gnb_svc_more .gnb_svc_lstwrp .gnb_disabled li {
	color: #cbcbcb
}

.gnb_svc_more .gnb_svc_lst1 {
	float: left;
	width: 328px;
	height: 280px
}

.gnb_svc_more .gnb_svc_lst1 ul {
	float: left;
	width: 102px;
	min-height: 260px;
	padding: 5px 0 0 10px;
	border-left: 1px solid #eee
}

.gnb_svc_more .gnb_svc_lst1 ul.gnb_first {
	padding-left: 0;
	border: 0
}

.gnb_svc_more .svc_lst2 {
	float: left;
	position: relative;
	width: 221px;
	border: 1px solid #eee;
	background: #fbfbfb;
	zoom: 1
}

.gnb_svc_more .svc_lst2:after {
	display: block;
	clear: both;
	content: ''
}

.gnb_svc_more .svc_spc {
	float: left;
	position: relative;
	width: 100px;
	min-height: 254px;
	padding: 9px 0 0 10px
}

.gnb_svc_more .svc_spc.gnb_first {
	border-right: 1px solid #eee
}

.gnb_svc_more .svc_spc strong {
	height: 20px;
	color: #2f3743;
	line-height: 16px
}

.gnb_svc_more .svc_spc a:visited {
	color: #2f3743
}

.gnb_svc_more .svc_spc ul {
	padding: 8px 0
}

.gnb_svc_more .svc_spc li {
	margin-bottom: 0;
	padding-bottom: 5px;
	color: #848689
}

.gnb_svc_more .svc_stroy {
	width: 89px;
	margin-top: -5px;
	padding: 12px 0 0;
	border-top: 1px solid #eee
}

.gnb_svc_more .svc_btns {
	position: relative;
	height: 33px;
	overflow: hidden;
	padding-top: 5px;
	line-height: normal
}

.gnb_svc_more .svc_btnwrp {
	position: relative;
	*height: 39px;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/2014/bg_svclyr1_v2.png)
		repeat-y -641px 0;
	padding: 0 2px 0 4px
}

.gnb_svc_more .svc_btnwrp button {
	display: inline-block;
	width: 60px;
	height: 25px;
	border: 0;
	vertical-align: top
}

.gnb_svc_more .svc_btnwrp .gnb_save {
	background-position: 0 -160px
}

.gnb_svc_more .svc_btnwrp .gnb_close {
	margin-left: 1px;
	background-position: -65px -160px
}

.gnb_svc_more .svc_btnwrp .gnb_return {
	position: absolute;
	top: 5px;
	left: 15px;
	background-position: -130px -160px
}

.gnb_type2 .gnb_notice_li a.gnb_notice .gnb_icon {
	background-position: -155px -120px
}

.gnb_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon {
	background-position: -155px -140px
}

.gnb_type2 .gnb_service_li .gnb_service .gnb_icon {
	background-position: -200px -120px
}

.gnb_type2 .gnb_service_li .gnb_service:hover .gnb_icon {
	background-position: -200px -140px
}

.gnb_type2 .mail_li a.gnb_mail .gnb_icon {
	background-position: -175px -120px
}

.gnb_type2 .mail_li a.gnb_mail:hover .gnb_icon {
	background-position: -175px -140px
}

.gnb_dark .gnb_my_li .gnb_my .gnb_name, .gnb_dark .gnb_login_li .gnb_btn_login .gnb_txt
	{
	color: #fff
}

.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon {
	background-position: -220px -140px
}

.gnb_dark .gnb_notice_li a.gnb_notice:hover .gnb_icon {
	background-position: -220px -120px
}

.gnb_dark .mail_li a.gnb_mail .gnb_icon {
	background-position: -238px -141px
}

.gnb_dark .mail_li a.gnb_mail:hover .gnb_icon {
	background-position: -238px -121px
}

.gnb_dark .gnb_service_li .gnb_service .gnb_icon {
	background-position: -261px -140px
}

.gnb_dark .gnb_service_li .gnb_service:hover .gnb_icon {
	background-position: -261px -120px
}

.gnb_dark_type2 .gnb_my_li .gnb_my .gnb_name, .gnb_dark_type2 .gnb_login_li .gnb_btn_login .gnb_txt
	{
	color: #fff
}

.gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon {
	background-position: -220px -120px
}

.gnb_dark_type2 .gnb_notice_li a.gnb_notice:hover .gnb_icon {
	background-position: -220px -140px
}

.gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon {
	background-position: -238px -121px
}

.gnb_dark_type2 .mail_li a.gnb_mail:hover .gnb_icon {
	background-position: -238px -141px
}

.gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon {
	background-position: -261px -120px
}

.gnb_dark_type2 .gnb_service_li .gnb_service:hover .gnb_icon {
	background-position: -261px -140px;
}

.gnb_dark .gnb_notice_li a.gnb_notice, .gnb_dark_type2 .gnb_notice_li a.gnb_notice
	{
	width: 17px;
	height: 19px;
	padding: 6px 8px 3px;
}

.gnb_dark .gnb_notice_li a.gnb_notice .gnb_icon, .gnb_dark_type2 .gnb_notice_li a.gnb_notice .gnb_icon
	{
	width: 17px;
	height: 19px;
}

.gnb_dark .mail_li a.gnb_mail, .gnb_dark_type2 .mail_li a.gnb_mail {
	width: 22px;
	height: 16px;
	padding: 7px 8px 4px;
}

.gnb_dark .mail_li a.gnb_mail .gnb_icon, .gnb_dark_type2 .mail_li a.gnb_mail .gnb_icon
	{
	width: 22px;
	height: 16px;
}

.gnb_dark .gnb_service_li a.gnb_service, .gnb_dark_type2 .gnb_service_li a.gnb_service
	{
	width: 18px;
	height: 18px;
	padding: 6px 8px 4px;
}

.gnb_dark .gnb_service_li .gnb_service .gnb_icon, .gnb_dark_type2 .gnb_service_li .gnb_service .gnb_icon
	{
	width: 18px;
	height: 18px;
}

#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name,
	#gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt
	{
	color: #fff
}

#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li {
	height: 28px;
}

#gnb.gnb_one .gnb_login_li .gnb_btn_login, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login,
	#gnb.gnb_one .gnb_login_li .gnb_bg, #gnb.gnb_one_small .gnb_login_li .gnb_bg,
	#gnb.gnb_one .gnb_login_li .gnb_bdr, #gnb.gnb_one_small .gnb_login_li .gnb_bdr,
	#gnb.gnb_one .gnb_login_li .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_txt
	{
	width: 53px;
	height: 23px;
}

#gnb.gnb_one .gnb_login_li .gnb_btn_login .gnb_txt, #gnb.gnb_one_small .gnb_login_li .gnb_btn_login .gnb_txt
	{
	top: -1px;
	width: 53px;
	height: 23px;
	line-height: 28px;
	font-size: 11px;
}

#gnb.gnb_one .gnb_login_li, #gnb.gnb_one_small .gnb_login_li, #gnb.gnb_one .gnb_my_li,
	#gnb.gnb_one_small .gnb_my_li, #gnb.gnb_one .gnb_notice_li, #gnb.gnb_one_small .gnb_notice_li,
	#gnb.gnb_one .mail_li, #gnb.gnb_one_small .mail_li, #gnb.gnb_one .gnb_service_li,
	#gnb.gnb_one_small .gnb_service_li {
	margin-right: 0;
	margin-left: 0;
	background:
		url(https://ssl.pstatic.net/static/common/gnb/bg_one_line.png)
		repeat-y right 0;
}

#gnb.gnb_one .gnb_login_li a, #gnb.gnb_one_small .gnb_login_li a, #gnb.gnb_one .gnb_my_li a,
	#gnb.gnb_one_small .gnb_my_li a, #gnb.gnb_one .gnb_notice_li a, #gnb.gnb_one_small .gnb_notice_li a,
	#gnb.gnb_one .mail_li a, #gnb.gnb_one_small .mail_li a, #gnb.gnb_one .gnb_service_li a,
	#gnb.gnb_one_small .gnb_service_li a {
	margin-right: 1px;
}

#gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service,
	#gnb.gnb_one .gnb_login_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_login_li.hover .gnb_notice,
	#gnb.gnb_one .gnb_login_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_login_li.hover .gnb_mail,
	#gnb.gnb_one .gnb_login_li.hover .gnb_service, #gnb.gnb_one_small .gnb_login_li.hover .gnb_service,
	#gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service,
	#gnb.gnb_one .gnb_my_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_my_li.hover .gnb_notice,
	#gnb.gnb_one .gnb_my_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_my_li.hover .gnb_mail,
	#gnb.gnb_one .gnb_my_li.hover .gnb_service, #gnb.gnb_one_small .gnb_my_li.hover .gnb_service,
	#gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service,
	#gnb.gnb_one .gnb_notice_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_notice,
	#gnb.gnb_one .gnb_notice_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_mail,
	#gnb.gnb_one .gnb_notice_li.hover .gnb_service, #gnb.gnb_one_small .gnb_notice_li.hover .gnb_service,
	#gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service,
	#gnb.gnb_one .mail_li.hover .gnb_notice, #gnb.gnb_one_small .mail_li.hover .gnb_notice,
	#gnb.gnb_one .mail_li.hover .gnb_mail, #gnb.gnb_one_small .mail_li.hover .gnb_mail,
	#gnb.gnb_one .mail_li.hover .gnb_service, #gnb.gnb_one_small .mail_li.hover .gnb_service,
	#gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service,
	#gnb.gnb_one .gnb_service_li.hover .gnb_notice, #gnb.gnb_one_small .gnb_service_li.hover .gnb_notice,
	#gnb.gnb_one .gnb_service_li.hover .gnb_mail, #gnb.gnb_one_small .gnb_service_li.hover .gnb_mail,
	#gnb.gnb_one .gnb_service_li.hover .gnb_service, #gnb.gnb_one_small .gnb_service_li.hover .gnb_service
	{
	background:
		url(https://ssl.pstatic.net/static/common/gnb/bg_one_hover.png) repeat
		0 0;
}

#gnb.gnb_one .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_small .gnb_my_li .gnb_my .gnb_name
	{
	margin: 0 0 0 1px;
}

#gnb.gnb_one .gnb_notice_li a.gnb_notice, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice
	{
	width: 17px;
	height: 19px
}

#gnb.gnb_one .gnb_notice_li a.gnb_notice .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice .gnb_icon
	{
	width: 17px;
	height: 19px;
	background-position: -284px -119px
}

#gnb.gnb_one .gnb_notice_li a.gnb_notice:hover .gnb_icon, #gnb.gnb_one_small .gnb_notice_li a.gnb_notice:hover .gnb_icon
	{
	background-position: -284px -119px
}

#gnb.gnb_one .mail_li a.gnb_mail, #gnb.gnb_one_small .mail_li a.gnb_mail
	{
	width: 21px;
	height: 17px
}

#gnb.gnb_one .mail_li a.gnb_mail .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail .gnb_icon
	{
	width: 21px;
	height: 17px;
	background-position: -302px -120px
}

#gnb.gnb_one .mail_li a.gnb_mail:hover .gnb_icon, #gnb.gnb_one_small .mail_li a.gnb_mail:hover .gnb_icon
	{
	background-position: -302px -120px
}

#gnb.gnb_one .gnb_service_li .gnb_service, #gnb.gnb_one_small .gnb_service_li .gnb_service
	{
	width: 17px;
	height: 17px
}

#gnb.gnb_one .gnb_service_li .gnb_service .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service .gnb_icon
	{
	width: 17px;
	height: 17px;
	background-position: -324px -120px
}

#gnb.gnb_one .gnb_service_li .gnb_service:hover .gnb_icon, #gnb.gnb_one_small .gnb_service_li .gnb_service:hover .gnb_icon
	{
	background-position: -324px -120px
}

#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr,
	#gnb.gnb_one_small .gnb_notice_lyr, #gnb.gnb_one .gnb_service_lyr, #gnb.gnb_one_small .gnb_service_lyr
	{
	right: 7px;
}

#gnb.gnb_one .gnb_ico_num, #gnb.gnb_one_small .gnb_ico_num {
	width: 34px;
	top: 10px;
	right: 3px;
	left: auto;
	vertical-align: top
}

#gnb.gnb_one .gnb_ico_num .gnb_ico_new, #gnb.gnb_one_small .gnb_ico_num .gnb_ico_new
	{
	vertical-align: top;
	height: 13px;
	background-position: -332px -60px;
}

#gnb.gnb_one .gnb_ico_num .gnb_count, #gnb.gnb_one_small .gnb_ico_num .gnb_count
	{
	height: 13px;
	padding: 0 6px 0 2px;
	background-position: 100% -60px;
	font-size: 10px;
	font-weight: normal;
}

#gnb.gnb_one .gnb_ico_num .plus, #gnb.gnb_one_small .gnb_ico_num .plus {
	margin: 1px 0 0 2px
}

#gnb.gnb_one .ico_arrow {
	top: 48px
}

#gnb.gnb_one .gnb_my_lyr, #gnb.gnb_one .gnb_notice_lyr {
	top: 47px
}

#gnb.gnb_one .gnb_service_lyr {
	top: 48px;
}

#gnb.gnb_one .gnb_login_li {
	padding: 16px 21px 10px 1px;
}

#gnb.gnb_one .gnb_my_li {
	padding: 12px 20px 12px 2px
}

#gnb.gnb_one .gnb_my_li .ico_arrow {
	top: 34px
}

#gnb.gnb_one .gnb_notice_li a.gnb_notice {
	padding: 18px 19px 17px 19px
}

#gnb.gnb_one .mail_li a.gnb_mail {
	padding: 19px 17px 18px 17px
}

#gnb.gnb_one .gnb_service_li .gnb_service {
	padding: 19px 19px 18px 19px
}

#gnb.gnb_one_small .ico_arrow {
	top: 33px
}

#gnb.gnb_one_small .gnb_my_lyr, #gnb.gnb_one_small .gnb_notice_lyr {
	top: 32px
}

#gnb.gnb_one_small .gnb_service_lyr {
	top: 33px
}

#gnb.gnb_one_small .gnb_login_li {
	padding: 7px 12px 4px 2px
}

#gnb.gnb_one_small .gnb_my_li {
	padding: 5px 20px 4px 2px
}

#gnb.gnb_one_small .gnb_my_li .ico_arrow {
	top: 27px
}

#gnb.gnb_one_small .gnb_notice_li a.gnb_notice {
	padding: 10px 11px 10px 12px
}

#gnb.gnb_one_small .mail_li a.gnb_mail {
	padding: 11px 10px 11px 9px
}

#gnb.gnb_one_small .gnb_service_li .gnb_service {
	padding: 11px 12px 11px 11px
}

#gnb.gnb_one_small .gnb_ico_num {
	top: 5px;
	right: 6px;
	width: 24px
}

#gnb.gnb_one_flat .gnb_login_li, #gnb.gnb_one_flat .gnb_my_li, #gnb.gnb_one_flat .gnb_notice_li,
	#gnb.gnb_one_flat .mail_li, #gnb.gnb_one_flat .gnb_service_li {
	border-color: #e0e0e0;
}

#gnb.gnb_one_flat .gnb_notice_li.hover, #gnb.gnb_one_flat .mail_li.hover,
	#gnb.gnb_one_flat .gnb_service_li.hover {
	background-color: rgba(0, 0, 0, 0.04);
}

#gnb.gnb_one_flat .gnb_service_li .gnb_service .gnb_icon, #gnb.gnb_one_flat .gnb_service_li .gnb_service:hover .gnb_icon
	{
	background-image:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);
	background-position: -84px -24px;
	background-repeat: no-repeat;
	width: 16px;
	height: 16px;
	vertical-align: top;
	margin: 0 1px;
}

#gnb.gnb_one_flat .mail_li a.gnb_mail .gnb_icon, #gnb.gnb_one_flat .mail_li a.gnb_mail:hover .gnb_icon
	{
	background-image:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);
	background-position: 0px -42px;
	background-repeat: no-repeat;
	width: 20px;
	height: 16px;
	vertical-align: top;
	margin: 0 1px;
}

#gnb.gnb_one_flat .gnb_notice_li a.gnb_notice .gnb_icon, #gnb.gnb_one_flat .gnb_notice_li a.gnb_notice:hover .gnb_icon
	{
	background-image:
		url(https://ssl.pstatic.net/static/common/gnb/one/sp_gnb_4b16e6.png);
	background-position: -84px 0px;
	background-repeat: no-repeat;
	width: 16px;
	height: 18px;
	vertical-align: top;
	margin: 0 1px;
}

#gnb.gnb_one_flat .gnb_my_li .gnb_my .gnb_name, #gnb.gnb_one_flat .gnb_login_li .gnb_btn_login .gnb_txt
	{
	color: #666;
}
</style>
<script src="https://ssl.pstatic.net/static.gn/js/clickcrD.js"
	id="gnb_clickcrD" charset="utf-8"></script>
</head>


<body>

	<div id="loadingIndicator"
		style="display: none; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: transparent; z-index: 10000;">
		<img src="https://ssl.pstatic.net/static/kin/m/ico_lod2.gif"
			width="21" height="21" alt="데이터 요청 응답 대기중"
			style="position: absolute; top: 49%; left: 49%;">
	</div>
	<div id="wrap" class="wrap wrap_home">



		<!--  <div class="skip_nav header_gnb_inner">

	<a href="#gnb" onclick="nhn.Kin.Utility.skipNavigation('au_lnb_home');return false;" class="skip">메인 메뉴 바로가기</a>
	

 
	<a href="#contentsOfMain" onclick="nhn.Kin.Utility.skipNavigation('contentsOfMain');return false;" class="skip">본문 바로가기</a>


</div>-->




		<div class="header_wrap">






			<div id="ieUpdateBanner" role="dialog"
				aria-labelledby="ieUpdateBannerTitle"
				class="popup popup--header_notice" style="display: none;">
				<h1 id="ieUpdateBannerTitle" tabindex="0" class="blind">권장 브라우저
					업데이트 안내</h1>
				<div class="popup__content">
					<div class="popup__title">
						<p class="popup__title_text">
							<span class="ico_alert sp_common"></span>권장 브라우저 안내
						</p>
					</div>
					<div class="popup__maintext">
						<p class="popup__text">혹시 아직 인터넷 익스플로러 9.0 미만 버전을 사용하고 계신가요?</p>
						<p class="popup__subtext">
							새롭게 바뀐 지식iN Q&amp;A 페이지는 IE 9.0 이상의 브라우저에 최적화되어 있습니다. 원활한 이용을 위해
							꼭 업데이트 해주세요! <a
								href="https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads"
								class="popup__link" target="_blank">업데이트하기 <span
								class="sp_common ico_arr_lnk"></span></a>
						</p>
					</div>

				</div>
			</div>

			<script type="text/javascript">
				// IE8 이하이면 브라우저 버전을 올려달라는 배너를 노출한다.
				$Fn(
						function() {
							var oAgent = jindo.$Agent().navigator();
							if (oAgent.ie
									&& (oAgent.version >= 6 && oAgent.version < 9)) {
								if (typeof naver.kin.SimpleBanner !== "undefined") {
									var oIeUpdateBanner = new naver.kin.SimpleBanner(
											{
												sBannerId : "ieUpdateBannerArea"
											});
								}
							}
						}, this).attach(document, 'domready');
			</script>


			<div class="header_gnb">
				<div class="header_gnb_inner">
					<div class="header_gnb__cell">
						<!--<h1 class="header_logo">
					<a class="logo_naver" href="http://www.naver.com" title="나의 경쟁력, 네이버" onclick="nhn.Kin.Utility.nClicks('STA.naverlogo', '', '', event);"><span class="logo_kin sp_common">NAVER</span></a>
				</h1> -->
						<!-- <div class="header_search">
					<h2 class="logo_wrap">
						<a href="/" onclick="nhn.Kin.Utility.nClicks('STA.kin', '', '', event);" class="sp_gnb icon_logo_kin">지식iN</a>
						
					</h2>
					<h3 class="blind">검색영역</h3>
					<form name="topSearch" id="topSearch" method="get" action="/search/list.naver" onsubmit="return checkQuery();">
						<fieldset>
							<legend>지식인 검색</legend>
							<div class="search_area">
								
								<input role="combobox" type="text" name="query" onclick="nhn.Kin.Utility.nClicks('STA.search', '', '', event);return false;" class="search_input" accesskey="s" aria-haspopup="listbox" aria-expanded="false" aria-autocomplete="list" aria-controls="atcmpList" title="검색어 입력" maxlength="255" autocomplete="off" id="nx_query" value="">
								<a href="#" class="search_auto">
									<span class="sp_gnb icon_arrow" id="triangleBtn">자동완성 열기</span>
								</a>
								<div>
									<iframe id="autoFrame" class="auto_complete_box" title="검색어 자동완성" frameborder="0" width="290" height="193px" marginwidth="0" marginheight="0" scrolling="no" src="/static/reatcmp.html?v=4.1"></iframe>
								</div>
								<a href="#" onclick="return checkQuery();" class="search_btn"><span class="sp_gnb icon_search">지식iN 검색</span></a>
							</div>
						</fieldset>
					</form>
				</div> -->
					</div>
					<div class="header_gnb__cell">
						<%--  <div class="gnb_wrap">
							<div class="gnb_eXpertLogo">
								<a href="https://expert.naver.com" target="_blank"
									id="bannerLink" class="link" aria-haspopup="true"
									aria-expanded="true" aria-controls="bannerExpert"> <!-- <span class="logo"><span class="blind">eXpert</span></span> -->
								</a>

								<!--  <div class="banner" id="bannerExpert" aria-labelledby="bannerLink" style="display: block;">
							<div class="inner">
								<p>강아지가 자꾸<br><strong>제 발을 물어요!</strong></p>
								<button class="buttonCancel"><span class="blind">닫기</span></button>
							</div>
						</div>-->

							</div>


							<div class="gnb_chat _chatButtonArea">
								<button id="chatButton" type="button" class="button_chat"
									aria-haspopup="true" aria-expanded="false" aria-pressed="false"
									aria-controls="chatMenu">
									<span class="blind">상담 목록</span>
									<!--  <span class="icon_chat"></span>-->
									<i class="icon_new" style="display: none"><span
										class="blind">NEW</span></i>
								</button>
								<div role="menu" id="chatMenu" class="chat_popup"
									aria-hidden="true">
									<a href="/expert/center/counseling/list" role="menuitem"
										class="link_chat" target="_blank"> 판매한 상품 <i
										class="_counselorNewIcon icon_new" style="display: none"><span
											class="blind">NEW</span></i>
									</a> <a href="/counseling/purchases" role="menuitem"
										class="link_chat" target="_blank"> 구매한 상품 <i
										class="_counseleeNewIcon icon_new" style="display: none"><span
											class="blind">NEW</span></i>
									</a>
								</div>
							</div>


							<!--  --><div class="gnb_common_area">
								<div id="gnb" class="">
									<strong class="blind">사용자 링크</strong>
									<ul class="gnb_lst" id="gnb_lst" style="display: block;">
										<li class="gnb_login_li" id="gnb_login_layer"
											style="display: inline-block;">
											<!--<a class="gnb_btn_login" href="https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fkin.naver.com%2F" id="gnb_login_button">
						<span class="gnb_bg"></span>
						<span class="gnb_bdr"></span>
						<span class="gnb_txt">로그인</span>
						</a>-->
										</li>
										<li class="gnb_my_li" id="gnb_my_layer" style="display: none">
											<div class="gnb_my_namebox" id="gnb_my_namebox"
												style="background-image: url(&quot;https://ssl.pstatic.net/static/common/gnb/2014/ico_arrow_bl1.gif&quot;);">
												<a href="javascript:;" class="gnb_my"
													onclick="gnbUserLayer.clickToggle(); return false;"> <img
													id="gnb_profile_img"
													src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
													onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='"
													width="26" height="26" alt="내 프로필 이미지"> <span
													id="gnb_profile_filter_mask" class="filter_mask"></span> <span
													class="gnb_name" id="gnb_name1"></span> <em class="blind">내정보
														보기</em> <span class="ico_arrow"></span>
												</a> <a href="#" class="gnb_emp" id="gnb_emp">(임직원혜택)</a>
											</div>
											<div class="gnb_my_lyr" id="gnb_my_lyr">
												<div class="gnb_my_content">
													<div class="gnb_img_area">
														<span class="gnb_mask"></span> <img
															src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
															onerror="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF8PDw5ubm+vr6+/v76enp+Pj47e3t5+fn9/f37Ozs9PT08vLy7+/v6urq9fX15OTk/f39pqwodgAAAQNJREFUeNrs11EOgyAMgOEWUAF19f6n3cMeplJHoSZbsv4H+DIWaCNsNwcGGmiggQZ+D/Q5reuasr8H9ID0CsHfALpA74JTgwPSPnRK0Ac6FrwOXOjcogIdlTkNuDDgogGRAVEBDsQ19IMzC879ILAgGNgAZhbMP3RttonxJs1Lgea/sDYcyreHXjW+oPUHVid2MWC1K+A0sqsDW7CksGmlCNZoFt9pIfjYgY8bwMMexUENQuOtqYCxfHtT7AddYodDcp0gIPEh9IBxous+nBuaTis4Nw/OSLVwloN+JEmjGJR5FyIDRpIWZeAoBkcZGMRgkIEkz0D7GjXQQAMN/GvwKcAAEGGHJh0mmaAAAAAASUVORK5CYII='"
															width="80" height="80" alt="프로필 이미지"> <a
															href="https://nid.naver.com/user2/api/naverProfile.nhn?m=checkIdType"
															class="gnb_change"> <span class="blind">프로필 사진
																변경</span>
														</a>
													</div>
													<div class="gnb_txt_area">
														<p class="gnb_account">
															<span class="gnb_name" id="gnb_name2"> <a
																class="gnb_nick"
																href="https://nid.naver.com/user2/api/naverProfile.nhn?m=checkIdType">_</a>님
															</span> <a class="gnb_btn_login"
																href="https://nid.naver.com/nidlogin.logout?returl=https%3A%2F%2Fnid.naver.com%2Fnidlogin.logout"
																id="gnb_logout_button"><span class="gnb_bg"></span><span
																class="gnb_bdr"></span> <span class="gnb_txt">로그아웃</span>
															</a>
														</p>
														<a href="https://mail.naver.com" class="gnb_mail_address">@naver.com</a>
														<ul class="gnb_edit_lst">
															<li class="gnb_info"><a
																href="https://nid.naver.com/user2/help/myInfo.nhn?menu=home">내정보</a>
															</li>
															<li class="gnb_secure" id="gnb_secure_lnk"><a
																href="https://nid.naver.com/user2/help/myInfo.nhn?m=viewSecurity&amp;menu=security">보안설정</a>
															</li>
															<li class="gnb_cert" id="gnb_cert_lnk"><a
																href="https://nid.naver.com/user2/eSign/v1/home/land">내인증서</a>
															</li>
														</ul>
														<div class="gnb_pay_check" id="gnb_pay_check">
															<p class="gnb_membership" style="display: none;"
																id="gnb_membership">
																<a href="https://nid.naver.com/membership/my"
																	class="gnb_my_membership"><i class="blind">네이버
																		멤버쉽</i></a>
															</p>
															<em>N Pay</em> <a href="https://pay.naver.com"
																id="gnb_pay_point"><span style="display: none">내
																	페이포인트</span></a>
														</div>
													</div>
												</div>
												<div class="gnb_my_community">
													<a href="https://blog.naver.com/MyBlog.naver"
														class="gnb_blog">내 블로그</a> <a
														href="https://section.cafe.naver.com" class="gnb_cafe">가입한
														카페</a><a href="https://pay.naver.com" class="gnb_pay"> <span>N
															Pay</span>
													</a>
												</div>
												<a href="#" class="gnb_my_interface" style="display: none">
													<span class="blind">환경설정</span>
												</a>
											</div> 
											<iframe id="gnb_my_lyr_iframe" title="빈 프레임"
												class="gnb_pad_lyr" name="padding" width="0" height="0"
												scrolling="no" frameborder="0"
												style="top: 34px; right: -4px; width: 320px; height: 158px; display: none; opacity: 0; -ms-filter: alpha(opacity = 0)"></iframe>
										</li>
										<li class="gnb_notice_li" id="gnb_notice_layer"
											style="display: none"><a href="javascript:;"
											class="gnb_notice"
											onclick="gnbNaverMeLayer.clickToggle(); return false;"> <span
												class="blind">알림</span> <span class="gnb_icon"></span> <em
												class="gnb_ico_num" id="gnb_me_menu" style="display: none">
													<span class="gnb_ico_new"> <span class="gnb_count"
														id="gnb_me_count"></span>
												</span>
											</em> <span class="ico_arrow"></span>
										</a>
											<div class="gnb_notice_lyr" id="gnb_notice_lyr">
												<div class="svc_noti svc_panel">
													<div class="svc_scroll">
														<div class="svc_head">
															<strong class="gnb_tit">전체 알림</strong>
															<div class="task_right">
																<button
																	onclick="gnbNaverMeLayer.deleteReadList(this, event);"
																	id="gnb_btn_read_noti_del">읽은 알림 삭제</button>
																<button onclick="gnbNaverMeLayer.showDeleteAlert();"
																	id="gnb_btn_all_noti_del">모두 삭제</button>
															</div>
														</div>
														<div class="svc_body" id="gnb_naverme_layer"></div>
													</div>
													<div class="gnb_ly_alert" id="gnb_ly_alert"
														style="display: none;">
														<p class="gnb_msg">
															<strong>알림을 모두 삭제하시겠습니까?</strong>
														</p>
														<div class="gnb_btns">
															<button id="ly_alert_confirm"
																onclick="gnbNaverMeLayer.deleteAllList(this, event);">확인</button>
															<button onclick="gnbNaverMeLayer.hideDeleteAlert();">취소</button>
														</div>
														<button class="gnb_btn_close"
															onclick="gnbNaverMeLayer.hideDeleteAlert();">
															<i>레이어 닫기</i>
														</button>
													</div>
													<a href="https://noti.naver.com/index.nhn"
														class="gnb_notice_all">내 알림 전체보기</a>
												</div>
											</div> <iframe id="gnb_notice_lyr_iframe" title="빈 프레임"
												class="gnb_pad_lyr" name="padding" width="0" height="0"
												scrolling="no" frameborder="0"
												style="top: 34px; right: -4px; width: 299px; height: 332px; display: none; opacity: 0; -ms-filter: alpha(opacity = 0)"></iframe>
										</li>
										<li class="mail_li" id="gnb_mail_layer" style="display: none"><a
											href="https://mail.naver.com" class="gnb_mail"> <span
												class="blind">메일</span> <span class="gnb_icon"></span> <em
												class="gnb_ico_num" id="gnb_mail_menu" style="display: none">
													<span class="gnb_ico_new"> <span class="gnb_count"
														id="gnb_mail_count"></span>
												</span>
											</em>
										</a></li>
										<li class="gnb_service_li" id="gnb_service_layer"
											style="display: inline-block;"><a href="javascript:;"
											class="gnb_service"
											onclick="gnbMoreLayer.clickToggle(); return false;"> <span
												class="blind">서비스 더보기</span> <!--  <span class="gnb_icon"></span>-->
												<span class="ico_arrow"></span>
										</a>
											<div class="gnb_service_lyr" id="gnb_service_lyr">
												<div class="gnb_favorite_search" id="gnb_favorite_search">
													<div class="gnb_favorite_area">
														<div class="gnb_favorite_lstwrp">
															<div class="gnb_first_visit" style="display: none">
																<span class="blind">나만의 즐겨찾기를 추가해 보세요!</span> <a
																	href="#" class="gnb_close"> <span class="blind">닫기</span>
																</a>
															</div>
															<strong class="blind">즐겨찾는 서비스</strong>
															<ul class="gnb_favorite_lst" id="gnb_favorite_lst">
																<li class="gnb_add"><a href="#"> <span
																		class="ic_add"></span> 추가
																</a></li>
																<li class="gnb_add"><a href="#"> <span
																		class="ic_add"></span>추가
																</a></li>
																<li class="gnb_add"><a href="#"><span
																		class="ic_add"></span>추가</a></li>
																<li class="gnb_add"><a href="#"><span
																		class="ic_add"></span>추가</a></li>
															</ul>
															<a href="#" class="gnb_my_interface"
																onclick="gnbMoreLayer.clickToggleWhole(); return false;">
																<span class="blind">즐겨찾기 설정</span>
															</a>
														</div>
													</div>
													<div class="gnb_search_area">
														<div class="gnb_search_box"
															onmouseover="gnb_search.mouseOver(this);"
															onmouseout="gnb_search.mouseOut(this);">
															<input id="gnb_svc_search_input" type="text"
																title="서비스 검색" value="더 많은 서비스를 간편하게 시작하세요!"
																onfocus="gnb_search.clearInput(this);"
																onblur="gnb_search.resetInput(this);"
																onkeydown="gnb_search.keyDown(event);"
																onkeyup="gnb_search.keyUp(event);"> <a href="#"
																class="gnb_del_txt" id="gnb_del_txt"
																style="display: none"><span class="blind">삭제</span></a>
															<div class="gnb_pop_input" id="gnb_pop_input"
																tabindex="0"
																onfocus="gnb_search.searchPopOnMouse = true; return false;"
																onfocusout="gnb_search.searchPopOnMouse = false; return false;"
																onmouseover="gnb_search.searchPopOnMouse = true; return false;"
																onmouseout="gnb_search.searchPopOnMouse = false; return false;"
																style="display: none">
																<ul class="gnb_pop_lst"></ul>
															</div>
														</div>
														<div id="gnb_search_lstwrp" class="gnb_search_lstwrp">
															<ul class="gnb_search_lst gnb_first">
																<li class="gnb_first"><a
																	href="https://cafe.naver.com/">카페</a></li>
																<li><a href="https://news.naver.com/">뉴스</a></li>
																<li><a href="https://map.naver.com/">지도</a></li>
																<li><a href="https://sports.news.naver.com/">스포츠</a></li>
																<li><a href="https://game.naver.com/">게임</a></li>
															</ul>
															<ul class="gnb_search_lst">
																<li class="gnb_first"><a
																	href="https://section.blog.naver.com/">블로그</a></li>
																<li><a href="https://post.naver.com/main.nhn">포스트</a></li>
																<li><a href="https://dict.naver.com/">사전</a></li>
																<li><a href="https://kin.naver.com/">지식iN</a></li>
																<li><a href="https://n.weather.naver.com/">날씨</a></li>
															</ul>
															<ul class="gnb_search_lst">
																<li class="gnb_first"><a
																	href="https://mail.naver.com/">메일</a></li>
																<li><a href="https://stock.naver.com/">증권</a></li>
																<li><a href="https://land.naver.com/">부동산</a></li>
																<li><a href="https://vibe.naver.com/today/">VIBE</a></li>
																<li><a href="https://book.naver.com">책</a></li>
															</ul>
															<ul class="gnb_search_lst">
																<li class="gnb_first"><a
																	href="https://shopping.naver.com/">쇼핑</a></li>
																<li><a href="https://comic.naver.com/">웹툰</a></li>
																<li><a href="https://movie.naver.com/">영화</a></li>
																<li><a href="https://mybox.naver.com/">MYBOX</a></li>
																<li><a href="https://auto.naver.com/">자동차</a></li>
															</ul>
														</div>
													</div>
													<div class="gnb_banner">
														<a
															href="https://campaign.naver.com/npay/rediret/index.nhn"
															class="gnb_service_event"> <img id="gnb_promo"
															alt="N페이, 이벤트 참여하면 포인트 적립!" width="265" height="47"
															src="https://ssl.pstatic.net/static/common/gnb/banner/promo_npay_200108.png"></a>
													</div>
													<div class="gnb_linkwrp">
														<a href="https://www.naver.com/more.html"
															class="gnb_service_all" id="gnb_service_all">전체 서비스
															보기</a>
													</div>
												</div>
												<div class="gnb_svc_more" id="gnb_svc_more" style="">
													<strong class="blind">네이버 주요 서비스</strong>
													<div class="gnb_bg_top"></div>
													<div class="gnb_svc_hd" id="gnb_svc_hd" tabindex="0">
														<strong class="gnb_svc_tit">바로가기 설정</strong> <span
															class="link"><a
															href="https://www.naver.com/more.html">전체 서비스 보기</a></span>
													</div>
													<div class="gnb_svc_lstwrp">
														<div class="gnb_svc_lst1">
															<ul class="gnb_first">
																<li><input type="checkbox" id="nsvc_game"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_game">게임</label></li>
																<li><input type="checkbox" id="nsvc_weather"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_weather">날씨</label></li>
																<li><input type="checkbox" id="nsvc_shopping"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_shopping">네이버쇼핑</label></li>
																<li><input type="checkbox" id="nsvc_navercast"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_navercast">네이버캐스트</label></li>
																<li class="gnb_event"><input type="checkbox"
																	id="nsvc_naverpay" name="selmenu"
																	class="gnb_input_check" value=""> <label
																	for="nsvc_naverpay"> 네이버페이<em
																		class="ic_gnb_new">New</em>
																</label></li>
																<li><input type="checkbox" id="nsvc_mybox"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_mybox">네이버 MYBOX</label></li>
																<li><input type="checkbox" id="nsvc_news"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_news">뉴스</label></li>
																<li><input type="checkbox" id="nsvc_comic"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_comic">만화/웹툰</label></li>
																<li><input type="checkbox" id="nsvc_memo"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_memo">메모</label></li>
																<li><input type="checkbox" id="nsvc_mail"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_mail">메일</label></li>
																<li><input type="checkbox" id="nsvc_music"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_music">뮤직</label></li>
																<li><input type="checkbox" id="nsvc_land"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_land">부동산</label></li>
																<li><input type="checkbox" id="nsvc_bookmark"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_bookmark">북마크</label></li>
															</ul>
															<ul class="">
																<li><input type="checkbox" id="nsvc_blog"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_blog">블로그</label></li>
																<li><input type="checkbox" id="nsvc_dic"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_dic">사전</label></li>

																<li><input type="checkbox" id="nsvc_software"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_software">소프트웨어</label></li>
																<li><input type="checkbox" id="nsvc_smartboard"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_smartboard">스마트보드</label></li>
																<li><input type="checkbox" id="nsvc_sports"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_sports">스포츠</label></li>
																<li><input type="checkbox" id="nsvc_series"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_series">시리즈</label></li>
																<li><input type="checkbox" id="nsvc_serieson"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_serieson">시리즈on</label></li>
																<li><input type="checkbox" id="nsvc_ya9"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_ya9">야구9단</label></li>
																<li><input type="checkbox" id="nsvc_movie"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_movie">영화</label></li>
																<li><input type="checkbox" id="nsvc_office"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_office">오피스</label></li>
																<li><input type="checkbox" id="nsvc_novel"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_novel">웹소설</label></li>
																<li><input type="checkbox" id="nsvc_auto"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_auto">자동차</label></li>
																<li><input type="checkbox" id="nsvc_contact"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_contact">주소록</label></li>
															</ul>
															<ul class="">
																<li><input type="checkbox" id="nsvc_finance"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_finance">증권(금융)</label></li>
																<li><input type="checkbox" id="nsvc_map"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_map">지도</label></li>
																<li><input type="checkbox" id="nsvc_kin"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_kin">지식iN</label></li>
																<li><input type="checkbox" id="nsvc_terms"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_terms">지식백과</label></li>
																<li><input type="checkbox" id="nsvc_book"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_book">책</label></li>
																<li><input type="checkbox" id="nsvc_cafe"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_cafe">카페</label></li>
																<li><input type="checkbox" id="nsvc_calendar"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_calendar">캘린더</label></li>
																<li><input type="checkbox" id="nsvc_navertv"
																	name="selmenu" class="gnb_input_check" value="">
																	<label for="nsvc_navertv">네이버TV</label></li>
															</ul>
														</div>
														<div class="svc_lst2">
															<div class="svc_spc gnb_first">
																<strong><a href="https://dict.naver.com/">어학사전</a></strong>
																<ul class="">
																	<li><input type="checkbox" id="nsvc_krdic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_krdic">국어사전</label></li>
																	<li><input type="checkbox" id="nsvc_endic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_endic">영어/영영사전</label></li>
																	<li><input type="checkbox" id="nsvc_hanja"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_hanja">한자사전</label></li>
																	<li><input type="checkbox" id="nsvc_jpdic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_jpdic">일어사전</label></li>
																	<li><input type="checkbox" id="nsvc_cndic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_cndic">중국어사전</label></li>
																	<li><input type="checkbox" id="nsvc_frdic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_frdic">프랑스어사전</label></li>
																	<li><input type="checkbox" id="nsvc_dedic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_dedic">독일어사전</label></li>
																	<li><input type="checkbox" id="nsvc_rudic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_rudic">러시아어사전</label></li>
																	<li><input type="checkbox" id="nsvc_vndic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_vndic">베트남어사전</label></li>
																	<li><input type="checkbox" id="nsvc_spdic"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_spdic">스페인어사전</label></li>
																	<li><input type="checkbox" id="nsvc_papago"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_papago">파파고</label></li>
																</ul>
															</div>
															<div class="svc_spc">
																<strong>인기/신규서비스</strong>
																<ul class="">
																	<li><input type="checkbox" id="nsvc_grafolio"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_grafolio">그라폴리오</label></li>
																	<li><input type="checkbox" id="nsvc_post"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_post">포스트</label></li>
																	<li><input type="checkbox" id="nsvc_band"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_band">밴드</label></li>
																	<li><input type="checkbox" id="nsvc_line"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_line">라인</label></li>
																	<li class="gnb_event"><input type="checkbox"
																		id="nsvc_vibe" name="selmenu" class="gnb_input_check"
																		value=""> <label for="nsvc_vibe">VIBE<em
																			class="ic_gnb_new">New</em></label></li>
																	<li><input type="checkbox" id="nsvc_pcontents"
																		name="selmenu" class="gnb_input_check" value="">
																		<label for="nsvc_pcontents">프리미엄콘텐츠</label></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="svc_btnwrp">
														<div class="svc_btns">
															<button class="gnb_save"
																onclick="if(gnbFavorite.addService()){gnbMoreLayer.clickToggleWhole()} return false;">
																<strong class="blind">확인</strong>
															</button>
															<button class="gnb_close"
																onclick="gnbFavorite.cancel(); return false;">
																<span class="blind">취소</span>
															</button>
															<button class="gnb_return"
																onclick="gnbFavorite.resetService(); return false;">
																<span class="blind">초기 설정으로 변경</span>
															</button>
														</div>
													</div>
													<div class="gnb_bg_btm"></div>
												</div>
											</div> <iframe id="gnb_service_lyr_iframe" title="빈 프레임"
												class="gnb_pad_lyr" name="padding" width="0" height="0"
												scrolling="no" frameborder="0"
												style="display: none; top: 34px; right: 297px; width: 585px; height: 385px; opacity: 0; -ms-filter: alpha(opacity = 0)"></iframe>
											<iframe id="gnb_svc_more_iframe" title="빈 프레임"
												class="gnb_pad_lyr" name="padding" width="0" height="0"
												scrolling="no" frameborder="0"
												style="display: none; top: 34px; right: -4px; width: 295px; height: 385px; opacity: 0; -ms-filter: alpha(opacity = 0)"></iframe>
										</li>
									</ul>
								</div>
							</div>

						</div>-->


						<!--<div class="header__rolling rolling-notice">
						<i class="icon_speaker"><span class="blind">실시간 공지사항</span></i>
						<ul id="listNotice" class="rolling-notice__list _rolling_banner">
							
								  <li class="rolling-notice__item _rollingItem" data-start-time="2021-04-05 00:00:00" style="display: list-item;">
									<a href="https://m.expert.naver.com/mobile/events/21159100469" class="rolling-notice__link" onclick="nhn.Kin.Utility.nClicks('STA.event', '', '', event);">
										<i class="icon_new_red _newMark" style="display:none;"><span class="blind">새소식</span></i>
											<span class="text-color--secondary">페이커를 클래스로 만나보세요.</span>
									</a>
								</li>
							
								<li class="rolling-notice__item _rollingItem" data-start-time="2021-04-05 00:00:00" style="display:none;">
									<a href="https://expert.naver.com/expert/introduction?tab=guide" class="rolling-notice__link" onclick="nhn.Kin.Utility.nClicks('STA.event', '', '', event);">
										<i class="icon_new_red _newMark" style="display:none;"><span class="blind">새소식</span></i>
											<span class="text-color--secondary">전문가라면 엑스퍼트 활동으로 수익</span>
									</a>
								</li>
							
								<li class="rolling-notice__item _rollingItem" data-start-time="2021-04-05 00:00:00" style="display:none;">
									<a href="https://m.expert.naver.com/mobile/expert/category/home?groupCategoryId=294&amp;categoryId=157" class="rolling-notice__link" onclick="nhn.Kin.Utility.nClicks('STA.event', '', '', event);">
										<i class="icon_new_red _newMark" style="display:none;"><span class="blind">새소식</span></i>
											오늘은 어떨지? 타로로 확인!
									</a>
								</li>
							
						</ul>
					</div> --%>

					</div>
				</div>
			</div>

			<!-- nav -->
			<div class="nav" role="navigation">
				<div class="nav_inner">
					<h3 class="blind">메인 메뉴</h3>

					<ul class="nav_list" id="au_lnb" role="menubar">
						<li class="menu on" role="presentation"><a
							href="/index.naver" role="menuitem" class="item" id="au_lnb_home"
							tabindex="0"
							onclick="nhn.Kin.Utility.nClicks('LNB.home', '', '', event);"
							aria-current="page"><em>홈</em></a></li>
						<li class="menu" role="presentation"><a
							href="/qna/list.naver" role="menuitem" class="item"
							aria-haspopup="true" aria-expanded="false" tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.qna', '', '', event);"><em>Q&amp;A</em></a>
							<ul class="nav_sub_list _lnbSubMenu" role="menu">
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=11" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '11', '1', event);">교육,
										학문</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=1" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '1', '2', event);">컴퓨터통신</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=2" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '2', '3', event);">게임</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=3" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '3', '4', event);">엔터테인먼트,
										예술</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=8" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '8', '5', event);">생활</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=7" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '7', '6', event);">건강</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=6" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '6', '7', event);">사회,
										정치</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=4" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '4', '8', event);">경제</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=9" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '9', '9', event);">여행</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=10" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '10', '10', event);">스포츠,
										레저</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=5" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.kinlayer', '5', '11', event);">쇼핑</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=13" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.jun', '', '', event);">쥬니버Q&amp;A</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=12" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.loc', '', '', event);">지역&amp;플레이스</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/qna/list.naver?dirId=20" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.talk', '', '', event);">고민Q&amp;A</a></li>
								<li role="presentation" class="sub_menu"><a
									href="/opendic/index.naver" role="menuitem" class="item"
									tabindex="-1"
									onclick="nhn.Kin.Utility.nClicks('LNB.open', '', '', event);">오픈사전</a></li>
							</ul></li>
						<li class="menu" role="presentation"><a
							href="/qna/questionList.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.answer', '', '', event);"><em>강아지</em></a>
						</li>
						<li class="menu" role="presentation"><a
							href="/volunteer/index.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.donation', '', '', event);"><em>고양이</em></a>
						</li>
						<li class="menu" role="presentation"><a
							href="/people/elite/index.naver?from=lnb" role="menuitem"
							tabindex="-1" class="item" id="peopleLnbBtn"
							onclick="nhn.Kin.Utility.nClicks('LNB.people', '', '', event);"><em>파충류</em><span
								class="sp_common ico_new2">NEW</span></a></li>
						<li class="menu" role="presentation"><a
							href="/best/listaha.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.best', '', '', event);"><em>조류</em></a>
						</li>
						<li class="menu" role="presentation"><a
							href="/hall/index.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.honor', '', '', event);"><em>어류</em></a>
						</li>
						<li class="menu" role="presentation"><span class="lnb_bar">|</span>
							<a href="/myinfo/index.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.profile', '', '', event);"><em>기타</em></a>
						</li>
						<li class="menu" role="presentation"><a
							href="/partnercenter/index.naver" role="menuitem" class="item"
							tabindex="-1"
							onclick="nhn.Kin.Utility.nClicks('LNB.partner', '', '', event);"><em>베스트</em></a>
						</li>


					</ul>




					<a href="#" class="nav__button_question _clickcode:LNB.q"
						<%--onclick="nhn.Kin.checkRosAndGoUrl(event, '/qna/question.naver', '');"--%>
						onclick="htboardWrite(event, '/htboard/htboardWrite', '');"
						role="button"><span class="btn_inner"><i
							class="sp_gnb icon_pencil"></i>질문하기</span></a>



				</div>
			</div>
		</div>







		<script type="text/javascript">
			$Fn(function() {
				new naver.kin.LNB({
					'questionType' : ''
				});
			}).attach(window, 'load');

			var GNB_BRIGHTNESS_VALUE = {
				DARK_ICON : 0,
				DARK_ICON_AND_TRANSPARENCY : 1,
				BRIGHT_ICON_AND_TRANSPARENCY : 2,
				BRIGHT_ICON : 3
			};

			var GNB_ITEM_HIDE_OPTION_BIT_VALUE = {
				DEFAULT : 0,
				HIDE_LOGIN_BTN : 1,
				HIDE_USER_LAYER : 2,
				HIDE_NAVER_ME_AREA : 4,
				HIDE_MAIL_ALARM_AREA : 8,
				HIDE_PROFILE_IMAGE : 16,
				SHOW_BENEFIT_FOR_STAFF_MEMBER : 32
			};

			var smartSearch = "";

			var gnb_service = "kin";

			var gnb_logout = encodeURIComponent("https://nid.naver.com/nidlogin.logout");

			var gnb_login = encodeURIComponent(location.href
					|| 'https://kin.naver.com');

			var gnb_template = "gnb_utf8";

			var gnb_item_hide_option = GNB_ITEM_HIDE_OPTION_BIT_VALUE.DEFAULT;

			$Fn(
					function() {

						getGNB();

						var bIsGnbClicked = false;

						$Fn(function(we) {
							if (!bIsGnbClicked) {
								gnbAllLayerClose();
							}

							bIsGnbClicked = false;
						}, this).attach(document.body, 'click');

						$Fn(function(we) {
							bIsGnbClicked = true;
						}, this).attach($('gnb'), 'click');

						try {
							$('autoFrame').src = '/static/reatcmp.html?v=4.1';
						} catch (e) {
						}

						smartSearch = new nhn.AjaxSuggestUS(
								'nx_query',
								'autoFrame',
								{
									url : 'https://ac.search.naver.com/nx/ac',
									cookieName : 'NaverSuggestUse',
									listbox : '_resultBox',
									sFromName : 'topSearch',
									triangleBtn : 'triangleBtn',
									sListMaxLength : 55,
									listMaxCount : 15,
									request_type : 'jsonp',
									request_data : {
										q : '{query}',
										st : '100',
										r_format : 'json',
										t_koreng : '1',
										q_enc : 'UTF-8',
										r_enc : 'UTF-8',
										r_unicode : '0',
										r_escape : '1',
										frm : 'kin'
									},
									sTriangleUpOn : 'https://ssl.pstatic.net/static/common/snb/090513/bu_arrow_up.gif',
									sTriangleUpOff : 'https://ssl.pstatic.net/sstatic/search/mypocket/v3/btn_atcmp_off_op2.gif',
									sTriangleDownOn : 'https://ssl.pstatic.net/static/common/snb/090513/bu_arrow_down.gif',
									sTriangleDownOff : 'https://ssl.pstatic.net/static/common/snb/090513/bu_arrow_down3.gif'
								}).attach({
							actSubmit : function() {
								try {
									top.selectAction(this._elForm);
								} catch (e) {
									try {
										selectAction(this._elForm);
									} catch (e) {
									}
								}

								this._elForm.submit();
							}
						});

						var expertEntryBanner = $$
								.getSingle("div.gnb_eXpertLogo div.banner");
						if (!!expertEntryBanner) {
							var cookie = new $Cookie();

							$Fn(
									function() {
										$Element(expertEntryBanner).hide();

										var newDisabledUntil = new Date()
												.getTime()
												+ (3 * 1000 * 24 * 60 * 60);
										cookie
												.set(
														"kin_expert_entry_banner_disabled_until",
														newDisabledUntil, 5);
									})
									.attach(
											$$
													.getSingle("div.gnb_eXpertLogo div.banner button.buttonCancel"),
											'click');

							var disabledUntilTimestamp = new Number(
									cookie
											.get("kin_expert_entry_banner_disabled_until"));
							if (!isNaN(disabledUntilTimestamp)) {
								if (new Date().getTime() > disabledUntilTimestamp) {
									cookie
											.remove("kin_expert_entry_banner_disabled_until");
									$Element(expertEntryBanner).show();
								}
							} else {
								$Element(expertEntryBanner).show();
							}
						}

						if (typeof nhn.Kin.ChatMenu !== "undefined") {
							window.oChatMenu = new nhn.Kin.ChatMenu();
						}
					}).attach(window, 'load');
		</script>













		<div id="container" class="container-fluid" role="main">

			<div class="container-fluid-content">
				<div
					class="container-fluid-content-inner _containerFluidContentInner">
					<h3 class="blind">홈 영역</h3>
					<div class="section_spot">









						<div class="best_qna_wrap">
							<h4 class="blind">베스트 질문/답변</h4>


							<div class="best expert">
								<a class="best_link" href="https://expert.naver.com"
									target="_blank">
									
									 <div class="best_background" aria-hidden="">
										<div class="best_background_image" style="background-image:url(image/shiba.png); height:200px"></div>
									
										<img
											src="image/error.png">
											
									</div>
									<div class="best_title">
										<div class="subtitleBox"
										style="height: 19px;">
											<h2 class="subtitle">
												<span class="blind">NEW</span>
											</h2>
										</div>
										<p class="description">
											강아지가 자꾸<br>제 발을<br>물어요!
										</p>
									</div>
								</a>
							</div>







							<div class="best hall">
								<a class="best_link"
									href="/qna/detail.naver?d1id=8&amp;dirId=80501&amp;docId=282627919"
									onclick="nhn.Kin.Utility.nClicks('con.sanc', '', '', event);">
											
									<div class="best_title">
										<h2 class="subtitle">
											<span class="blind">CAT</span>
										</h2>
										<p class="description">
											고양이에게<br>우울증이 있는지<br>알아보는 법
										</p>
									</div>
								</a>
							</div>






							<div class="best today">
								<a class="best_link"
									href="/qna/detail.naver?d1id=11&amp;dirId=11080106&amp;docId=397126191"
									onclick="nhn.Kin.Utility.nClicks('con.today', '', '', event);">

									<div class="best_title">
										<h2 class="subtitle">
											<span class="blind">오늘의 질문</span>
										</h2>
										<p class="description">
											더운여름<br>강아지에게<br>땀띠가??
										</p>
									</div>
								</a>
							</div>






							<div class="best aha">
								<a class="best_link"
									href="/qna/detail.naver?d1id=6&amp;dirId=60601&amp;docId=354573938"
									onclick="nhn.Kin.Utility.nClicks('con.aha', '', '', event);">

									<div class="best_title">
										<h2 class="subtitle">
											<span class="blind">TIP</span>
										</h2>
										<p class="description">우리집 강아지가<br>친구들과<br>못 어울린다면?</p>
									</div>
								</a>
							</div>

						</div>








						


						<script type="text/javascript">
							$Fn(
									function() {
										var elRightTopBanner = $("rightTopBanner");
										var elBannerList = $$("li",
												elRightTopBanner);
										var elBannerPaging = $$.getSingle(
												"._bannerPaging",
												elRightTopBanner);
										var elBannerPagingList = $$(
												"a._bannerPage", elBannerPaging);
										$Fn(
												function(oEvent) {
													if (oEvent.element.tagName != 'a'
															&& oEvent.element.tagName != 'A') {
														return;
													}
													var className = oEvent.element.className;
													for (i = 0; i < elBannerList.length; i++) {
														welBanner = $Element(elBannerList[i]);
														welPage = $Element(elBannerPagingList[i]);
														if (!welPage
																|| !welBanner) {
															break;
														}
														if (className
																.indexOf(elBannerList[i].className) >= 0) {
															welBanner.show();
															if (!welPage
																	.hasClass("on")) {
																welPage
																		.addClass("on");
															}
														} else {
															welBanner.hide();
															if (welPage
																	.hasClass("on")) {
																welPage
																		.removeClass("on");
															}
														}
													}
													oEvent.stop();
													return false;
												}, this).attach(elBannerPaging,
												"click");

									}).attach(window, 'load');
						</script>

					</div>

					<div class="section_answer">








						<div class="container-fluid-content__left" id="left_content">










							<div class="stats_ranking_area" id="statsRankingArea">

								<div class="section_headings section_headings__step1">
									<h4 class="section_headings_title">많이 본 Q&amp;A</h4>
									<div class="side _ranking_base_date" id="rankingDate">14일
										06시 기준</div>
								</div>
								<div class="ranking_section">
									<div class="ranking_list_area" id="rankingChart">

										<ul class="ranking_list">


											<li class="ranking_item _item_1"><span class="no">1</span>
												<a
												href="/qna/detail.naver?d1id=3&amp;dirId=30511&amp;docId=396782317"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">강아지가
													낯을 너무 가려요..</a> <a
												href="/qna/detail.naver?d1id=3&amp;dirId=30511&amp;docId=396782317"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">애가
													산책만 가면 낯을 가려요.. 강아지 친구들이랑 못어울리고 계속 짖고 저한테만 오네요...</a> <span
												class="recommend_num">조회수 302</span><span class="reply_num">답변수
													13</span></li>



											<li class="ranking_item _item_2"><span class="no">2</span>
												<a
												href="/qna/detail.naver?d1id=1&amp;dirId=1061203&amp;docId=358404263"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">앵무새한테
													노래 가르쳐주는 법</a> <a
												href="/qna/detail.naver?d1id=1&amp;dirId=1061203&amp;docId=358404263"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">안녕하세요
													2살 앵무새 똘이 집사입니다. 저희집 똘이가 말하는걸 무척 좋아하는데요, 듣다보니 저도...</a> <span
												class="recommend_num">조회수 284</span><span class="reply_num">답변수
													1</span></li>



											<li class="ranking_item _item_3"><span class="no">3</span>
												<a
												href="/qna/detail.naver?d1id=12&amp;dirId=12111408&amp;docId=223635701"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">꿩은
													집에서 키우기 어려운가요?</a> <a
												href="/qna/detail.naver?d1id=12&amp;dirId=12111408&amp;docId=223635701"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">저희
													집 뒤에 산이 있는데 며칠전 야생 꿩 새끼가 혼자 낙오되어 있는 걸 발견했습니다. 안타까운...</a> <span
												class="recommend_num">조회수 209</span><span class="reply_num">답변수
													1404</span></li>









											<li class="ranking_item _item_7" style="display: none;">
												<span class="no">7</span> <a
												href="/qna/detail.naver?d1id=3&amp;dirId=30207&amp;docId=397175202"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">앵무새는
													무슨 노래를 좋아하나요</a> <a
												href="/qna/detail.naver?d1id=3&amp;dirId=30207&amp;docId=397175202"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">울집
													똘이가 말하는 걸 조아해서 노래도 가르쳐주고싶은데요, 무슨 노래가 쉽고 따라부르기 좋을까요...</a> <span
												class="recommend_num">조회수 73</span><span class="reply_num">답변수
													13</span>
											</li>



											<li class="ranking_item _item_8" style="display: none;">
												<span class="no">8</span> <a
												href="/qna/detail.naver?d1id=8&amp;dirId=814&amp;docId=397075720"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">발바닥
													화상??</a> <a
												href="/qna/detail.naver?d1id=8&amp;dirId=814&amp;docId=397075720"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">더운
													여름이라 그런지 어제 산책 후 저희집 강아지 발바닥에 이상한 물집같은게 생겼더라고요..이거 혹시 화상...</a>
												<span class="recommend_num">조회수 72</span><span
												class="reply_num">답변수 4</span>
											</li>



											<li class="ranking_item _item_9" style="display: none;">
												<span class="no">9</span> <a
												href="/qna/detail.naver?d1id=11&amp;dirId=111301&amp;docId=397168579"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">열대어
													스트레스 많이 받나요?</a> <a
												href="/qna/detail.naver?d1id=11&amp;dirId=111301&amp;docId=397168579"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">열대어들
													수족관에 두면 스트레스 많이 받나요? 이번에 두마리 더 들어와서 총 열세마리인데 수족관 크기는...</a> <span
												class="recommend_num">조회수 53</span><span class="reply_num">답변수
													2</span>
											</li>




										</ul>

										<ul class="ranking_list">








											<li class="ranking_item _item_4"><span class="no">4</span>
												<a
												href="/qna/detail.naver?d1id=7&amp;dirId=70201&amp;docId=397165401"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">고양이
													발톱 쉽게 자르는 법 있나요</a> <a
												href="/qna/detail.naver?d1id=7&amp;dirId=70201&amp;docId=397165401"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">초보
													집사입니다. 길냥이를 식구로 맞이했는데 얘가 아주 애기가 아니라 그런지 발톱을 깎을 때 마다...</a> <span
												class="recommend_num">조회수 154</span><span class="reply_num">답변수
													5</span></li>



											<li class="ranking_item _item_5"><span class="no">5</span>
												<a
												href="/qna/detail.naver?d1id=1&amp;dirId=1060101&amp;docId=384258643"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">강아지
													어깨줄 브랜드 찾아주세요.</a> <a
												href="/qna/detail.naver?d1id=1&amp;dirId=1060101&amp;docId=384258643"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">요즘
													많이 보이던데 미국 브랜드인거 같아요. 남색이고 산악용?인거같은데 리드줄...</a> <span
												class="recommend_num">조회수 151</span><span class="reply_num">답변수
													1</span></li>



											<li class="ranking_item _item_6"><span class="no">6</span>
												<a
												href="/qna/detail.naver?d1id=3&amp;dirId=31505&amp;docId=368220172"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">강아지
													털이 너무 많이 빠져요</a> <a
												href="/qna/detail.naver?d1id=3&amp;dirId=31505&amp;docId=368220172"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">저희집
													강아지가 올해로 열살인데 털이 너무 많이 빠지는거 같아요. 털갈이 시즌이 아니여도... </a> <span
												class="recommend_num">조회수 106</span><span class="reply_num">답변수
													1</span></li>









											<li class="ranking_item _item_10" style="display: none;">
												<span class="no">10</span> <a
												href="/qna/detail.naver?d1id=1&amp;dirId=1010401&amp;docId=397150158"
												class="ranking_title" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">(급)
													모니터 바탕화면이 안 나와요</a> <a
												href="/qna/detail.naver?d1id=1&amp;dirId=1010401&amp;docId=397150158"
												class="text" target="_blank"
												onclick="nhn.Kin.Utility.nClicks('hrk.list', '', '', event);">새로
													산 모니턴데 화면이 안 뜨고 이런것만 뜨네요ㅠㅠ 어떡하죠</a> <span class="recommend_num">조회수
													47</span><span class="reply_num">답변수 2</span>
											</li>


										</ul>
									</div>
									<div class="paginate" id="rankingPaging">

										<a href="#" class="on" title="선택됨"
											onclick="nhn.Kin.Utility.nClicks('hrk.page', '', '', event);">1</a>

										<a href="#"
											onclick="nhn.Kin.Utility.nClicks('hrk.page', '', '', event);">2</a>

									</div>
								</div>

							</div>

							<script type="text/javascript">
								$Fn(
										function() {
											if (naver.kin.main.StatRanking !== undefined) {
												var oStatRanking = new naver.kin.main.StatRanking();
											}
										}, this).attach(window, 'load');
							</script>




							<div id="hotTopicKeywordArea" class="hottopic_keyword_area ">
								<div class="title_group">
									<h4 class="title">지금 도움받기</h4>
								</div>
								<div class="hottopic_keyword_list_group">
									<ul class="hottopic_keyword_list">

										<li class="item"><a
											href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=832"
											target="_blank" class="link"
											onclick="nhn.Kin.Utility.nClicks('hlk.link','','', event);">내
												주변 동물 병원</a></li>

										<li class="item"><a
											href="https://m.expert.naver.com/mobile/events/21165672554"
											target="_blank" class="link"
											onclick="nhn.Kin.Utility.nClicks('hlk.link','','', event);">수의사
												온라인 상담</a></li>

										<li class="item"><a
											href="https://m.expert.naver.com/mobile/expert/category/home?groupCategoryId=294&amp;categoryId=157"
											target="_blank" class="link"
											onclick="nhn.Kin.Utility.nClicks('hlk.link','','', event);">의약품
												알아보기</a></li>

										<li class="item"><a
											href="https://m.expert.naver.com/mobile/expert/category/home?groupCategoryId=152&amp;categoryId=3"
											target="_blank" class="link"
											onclick="nhn.Kin.Utility.nClicks('hlk.link','','', event);">주요
												질병 살펴보기</a></li>


									</ul>
								</div>
							</div>



							<span id="answer_wrap_top"></span>






<script type="text/javascript">
function actionforward(url, '', '', event){
	url='htboardlist.to'
	$.ajax({
		url : url,
		
	});
}
</script>
							<div class="answer_wrap" id="main_content">
								<div id="noanswer_tab" class="title_area">
									<ul>
										<li class="tc-tab tc-selected"><a href="#answer_wrap_top"
											class="title on"
											<%-- onclick="nhn.Kin.Utility.nClicks('ldl.qna', '', '', event);" --%>
											onclick="actionforward('htboardlist.to', '', '', event);"	
											id="contentsOfMain">답변을 기다리는 질문<span
												class="blind _selected">선택됨</span></a></li>
										<li class="tc-tab"><a href="#answer_wrap_top"
											class="title"
											<%--onclick="nhn.Kin.Utility.nClicks('ldl.con', '', '', event);"--%>
											onclick="actionforward('htboardlist', '', '', event);"
											>답변을 기다리는 관심질문</a></li>
									</ul>
								</div>
								<div>
									<div class="tc-panel tc-selected">













										<h4 class="blind">답변을 기다리는 질문</h4>
										<div class="content_wrap _noanswer_wrap">
											<div class="directory_area _qna_menu">
												<div class="directory_box _list_area">
													<ul class="directory_list _qna_list">

														<h5>동물별</h5>
														<li dirid="0" class="on"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '0', '1', event);">전체<span
																class="blind _selected">질문 목록 선택됨</span></a></li>

														<li dirid="11"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '11', '2', event);">강아지</a></li>

														<li dirid="1"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '1', '3', event);">고양이</a></li>

														<li dirid="2"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '2', '4', event);">조류</a></li>

														<li dirid="3"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '3', '5', event);">파충류</a></li>

														<li dirid="8"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '8', '6', event);">기타</a></li>




													</ul>
												</div>

												<div class="directory_box _list_area _recommend_list_area">
													<h5>질병별</h5>
													<ul class="directory_list _recommend_list">


														<li dirid="7"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '7', '7', event);">약
																효능 및 성분</a></li>

														<li dirid="6"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '6', '8', event);">의약외품</a></li>

														<li dirid="4"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '4', '9', event);">영양제,
																건강보조식품</a></li>

														<li dirid="9"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dir', '9', '10', event);">의약품</a></li>


													</ul>
												</div>

												<div class="directory_box _list_area _recommend_list_area">
													<h5>질병별</h5>
													<ul class="directory_list _recommend_list">


														<li dirid="70404"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.rec', '70404', '1', event);">안과</a></li>

														<li dirid="70402"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.rec', '70402', '2', event);">정형외과</a></li>

														<li dirid="70403"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.rec', '70403', '3', event);">피부과</a></li>

														<li dirid="70401"><a href="#"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.rec', '70401', '4', event);">소화과</a></li>


													</ul>
												</div>
											</div>
											<span class="border"></span>
											<div class="content_area _dir_content"
												style="display: block;">



												<div class="heading_area _dir_content_title"
													style="display: block;">

													<h5 class="tit ellipsis _heading_title">

														<a href="/qna/list.naver"
															onclick="nhn.Kin.Utility.nClicks('ldl_nlg.dirn', '0', '', event);"><strong>전체</strong>
															<span class="blind">의 답변을 기다리는 바로가기</span></a>

													</h5>


													<a href="#" class="btn_line _ros _btn_add_interest"
														dirid="0"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.cdir', '0', '', event);"
														style="display: none"><span><i
															class="ico_plus sp_common"></i>관심분야 추가</span></a>


													<div class="search_area _heading_search"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.search', '', '', event);">
														<input type="text" class="search_input _search_input"
															title="검색어 입력"> <a href="#"
															class="ico_search sp_common _search_button">검색</a>
													</div>

													<div class="sort_list_group _option">
														<div class="sort_list_group_left">
															<div class="view_type_wrap">
																<p class="blind">보기옵션 선택</p>

																<ul class="view_type_list _view_type_list"
																	role="tablist">

																	<!-- [D]
									1) 클로바앱 질문(선택안되게): is_disabled 클래스 추가 / aria-disabled="true" 추가
									2) tab 요소(ul.view_type_list > li > a) click 이벤트시 동작
										- 선택된 탭일 경우: on 클래스 추가 및 aria-selected="true"로 변경
										- 선택되지 않은 탭일 경우: on 클래스 제거 및 aria-selected="false"로 변경
										- 비활성화된 탭일 경우: is_disabled 클래스 추가 및 aria-disabled="true" 속성 추가
										- 활성화된 탭일 경우: is_disabled 클래스 제거 및 aria-disabled 속성 제거
									3) tab 요소(ul.view_type_list > li > a)와 하단 div.answer_list 요소 연결
										- 미리보기형 탭은 미리보기형 목록과, 제목형 탭은 제목형 목록과 각각 연결
										- a 요소의 aria-controls=""와 div 요소의 id=""에 동일한 id 값 제공
								-->
																	<li class="_preview"><a href="#" role="button"
																		aria-selected="true"
																		aria-controls="questionListTypePreview"
																		class="type_preview _previewTypeBtn on"
																		onclick="nhn.Kin.Utility.nClicks('nql_nlg.preview', '', '', event);">미리보기형</a></li>
																	<li class="_onlyTitle"><a href="#" role="button"
																		aria-selected="false"
																		aria-controls="questionListTypeTitle"
																		class="type_title _onlyTitleTypeBtn"
																		onclick="nhn.Kin.Utility.nClicks('nql_nlg.title', '', '', event);">제목형</a>
																		<div class="tooltip _previewTypeTooltipLayer"
																			style="display: block;">
																			<span class="sp_common arrow"></span>
																			<div class="inner">
																				<p class="blind">안내</p>
																				제목만 모아서 많은 질문을<br> 한 번에 볼 수 있어요! <a href="#"
																					class="sp_common btn_close _previewTypeTooltipLayerClose">닫기</a>
																			</div>
																		</div></li>
																</ul>

																<div class="select_area _countPerPageSelectBox">
																	<a href="#"
																		class="btn_select _selectedCountPerPageValue">10개
																		보기 <span class="ico_arrow sp_common"></span>
																	</a>
																	<p class="blind">보기 개수 선택</p>
																	<ul class="select_list _countPerPageListArea">
																		<li class="_countPerPage _param('5')"><a href="#"
																			class="_countPerPageValue _param('5')">5개 보기</a></li>
																		<li class="_countPerPage _param('10') on"><a
																			href="#"
																			class="_countPerPageValue _param('10') default">10개
																				보기</a></li>
																		<li class="_countPerPage _param('15')"><a
																			href="#" class="_countPerPageValue _param('15')">15개
																				보기</a></li>
																		<li class="_countPerPage _param('20')"><a
																			href="#" class="_countPerPageValue _param('20')">20개
																				보기</a></li>
																		<li class="_countPerPage _param('25')"><a
																			href="#" class="_countPerPageValue _param('25')">25개
																				보기</a></li>
																		<li class="_countPerPage _param('30')"><a
																			href="#" class="_countPerPageValue _param('30')">30개
																				보기</a></li>
																		<li class="_countPerPage _param('50')"><a
																			href="#" class="_countPerPageValue _param('50')">50개
																				보기</a></li>
																	</ul>
																</div>
															</div>
														</div>


														<div class="sort_list_group_right">

															<p class="blind">정렬 옵션 선택</p>
															<ul class="sort_list_module _sortOptionList">
																<li class="is_active _answer"><a href="#"
																	role="button" aria-selected="true"
																	class="_sort_option _param('answer')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.answer', '', '', event);"><i
																		class="ico_sort _sort_option _param('answer')"></i>답변적은순</a></li>
																<li class="_firstFlag" style="display: list-item;"><a
																	href="#" role="button" aria-selected="false"
																	class="_sort_option _param('firstFlag')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.newask', '', '', event);"><i
																		class="ico_sort _sort_option _param('firstFlag')"></i>첫질문</a></li>
																<li class="_recent"><a href="#" role="button"
																	aria-selected="false"
																	class="_sort_option _param('recent')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.latest', '', '', event);"><i
																		class="ico_sort _sort_option _param('recent')"></i>최신순</a></li>
																<li class="_betPoint"><a href="#" role="button"
																	aria-selected="false"
																	class="_sort_option _param('betPoint')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.point', '', '', event);"><i
																		class="ico_sort _sort_option _param('betPoint')"></i>내공높은순</a></li>
															</ul>
														</div>
													</div>
												</div>



												<div class="answer_list _noanswer_list" role="tabpanel"
													style="display: block;" id="questionListTypePreview">
													<strong class="blind"><span>답변적은순</span>질문 리스트</strong>
													<div class="answer_box _noanswerItem no_tag first">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=1&amp;dirId=102020102&amp;docId=397226119&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '102020102_397226119', '1', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,102020102,397226119,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>30</span>

																<span class="tit_txt">워드 오른쪽 여백 제거</span> <span
																class="ico_picture sp_common">사진첨부</span>






																<p class="txt">본문옆에 갑자기 세로줄로 여백이 생겨서 pdf로 저장해도 저
																	여백때문에 엉망인데 없애는방법있나요...?</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=102020102" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '102020102', '1', event);">MS워드</a></span>
															<span class="info">방금</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('102020102,397226119')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '102020102_397226119', '1', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=1&amp;dirId=102020102&amp;docId=397226119"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '102020102_397226119', '1', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,102020102,397226119,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=11&amp;dirId=110101&amp;docId=397226116&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '110101_397226116', '2', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,110101,397226116,'answerCntNew');">

																<span class="tit_txt">슬라임이녹아버렿어요</span> <span
																class="ico_picture sp_common">사진첨부</span>






																<p class="txt">제가만든슬라임이몽땅녹아버렸는데요 왜그너죠? 살릴우엏을까여!</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=110101" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '110101', '2', event);">유아학습,
																	교재교...</a></span> <span class="info">방금</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('110101,397226116')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '110101_397226116', '2', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=11&amp;dirId=110101&amp;docId=397226116"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '110101_397226116', '2', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,110101,397226116,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=8&amp;dirId=80101&amp;docId=397226117&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '80101_397226117', '3', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,80101,397226117,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>30</span>

																<span class="tit_txt">여자는 무조건 10대중반~20대때가 전성기지
																	않아요?</span>







																<p class="txt">전연령대 남자에게서 1020 여자를 좋아하지 않는 남자가 있을까요?
																	중고등학생, 대학생, 예쁜 직장인 만나서 결혼까지 하면 특히 한참 남자가 연상이면 능력좋네 부럽다
																	반응들이 대부분이던데</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=80101" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '80101', '3', event);">연애,
																	결혼</a></span> <span class="info">방금</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('80101,397226117')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '80101_397226117', '3', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=8&amp;dirId=80101&amp;docId=397226117"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '80101_397226117', '3', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,80101,397226117,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=8&amp;dirId=8030302&amp;docId=397226115&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '8030302_397226115', '4', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,8030302,397226115,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>50</span>

																<span class="tit_txt">속눈썹 펌 후 마스카라 픽서 사용</span>







																<p class="txt">속눈썹 펌을 하고 난 뒤에 마스카라를 바르기 전에 마스카라 픽서를
																	사용하는 것이 필요할까요? 마스카라 픽서가 좀 더 볼륨을 유지하고 지속력을 키우기 위함인데 속눈썹
																	펌을 하면 이제 마스카라 픽서를 하지 않아도 되나요? 마스카라 픽서를 한다 한들 속눈썹 펌을 했는데
																	효과가 있을까요?</p>


															</a>
														</div>




														<div class="tag_wrap">


															<a
																href="/tag/tagDetail.naver?tag=%EC%86%8D%EB%88%88%EC%8D%B9"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '8030302_397226115', '4', event);">#속눈썹</a>

															<a
																href="/tag/tagDetail.naver?tag=%EC%86%8D%EB%88%88%EC%8D%B9%ED%8E%8C"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '8030302_397226115', '4', event);">#속눈썹펌</a>

															<a
																href="/tag/tagDetail.naver?tag=%EB%A7%88%EC%8A%A4%EC%B9%B4%EB%9D%BC"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '8030302_397226115', '4', event);">#마스카라</a>

															<a
																href="/tag/tagDetail.naver?tag=%EB%A7%88%EC%8A%A4%EC%B9%B4%EB%9D%BC%ED%94%BD%EC%84%9C"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '8030302_397226115', '4', event);">#마스카라픽서</a>


														</div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=8030302" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '8030302', '4', event);">색조화장</a></span>
															<span class="info">방금</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('8030302,397226115')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '8030302_397226115', '4', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=8&amp;dirId=8030302&amp;docId=397226115"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '8030302_397226115', '4', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,8030302,397226115,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=4&amp;dirId=40309&amp;docId=397226114&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '40309_397226114', '5', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,40309,397226114,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>100</span>

																<span class="tit_txt">회사 복지 포인트 이용하여 소명 신청을 하려고
																	하는데 전표 매입일자를 기입하라고 해서요.</span>







																<p class="txt">전표매입일자 ( 전표매입이 안되었을 경우 차감불가/ 사용일자 이후
																	영업일 기준으로 3~7일, 최대 14일까지 소요 ) 이렇게 적혀있는데 네이버 페이에서 구매하였고,
																	신한카드 체크카드를 이용하였는데 전표 매입을 어디서 출력할 수 있는지 답변 부탁드립니다. 카드사
																	전화하는 것말고 온라인상으로 직접 할 수 있는 방법들을 안내부탁드립니다.</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=40309" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '40309', '5', event);">세금
																	정책, 제도</a></span> <span class="info">방금</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('40309,397226114')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '40309_397226114', '5', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=4&amp;dirId=40309&amp;docId=397226114"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '40309_397226114', '5', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,40309,397226114,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=6&amp;dirId=60301&amp;docId=397226112&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '60301_397226112', '6', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,60301,397226112,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>100</span>

																<span class="tit_txt">현부심(신체) 허리디스크</span>







																<p class="txt">안녕하세요 허리디스크 4~5번 5~1번 파열로 인해 신체등급 4급
																	받고 현부심 여단 1차 통과하여 19일에 1지작사 심의 기다리고 있는데 부결 될 수도 있다는 얘기도
																	많이 보여서 부결 확률이 높은지 궁금합니다...</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=60301" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '60301', '6', event);">신체검사,
																	병역판...</a></span> <span class="info">1분 전</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('60301,397226112')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '60301_397226112', '6', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=6&amp;dirId=60301&amp;docId=397226112"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '60301_397226112', '6', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,60301,397226112,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=3&amp;dirId=30511&amp;docId=397226111&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '30511_397226111', '7', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,30511,397226111,'answerCntNew');">

																<span class="tit_txt">강아지 어깨줄 브랜드 찾아주세요.</span>







																<p class="txt">어디지 잘 기억이 안나는데 요즘 산책나가면 자주 보이더라구요. 미국
																	브랜드 같은데 남색이고 리드줄에는 패턴? 그림이 있어서 이뻤어요. 요즘 어디 브랜드꺼를 많이
																	쓰는건가요? 우리 강쥐 생일 선물로 주고 싶어 질문합니다.</p>


															</a>
														</div>




														<div class="tag_wrap">


															<a
																href="/tag/tagDetail.naver?tag=%EC%9B%83%EB%8A%94%EB%82%A8%EC%9E%90"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '30511_397226111', '7', event);">#웃는남자</a>

															<a
																href="/tag/tagDetail.naver?tag=%EC%9B%B9%ED%88%B0%EC%B0%BE%EC%95%84%EC%A3%BC%EC%84%B8%EC%9A%94"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '30511_397226111', '7', event);">#웹툰찾아주세요</a>

															<a
																href="/tag/tagDetail.naver?tag=%EC%82%AC%EB%9E%91%ED%95%B4%EC%9A%94"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '30511_397226111', '7', event);">#사랑해요</a>


														</div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=30511" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '30511', '7', event);">웹툰</a></span>
															<span class="info">1분 전</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('30511,397226111')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '30511_397226111', '7', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=3&amp;dirId=30511&amp;docId=397226111"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '30511_397226111', '7', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,30511,397226111,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=1&amp;dirId=1010402&amp;docId=397226109&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '1010402_397226109', '8', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,1010402,397226109,'answerCntNew');">

																<span class="power_grade"><span class="blind">내공</span>80</span>

																<span class="tit_txt">콕스 엔데버 스테빌 별도 구매 관련 질문입니다.</span>


																<span class="ico_picture sp_common">사진첨부</span>






																<p class="txt">얼마 전에 콕스 엔데버 중고 거래를 했습니다. 그런데 스페이스바
																	양쪽이 헐렁하길래 봤더니 스테빌이 없는거 같더군요. 혹시 이럴 때는 별도 구매나 따로 구할 수 있는
																	곳이 있나요?</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=1010402" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '1010402', '8', event);">키보드</a></span>
															<span class="info">1분 전</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('1010402,397226109')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '1010402_397226109', '8', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=1&amp;dirId=1010402&amp;docId=397226109"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '1010402_397226109', '8', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,1010402,397226109,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=8&amp;dirId=80702&amp;docId=397226108&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '80702_397226108', '9', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,80702,397226108,'answerCntNew');">

																<span class="tit_txt">강아지와 작별준비..</span>







																<p class="txt">저는 고등학생입니다.제 어렸을때 집에 강아지가 생겼습니다. 근데
																	중학교 들어서면서부터? 강아지가 나이드는게 느껴졌어요. 지금은 열세살인데 집안에서도 거의 잠만 자고
																	산책도 잘 가지 못합니다. 어릴 땐 별 생각 없었는데 요즘은 강아지가 가족 곁을 떠난다는 생각을
																	하면 눈물부터 고입니다. 어떻게 마음의 준비를 할 수 있을까요? 너무 어렵습니다...</p>


															</a>
														</div>




														<div class="tag_wrap">


															<a
																href="/tag/tagDetail.naver?tag=%EC%84%A0%EC%83%9D%EB%8B%98"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '80702_397226108', '9', event);">#선생님</a>

															<a
																href="/tag/tagDetail.naver?tag=%EC%B9%9C%ED%95%B4%EC%A7%80%EA%B8%B0"
																class="tag" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.tag', '80702_397226108', '9', event);">#친해지기</a>


														</div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=80702" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '80702', '9', event);">유머</a></span>
															<span class="info">1분 전</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('80702,397226108')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '80702_397226108', '9', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=8&amp;dirId=80702&amp;docId=397226108"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '80702_397226108', '9', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,80702,397226108,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
													<div class="answer_box _noanswerItem no_tag last">
														<div class="tit_wrap ">
															<a
																href="/qna/detail.naver?d1id=4&amp;dirId=40701&amp;docId=397226110&amp;mode=answer"
																class="_first_focusable_link" rel="KIN" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qtit', '40701_397226110', '10', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,40701,397226110,'answerCntNew');">

																<span class="tit_txt">통신판매업등록 신고 문의.</span>







																<p class="txt">개인사업자 (간이과세)를 내었습니다. 그러나, 여타의 사정으로
																	통신판매업 신고를 하지 못하게 되었습니다. 신고를 하지 못한 불이익이 있나요? 사업자등록취소 라던지
																	세금등 궁금합니다.</p>


															</a>
														</div>




														<div class="tag_wrap" style="display: none"></div>


														<div class="update_info">
															<span class="num_answer">답변 <em>0</em></span> <span
																class="info"><a
																href="/qna/list.naver?dirId=40701" target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.qdir', '40701', '10', event);">판매,
																	유통업</a></span> <span class="info">1분 전</span>
														</div>

														<div class="lnk_wrap">

															<a href="#"
																class="lnk_wonder _metooWonderBtn _param('40701,397226110')"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.metoo', '40701_397226110', '10', event);">나도궁금해요
																<em class="_metooWonderCount">0</em>
															</a><span class="dv"></span> <a
																href="/qna/answer.nhn?serviceId=kin&amp;d1id=4&amp;dirId=40701&amp;docId=397226110"
																rel="KIN" class="lnk_answer  _last_focusable_link "
																target="_blank"
																onclick="nhn.Kin.Utility.nClicks('nql_nlg.quicka', '40701_397226110', '10', event);nhn.Kin.Utility.saveListInfo('LIST_NOANSWER_HOME',1,40701,397226110,'answerCntNew');">답변하기
																<span class="sp_common ico_arr"></span>
															</a>
														</div>


													</div>
												</div>


												<div class="answer_list _dir_content_noanswer_noresult"
													style="display: none;">
													<div class="no_data">
														<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
													</div>
												</div>


												<div id="pagingArea0"
													class="paging_area paging_control_type1 _pagingArea"
													style="display: block;">


													<a href="#" class="number _page _param('1') on" title="선택됨"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '1', event);">1</a>

													<a href="#" class="number _page _param('2')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '2', event);">2</a>

													<a href="#" class="number _page _param('3')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '3', event);">3</a>

													<a href="#" class="number _page _param('4')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '4', event);">4</a>

													<a href="#" class="number _page _param('5')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '5', event);">5</a>

													<a href="#" class="number _page _param('6')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '6', event);">6</a>

													<a href="#" class="number _page _param('7')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '7', event);">7</a>

													<a href="#" class="number _page _param('8')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '8', event);">8</a>

													<a href="#" class="number _page _param('9')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '9', event);">9</a>

													<a href="#" class="number _page _param('10')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.page', '', '10', event);">10</a>


													<a href="#" class="next _nextPage _param('11')"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.next', '', '11', event);">다음</a>

												</div>
											</div>


											<div class="content_area _dir_content_error"
												style="display: none;">
												<div>
													<div
														class="_dir_content_noanswer_noresult view_all_question view_all_question2">
														<div class="cont">
															<p class="tit">
																<strong>요청하신 정보를 일시적으로 불러올 수 없습니다. <br>잠시
																	후 다시 시도해 주세요.
																</strong>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
									<div class="tc-panel">













										<h4 class="blind">답변을 기다리는 관심질문</h4>
										<div class="content_wrap _noanswer_wrap">
											<div class="directory_area _int_menu">

												<div class="set_box multi">
													<a href="#" class="btn_setting _interest_setting_btn"
														onclick="nhn.Kin.Utility.nClicks('ldl_lgd.setmy', '', '', event);"
														target="_blank"><span><i
															class="sp_common ico_set"></i>관심설정</span></a>
													<div class="help_wrap">
														<a href="#" class="ico_help _interest_setting_help_btn"><img
															src="https://ssl.pstatic.net/static/kin/09renewal/new_master/ico_help_v2.gif"
															width="12" height="12" alt="도움말"> </a>
														<div class="tooltip _interest_setting_help_layer"
															style="display: none;">
															<span class="sp_common arrow"></span>
															<div class="inner">
																<p class="tit">관심설정을 하면?</p>
																<p>내가 설정한 관심분야/지역/키워드에 답변을 기다리는 질문이 등록되면 알림을 받을 수
																	있습니다.</p>
																<p>
																	최초 관심설정 시 <strong class="point">내공 30점</strong>도 드려요!
																	지금 바로 관심설정 해보세요.
																</p>
																<a href="#"
																	class="sp_common btn_close _interest_setting_help_layer_close">닫기</a>
															</div>
														</div>
													</div>
												</div>

												<div class="directory_box _list_area _interest_list_area">
													<h5>관심분야</h5>
													<ul class="directory_list _interest_list"
														style="display: none;">

													</ul>
													<ul class="directory_list _no_interest_list">
														<li>관심분야가 없습니다.</li>
													</ul>
												</div>

												<div class="directory_box _list_area _local_list_area">
													<h5>관심지역</h5>
													<ul class="directory_list _local_list"
														style="display: none;">

													</ul>
													<ul class="directory_list _no_local_list">
														<li>관심지역이 없습니다.</li>
													</ul>
												</div>

												<div class="directory_box _list_area _keyword_list_area">
													<h5>관심키워드</h5>
													<ul class="directory_list _keyword_list"
														style="display: none;">

													</ul>
													<ul class="directory_list _no_keyword_list">
														<li>관심키워드가 없습니다.</li>
													</ul>
												</div>
											</div>
											<span class="border"></span>
											<div class="content_area _dir_content" style="display: none;">


												<div class="heading_area _dir_content_title">

													<h5 class="tit ellipsis _heading_title">
														<a href="/myinfo/interest.naver"
															onclick="nhn.Kin.Utility.nClicks('nql_nlg.dirn', '', '', event);"><strong>내
																관심분야</strong> <span class="blind">의 답변을 기다리는 질문 바로가기</span></a>
													</h5>


													<div class="set_recommend _tag_recommend"
														style="display: none;"></div>


													<div class="search_area _heading_search"
														onclick="nhn.Kin.Utility.nClicks('nql_nlg.search', '', '', event);">
														<input type="text" class="search_input _search_input"
															title="검색어 입력"> <a href="#"
															class="ico_search sp_common _search_button">검색</a>
													</div>









													<div class="_map_area map_area" style="display: none">
													</div>

													<script type="text/javascript">
														try {
															document
																	.execCommand(
																			'BackgroundImageCache',
																			false,
																			true);
														} catch (e) {
														}
													</script>
													<link rel="stylesheet" type="text/css"
														href="https://ssl.pstatic.net/static/maps/openapi_map/maps_openapi.css">


													<div class="sort_list_group _option">
														<div class="sort_list_group_left">

															<ul class="sort_tab _keyword_tag_tab"
																style="display: none">
																<li class="on _keyword_tab"><a href="#"
																	class="_keyword_tab"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.iktext', '', '', event);">제목+본문</a></li>
																<li class="_tag_tab"><a href="#" class="_tag_tab"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.iktag', '', '', event);">태그</a></li>
															</ul>
															<div class="view_type_wrap">

																<ul class="view_type_list _view_type_list">
																	<p class="blind">보기옵션 선택</p>
																	<li class="_preview"><a href="#" role="button"
																		aria-selected="true" aria-disabled="false"
																		aria-controls="questionListTypePreview"
																		class="type_preview _previewTypeBtn on"
																		onclick="nhn.Kin.Utility.nClicks('nql_nlg.preview', '', '', event);">미리보기형</a></li>
																	<li class="_onlyTitle"><a href="#" role="button"
																		aria-selected="false" aria-disabled="true"
																		aria-controls="questionListTypeTitle"
																		class="type_title _onlyTitleTypeBtn"
																		onclick="nhn.Kin.Utility.nClicks('nql_nlg.title', '', '', event);">제목형</a>
																		<div class="tooltip _previewTypeTooltipLayer"
																			style="display: block;">
																			<span class="sp_common arrow"></span>
																			<div class="inner">
																				<p class="blind">안내</p>
																				제목만 모아서 많은 질문을<br> 한 번에 볼 수 있어요! <a href="#"
																					class="sp_common btn_close _previewTypeTooltipLayerClose">닫기</a>
																			</div>
																		</div></li>
																</ul>


																<div class="select_area _countPerPageSelectBox">
																	<a href="#"
																		class="btn_select _selectedCountPerPageValue">10개
																		보기 <span class="ico_arrow sp_common"></span>
																	</a>
																	<p class="blind">보기 개수 선택</p>
																	<ul class="select_list _countPerPageListArea">
																		<li class="_countPerPage _param('5')"><a href="#"
																			class="_countPerPageValue _param('5')">5개 보기</a></li>
																		<li class="_countPerPage _param('10') on"><a
																			href="#"
																			class="_countPerPageValue _param('10') default">10개
																				보기</a></li>
																		<li class="_countPerPage _param('15')"><a
																			href="#" class="_countPerPageValue _param('15')">15개
																				보기</a></li>
																		<li class="_countPerPage _param('20')"><a
																			href="#" class="_countPerPageValue _param('20')">20개
																				보기</a></li>
																		<li class="_countPerPage _param('25')"><a
																			href="#" class="_countPerPageValue _param('25')">25개
																				보기</a></li>
																		<li class="_countPerPage _param('30')"><a
																			href="#" class="_countPerPageValue _param('30')">30개
																				보기</a></li>
																		<li class="_countPerPage _param('50')"><a
																			href="#" class="_countPerPageValue _param('50')">50개
																				보기</a></li>
																	</ul>
																</div>
															</div>
														</div>


														<div class="sort_list_group_right">
															<p class="blind">정렬 옵션 선택</p>
															<ul class="sort_list_module _sortOptionList">
																<li class="is_active _answer"><a href="#"
																	role="button" aria-selected="false"
																	class="_sort_option _param('answer')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.answer', '', '', event);"><i
																		class="ico_sort _sort_option _param('answer')"></i>답변적은순</a></li>
																<li class="_firstFlag"><a href="#" role="button"
																	aria-selected="false"
																	class="_sort_option _param('firstFlag')"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.newask', '', '', event);"><i
																		class="ico_sort _sort_option _param('firstFlag')"></i>첫질문</a></li>
																<li class="_recent"><a href="#"
																	class="_sort_option _param('recent')" role="button"
																	aria-selected="false"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.latest', '', '', event);"><i
																		class="ico_sort _sort_option _param('recent')"></i>최신순</a></li>
																<li class="_betPoint"><a href="#"
																	class="_sort_option _param('betPoint')" role="button"
																	aria-selected="false"
																	onclick="nhn.Kin.Utility.nClicks('nql_nlg.point', '', '', event);"><i
																		class="ico_sort _sort_option _param('betPoint')"></i>내공높은순</a></li>
															</ul>
														</div>
													</div>
												</div>


												<div class="heading_area _dir_content_title_recommend"
													style="display: none">
													<h5 class="tit ellipsis">
														<strong>추천 관심분야</strong>
													</h5>
													<span class="tit_desc">관심분야, 관심지역, 관심키워드를 설정하면 홈과
														프로필에서 관심있는 분야의 질문을 바로 확인할 수 있습니다.<br>관심분야의 답변 활동을 통해
														관심분야의 전문가로 활동해 보세요.
													</span>
												</div>



												<div class="answer_list _noanswer_list" role="tabpanel"
													style="display: none;"></div>


												<div class="answer_list _dir_content_noanswer_noresult"
													style="display: none;">



													<div class="no_data">
														<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
													</div>

												</div>


												<div id="pagingArea1"
													class="paging_area paging_control_type1 _pagingArea"
													style="display: none;"></div>
											</div>


											<div class="content_area _dir_content_error"
												style="display: none;">
												<div>
													<div
														class="_dir_content_noanswer_noresult view_all_question view_all_question2">
														<div class="cont">
															<p class="tit">
																<strong>요청하신 정보를 일시적으로 불러올 수 없습니다. <br>잠시
																	후 다시 시도해 주세요.
																</strong>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>









							<div id="happybean_content"
								class="article_donations article_donations_square _happybeanArea"
								style="display: block;">
								<div class="section_headings section_headings__step1">
									<h4 class="section_headings_title">나눔, 함께해요</h4>

								</div>
								<div
									class="donations_list donations_list__type1 _happybeanDonateBoxListArea">
									<a
										href="https://happybean.naver.com/donations/H000000179920?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210801_40%2F1627813390372ywSEA_JPEG%2F%ED%95%B4%ED%94%BC%EB%B9%88_%EC%82%AC%EC%A7%84.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="아무도 찾지 않는 추석, 희망찬 보름달이 되어주세요.">
										</div>
										<p class="title">아무도 찾지 않는 추석, 희망찬 보름달이 되어주세요.</p>
										<p class="association">마산종합사회복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 34%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>1,025,500원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>34%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000179898?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210730_297%2F1627626920291vnh1c_JPEG%2F%EB%AC%B4%EB%8D%94%EC%9C%84%EC%9D%98%EB%A3%8C%EC%A7%84.JPG%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="코로나19 최전선 의료진들에게 그늘이 되어주세요.">
										</div>
										<p class="title">코로나19 최전선 의료진들에게 그늘이 되어주세요.</p>
										<p class="association">녹번종합사회복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 34%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>1,728,600원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>34%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000180072?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210809_185%2F1628501682069y7iC8_JPEG%2FKakaoTalk_20210804_141529065_01.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120"
												alt="코로나도 폭염도 무섭지만 외로움이 더 무서운 추석 명절">
										</div>
										<p class="title">코로나도 폭염도 무섭지만 외로움이 더 무서운 추석 명절</p>
										<p class="association">광교노인복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 2%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>100,700원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>2%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000180078?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210812_257%2F1628732015773Mf3pq_JPEG%2FKakaoTalk_20210812_103033463.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="아이들에게 문제집과 놀잇감을 선물해주세요.">
										</div>
										<p class="title">아이들에게 문제집과 놀잇감을 선물해주세요.</p>
										<p class="association">기쁜우리지역아동센터</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 5%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>103,300원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>5%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000179914?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210731_231%2F1627714159668O24b1_JPEG%2FKakaoTalk_20210730_181733350.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120"
												alt="다가올 추석, 이웃들 마음에 작은 노크를 두드려주세요.">
										</div>
										<p class="title">다가올 추석, 이웃들 마음에 작은 노크를 두드려주세요.</p>
										<p class="association">홀트대구종합사회복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 5%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>109,500원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>5%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000180114?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210811_247%2F1628665604570t3iCW_JPEG%2F%EB%AF%BC%EC%98%81%EC%9D%B4%EB%A9%94%EC%9D%B81.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="물로 배를 채우는 허기진 하루, 사랑을 채워주세요">
										</div>
										<p class="title">물로 배를 채우는 허기진 하루, 사랑을 채워주세요</p>
										<p class="association">사단법인 월드프렌즈</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 41%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>3,342,600원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>41%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000180082?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210810_195%2F1628561970962GV0wJ_JPEG%2F%EB%AC%B8%EB%8B%AB%ED%9E%8C%EA%B2%BD%EB%A1%9C%EB%8B%B9.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="마스크 재사용은 어르신들에게 당연한 일이 되었습니다.">
										</div>
										<p class="title">마스크 재사용은 어르신들에게 당연한 일이 되었습니다.</p>
										<p class="association">시립중랑노인종합복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 2%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>65,900원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>2%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000178792?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210707_131%2F1625633490525K6C7z_JPEG%2FKakaoTalk_20210707_134251285_02.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="급식비가 부족한 아이들을 지원해주세요.">
										</div>
										<p class="title">급식비가 부족한 아이들을 지원해주세요.</p>
										<p class="association">아름다운가게</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 95%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>9,480,200원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>95%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000179844?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210728_16%2F1627457738540la2Nu_JPEG%2F1.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="보고싶다는 말조차 아끼게 되었습니다 (명절나눔)">
										</div>
										<p class="title">보고싶다는 말조차 아끼게 되었습니다 (명절나눔)</p>
										<p class="association">지산종합사회복지관</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 3%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>104,100원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>3%</span>
											</div>
										</div>
									</a><a
										href="https://happybean.naver.com/donations/H000000179628?p=p&amp;s=kin"
										class="donations_list__item" target="_blank"
										onclick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
										<div class="thumbnail">
											<img
												src="https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fhappybean-phinf.pstatic.net%2F20210714_151%2F1626229400133k1vzX_JPEG%2F%ED%81%AC%EA%B8%B0_charyesang-687186_1920.jpg%22&amp;twidth=160&amp;theight=120&amp;opts=10&amp;qlt=90&amp;sharpen=true"
												width="160" height="120" alt="위기에 노출된 한부모가정 명절키트 지원">
										</div>
										<p class="title">위기에 노출된 한부모가정 명절키트 지원</p>
										<p class="association">사단법인 여성인권 동감</p>
										<div class="donations_list__status">
											<div class="donations_list__progress_bar">
												<span style="width: 1%"></span>
											</div>
											<div class="donations_list__count">
												<span class="donations_list__fund"><span
													class="blind">총 기부금액</span>40,300원</span> <span
													class="donations_list__percent"><span class="blind">후원률</span>1%</span>
											</div>
										</div>
									</a>
								</div>
								<div class="apply_info apply_info__type1 _happybeanInfoArea">
									<p class="text">
										<i class="sp_common ico_alert__green_small" aria-label="주의"></i>해피빈
										사이트에서 진행 중인 나눔기부 정보입니다. 지식iN 활동을 통해 적립한 해피빈 콩을 기부해보세요.<a
											href="http://happybean.naver.com/donation/DonateHomeMain.nhn"
											target="_blank" class="more" title="네이버 해피빈으로 이동"
											onclick="nhn.Kin.Utility.nClicks('hpy.more','','',event);">더보기</a>
									</p>
								</div>
							</div>



							<script id="happybeanDonateBoxListTpl" type="text/template">
	<a href="{=pcUrl}" class="donations_list__item" target="_blank" onClick="nhn.Kin.Utility.nClicks('hpy.donate','','',event);">
		<div class="thumbnail">
			<img src="{=dthumbImageUrl}" width="160" height="120" alt="{=escapeTitle}">
		</div>
		<p class="title">{=title}</p>
		<p class="association">{=happylogName}</p>
		<div class="donations_list__status">
			<div class="donations_list__progress_bar">
				<span style="width:{=progressRate}%"></span>
			</div>
			<div class="donations_list__count">
				<span class="donations_list__fund"><span class="blind">총 기부금액</span>{=currentAmount}원</span>
				<span class="donations_list__percent"><span class="blind">후원률</span>{=progressRate}%</span>
			</div>
		</div>
	</a>
</script>

							<script id="happybeanInfoTpl" type="text/template">
	<p class="text"><i class="sp_common ico_alert__green_small" aria-label="주의"></i>해피빈 사이트에서 진행 중인 나눔기부 정보입니다. 지식iN 활동을 통해 적립한 해피빈 콩을 기부해보세요.<a href="{=morePcUrl}" target="_blank" class="more" title="네이버 해피빈으로 이동" onClick="nhn.Kin.Utility.nClicks('hpy.more','','',event);">더보기</a></p>
</script>
						</div>

						<!-- {{{ -->

						<script id="titleAreaTpl" type="text/template">
	{if type == 'local'}
		<a href="/qna/list.naver?dirId={=dirId}" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '{=dirId}', '', event);"><strong>{=title}</strong> <span class="blind">의 답변을 기다리는 질문 바로가기</span></a>
	{elseif type == 'keyword' || type == 'tag'}
		{if dirId == null || title == '내 관심키워드'}
			<a href="/myinfo/interestKeyword.naver?query=" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '', '', event);"><strong>내 관심키워드</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{else}
			<a href="/search/noAnswerList.naver?query={=title}" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '', '', event);"><strong>{=encodedTitle}</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{/if}
	{elseif type == 'interest'}
		{if dirId == null || dirId == 0 || title == '내 관심분야'}		
			<a href="/myinfo/interest.naver" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '{=dirId}', '', event);"><strong>내 관심분야</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{else}
			<a href="/qna/list.naver?dirId={=dirId}" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '{=dirId}', '', event);"><strong>{=title}</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{/if}
	{else}
		{if dirId == null || dirId == 0 || title == '전체'}
			<a href="/qna/list.naver" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '0', '', event);"><strong>전체</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{else}
			<a href="/qna/list.naver?dirId={=dirId}" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.dirn', '{=dirId}', '', event);"><strong>{=title}</strong> <span class="blind">의 답변을 기다리는 바로가기</span></a>
		{/if}
	{/if}
</script>


						<script id="leftMenuDirTpl" type="text/template">
	{if parentDirName}
	<li dirid="{=dirId}" poiid="{=poiId}" {if isClassOn} class="on"{/if}><a href="#" class="depth1" {if sClickName.length > 0} onclick="nhn.Kin.Utility.nClicks('{=sClickName}', '{=dirId}', '{=order}', event);"{/if}>{if extraInfo != null}{=extraInfo}({/if}{=parentDirName}{if extraInfo != null}){/if}</a><a href="#" class="depth2" {if sClickName.length > 0} onclick="nhn.Kin.Utility.nClicks('{=sClickName}', '{=dirId}', '{=order}', event);"{/if}>{if extraInfo != null}{=extraInfo}({/if}{=dirName}{if extraInfo != null}){/if}{if isClassOn}<span class="blind _selected">질문 목록 선택됨</span>{/if}</a></li>
	{else}
	<li dirid="{=dirId}" poiid="{=poiId}" {if isClassOn} class="on"{/if}><a href="#" {if sClickName.length > 0} onclick="nhn.Kin.Utility.nClicks('{=sClickName}', '{=dirId}', '{=order}', event);"{/if}>{if extraInfo != null}{=extraInfo}({/if}{=dirName}{if extraInfo != null}){/if}{if isClassOn}<span class="blind _selected">질문 목록 선택됨</span>{/if}</a></li>
	{/if}
</script>


						<script id="mapAreaTpl" type="text/template">
	<div class="map_spot">
		<div class="map" id="kinMap{=index}"></div>
	</div>
</script>


						<script id="mapQLayerTpl" type="text/template">
	<div class="ly_pin _map_qlayer">
		<div class="cont">
			<div class="spot">
				<em>{if dirFullName}{=dirFullName}{else}지역&amp;플레이스{/if}</em>
			</div>
			<div class="q">
				<strong><a href="{=detailUrl}" target="_blank" class="_goUrl" onclick="nhn.Kin.Utility.nClicks('{=sClickArea}*{=sClickPrefix}.title', '{=docId}', '', event);">{=title}</a></strong>
			</div>
		</div>
		<div class="cont2">
			<div class="info">
				<span class="writer">{=userId}</span>
				<span class="bar">|</span>
				<span class="time">{=writeTimeStr}</span>
			</div>
			<div class="pagnate">
			{if count > 1}
				<span class="num"><em>{=dataIndex+1}</em>/{=count}</span>
				<span class="btn"><a href="#" class="prev _prev _param('{=index}')" onclick="nhn.Kin.Utility.nClicks('{=sClickArea}*{=sClickPrefix}.prev', '', '', event);"></a><a href="#" class="next _next _param('{=index}')" onclick="nhn.Kin.Utility.nClicks('{=sClickArea}*{=sClickPrefix}.next', '', '', event);"></a></span>
			{/if}
			</div>
		</div>
		<a href="#" class="clse _close" onclick="nhn.Kin.Utility.nClicks('{=sClickArea}*{=sClickPrefix}.close', '', '', event);">닫기</a>
	</div>
</script>


						<script id="mapQCountTpl" type="text/template">
	<div class="ic_pin{if count<10} one{/if}"><strong class="q_num"{if count<2} style="display:none"{/if}><em>{=count}</em></strong></div>
</script>

						<script id="noanswerListSortType" type="text/template">
	<strong class="blind"><span>{=sortType}</span>질문 리스트</strong>
</script>


						<script id="noanswerListTpl" type="text/template">
	<div class="answer_box _noanswerItem{if viewType != 'onlyTitle' && thumbnail != null} img_box{/if}{if encodedTagList == null} no_tag{/if}{if isFirst} first{/if}{if isLast} last{/if}">
		<div class="tit_wrap {if viewType == 'onlyTitle' && ((((mediaFlag % 2) == 1) && (viewType == 'onlyTitle' || thumbnail == null)) ||  (_divided16 % 2) == 1 || adultFlag == 'Y')}icon{/if}">
			<a href="{=detailUrl}" class="_first_focusable_link" rel="KIN" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.qtit', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);{if loggingType != null}nhn.Kin.Utility.saveListInfo('{=loggingType}',{=page},{=dirId},{=docId},'{=sort}');{/if}">
				{if betPoint > 0}
					<span class="power_grade"><span class="blind">내공</span>{if betPoint > 999}999+{else}{=betPoint}{/if}</span>
				{/if}
				<span class="tit_txt">{=cutTitle}</span>
				
				{if ((mediaFlag % 2) == 1) && (viewType == 'onlyTitle' || thumbnail == null)}
					<span class="ico_picture sp_common">사진첨부</span>
				{/if}
				{if (_divided16 % 2) == 1}
					<span class="ico_file sp_common">파일첨부</span>
				{/if}
				{if adultFlag == 'Y'}				
					<span class="ico_nsfu sp_common">19세 이상 열람 가능</span>
				{/if}

				{if viewType != 'onlyTitle'}
					{if isTitleSameWithContents && thumbnail != null}
						<p class="txt">&nbsp;</p>
					{elseif !isTitleSameWithContents}
						<p class="txt">{=content}</p>
					{/if}
				{/if}
			</a>
		</div>

		{if viewType != 'onlyTitle'}
			{if thumbnail != null}
				<span class="img"><img src="{=thumbnail}" alt="{=title}"></span>
			{/if}

			 <%--<div class="tag_wrap"{if encodedTagList == null} style="display:none"{/if}>
				{if encodedTagList != null}
					{for data in encodedTagList}
						<a href="/tag/tagDetail.naver?tag={=data.encodedTag}" class="tag" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.tag', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);">#{=data.tag}</a>
					{/for}
				{/if}
			</div>--%>
		{/if}

		<div class="update_info">
			<span class="num_answer">답변 <em>{if answerCnt >= 100}99+{elseif answerCnt < 0}0{else}{=answerCnt}{/if}</em></span>
			<span class="info"><a href="/qna/list.naver?dirId={=dirId}" {if viewType == 'onlyTitle'} class="_last_focusable_link" {/if} target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.qdir', '{=dirId}', '{=count}', event);">{=cutDirName}</a></span>
			<span class="info">{=writeTime}</span>
		</div>

		<div class="lnk_wrap">
			{if showMetooWonder}
				<a href="#" class="lnk_wonder _metooWonderBtn _param('{=dirId},{=docId}')" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.metoo', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);">나도궁금해요 <em class="_metooWonderCount">{=metooWonderCnt}</em></a><span class="dv"></span>
			{/if}
			<a href="{=answerFormUrl}" rel="KIN" class="lnk_answer {if viewType != 'onlyTitle'} _last_focusable_link {/if}" target="_blank" onclick="nhn.Kin.Utility.nClicks('{=sClickAreaName}.quicka', '{if gdid != null}{=gdid}{else}{=dirId}_{=docId}{/if}', '{=count}', event);{if loggingType != null}nhn.Kin.Utility.saveListInfo('{=loggingType}',{=page},{=dirId},{=docId},'{=sort}');{/if}">답변하기 <span class="sp_common ico_arr"></span></a>
		</div>

		{if viewType == 'onlyTitle'}
			<div class="preview_box{if thumbnail != null} thumb_box{/if}">
				<div class="inner">
					{if thumbnail != null}
						<span class="preview_thumb"><img src="{=thumbnail}" width="70" height="70" alt="{=title}"></span>
					{/if}

					<p class="preview_txt">
						{=content}
					</p>
				</div>
			</div>
		{/if}
	</div>
</script>


						<script id="noresultTpl" type="text/template">
	{if type == "interestAll"}
		{if recommendDirGroupList != null}
			<div class="interest_wrap">
				{for recommendDirGroup in recommendDirGroupList}
					{if recommendDirGroup != null}		
						<h6>{=recommendDirGroup.recText}</h6>
						<ul class="interest_area{if recommendDirGroup.isOdd} type_even{/if}">
							{for recommendDir in recommendDirGroup.recList}
								<li>
									<div class="inner">
									<p class="directory">{=recommendDir.dirName}</p>
									<p class="detail">{=recommendDir.path}</p>
									<a href="#" class="btn_check _recommendDir _param('{=recommendDir.dirId},{=recommendDirGroup.recFrom}')" onclick="nhn.Kin.Utility.nClicks('{if recommendDirGroup.recFrom == "EDIT_NOANSWER_PC"}nql_lgd*e.edit{elseif recommendDirGroup.recFrom == "ANSWER_NOANSWER_PC"}nql_lgd*e.answer{elseif recommendDirGroup.recFrom == "AGE_GENDER_NOANSWER_PC"}nql_lgd*e.demo{/if}', '', '', event);"><span class="ico_check on"></span></a>
									</div>
								</li>
							{/for}
						</ul>
					{/if}
				{/for}
				<div class="btn_wrap">
					<a href="#" class="btn_interest _ros _addRecommendDirs" onclick="nhn.Kin.Utility.nClicks('nql_lgd*e.add', '', '', event);">관심분야 추가</a>
				</div>
			</div>
		{/if}
	{elseif type == "interest"}
		<div class="no_data">
			<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "keyword"}
		<div class="no_data">
			<p>선택하신 키워드에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "local"}
		<div class="no_data">
			<p>선택하신 지역에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{elseif type == "tag"}
		<div class="no_data">
			<p>선택하신 태그로 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>	
	{else}
		<div class="no_data">
			<p>선택하신 분야에 등록된 답변을 기다리는 질문이 없습니다.</p>
		</div>
	{/if}
</script>


						<%--<script id="recommendTagTpl" type="text/template">
	<div class="tit"><strong>{=dirName}</strong> 분야의 전문가라면?</div>
	<span class="desc">이 분야와 연관된 태그를 관심키워드로 추가해서 답변분야를 넓혀보세요!</span>
	<ul class="tag_chk_list">
		{for data in encodedTagList}
			<li><a href="/tag/tagDetail.naver?tag={=data.encodedTag}" class="tag">#{=data.tag}</a><a href="#" class="_recommend_tag_add_btn _param('{=data.tag}')" onclick="nhn.Kin.Utility.nClicks('{if sType == 'keyword'}nql_lgd.idtagadd{elseif sType == 'interest'}nql_lgd.ictagadd{else}nql_lgd.ikadd{/if}', '', '', event);"><span class="ico_add">추가</span></a></li>
		{/for}
	</ul>
	<a href="#" class="btn_close _close"><span>닫기</span></a>
</script>--%>


						<script type="text/template" id="pageTemplate">
	{if pageInfo.isSearch}
		{if pageInfo.hasPre == "Y"}<a href="#" class="prev _prevPage _param('{=pageInfo.prePage},{=pageInfo.prevPageOffset},true')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.prev', '', '{=pageInfo.prePage}', event);">이전</a>{/if}{if pageInfo.hasNext == "Y"}	<a href="#" class="next _nextPage _param('{=pageInfo.nextPage},{=pageInfo.nextPageOffset},false')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.next', '', '{=pageInfo.nextPage}', event);">다음</a>{/if}
	{else}
		{if pageInfo.hasPre == "Y"}
			<a href="#" class="prev _prevPage _param('{=pageInfo.prePage}')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.prev', '', '{=pageInfo.prePage}', event);">이전</a>
		{/if}
		{for p in pageInfo.pageList}
			<a href="#" class="number _page _param('{=p}'){if pageInfo.page == p} on{/if}"{if pageInfo.page == p} title="선택됨"{/if} onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.page', '', '{=p}', event);">{=p}</a>
		{/for}
		{if pageInfo.hasNext == "Y"}
			<a href="#" class="next _nextPage _param('{=pageInfo.nextPage}')" onClick="nhn.Kin.Utility.nClicks('{=nclickCode}.next', '', '{=pageInfo.nextPage}', event);">다음</a>
		{/if}
	{/if}
</script>
						<!-- }}} -->

						<script type="text/javascript">
							// 관심분야
							var aDirDataList = [

							];

							// 관심지역
							var aLocalDataList = [

							];

							// 관심키워드
							var aKeywordDataList = [

							];

							// 배지 이벤트
							var oBadgeEventMap = {

								'빙고 1단계' : {
									'eventNo' : 79,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t80.gif?ver=20160318105338'
								},

								'나도운영자' : {
									'eventNo' : 98,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t99.gif?ver=20160616050510'
								},

								'성지발굴단' : {
									'eventNo' : 108,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t109.gif?ver=20170207022820'
								},

								'베스트발굴단' : {
									'eventNo' : 109,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t110.gif?ver=20170207024413'
								},

								'나도운영자 시즌2' : {
									'eventNo' : 110,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t111.gif?ver=20170228052505'
								},

								'1대 장학금 기부자' : {
									'eventNo' : 114,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t115.gif?ver=20171221103710'
								},

								'2대 장학금 기부자' : {
									'eventNo' : 115,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t116.gif?ver=20171221104014'
								},

								'빙고 2단계' : {
									'eventNo' : 117,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t118.gif?ver=20180221051339'
								},

								'3대 장학금 기부자' : {
									'eventNo' : 118,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t119.gif?ver=20180424051453'
								},

								'4대 장학금 기부자' : {
									'eventNo' : 120,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t121.gif?ver=20180830114927'
								},

								'2021 교육기부' : {
									'eventNo' : 128,
									'imageUrl' : 'https://ssl.pstatic.net/static/kin/09renewal/promotion/badge/ban_badge2_t129.gif?ver=20201210101428'
								}

							};

							$Fn(
									function() {
										if (naver.kin.main
												&& naver.kin.main.Tab) {
											var oMainTab = new naver.kin.main.Tab(
													{
														'sSelTab' : 'qna',
														'sSelSubTab' : '',
														'nDefaultDirId' : 0,
														'aDirData' : aDirDataList,
														'aLocalData' : aLocalDataList,
														'aKeywordData' : aKeywordDataList,
														'oBadgeEventList' : oBadgeEventMap,
														'sQueryTime' : '2021-08-14 16:16:15',
														'sImageServerUrl' : 'https://kin-phinf.pstatic.net'
													});
										}
									}).attach(window, "load");
						</script>


						<%--<div class="container-fluid-content__right">
							<div id="aside_content" class="aside" style="height:0px;">


								<script type="text/javascript">
									var rosAlertMessage = "";
									var isRosActionInterest = "false";
								</script>

								<div id="aside_login" class="aside_myinfo">
									<h2 class="blind">
										NAVER <em>로그인</em> 영역
									</h2>



									 <div class="Ugc_login">
										<p class="top_text">활동소식이 궁금하다면,</p>
										<a
											href="https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fkin.naver.com%2Findex.naver"
											class="login_button"> <span
											class="login_common UGC_login_text">NAVER<em>로그인</em></span>
										</a>
										<div class="sign_area">
											<div class="info_find">
												<a href="https://nid.naver.com/user/help.nhn?todo=idinquiry"
													class="" target="_blank">아이디 찾기</a> <span class="bar"></span>
												<a href="https://nid.naver.com/nidreminder.form"
													target="_blank">비밀번호 찾기</a>
											</div>

											<div class="sign_in">
												<a
													href="https://nid.naver.com/nidregister.form?url=https%3A%2F%2Fkin.naver.com%2Findex.naver"
													target="_blank">회원가입</a>
											</div>
										</div>
									</div>

								</div>--%>


								<script type="text/javascript">
									$Fn(function() {
										new naver.kin.RNB.LoginMyArea({
											'nCurrentLevelMinPoint' : 0,
											'nCurrentLevelMaxPoint' : 500,
											'nTotalPoint' : 0,
											'isMaxLevel' : false
										});
									}).attach(window, 'load');
								</script>


							</div>
						</div>
					</div>





				</div>



				<div class="container-fluid-content-etc">
					<div class="section_partner">
						<div class="partner_wrap" id="expertAnswerArea">
							<div class="inner">
								<h4 class="tit">전문가 답변</h4>
								<ul class="partner_list _logoList">



									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1501638375975.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=31">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1501638375975.jpg"
											width="100" height="29" alt="법률N미디어">
									</a></li>





									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1520573476852.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=32">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1520573476852.jpg"
											width="100" height="29" alt="대한피부과의사회">
									</a></li>




									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433291427.png"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=33">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433291427.png"
											width="100" height="29" alt="닥톡 의사">
									</a></li>






									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433329185.png"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=34">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433329185.png"
											width="100" height="29" alt="닥톡 한의사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433368081.png"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=35">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433368081.png"
											width="100" height="29" alt="닥톡 치과의사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1529028517711.gif"
										href="/people/expert/index.naver?type=TAXACC&amp;orgId=37">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1529028517711.gif"
											width="100" height="29" alt="로시컴">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1535418140064.jpg"
										href="/people/expert/index.naver?type=CUSTOMSBROKER&amp;orgId=38">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1535418140064.jpg"
											width="100" height="29" alt="한국관세사회">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1539929982572.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=39">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1539929982572.jpg"
											width="100" height="29" alt="펫닥">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1542690209088.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=40">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1542690209088.jpg"
											width="100" height="29" alt="대한성형외과의사회">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548739450485.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=41">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548739450485.jpg"
											width="100" height="29" alt="하이닥 한의사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548740053624.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=42">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548740053624.jpg"
											width="100" height="29" alt="하이닥 치과의사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548740156706.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=43">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1548740156706.jpg"
											width="100" height="29" alt="하이닥 수의사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1553256211619.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=44">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1553256211619.jpg"
											width="100" height="29" alt="인터엠디컴퍼니">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1572747352163.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=46">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1572747352163.jpg"
											width="100" height="29" alt="생활법률연구회">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433243776.png"
										href="/people/expert/index.naver?type=PHARMACIST&amp;orgId=47">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577433243776.png"
											width="100" height="29" alt="닥톡 약사">
									</a></li>







									<li><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1575510789923.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=48">
											<img
											src="https://kin-phinf.pstatic.net/exphoto/organization/organization_1575510789923.jpg"
											width="100" height="29" alt="정신건강연구소">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1577095190390.jpg"
										href="/people/expert/index.naver?type=DIETITIAN&amp;orgId=49">
											<img width="100" height="29" alt="닥톡 영양사">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1381483134136.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=1">
											<img width="100" height="29" alt="대한의사협회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1475634151878.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=2">
											<img width="100" height="29" alt="하이닥">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1287734618684.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=3">
											<img width="100" height="29" alt="대한치과의사협회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1395291303193.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=4">
											<img width="100" height="29" alt="대한한의사협회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1259396007085.gif"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=6">
											<img width="100" height="29" alt="서울지방변호사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1259396053196.gif"
										href="/people/expert/index.naver?type=LABOR&amp;orgId=7">
											<img width="100" height="29" alt="한국공인노무사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1267074399213.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=9">
											<img width="100" height="29" alt="언론중재위원회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1444027426598.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=11">
											<img width="100" height="29" alt="로시컴">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1302074470229.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=13">
											<img width="100" height="29" alt="세계한인변호사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1300340167068.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=15">
											<img width="100" height="29" alt="대한산부인과의사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1310027408603.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=16">
											<img width="100" height="29" alt="김앤장법률사무소">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1311215032035.jpg"
										href="/people/expert/index.naver?type=DOCTOR&amp;orgId=17">
											<img width="100" height="29" alt="원자력병원">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/storage/organization/organization_1312425110183.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=18">
											<img width="100" height="29" alt="대한변리사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1444027404236.jpg"
										href="/people/expert/index.naver?type=LABOR&amp;orgId=19">
											<img width="100" height="29" alt="로시컴">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1412673470438.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=20">
											<img width="100" height="29" alt="이리온">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1475634107641.jpg"
										href="/people/expert/index.naver?type=PHARMACIST&amp;orgId=21">
											<img width="100" height="29" alt="하이닥">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1415845403815.jpg"
										href="/people/expert/index.naver?type=PHARMACIST&amp;orgId=22">
											<img width="100" height="29" alt="대한약사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1439877571628.jpg"
										href="/people/expert/index.naver?type=TAXACC&amp;orgId=23">
											<img width="100" height="29" alt="한국세무사회">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1460970639379.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=24">
											<img width="100" height="29" alt="한국동물암센터">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1460970817367.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=25">
											<img width="100" height="29" alt="N동물의료센터">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1462263060879.jpg"
										href="/people/expert/index.naver?type=ANIMALDOCTOR&amp;orgId=26">
											<img width="100" height="29" alt="헬릭스동물메디컬센터">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1473299268627.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=27">
											<img width="100" height="29" alt="대한법률구조공단">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1475634209552.jpg"
										href="/people/expert/index.naver?type=DIETITIAN&amp;orgId=28">
											<img width="100" height="29" alt="하이닥">
									</a></li>









									<li style="display: none"><a
										rel="https://kin-phinf.pstatic.net/exphoto/organization/organization_1483606217284.jpg"
										href="/people/expert/index.naver?type=LAWYER&amp;orgId=29">
											<img width="100" height="29" alt="로톡">
									</a></li>

								</ul>
								<div class="nav_area">
									<a href="#" class="prev sp_common _prev">이전</a> <a href="#"
										class="next sp_common _next">다음</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<script type="text/javascript">
					$Fn(
							function() {
								var oExpertOrganizations = new naver.kin.main.ExpertOrganizations();
							}).attach(window, 'load');
				</script>
			</div>

		</div>





		<script type="text/javascript"
			src="https://ssl.pstatic.net/static.kin/static/pc/20210728150801/js/min/kin.home.js"></script>












		<div class="footer_wrap">
			<div class="footer">
				<h2 class="blind">하위영역</h2>
				<div class="footer_menu">
					<a href="http://www.naver.com/rules/service.html" target="_blank"
						class="_nclicks:fot.agreement">네이버 이용약관</a> <span class="f_bar">|</span>
					<a href="/common/guide.naver?query=p1" target="_blank"
						class="_nclicks:fot.policy">지식iN 서비스 운영정책</a> <span class="f_bar">|</span>
					<a href="http://www.naver.com/rules/privacy.html" target="_blank"
						class="_nclicks:fot.privacy"><strong>개인정보처리방침</strong></a> <span
						class="f_bar">|</span> <a
						href="http://inoti.naver.com/inoti/main.nhn" target="_blank"
						class="_nclicks:fot.claim">게시중단요청서비스</a> <span class="f_bar">|</span>
					<a
						href="https://help.naver.com/support/service/main.nhn?serviceNo=1003"
						target="_blank" class="_nclicks:fot.help">지식iN 고객센터</a>
				</div>
				<p class="copyright">
					<a href="http://www.naver.com" class="footer_logo sp_common"
						target="_blank">NAVER</a>Copyright © <strong><a
						href="https://www.navercorp.com" target="_blank"
						class="logo _nclicks:fot.nhncorp">NAVER Corp.</a></strong> All Rights
					Reserved.
				</p>
			</div>
		</div>

		<script type="text/javascript">
			lcs_do();
		</script>



	</div>




</body>
</html>
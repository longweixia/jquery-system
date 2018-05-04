


$(function () {


//点击下一步或者上一步相关操作-----1
  var t = 0;
  //初始化时，页码1是黑色背景，没点击就已经具有的颜色
  $(".firstli").addClass("grayblack");
  //下一步点击事件，显示或隐藏按钮按钮
  $("#nextStep").click(function () {
    t++;

    $("#previous").addClass("show").removeClass("hide");
    // 如果t=6,确认出现，下一步隐藏
    if (t == 5) {
      // 按钮
      $("#nextStep").addClass("hide").removeClass("show");
    }
    // 如果t=6，停止
    if (t == 6) {
      return;
    }

    // 圆圈背景颜色的改变

    $(".navFooter").children().eq(t).addClass("grayblack").siblings().removeClass("grayblack");
    // 内容
    $(".bodyContainer div").eq(t).toggleClass("show");
    $(".bodyContainer div").eq(t).prev().addClass("hide").removeClass("show");
    $(".bodyContainer div").eq(t).next().addClass("hide").removeClass("show");
  });


  //上一步点击事件
  $("#previous").click(function () {
    $(".navFooter").eq(t).removeClass("grayblack").addClass("gray");
    t--;
    //如果t<5,确认隐藏,下一步出现
    if (t < 5) {
      //显示 下一步按钮
      $("#nextStep").addClass("show").removeClass("hide");
    }
    // 如果t<=0,就重置t=0，上一步隐藏
    if (t <= 0) {
      t == 0;
      $("#previous").addClass("hide").removeClass("show");
    }

    // 圆圈，当前对应的页码增加黑色，其余页码去除黑色
    $(".navFooter").children().eq(t).addClass("grayblack").siblings().removeClass("grayblack");

    // 内容
    $(".bodyContainer div").eq(t).toggleClass("show");
    $(".bodyContainer div").eq(t).prev().addClass("hide").removeClass("show");
    $(".bodyContainer div").eq(t).next().addClass("hide").removeClass("show");

  });


//点击预览页面的效果----2
  $(".btnAll").click(function () {
    $(".container").addClass("hide").removeClass("show");
    $(".preview").addClass("show").removeClass("hide");

  })
*/

  //localstorege存储数据---3

  $("#nextStep").click(function () {


    var baseEntrySection = storage.setItem("baseEntrySection", $("[name='baseEntrySection'] option:selected").text());
    var baseSex = storage.setItem("baseSex", $("input[name='baseSex']:checked").val());
    var baseStation = storage.setItem("baseStation", $("[name='baseStation'] option:checked").text());
    var baseDateBirth = storage.setItem("baseDateBirth", $("[name='baseDateBirth']").val());
    var baseEntryDate = storage.setItem("baseEntryDate", $("[name='baseEntryDate']").val());
    var baseProvince = storage.setItem("baseProvince", $("[name='baseProvince'] option:checked").text());
    var baseCity = storage.setItem("baseCity", $("[name='baseCity'] option:checked").val());
    var baseHeight = storage.setItem("baseHeight", $("[name='baseHeight'] ").val());
    var baseRecord = storage.setItem("baseRecord", $("[name='baseRecord'] option:checked").val());
    var baseWeight = storage.setItem("baseWeight", $("[name='baseWeight'] ").val());
    var baseUniversity = storage.setItem("baseUniversity", $("[name='baseUniversity'] ").val());
    var baseMajor = storage.setItem("baseMajor", $("[name='baseMajor'] ").val());
    var baseNation = storage.setItem("baseNation", $("[name='baseNation'] option:checked").text());
    var baseTel = storage.setItem("baseTel", $("[name='baseTel'] ").val());
    var baseMarriage = storage.setItem("baseMarriage", $("[name='baseMarriage'] option:checked").val());
    var baseWeChat = storage.setItem("baseWeChat", $("[name='baseWeChat'] ").val());
    var baseId = storage.setItem("baseId", $("[name='baseId'] ").val());
    var baseMail = storage.setItem("baseMail", $("[name='baseMail'] ").val());
    var baseResidencePlace = storage.setItem("baseResidencePlace", $("[name='baseResidencePlace'] ").val());
    var baseAddress = storage.setItem("baseAddress", $("[name='baseAddress'] ").val());













    var storage = window.localStorage;
    var baseUseName = storage.setItem("baseUseName", $("[name='baseUseName']").val());
    var baseEntrySection = storage.setItem("baseEntrySection", $("[name='baseEntrySection'] option:selected").text());
    var baseSex = storage.setItem("baseSex", $("input[name='baseSex']:checked").val());
    var baseStation = storage.setItem("baseStation", $("[name='baseStation'] option:checked").text());
    var baseDateBirth = storage.setItem("baseDateBirth", $("[name='baseDateBirth']").val());
    var baseEntryDate = storage.setItem("baseEntryDate", $("[name='baseEntryDate']").val());
    var baseProvince = storage.setItem("baseProvince", $("[name='baseProvince'] option:checked").text());
    var baseCity = storage.setItem("baseCity", $("[name='baseCity'] option:checked").val());
    var baseHeight = storage.setItem("baseHeight", $("[name='baseHeight'] ").val());
    var baseRecord = storage.setItem("baseRecord", $("[name='baseRecord'] option:checked").val());
    var baseWeight = storage.setItem("baseWeight", $("[name='baseWeight'] ").val());
    var baseUniversity = storage.setItem("baseUniversity", $("[name='baseUniversity'] ").val());
    var baseMajor = storage.setItem("baseMajor", $("[name='baseMajor'] ").val());
    var baseNation = storage.setItem("baseNation", $("[name='baseNation'] option:checked").text());
    var baseTel = storage.setItem("baseTel", $("[name='baseTel'] ").val());
    var baseMarriage = storage.setItem("baseMarriage", $("[name='baseMarriage'] option:checked").val());
    var baseWeChat = storage.setItem("baseWeChat", $("[name='baseWeChat'] ").val());
    var baseId = storage.setItem("baseId", $("[name='baseId'] ").val());
    var baseMail = storage.setItem("baseMail", $("[name='baseMail'] ").val());
    var baseResidencePlace = storage.setItem("baseResidencePlace", $("[name='baseResidencePlace'] ").val());
    var baseAddress = storage.setItem("baseAddress", $("[name='baseAddress'] ").val());



  //  教育培训
    var educateCompany = storage.setItem("educateCompany", $("[name='educateCompany'] ").val());
    var educateStart = storage.setItem("educateStart", $("[name='educateStart'] ").val());
    var educateEnd = storage.setItem("educateEnd", $("[name='educateEnd'] ").val());
    var educateRecord = storage.setItem("educateRecord", $("[name='educateRecord'] option:checked").text());
    var educateMajor = storage.setItem("educateMajor", $("[name='educateMajor'] ").val());
    var educateCredentials = storage.setItem("educateCredentials", $("[name='educateCredentials'] ").val());

    var educateCompany2 = storage.setItem("educateCompany2", $("[name='educateCompany2'] ").val());
    var educateStart2 = storage.setItem("educateStart2", $("[name='educateStart2'] ").val());
    var educateEnd2 = storage.setItem("educateEnd2", $("[name='educateEnd2'] ").val());
    var educateRecord2 = storage.setItem("educateRecord2", $("[name='educateRecord2'] option:checked").text());
    var educateMajor2 = storage.setItem("educateMajor2", $("[name='educateMajor2'] ").val());
    var educateCredentials2 = storage.setItem("educateCredentials2", $("[name='educateCredentials2'] ").val());

    var educateCompany3 = storage.setItem("educateCompany3", $("[name='educateCompany3'] ").val());
    var educateStart3 = storage.setItem("educateStart3", $("[name='educateStart3'] ").val());
    var educateEnd3 = storage.setItem("educateEnd3", $("[name='educateEnd3'] ").val());
    var educateRecord3 = storage.setItem("educateRecord3", $("[name='educateRecord3'] option:checked").text());
    var educateMajor3 = storage.setItem("educateMajor3", $("[name='educateMajor3'] ").val());
    var educateCredentials3 = storage.setItem("educateCredentials3", $("[name='educateCredentials3'] ").val());





    //  工作经历
    var workCompany = storage.setItem("workCompany", $("[name='workCompany'] ").val());
    var workCompany2 = storage.setItem("workCompany2", $("[name='workCompany2'] ").val());
    var workCompany3 = storage.setItem("workCompany3", $("[name='workCompany3'] ").val());
    var workStart = storage.setItem("workStart", $("[name='workStart'] ").val());
    var workStart2 = storage.setItem("workStart2", $("[name='workStart2'] ").val());
    var workStart3 = storage.setItem("workStart3", $("[name='workStart3'] ").val());
    var workEnd = storage.setItem("workEnd", $("[name='workEnd'] ").val());
    var workEnd2 = storage.setItem("workEnd2", $("[name='workEnd2'] ").val());
    var workEnd3 = storage.setItem("workEnd3", $("[name='workEnd3'] ").val());
    var studyStation = storage.setItem("studyStation", $("[name='studyStation'] option:checked").val());
    var studyStation2 = storage.setItem("studyStation2", $("[name='studyStation2'] option:checked").val());
    var studyStation3 = storage.setItem("studyStation3", $("[name='studyStation3'] option:checked").val());
    var workContent = storage.setItem("workContent", $("[name='workContent'] ").val());
    var workContent2 = storage.setItem("workContent2", $("[name='workContent2'] ").val());
    var workContent3 = storage.setItem("workContent3", $("[name='workContent3'] ").val());
    var workReason = storage.setItem("workReason", $("[name='workReason'] ").val());
    var workReason2 = storage.setItem("workReason2", $("[name='workReason2'] ").val());
    var workReason3 = storage.setItem("workReason3", $("[name='workReason3'] ").val());


    //  主要社会关系

    var familyName = storage.setItem("familyName", $("[name='familyName'] ").val());
    var familyName2 = storage.setItem("familyName2", $("[name='familyName2'] ").val());
    var familyName3 = storage.setItem("familyName3", $("[name='familyName3'] ").val());
    var familyAge = storage.setItem("familyAge", $("[name='familyAge'] ").val());
    var familyAge2 = storage.setItem("familyAge2", $("[name='familyAge2'] ").val());
    var familyAge3 = storage.setItem("familyAge3", $("[name='familyAge3'] ").val());
    var familyRelation = storage.setItem("familyRelation", $("[name='familyRelation'] ").val());
    var familyRelation2 = storage.setItem("familyRelation2", $("[name='familyRelation2'] ").val());
    var familyRelation3 = storage.setItem("familyRelation3", $("[name='familyRelation3'] ").val());

    var familyCompany = storage.setItem("familyCompany", $("[name='familyCompany'] ").val());
    var familyCompany2 = storage.setItem("familyCompany2", $("[name='familyCompany2'] ").val());
    var familyCompany3 = storage.setItem("familyCompany3", $("[name='familyCompany3'] ").val());
    var familyPosition = storage.setItem("familyPosition", $("[name='familyPosition'] ").val());
    var familyPosition2 = storage.setItem("familyPosition2", $("[name='familyPosition2'] ").val());
    var familyPosition3 = storage.setItem("familyPosition3", $("[name='familyPosition3'] ").val());
    var familyTel = storage.setItem("familyTel", $("[name='familyTel'] ").val());
    var familyTel2 = storage.setItem("familyTel2", $("[name='familyTel2'] ").val());
    var familyTel3 = storage.setItem("familyTel3", $("[name='familyTel3'] ").val());


  })


  //localstorege读取数据---4


  var storage = window.localStorage;
  $(".baseUseName").text(storage.getItem("baseUseName"));
  $(".baseEntrySection").text(storage.getItem("baseEntrySection"));
  $(".baseSex").text(storage.getItem("baseSex"));
  $(".baseStation").text(storage.getItem("baseStation"));
  $(".baseDateBirth").text(storage.getItem("baseDateBirth"));
  $(".baseEntryDate").text(storage.getItem("baseEntryDate"));
  $(".baseProvince").text(storage.getItem("baseProvince"));
  $(".baseCity").text(storage.getItem("baseCity"));
  $(".baseHeight").text(storage.getItem("baseHeight"));
  $(".baseRecord").text(storage.getItem("baseRecord"));
  $(".baseWeight").text(storage.getItem("baseWeight"));
  $(".baseUniversity").text(storage.getItem("baseUniversity"));
  $(".baseMajor").text(storage.getItem("baseMajor"));
  $(".baseNation").text(storage.getItem("baseNation"));
  $(".baseTel").text(storage.getItem("baseTel"));
  $(".baseMarriage").text(storage.getItem("baseMarriage"));
  $(".baseWeChat").text(storage.getItem("baseWeChat"));
  $(".baseId").text(storage.getItem("baseId"));
  $(".baseMail").text(storage.getItem("baseMail"));
  $(".baseResidencePlace").text(storage.getItem("baseResidencePlace"));
  $(".baseAddress").text(storage.getItem("baseAddress"));


//  教育培训

  $(".educateCompany").text(storage.getItem("educateCompany"));
  $(".educateStart").text(storage.getItem("educateStart"));
  $(".educateEnd").text(storage.getItem("educateEnd"));
  $(".educateRecord").text(storage.getItem("educateRecord"));
  $(".educateMajor").text(storage.getItem("educateMajor"));
  $(".educateCredentials").text(storage.getItem("educateCredentials"));

  $(".educateCompany2").text(storage.getItem("educateCompany2"));
  $(".educateStart2").text(storage.getItem("educateStart2"));
  $(".educateEnd2").text(storage.getItem("educateEnd2"));
  $(".educateRecord2").text(storage.getItem("educateRecord2"));
  $(".educateMajor2").text(storage.getItem("educateMajor2"));
  $(".educateCredentials2").text(storage.getItem("educateCredentials2"));

  $(".educateCompany3").text(storage.getItem("educateCompany3"));
  $(".educateStart3").text(storage.getItem("educateStart3"));
  $(".educateEnd3").text(storage.getItem("educateEnd3"));
  $(".educateRecord3").text(storage.getItem("educateRecord3"));
  $(".educateMajor3").text(storage.getItem("educateMajor3"));
  $(".educateCredentials3").text(storage.getItem("educateCredentials3"));


//  工作经历
  $(".workCompany").text(storage.getItem("workCompany"));
  $(".workCompany2").text(storage.getItem("workCompany2"));
  $(".workCompany3").text(storage.getItem("workCompany3"));
  $(".workStart").text(storage.getItem("workStart"));
  $(".workStart2").text(storage.getItem("workStart2"));
  $(".workStart3").text(storage.getItem("workStart3"));
  $(".workEnd").text(storage.getItem("workEnd"));
  $(".workEnd2").text(storage.getItem("workEnd2"));
  $(".workEnd3").text(storage.getItem("workEnd3"));
  $(".studyStation").text(storage.getItem("studyStation"));
  $(".studyStation2").text(storage.getItem("studyStation2"));
  $(".studyStation3").text(storage.getItem("studyStation3"));
  $(".workContent").text(storage.getItem("workContent"));
  $(".workContent2").text(storage.getItem("workContent2"));
  $(".workContent3").text(storage.getItem("workContent3"));
  $(".workReason").text(storage.getItem("workReason"));
  $(".workReason2").text(storage.getItem("workReason2"));
  $(".workReason3").text(storage.getItem("workReason3"));


//  主要社会关系

  $(".familyName").text(storage.getItem("familyName"));
  $(".familyName2").text(storage.getItem("familyName2"));
  $(".familyName3").text(storage.getItem("familyName3"));

  $(".familyAge").text(storage.getItem("familyAge"));
  $(".familyAge2").text(storage.getItem("familyAge2"));
  $(".familyAge3").text(storage.getItem("familyAge3"));

  $(".familyRelation").text(storage.getItem("familyRelation"));
  $(".familyRelation2").text(storage.getItem("familyRelation2"));
  $(".familyRelation3").text(storage.getItem("familyRelation3"));

  $(".familyCompany").text(storage.getItem("familyCompany"));
  $(".familyCompany2").text(storage.getItem("familyCompany2"));
  $(".familyCompany3").text(storage.getItem("familyCompany3"));

  $(".familyPosition").text(storage.getItem("familyPosition"));
  $(".familyPosition2").text(storage.getItem("familyPosition2"));
  $(".familyPosition3").text(storage.getItem("familyPosition3"));

  $(".familyTel").text(storage.getItem("familyTel"));
  $(".familyTel2").text(storage.getItem("familyTel2"));
  $(".familyTel3").text(storage.getItem("familyTel3"));




















  //删除----教育信息
  $(".educatesb").click(function () {

    $(".educate ").addClass("hide").removeClass("show");

  });


  $(".educatesc").click(function () {

    $(".educate1").addClass("hide").removeClass("show");

  });


// 添加----

  $(".educateAdd").click(function () {
    $(".educate1").addClass("show").removeClass("hide");

  });



  //删除----家庭成员
  $(".studys2").click(function () {

    $(".studyt2").addClass("hide").removeClass("show");

  });


  $(".studys1").click(function () {

    $(".studyt1").addClass("hide").removeClass("show");

  });


// 添加----

  $(".studyAdd").click(function () {
    $(".studyt2").addClass("show").removeClass("hide");

  });




  //删除----家庭成员
  $(".familys2").click(function () {

    $(".familyt2").addClass("hide").removeClass("show");

  });


  $(".familys1").click(function () {

    $(".familyt1").addClass("hide").removeClass("show");

  });


// 添加----

  $(".familyAdd").click(function () {
    $(".familyt2").addClass("show").removeClass("hide");

  });



  //删除----紧急联系人
  $(".contactss2").click(function () {

    $(".contactst2").addClass("hide").removeClass("show");

  });


  $(".contactss1").click(function () {

    $(".contactst1").addClass("hide").removeClass("show");

  });


// 添加----

  $(".contactsAdd").click(function () {
    $(".contactst2").addClass("show").removeClass("hide");

  });


});






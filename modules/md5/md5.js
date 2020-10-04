/**
 *@Author    : fengjinqi
 *@Time      : 2020/8/27 6:18 下午
 *@Email     : 1218525402@qq.com
 *@File      : md5.js
 *@Software  : WebStorm
 */
$(function () {
    $("button").on('click',function () {
        var md5=$("#md5").val()
        if (md5.trim().length>0){
            $("#value").val(CryptoJS.MD5(md5).toString())
            $("#value1").val(CryptoJS.MD5(md5).toString().toLocaleUpperCase())
            $("#value2").val(CryptoJS.MD5(md5).toString().substr(8,16))
            $("#value3").val(CryptoJS.MD5(md5).toString().substr(8,16).toLocaleUpperCase())
        }else {
            $("#error").css('display','block').html("亲、别闹！")
        }
    })
    $("#md5").on('focus',function () {
        $("#error").hide()
    })
})

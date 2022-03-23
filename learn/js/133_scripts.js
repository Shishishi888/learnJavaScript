// var timer;
function move(obj, attr, target, speed, callback){
    // 关闭当前元素的上一个定时器
    clearInterval(obj.timer);
    // 获取元素当前的位置
    var currentValue = parseInt(getStyle(obj, attr));
    // 判断speed的正负
    if(currentValue > target)
        speed = -speed;
    obj.timer = setInterval(function (){ // 向执行动画的对象中添加timer属性，用来保存各自的定时器标识
        var oldValue = parseInt(getStyle(obj, attr)); // parseInt，将xpx转换为整形x，方便参与计算
        var newValue = oldValue + speed;
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}

/**
 * 获取指定元素的当前样式
 */
function getStyle(obj, styleName){
    return window.getComputedStyle ? getComputedStyle(obj, null)[styleName] : obj.currentStyle[styleName];
}